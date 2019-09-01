var express = require('express');
var conn = require('../config/db_connection');
var connection = conn.getConnection();
var uuid = require('uuid');
connection.connect();
var router = express.Router();
router.post('/', (req,res)=>{
    var p_id = uuid();
    var p_fname = req.body.first_name;
    var p_lname = req.body.last_name;
    var p_email = req.body.email;
    var p_phone = req.body.phone;
    var isId = req.body.id;
    if(isId){
        connection.query('update students set first_name="'+p_fname+'",last_name="'+p_lname+'",email="'+p_email+'",phone="'+p_phone+'" where id ="'+isId+'"', (err,result)=>{
            if(err){
                res.send(err);
            }else{
                res.send(result);
            }
        })
    }else{
        connection.query('insert into students values ("'+p_id+'","'+p_fname+'","'+p_lname+'","'+p_email+'","'+p_phone+'")', (err,result)=>{
            if(err){
                res.send(err);
            }else{
                res.send(result);
            }
        })
    }
   
})

module.exports = router;



