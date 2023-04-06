const Sequelize = require('sequelize');

const sequelize = new Sequelize('inventorymanagement','root','Abhay@123', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;