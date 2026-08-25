const Event = require('../models/Event');
exports.getAllEvents = async (req, res) => {
    try {
        const filter = {};
        if(req.query.category) {
            filter.category = req.query.category;
        }
        if(req.query.ticketPrice) {
            filter.ticketPrice = { $lte: req.query.ticketPrice };
        }
        const events = await Event.find(filter);
        res.status(200).json(events);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

exports.getEventById = async (req, res) => {
    try {
        const event = await Event.findById(req.params.id);
        if (!event) {
            return res.status(404).json({ message: 'Event not found' });
        }
        res.status(200).json(event);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};
exports.createEvent = async (req, res) => {
    try {
        const { title, description, date, location, category, availableSeats, ticketPrice, imageUrl } = req.body;
        const event = await Event.create({
            title,
            description,
            date,
            location,
            category,
            availableSeats,
            ticketPrice,
            imageUrl,
            createdBy: req.user._id
        });
        res.status(201).json(event);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};
exports.updateEvent = async (req, res) => {
    try {
        const event = await Event.findById(req.params.id);
        if (!event) {
            return res.status(404).json({ message: 'Event not found' });
        }
        const { title, description, date, location, category, availableSeats, ticketPrice, imageUrl } = req.body;
        const updatedEvent = await Event.findByIdAndUpdate(
            req.params.id,
            {
                title,
                description,
                date,
                location,
                category,
                availableSeats,
                ticketPrice,
                imageUrl
            },
            { new: true }
        );
        res.status(200).json(updatedEvent);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};
exports.deleteEvent = async (req, res) => {
    try {
        const event = await Event.findById(req.params.id);
        if (!event) {
            return res.status(404).json({ message: 'Event not found' });
        }
        await Event.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Event deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};
