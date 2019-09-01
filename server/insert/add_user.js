var express = require('express');
var uuid = require('uuid');
var conn = require('../config/db_connection');
var connection = conn.getConnection();
connection.connect();
var router = express.Router();

router.post('/', (req,res)=>{
    var u_id = uuid();
    var name = req.body.name;
    var email = req.body.email;
    var number = req.body.number;
    var type = req.body.type;
    var password = req.body.password;
    console.log(name);
   
    connection.query('insert into user  (id, name, mail, number, user_type, password) values ("'+u_id+'","'+name+'","'+email+'","'+number+'","'+type+'","'+password+'")', (err,result)=>{
        if(err){
            res.send(err);
        }else{
            res.send('user data inserted successfully');
        }
    })
})
module.exports = router;