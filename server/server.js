var express = require('express');
var bodyparser = require('body-parser');
var cors = require('cors');
var app = express();
app.use(cors());

var conn = require('./config/db_connection');
var connection = conn.getConnection();
connection.connect();



app.get('/api/uploads', (req, res) => {
    res.json({
        'message': 'hello'
    });
});


app.use(bodyparser.json());

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
    extended: true
}));

app.get('/new', (req,res) => {
    res.json({aditya:677});
})

app.use(bodyparser.urlencoded({extended:false}));

var fetch = require('./fetch/fetch');
app.use('/fetch', fetch);

var fetchTeacher = require('./teacher/fetch/fetchTeacher');
app.use('/fetch_teacher', fetchTeacher);

var details = require('./fetch/s_details');
app.use('/s_details', details);

var tdetails = require('./teacher/fetch/t_details');
app.use('/t_details', tdetails);


var insert = require('./insert/insert');
app.use('/insert', insert);

var insert = require('./teacher/add/addTeacher');
app.use('/add_teacher', insert);

var delet = require('./delete/delete');
app.use('/delete', delet);

var checklogin = require('./insert/login');
app.use('/checkLogin', checklogin);

// var addUser = require('./insert/add_user')
// app.use('/addUser',addUser);

app.listen(8080);
console.log('server run at 8080');