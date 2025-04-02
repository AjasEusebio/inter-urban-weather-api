const mongoose = require('mongoose');
const { config } = require('./');

const connectDB = async () => {
  try {
    await mongoose.connect(config.mongo.url);
    console.log('[MongoDB]: Connected');
  } catch (err) {
    console.error('Database connection error:', err);
    process.exit(1);
  }
};

module.exports = connectDB;
