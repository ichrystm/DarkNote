
const Sequelize = require('sequelize');

const connection = new Sequelize('darknote', 'root', 'Pripyat@123', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;