var express = require('express');
var uuid = require('uuid');
var conn = require('../../config/db_connection');
var connection = conn.getConnection();
connection.connect();
var router = express.Router();

router.post('/', (req,res)=>{
    var u_id = uuid();
    var fname = req.body.first_name;
    var lname = req.body.last_name;
    var email = req.body.email;
    var number = req.body.phone;
    var sub = req.body.subject;
    var joiningDate = req.body.date_of_joining;
    var password = req.body.password;
    var isId = req.body.id;
    if(isId){
        connection.query('update teacher set first_name="'+fname+'",last_name="'+lname+'",mail="'+email+'",phone="'+number+'",subject="'+sub+'",joining_date="'+joiningDate+'",password="'+password+'" where id ="'+isId+'"', (err,result)=>{
            if(err){
                res.send(err);
            }else{
                res.send(result);
            }
        })
    }else{
        connection.query('insert into teacher  (id, first_name,last_name, mail, phone, subject,joining_date, password) values ("'+u_id+'","'+fname+'","'+lname+'","'+email+'","'+number+'","'+sub+'","'+joiningDate+'","'+password+'")', (err,result)=>{
            if(err){
                res.send(err);
            }else{
                res.send(result);
            }
        })
    }
    
})
module.exports = router;