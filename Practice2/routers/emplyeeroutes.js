const express = require('express');
const router = express.Router();

const Employee = require('../module/employeers');
const { json } = require('body-parser');


router.post('/', async(req,res) => {
    try {
        const data = req.body;
        const newEmployee = new Employee(data);
        const response = await newEmployee.save();

        console.log("Employee data saved");
        res.status(200).json(response);
        
    } catch (error) {
        console.log(error);
        res.status(500).json({error: "Internet server error"});
    };
});

router.get('/', async(req,res) => {
    try {
        const data = await Employee.find();
        console.log("Employee data fetched")
        res.status(200).json(data)
        
    } catch (error) {
        console.log(error);
        res.status(500).json({error: "Internet server error"});
    }
});


router.get('/:worktype', async(req,res) => {
    try {
        const workType = req.params.worktype;
        if(workType == 'fd' || workType == "bd" || workType == "fsd"){
            const response = await Employee.find({work: workType});
            console.log("worktype data fetched")
            res.status(200).json(response);
        }else{
            res.status(404).json({error: "Invalid worktype"})
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({error: "Internet server error"}); 
    }
})

router.put('/:id' , async(req,res) => {
    try {
        const employeeId = req.params.id;
        const updateEmployeedata = req.body;

        const response = await Employee.findByIdAndUpdate(employeeId, updateEmployeedata, {
            new: true, // Yeh option ensure karta hai ki updated document return ho.
            runValidators: true // Run mongoose validation
        });

        if(!response){
            return res.status(404).json({error: "Employee not found"});
        }
        console.log("Employee data updated");
        res.status(200).json(response)

    } catch (error) {
        console.log(error);
        res.status(500).json({error: "Internet server error"});
    }
});


router.delete('/:id' , async(req,res) => {
    try {
        const employeeId = req.params.id;

        const response = await Employee.findByIdAndDelete(employeeId);

        if(!response) {
            res.status(404).json({error: "Employee not found"})
        }

        console.log("employee succesfully deleted")
        res.status(200).json(response);

    } catch (error) {
        console.log(error);
        res.status(500).json({error: "Internet server error"});
    }
})



module.exports = router;