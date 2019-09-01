var mySql = require('mysql');

var prop = require('./db_properties');

module.exports = {
    getConnection: ()=>{
       return mySql.createConnection(prop);
    }
}
