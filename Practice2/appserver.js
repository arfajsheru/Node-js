const express = require('express');
const app = express();
const db = require('./db');

const Employee = require('./module/employeers');
const Student = require('./module/student');

const bodyParser = require('body-parser');
app.use(bodyParser.json())




app.get('/', (req,res) => {
    res.send("Hello i am home page this website");
});


const EmployeeRoutes = require('./routers/emplyeeroutes');
app.use('/employee', EmployeeRoutes);


const StudentRoutes = require("./routers/studenroutes");
app.use('/student', StudentRoutes);


PORT = 8080;

app.listen(PORT , () => {
    console.log("server started port number ",PORT);
});