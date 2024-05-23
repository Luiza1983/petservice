const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('petservice', 'root', '', {
  host: '127.0.0.1',
  port: 3306,
  dialect: 'mysql',
  dialectOptions: {
    ssl: {
      ca: '<caminho/para/seu/arquivo/certificado.pem>'
    }
  }
});

module.exports = sequelize;
