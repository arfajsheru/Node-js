// MongoDB ko import karo 
const mongoose = require("mongoose");


// Url ko setup kiya // isme hotel hamra dabase name he 
const mongoURL  = 'mongodb://localhost:27017/hotel'



// Connection ko setup kiya
mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

// boject setup kar liya 
const db = mongoose.connection;


// or event listent setup kar liya 
db.on('connected', () => {
    console.log("connected to MongoDB server")
});

db.on('error', (error) => {
    console.log("MongoDB connection error: ",error)
});


db.on('disconnected', () => {
    console.log("disconnected to MongoDB server")
});


//  or Export kiya db ko 
module.exports = db;