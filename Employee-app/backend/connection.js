//mport mongoose
var mongoose = require('mongoose')

mongoose.connect("mongodb+srv://athulbabu123:athul@cluster0.5kctyfs.mongodb.net/employee?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("connected to database");
})
.catch((error)=>{
    console.log(error);
})