// // index.js ke top par sab se pehle ye line daalein
// if (!globalThis.crypto) {
//     globalThis.crypto = require('crypto').webcrypto || require('crypto');
// }

// const express = require('express');
// const mongoose = require('mongoose');
// // baqi aap ka purana index.js code...
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const dotenv = require('dotenv');

// dotenv.config();

// const authRoutes = require('./routes/auth');
// const eventRoutes = require('./routes/event');
// const bookingRoutes = require('./routes/booking');

// const app = express();

// // Middlewarenpm run
// app.use(cors());
// app.use(express.json());

// // Routes
// app.use('/api/auth', authRoutes);
// app.use('/api/events', eventRoutes);
// app.use('/api/bookings', bookingRoutes);

// // Database Connection
// mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/eventora')
//   .then(() => console.log('MongoDB Connected'))
//   .catch(err => console.error('MongoDB Connection Error:', err));

// // const PORT = process.env.PORT || 5000;
// // app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
// const PORT = process.env.PORT || 5000;

// app.listen(PORT, '0.0.0.0', () => {
//   console.log(`Server running on port ${PORT}`);
// });
// 1. Fix: Crypto polyfill for MongoDB/Mongoose on older Node runtime
if (!globalThis.crypto) {
    globalThis.crypto = require('crypto').webcrypto || require('crypto');
}

// 2. Fix: Force IPv4 for Nodemailer on Railway
const dns = require('dns');
if (dns.setDefaultResultOrder) {
    dns.setDefaultResultOrder('ipv4first');
}

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const authRoutes = require('./routes/auth');
const eventRoutes = require('./routes/event');
const bookingRoutes = require('./routes/booking');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/bookings', bookingRoutes);

// Health check endpoint
app.get('/', (req, res) => {
    res.send('EventOra Backend API is Running');
});

// Database Connection
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/eventora')
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error('MongoDB Connection Error:', err));

const PORT = process.env.PORT || 5000;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});