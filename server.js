// Setup empty JS object to act as endpoint for all routes
let projectData = {};

// Require Express to run server and routes
const express = require('express');
const cors = require('cors');
const bodyParser = require ('body-parser')
const port = 3000;

// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
app.listen(port,function(){
    console.log('listening');
})

app.get('/get',(req,res)=>{
    res.send(projectData).status(200);
    //console.log(projectData);
})

app.post('/post',(req,res)=>{
    projectData = req.body;
    res.send(projectData).status(200);
    console.log(projectData);
})