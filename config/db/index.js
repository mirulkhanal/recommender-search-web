const mongoose = require('mongoose');
require('dotenv').config();

// create a function to connect to mongodb and handle any errors
const db = () => {
  try {
    mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

module.exports = db;
