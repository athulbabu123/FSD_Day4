//import express

var express = require('express');
require('./connection');

var sampleModel = require('./model');


//initialization
var app = express();


//adding middleware so that our json file gets interpreted
app.use(express.json());

//api
//to add data to database
app.post('/add',async(req,res)=>{
    try {
        await sampleModel(req.body).save();
        res.send("data added");
    } catch (error) {
        console.log(error);
    }
});

//add api to view data
app.get('/view',async(req,res)=>{
    try {
        var output = await sampleModel.find();
        res.send(output);
    } catch (error) {
        console.log(error);
    }
})

//add api to delete
app.delete('/remove/:a',async(req,res)=>{
    console.log(req.params.a);
    try {
        var id = req.params.a;
        await sampleModel.findByIdAndDelete(id);
        res.send("data deleted")
    } catch (error) {
        console.log(error);
    }
});

//api to update 
app.put('/update/:a',async(req,res)=>{
    console.log(req.params.a);
    try {
        var id = req.params.a;
        var output = await sampleModel.findByIdAndUpdate(id,req.body);
        res.send({message : "updated ", output})
    } catch (error) {
        console.log(error);
    }
});

//port assign
app.listen('3003',()=>{
    console.log('port is up and running');
})