const express = require('express');
const app = express();
const db = require('./db')
const foodItem = require('./module/fooditem');

const bodyParser = require('body-parser')
app.use(bodyParser.json());


app.get("/" , (req, res) => {
    res.send("I AM HOME PAGE, WELCOME TO MY HOTEL WEBSITE, HOW CAN I HELP YOU.")
})


app.post('/fooditem', async (req,res) => {
    try {
        const data = req.body;
        const newFoodItem = new foodItem(data);
        const response = await newFoodItem.save();
        console.log("Data Saved")
        res.status(200).json(response);
    } catch (error) {
        console.log(error);
        res.status(500).json({error: "Interval server error"})
    };
});


app.get('/fooditem', async (req,res) => {
    try {
        const data = await foodItem.find();
        console.log("Data fetched");
        res.status(200).json(data)
    } catch (error) {
        console.log(error);
        res.status(500),json({error: "Interval server error"});
    }
})



const PORT = 3000;

app.listen(PORT, () => {
    console.log("server started port",PORT)
});


