'use strict';

const mysql = require('mysql');

const dbConn = mysql.createConnection({
    host: 'mysql',
    user:'api',
    password:'password',
    database:'http_api'
});

dbConn.connect(function(err){
    if (err) throw err;
    console.log("Database Connected!");
});

module.exports = dbConn;
