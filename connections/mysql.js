const mysql = require('mysql')

const mysqlConnection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'employee_records'
  });
   
  mysqlConnection.connect((err)=>{
    if(!err){
        console.log("MySql database connected")
    }else{
        console.log("MySql connection failed \n Error : " + JSON.stringify(err, undefined,2)) //--for better indentation
    }
  }); 
  
  module.exports = mysqlConnection;
  