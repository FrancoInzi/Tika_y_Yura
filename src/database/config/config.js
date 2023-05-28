require('dotenv').config();

module.exports = {
  "development": {
    "username": process.env.USER,
    "password": process.env.PASSWORD,
    "database": process.env.DATABASE,
    "host": process.env.HOST,
    "dialect": process.env.DIALECT
  },
  "test": {
    "username": "root",
    "password": "",
    "database": "tika_y_yura_db",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": "",
    "database": "tika_y_yura_db",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}