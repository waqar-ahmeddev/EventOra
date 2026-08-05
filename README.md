## EventOra

A modern MERN stack application for event management and ticket booking. Users can create accounts, browse events, and book tickets, while administrators can manage events and users through a secure dashboard.

## Features
User Authentication (JWT & bcrypt)
Secure Login & Registration
Role-Based Access Control (Admin & User)
Event Management (Create, Update, Delete)
Event Booking System
MongoDB Database Integration
RESTful APIs with Express.js
Responsive React Frontend
Environment Variable Configuration
Clean Project Structure
Tech Stack
Frontend
React.js
Vite
Tailwind CSS
Backend
Node.js
Express.js
MongoDB
Mongoose
JWT
bcryptjs
Nodemailer
Project Structure
EventOra
│
├── client
│
└── server
    ├── controllers
    ├── middleware
    ├── models
    ├── routes
    ├── config
    ├── .env
    └── index.js
    Environment Variables

Create a .env file inside the server folder.
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
EMAIL_USER=your_email
EMAIL_PASS=your_app_password
