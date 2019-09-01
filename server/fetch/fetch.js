var express = require('express');
var conn = require('../config/db_connection');
var connection = conn.getConnection();
connection.connect();
var router = express.Router();
router.get('/', (req,res)=>{
    connection.query('select * from students', (err,recordsArray,fields)=>{
        if(err){
            res.send('error while fetching data!!');
        }else{
            res.send(recordsArray);
        }
    })
})

module.exports = router;