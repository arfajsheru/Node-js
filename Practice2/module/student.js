const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({
    name: {
        type:String,
        require:true
    },
    rollno: {
        type:Number,
        require:true,
        unique:true
    },
    class: {
        type:Number,
        enum: [1,2,3,4,5,6],
        require: true
    },
    addminssondate: {
        type:Date,
        default: Date.now()
    }
});



const Student = mongoose.model('Student', studentSchema);
module.exports = Student;