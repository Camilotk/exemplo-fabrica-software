const { Sequelize } = require('sequelize')
const db = require('../config/database')

const Book = db.define('book', {
    name: {
        type: Sequelize.STRING
    },
    code: {
        type: Sequelize.STRING
    },
    author: {
        type: Sequelize.STRING
    },
    volume: {
        type: Sequelize.STRING
    },
    quantity: {
        type: Sequelize.INTEGER
    }
})

module.exports = Book