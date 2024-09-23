// console.log("my name is notes.js")


// var age = 18;


// const addNumber = function(a,b) {
//     return a + b
// }

// module.exports = {
//     age,
//     addNumber

// }


// // var fs = require("fs");
// // var os = require("os");

// // var user = os.userInfo();
// // console.log(user.username)


// // fs.appendFile('writename.txt','Hi'+ user.username + '!\n', () => {
// //     console.log("file is created");
// // })

// // const notes = require("./notes.js")
// // console.log("My name is server.js")


// // var age = notes.age;
// // console.log("notes.js age",age)


// // var result = notes.addNumber(age+10,30)
// // console.log(result)



// const express = require("express");
// const app = express();
// const db = require('./db');

// const Menuitem = require('./module/MenuItems');

// const bodyParser = require('body-parser');
// app.use(bodyParser.json());


// app.get('/', function(req,res){
//     res.send("Hello i am home page, Welcome to my hotel page")
// })
 
// {/*-------------person api---------- */} 
// // // POST Route to add a person
// // app.post('/person', async (req, res) => {

// //     try{
// //         const data = req.body // Assuming the request body contains the pseron data

// //         // Create a new person doucment using the mongoose model
// //         const newPerson = new Person(data);

// //         // Save to the new person to the database
// //         const response = await newPerson.save();
// //         console.log('person data saved');
// //         res.status(200).json(response);
// //     }
// //     catch(err) {
        
// //         console.log("Error Saving Person:" , err)
// //         res.status(500).json({error: 'Internal server error'});
// //     }
// // });


// // // GET method to get the pesron 
// // app.get('/person', async (req,res) => {
// //     try {
// //         const data = await Person.find();
// //         console.log('person data Fetched');
// //         res.status(200).json(data);
        
// //     } catch (err) {
// //         console.log(err)
// //         res.status(500).json({error: 'Internal server error'});
// //     }
// // })

// // app.get('/person/:workType', async(req, res) => {
// //     try {
// //         const workType = req.params.workType;
// //         if(workType == "chef" || workType == "manager" || workType == "waiter"){
// //             const response = await Person.find({work: workType});
// //             console.log('workType data fetched');
// //             res.status(200).json(response);
// //         }else {
// //             res.status(404).json({error: "Invalid work type"})
// //         }
// //         } catch (error) {
// //             console.log(error);
// //             res.status(500).json({error: "Internal server error"});
// //         }
// // })


// {/*--------------menuitem------------*/}
// // app.post('/menuitem', async (req,res) => {
// //     try {
// //         const data = req.body;
// //         const newItem = new Menuitem(data);
// //         const response = await newItem.save();
// //         console.log("item data saved");
// //         res.status(200).json(response);
// //     } catch (error) {
// //         console.log(error);
// //         res.status(500).json({error: "Internal server error"});
// //     };
// // });

// // app.get('/menuitem', async (req,res) => {
// //     try {
// //         const data = await Menuitem.find();
// //         console.log("menu item data fetched")
// //         res.status(200).json(data);
// //     } catch (error) {
// //         console.log(error);
// //         res.status(500).json({error: "Internal server error"})
// //     };
// // });

// // app.get('/menuitem/:workType', async (req,res) => {
// //     try {
// //         const workType = req.params.workType;
// //         if(workType == "soup" || workType == "sweet" || workType == "spicy"){
// //             const response = await Menuitem.find({taste: workType});
// //             console.log("menuitem data fetched");
// //             res.status(200).json(response);
// //         }else {
// //             res.status(404).json({error: "Invalid work type"})
// //         }
// //     } catch (error) {
// //         console.log(error);
// //         res.status(500).json({error: "Internal server error"});
// //     };
// // });



// const PersonRoutes = require('./routes/personroutes');
// app.use('/person', PersonRoutes);


// const MenuRoutes = require('./routes/menuroutes');
// app.use('/menuitem', MenuRoutes);

// app.listen(3000 , () => {
//     console.log("Listen on port 3000");
// })