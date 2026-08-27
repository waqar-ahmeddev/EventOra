const Event = require('../models/Event');

// Get all events
exports.getAllEvents = async (req, res) => {
    try {
        const filter = {};

        if (req.query.category) {
            filter.category = req.query.category;
        }

        if (req.query.ticketPrice) {
            filter.ticketPrice = {
                $lte: Number(req.query.ticketPrice)
            };
        }

        const events = await Event.find(filter)
            .populate('createdBy', 'name email');

        res.status(200).json(events);

    } catch (error) {
        console.error('Get All Events Error:', error);

        res.status(500).json({
            message: 'Server error',
            error: error.message
        });
    }
};


// Get single event by ID
exports.getEventById = async (req, res) => {
    try {
        const event = await Event.findById(req.params.id)
            .populate('createdBy', 'name email');

        if (!event) {
            return res.status(404).json({
                message: 'Event not found'
            });
        }

        res.status(200).json(event);

    } catch (error) {
        console.error('Get Event By ID Error:', error);

        res.status(500).json({
            message: 'Server error',
            error: error.message
        });
    }
};


// Create event
exports.createEvent = async (req, res) => {
    try {
        const {
            title,
            description,
            date,
            location,
            category,
            totalSeats,
            ticketPrice,
            image
        } = req.body;

        // Check required fields
        if (
            !title ||
            !description ||
            !date ||
            !location ||
            !category ||
            totalSeats === undefined ||
            ticketPrice === undefined ||
            !image
        ) {
            return res.status(400).json({
                message: 'Please provide all required event fields'
            });
        }

        // Create event
        const event = await Event.create({
            title,
            description,
            date,
            location,
            category,
            totalSeats: Number(totalSeats),
            availableSeats: Number(totalSeats),
            ticketPrice: Number(ticketPrice),
            imageUrl: image,
            createdBy: req.user._id
        });

        res.status(201).json(event);

    } catch (error) {
        console.error('Create Event Error:', error);

        res.status(500).json({
            message: 'Server error',
            error: error.message
        });
    }
};


// Update event
exports.updateEvent = async (req, res) => {
    try {
        const event = await Event.findById(req.params.id);

        if (!event) {
            return res.status(404).json({
                message: 'Event not found'
            });
        }

        const {
            title,
            description,
            date,
            location,
            category,
            totalSeats,
            availableSeats,
            ticketPrice,
            image
        } = req.body;

        const updatedEvent = await Event.findByIdAndUpdate(
            req.params.id,
            {
                title,
                description,
                date,
                location,
                category,
                totalSeats,
                availableSeats,
                ticketPrice,
                imageUrl: image
            },
            {
                new: true,
                runValidators: true
            }
        );

        res.status(200).json(updatedEvent);

    } catch (error) {
        console.error('Update Event Error:', error);

        res.status(500).json({
            message: 'Server error',
            error: error.message
        });
    }
};


// Delete event
exports.deleteEvent = async (req, res) => {
    try {
        const event = await Event.findById(req.params.id);

        if (!event) {
            return res.status(404).json({
                message: 'Event not found'
            });
        }

        await Event.findByIdAndDelete(req.params.id);

        res.status(200).json({
            message: 'Event deleted successfully'
        });

    } catch (error) {
        console.error('Delete Event Error:', error);

        res.status(500).json({
            message: 'Server error',
            error: error.message
        });
    }
};