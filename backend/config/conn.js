const { Sequelize } = require("sequelize");

const sequelize = new Sequelize('serkom', 'root', '', {
    host:'localhost',
    dialect : 'mysql',
  })

  module.exports = sequelize;