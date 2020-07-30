
const Sequelize = require('sequelize');
const connection = require('./database');

const notes = connection.define('notes', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    content: {
        type: Sequelize.TEXT,
        allowNull: false
    }
})

// notes.sync({force: false})
// .then(() => {
//     console.log("Table creation successful.")
// })
// .catch((errr) => {
//     console.log("Table creation error " + err)
// });

module.exports = notes;
