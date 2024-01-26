const fs = require('fs');
// // const json = fs.readFileSync('/option.json', 'utf8');
// const options = JSON.parse(json);
const mysql2 = require('mysql2/promise');
const pool = mysql2.createPool({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '0000',
  database: 'customer',
  // dateStrings: true,
});

module.exports = pool;
