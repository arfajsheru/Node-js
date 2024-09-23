const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    age: {
        type: Number,
        require: true
    },
    work: {
        type: [String],  // Array of strings for multiple roles
        enum: ['fd', 'bd', 'fsd'],  // Only these values are allowed
        require:true
    },
    mobile: {
        type: Number,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    salary: {
        type: Number
    }
});

const Employee = mongoose.model('Employee', employeeSchema);
module.exports = Employee;
