//1 import express
const express = require('express')
//2 import cors
const cors = require('cors')
//import logic
const logic = require('./services/logics')
//3 Create a backend application using epress
const emsServer = express()
//4 Connecting the fontend application using cors
emsServer.use(cors({origin:'http://localhost:3000'}))
//5 convert the json data to js and js to json using json() function
emsServer.use(express.json())
//6 Define the port number
emsServer.listen(8000,()=>{console.log("ems Server listening on port 8000");})

//API call for get all employee deatails
emsServer.get('/get-all-employees',(req,res)=>{
    logic.getAllEmployees().then((response)=>{res.status(response.statusCode).json(response);})
})

//API call for add an employee
emsServer.post('/add-an-employee',(req,res)=>{
    logic.addEmployee(req.body.id,req.body.Name,req.body.Age,req.body.Designation,req.body.Salary).then((response)=>{
        res.status(response.statusCode).json(response)
    })
})

emsServer.delete('/delete-an-employee/:id',(req,res)=>{
    logic.deleteEmployee(req.params.id).then((response)=>{
        res.status(response.statusCode).json(response)
    })
})


emsServer.get('/get-an-employee/:id',(req,res)=>{
    logic.getanEmployee(req.params.id).then((response)=>{res.status(response.statusCode).json(response);})
})

emsServer.post('/update-an-employee/:id',(req,res)=>{
    logic.updateanEmployee(req.params.id,req.body.Name,req.body.Age,req.body.Designation,req.body.Salary).then((response)=>{res.status(response.statusCode).json(response);})
})