var mysql = require('mysql');
var config = require('./db-config');

var pool = mysql.createPool({
    host: config.host,
    port: config.port,
    user: config.user,
    password: config.password
});

module.exports = {
    connectionPool: pool
};
