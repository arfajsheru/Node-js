const mongoose = require('mongoose');
require('dotenv').config();
// const mongooseUrl = "mongodb://localhost:27017/hoteldb";
// const mongoDbUrl = "mongodb+srv://arfajsheru:arfajsheru@cluster0.vsr22.mongodb.net/"
// const mongoDbUrl = process.env.MONGODB_LOCAL_URL;
const mongoDbUrl = process.env.MONGODB_URL;

mongoose.connect(mongoDbUrl, {
}).then(() => {
    console.log('MongoDb connected')
}).catch(() => {
    console.log("MonogDb connection error");
});

const db = mongoose.connection;

module.exports = db;