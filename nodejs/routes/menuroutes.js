const express = require('express');
const router = express.Router();
const Menuitem = require('../module/MenuItems')

router.post('/', async (req,res) => {
    try {
        const data = req.body;
        const newItem = new Menuitem(data);
        const response = await newItem.save();
        console.log("item data saved");
        res.status(200).json(response);
    } catch (error) {
        console.log(error);
        res.status(500).json({error: "Internal server error"});
    };
});

router.get('/', async (req,res) => {
    try {
        const data = await Menuitem.find();
        console.log("menu item data fetched")
        res.status(200).json(data);
    } catch (error) {
        console.log(error);
        res.status(500).json({error: "Internal server error"})
    };
});

router.get('/:taste', async (req,res) => {
    try {
        const tasteType = req.params.taste;
        if(tasteType == "soup" || tasteType == "sweet" || tasteType == "spicy"){
            const response = await Menuitem.find({taste: tasteType});
            console.log("menuitem data fetched");
            res.status(200).json(response);
        }else {
            res.status(404).json({error: "Invalid work type"})
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({error: "Internal server error"});
    };
});





module.exports = router;
