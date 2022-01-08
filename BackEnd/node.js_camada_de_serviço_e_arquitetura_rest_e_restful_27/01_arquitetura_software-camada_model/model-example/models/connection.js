// models/connection.js

const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: 'localhost',
    user: 'leticia-castro',
    password: '12345678',
    database: 'model_example' });

module.exports = connection;