//import express
var express = require('express');
require('./connection');
var empModel = require("./model/employee");

//initialize express
var app = express();

//initialize middleware
app.use(express.json());

//api
//add employee
app.post("/add",async(req,res)=>{
    try {
        await empModel(req.body).save();
        res.send({message : "data added!!"});
    } catch (error) {
        console.log(error);
    }
})


// port assign
app.listen('3002',()=>{
    console.log("port is up and running ")
})