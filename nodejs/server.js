const express = require("express");
const app = express();
const db = require('./db');

const Menuitem = require('./module/MenuItems');

const bodyParser = require('body-parser');
app.use(bodyParser.json());


app.get('/', function(req,res){
    res.send("Hello i am home page, Welcome to my hotel page")
})



const PersonRoutes = require('./routes/personroutes');
app.use('/person', PersonRoutes);


const MenuRoutes = require('./routes/menuroutes');
app.use('/menuitem', MenuRoutes);

app.listen(3000 , () => {
    console.log("Listen on port 3000");
})