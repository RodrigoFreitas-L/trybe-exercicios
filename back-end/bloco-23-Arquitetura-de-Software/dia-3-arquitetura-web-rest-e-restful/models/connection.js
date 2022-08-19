const mysql2 = require('mysql2/promise');

const connection = mysql2.createPool({
  user: 'root',
  password: '12486665',
  host: 'localhost',
  database: 'rest_exercicios'
});

module.exports = connection;
