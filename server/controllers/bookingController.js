const Booking = require('../models/Booking');
const Event = require('../models/Event');
const OTP = require('../models/OTP');
const {
    sendBookingEmail,
    sendOTPEmail
} = require('../utils/email');

const generateOTP = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
};


// ==========================================
// SEND BOOKING OTP
// ==========================================
exports.sendBookingOTP = async (req, res) => {
    console.log('================================');
    console.log('SEND BOOKING OTP REQUEST');
    console.log('================================');

    try {
        // Check logged-in user
        if (!req.user) {
            return res.status(401).json({
                message: 'Not authorized. Please login.'
            });
        }

        console.log('User email:', req.user.email);

        // Generate OTP
        const otp = generateOTP();

        console.log('OTP generated:', otp);

        // Delete previous booking OTP
        await OTP.findOneAndDelete({
            email: req.user.email,
            action: 'event_booking'
        });

        console.log('Old OTP deleted');

        // Save new OTP
        await OTP.create({
            email: req.user.email,
            otp,
            action: 'event_booking'
        });

        console.log('New OTP saved to MongoDB');

        // Send OTP email
        console.log('Calling sendOTPEmail...');

        await sendOTPEmail(
            req.user.email,
            otp,
            'event_booking'
        );

        console.log('OTP email sent successfully');

        return res.status(200).json({
            message: 'OTP sent successfully'
        });

    } catch (error) {
        console.error('================================');
        console.error('SEND BOOKING OTP ERROR');
        console.error('================================');
        console.error(error);
        console.error('Error message:', error.message);

        return res.status(500).json({
            message: 'Error sending OTP',
            error: error.message
        });
    }
};


// ==========================================
// BOOK EVENT
// ==========================================
exports.bookEvent = async (req, res) => {
    try {
        if (!req.user) {
            return res.status(401).json({
                message: 'Not authorized. Please login.'
            });
        }

        const { eventId, otp } = req.body;

        if (!eventId) {
            return res.status(400).json({
                message: 'Event ID is required'
            });
        }

        if (!otp) {
            return res.status(400).json({
                message: 'OTP is required'
            });
        }

        // Verify OTP
        const validOTP = await OTP.findOne({
            email: req.user.email,
            otp,
            action: 'event_booking'
        });

        if (!validOTP) {
            return res.status(400).json({
                message: 'Invalid or expired OTP for booking'
            });
        }

        // Find event
        const event = await Event.findById(eventId);

        if (!event) {
            return res.status(404).json({
                message: 'Event not found'
            });
        }

        // Check seats
        if (event.availableSeats <= 0) {
            return res.status(400).json({
                message: 'No seats available'
            });
        }

        // Check existing booking
        const existingBooking = await Booking.findOne({
            userId: req.user.id,
            eventId
        });

        if (
            existingBooking &&
            existingBooking.status !== 'cancelled'
        ) {
            return res.status(400).json({
                message: 'Already booked or pending'
            });
        }

        // Create booking
        const booking = await Booking.create({
            userId: req.user.id,
            eventId,
            status: 'pending',
            paymentStatus: 'not_paid',
            amount: event.ticketPrice
        });

        // Delete OTP after successful booking request
        await OTP.deleteOne({
            _id: validOTP._id
        });

        return res.status(201).json({
            message: 'Booking request submitted',
            booking
        });

    } catch (error) {
        console.error('BOOK EVENT ERROR:', error);

        return res.status(500).json({
            message: 'Server Error',
            error: error.message
        });
    }
};


// ==========================================
// CONFIRM BOOKING - ADMIN
// ==========================================
exports.confirmBooking = async (req, res) => {
    try {
        const { paymentStatus } = req.body;

        const booking = await Booking
            .findById(req.params.id)
            .populate('userId')
            .populate('eventId');

        if (!booking) {
            return res.status(404).json({
                message: 'Booking not found'
            });
        }

        if (booking.status === 'confirmed') {
            return res.status(400).json({
                message: 'Booking is already confirmed'
            });
        }

        const event = await Event.findById(
            booking.eventId._id
        );

        if (!event) {
            return res.status(404).json({
                message: 'Event not found'
            });
        }

        if (event.availableSeats <= 0) {
            return res.status(400).json({
                message: 'No seats available to confirm this booking'
            });
        }

        // Confirm booking
        booking.status = 'confirmed';

        if (paymentStatus) {
            booking.paymentStatus = paymentStatus;
        }

        await booking.save();

        // Reduce available seats
        event.availableSeats -= 1;

        await event.save();

        // Send confirmation email
        try {
            await sendBookingEmail(
                booking.userId.email,
                booking.userId.name,
                booking.eventId.title
            );
        } catch (emailError) {
            console.error(
                'Confirmation email failed:',
                emailError.message
            );
        }

        return res.json({
            message: 'Booking confirmed successfully',
            booking
        });

    } catch (error) {
        console.error('CONFIRM BOOKING ERROR:', error);

        return res.status(500).json({
            message: 'Server Error',
            error: error.message
        });
    }
};


// ==========================================
// GET MY BOOKINGS
// ==========================================
exports.getMyBookings = async (req, res) => {
    try {
        const bookings =
            req.user.role === 'admin'
                ? await Booking
                    .find()
                    .populate('eventId')
                    .populate('userId', 'name email')
                    .sort({ createdAt: -1 })
                : await Booking
                    .find({ userId: req.user.id })
                    .populate('eventId')
                    .sort({ createdAt: -1 });

        return res.json(bookings);

    } catch (error) {
        console.error('GET BOOKINGS ERROR:', error);

        return res.status(500).json({
            message: 'Server Error',
            error: error.message
        });
    }
};


// ==========================================
// CANCEL BOOKING
// ==========================================
exports.cancelBooking = async (req, res) => {
    try {
        const booking = await Booking.findById(
            req.params.id
        );

        if (!booking) {
            return res.status(404).json({
                message: 'Booking not found'
            });
        }

        if (
            booking.userId.toString() !== req.user.id &&
            req.user.role !== 'admin'
        ) {
            return res.status(403).json({
                message: 'Not authorized'
            });
        }

        if (booking.status === 'cancelled') {
            return res.status(400).json({
                message: 'Already cancelled'
            });
        }

        const wasConfirmed =
            booking.status === 'confirmed';

        booking.status = 'cancelled';

        await booking.save();

        // Restore seat only if booking was confirmed
        if (wasConfirmed) {
            const event = await Event.findById(
                booking.eventId
            );

            if (event) {
                event.availableSeats += 1;

                await event.save();
            }
        }

        return res.json({
            message: 'Booking cancelled successfully'
        });

    } catch (error) {
        console.error('CANCEL BOOKING ERROR:', error);

        return res.status(500).json({
            message: 'Server Error',
            error: error.message
        });
    }
};