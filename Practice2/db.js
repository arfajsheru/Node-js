const mongoose = require('mongoose');
require('dotenv').config();
// const mongooseUrl = "mongodb://localhost:27017/hoteldb";
// const mongoDbUrl = "mongodb+srv://arfajsheru:arfajsheru@cluster0.vsr22.mongodb.net/"
// const mongoDbUrl = process.env.MONGODB_LOCAL_URL;

mongoose.connect(process.env.MONGODB_URL, {
  // Remove useNewUrlParser and useUnifiedTopology options
})
.then(() => console.log('Connected to MongoDB'))
.catch((error) => console.log('MongoDB connection error:', error));

const db = mongoose.connection;

module.exports = db;