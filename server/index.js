const express = require('express');

const cors = require('cors');

const dotenv = require('dotenv');

const mongoose = require('mongoose');

const authRoutes = require('./routes/auth');

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

//Routes
app.use('/api/auth', authRoutes);




// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI).then(() => console.log('MongoDB connected successfully')).catch((err) => console.log(err));

const Port = process.env.PORT || 5000;


// Port for the server to listen on
app.listen(Port, () => {

  console.log(`Server is running on port ${Port}`);

});  