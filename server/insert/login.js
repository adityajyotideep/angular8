var express = require('express');
var conn = require('../config/db_connection');
var connection = conn.getConnection();
connection.connect();
var router = express.Router();
router.post('/', (req,res)=>{
    var username = req.body.uname;
    var password = req.body.u_pwd;
    
    connection.query('select * from user where mail ="'+username+ '" and password="'+password+'"', (err,recordsArray,fields)=>{
        if(recordsArray.length != 0){
            res.send(recordsArray);
        }else{
            res.send(null);
        }
    })
})

module.exports = router;



