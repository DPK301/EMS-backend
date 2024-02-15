//Backend logic
//import db.js file
const db = require('../services/db')
// //get all the details from database
const getAllEmployees=()=>{
    return db.employee.find().then((result)=>{if(result){return{statusCode:200,employees:result}}else{return{statusCode:404, message:'can not find employee'}}})
}

const addEmployee=(id,Name,Age,Designation,Salary)=>{
    return db.employee.findOne({id}).then((result)=>{
        if(result){
        return{
            statusCode:404,
            message:"Employee already exists"
        }
    }
    else{
        const  newEmployee= new db.employee({id,Name,Age,Designation,Salary})
        newEmployee.save()
        return{
            statusCode:200,
            message:'Employee added successfully'
        }
    }
    }
    )
}

const deleteEmployee=(id)=>{
    return db.employee.deleteOne({id}).then((result)=>{
       
        return{
            statusCode:200,
            message:"Employee deleted successfully"
        }}).catch(
            (error)=>{ return{
                statusCode:404,
                message:'Employee not found'
            }}
        )
    
                            }




 const getanEmployee=(id)=>{return db.employee.findOne({id}).then((result)=>{if(result){return{statusCode:200,employees:result}}else{return{statusCode:404, message:'can not find employee'}}})
}      

const updateanEmployee=(id,Name,Age,Designation,Salary)=>{return db.employee.findOne({id}).then((result)=>{
    if(result){
              result.id = id;
              result.Name = Name;
              result.Age = Age;
              result.Designation = Designation;
              result.Salary = Salary;

              result.save();
        return{
                statusCode:200,
                message:"Employee data updated successfully"
              }
              }
        else{
            return{  
                 statusCode:404,
                 message:'can not find employee'
                 }
            }})
}  


module.exports={
    getAllEmployees,
    addEmployee,
    deleteEmployee,
    getanEmployee,
    updateanEmployee
}