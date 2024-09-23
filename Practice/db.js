const mongoose = require('mongoose'); // 1 Step: Import kiya mongoose ko 

const mongoURL = 'mongodb://localhost:27017/restaurnt'; // 2 Step: setup kiya mongourl ko 

mongoose.connect(mongoURL, { // 3 step:connect kiya mongoose ko  

})


const db = mongoose.connection; // 4 step: object ko setup kara mongoose ke jo je db server ke saath integrade karega 


// 5 step:  Event listner chalaya ki server connected he ya disconnected ya fir error he vo check karega


db.on('connected', () => {
    console.log("connected to the mongoDB server")
})

db.on('error', () => {
    console.log("MongoDb connection error")
})

db.on('disconnected', () => {
    console.log("disconnected MongoDB server");
})

// 6 step: object ko export kiya 

module.exports = db;
