//import mongoose
var mongoose = require('mongoose');

//connecting to database
// mongoose.connect("connection string").then().catch()

mongoose.connect("mongodb+srv://athulbabu123:athul@cluster0.5kctyfs.mongodb.net/cruddatabase?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("connected to database");
})
.catch((err)=>{
    console.log(err);
});