'use strict';

const mysql = require('mysql');

const dbConn = mysql.createConnection({
    host: 'localhost',
    user:'api',
    password:'password',
    database:'http_api'
});

dbConn.connect(function(err){
    if (err) throw err;
    console.log("Database Connected!");
});

module.exports = dbConn;