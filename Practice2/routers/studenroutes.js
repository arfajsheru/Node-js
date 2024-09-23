const express = require('express');
const router = express.Router();

const Student = require('../module/student')

router.post('/' , async(req,res) => {
    try {
        const data = req.body;
        const newStudent = new Student(data);
        const response = await newStudent.save();

        console.log("student data saved");
        res.status(200).json(response);
    } catch (error) {
        console.log(error);
        res.status(500).json({error: "Internal server error"})
    }
});


router.get('/', async(req,res) => {
    try {
        const data = await Student.find();
        console.log("Student data fetched")
        res.status(200).json(data);
        
    } catch (error) {
        console.log(error);
        res.status(500).json({error: "Internal server error"})
    }
});



router.put('/:id', async(req,res) => {
    try {
        const studentId = req.params.id;
        const updatestudentdata = req.body;

        const response = await Student.findByIdAndUpdate(studentId, updatestudentdata, {
            new: true, // Yeh option ensure karta hai ki updated document return ho.
            runValidators: true // Run mongoose validation
        });

        if(!response){
            return res.status(200).json({error: "Student not found"});
        }
        console.log("student data updated");
        res.status(200).json(response);
    } catch (error) {
        console.log(error);
        res.status(500).json({error: "Internal server error"})
    }
});


router.delete("/:id", async(req,res) => {
    try {
        const studentId = req.params.id;

        const response = await Student.findByIdAndDelete(studentId);

        if(!response) {
            return res.status(404).json("Student not found");
        }

        console.log("Student succesfully delted");
        res.status(200).json(response);
        
    } catch (error) {
        console.log(error);
        res.status(500).json({error: "Internal server error"})
    }
})


module.exports = router;

