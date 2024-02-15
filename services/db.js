// connection code of Node and mongoDB
//1 import mongoose 
const mongoose = require('mongoose')
// Connection string
mongoose.connect('mongodb://localhost:27017/EMS')
//model create
const employee = mongoose.model('employee',{id:String,Name:String,Age:String,Designation:String,Salary:String})
module.exports={
    employee
}
//,()=>{console.log("MongoDB connection established");}