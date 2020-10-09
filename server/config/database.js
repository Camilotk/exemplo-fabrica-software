const { Sequelize } = require('sequelize')

module.exports = new Sequelize('mariadb://admin:minhasenha123@localhost:3306/library-manager')