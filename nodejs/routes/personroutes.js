const express = require('express');
const router = express.Router();
const Person = require('../module/person')


// POST Route to add a person
router.post('/', async (req, res) => {

    try{
        const data = req.body // Assuming the request body contains the pseron data

        // Create a new person doucment using the mongoose model
        const newPerson = new Person(data);

        // Save to the new person to the database
        const response = await newPerson.save();
        console.log('person data saved');
        res.status(200).json(response);
    }
    catch(err) {
        
        console.log("Error Saving Person:" , err)
        res.status(500).json({error: 'Internal server error'});
    }
});

// GET method to get the pesron 
router.get('/', async (req,res) => {
    try {
        const data = await Person.find();
        console.log('person data Fetched');
        res.status(200).json(data);
        
    } catch (err) {
        console.log(err)
        res.status(500).json({error: 'Internal server error'});
    };
});


router.get('/:tasteType', async(req, res) => {
    try {
        const workType = req.params.workType;
        if(workType == "chef" || workType == "manager" || workType == "waiter"){
            const response = await Person.find({work: workType});
            console.log('workType data fetched');
            res.status(200).json(response);
        }else {
            res.status(404).json({error: "Invalid work type"})
        }
        } catch (error) {
            console.log(error);
            res.status(500).json({error: "Internal server error"});
        };
});

router.put('/:id', async(req, res) => {
    try {
        const personId = req.params.id;
        const updatePersonData = req.body;

        const response = await Person.findByIdAndUpdate(personId, updatePersonData, {
            new: true, // Yeh option ensure karta hai ki updated document return ho.
            runValidators: true // Run mongoose validation
        });

        if(!response) {
            return res.status(404).json({error:'Person not found'});
        }
        
        console.log("person data update")
        res.status(200).json(response);
    } catch (error) {
        console.log(error);
        res.status(500).json({error: "Internal server error"})
    };
});

router.delete('/:id', async(req,res) => {
    try {
        const personId = req.params.id;

        const response = await Person.findByIdAndDelete(personId)

        if(!response) {
            return res.status(404).json({error: "Person note found"});
        }

        console.log("data deleted");
        res.status(200).json({message: "Person succesfully deleted"});

    } catch (error) {
        console.log(error);
        res.status(500).json({error: "Internal server error"})
    }
})

module.exports = router;