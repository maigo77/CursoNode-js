const mysql = require('mysql')

const connMySql = () => {
  return mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'portal_noticias',
    insecureAuth: true
  })
}

module.exports = () => {
  return connMySql
}