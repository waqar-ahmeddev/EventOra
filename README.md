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

## Project Structure

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

## Environment Variables
        Create a .env file inside the server folder.
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
EMAIL_USER=your_email
EMAIL_PASS=your_app_password

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/waqar-ahmeddev/EventOra.git
```

### 2. Navigate to the project folder

```bash
cd EventOra
```

### 3. Install backend dependencies

```bash
cd server
npm install
```

### 4. Install frontend dependencies

```bash
cd ../client
npm install
```

### 5. Configure Environment Variables

Create a `.env` file inside the `server` folder and add:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
EMAIL_USER=your_email
EMAIL_PASS=your_email_app_password
```

### 6. Start the backend

```bash
cd server
npm run dev
```

### 7. Start the frontend

```bash
cd client
npm run dev
```

Backend will run on:

```text
http://localhost:5000
```

Frontend will run on:

```text
http://localhost:5173
```
