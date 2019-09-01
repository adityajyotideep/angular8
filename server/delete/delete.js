var express = require('express');
var conn = require('../config/db_connection');
var connection = conn.getConnection();
connection.connect();
var router = express.Router();
router.get('/', (req,res)=>{
    var id = req.query.id;
    console.log(id);
    connection.query('delete from students where id ="'+id+'"', (err,recordsArray,fields)=>{
        if(err){
            res.send(err);
        }else{
            res.send(recordsArray);
        }
    })
})

module.exports = router;