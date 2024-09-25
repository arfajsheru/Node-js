const express = require('express');
const app = express();
const db = require('./db');
const passport = require('./auth')
const bodyParser = require('body-parser');


app.use(bodyParser.json())
require('dotenv').config();


const logRequest = (req, res, next) => {
    console.log(`[${new Date().toLocaleString()}] Request made to: ${req.originalUrl}`);
    next(); // Move on to the next phase
}
app.use(logRequest);

app.use(passport.initialize());



const localAuthMiddleware = passport.authenticate('local', {session:false})

app.get('/', (req,res) => {
    res.send("Hello i am home page this website");
});


const EmployeeRoutes = require('./routers/emplyeeroutes');
app.use('/employee',localAuthMiddleware, EmployeeRoutes);


const StudentRoutes = require("./routers/studenroutes");
app.use('/student', StudentRoutes);
 
const PORT = process.env.PORT || 8080;

app.listen(PORT , () => {
    console.log("server started port number ",PORT);
});