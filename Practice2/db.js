const mongoose = require('mongoose');

const mongooseUrl = "mongodb://localhost:27017/hoteldb";

mongoose.connect(mongooseUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('MongoDb connected')
}).catch(() => {
    console.log("MonogDb connection error");
});

const db = mongoose.connection;

module.exports = db;