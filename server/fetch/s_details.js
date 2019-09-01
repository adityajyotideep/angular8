var express = require('express');
var conn = require('../config/db_connection');
var connection = conn.getConnection();
connection.connect();
var router = express.Router();
router.get('/', (req,res)=>{
    var id = req.query.id;
    connection.query('select * from students where id ="'+id+'"', (err,recordsArray,fields)=>{
        if(err){
            res.send('error while fetching data!!');
        }else{
            res.send(recordsArray);
        }
    })
})

module.exports = router;