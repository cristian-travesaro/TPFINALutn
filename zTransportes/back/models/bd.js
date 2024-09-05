var mysql = require('mysql2');
var util = require('util');

var pool = mysql.createPool({
  connectionLimit: 10,
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB_NAME
});

pool.query = util.promisify(pool.query);

// Código de diagnóstico para verificar la conexión
pool.getConnection((err, connection) => {
  if (err) {
    console.error('Error de conexión:', err);
  } else {
    console.log('Conexión a la base de datos exitosa');
    connection.release();
  }
});

module.exports = pool;
