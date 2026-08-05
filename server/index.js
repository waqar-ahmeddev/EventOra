const express = require('express');

const cors = require('cors');

const dotenv = require('dotenv');

const mongoose = require('mongoose');

dotenv.config();

const app = express();

app.use(cors());

mongoose.connect(process.env.MONGO_URI).then(() => console.log('MongoDB connected successfully')).catch((err) => console.log(err));

const Port = process.env.PORT || 5000;

app.listen(Port, () => {

  console.log(`Server is running on port ${Port}`);

});  