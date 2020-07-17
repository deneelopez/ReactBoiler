const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Hamster94!',
  database: 'FILL ME IN'
});

connection.connect();