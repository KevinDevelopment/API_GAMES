const Sequelize = require("sequelize");
const connection = require("../connection/connection");

const users = connection.define("Users", {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

users.sync({ force: false }).then(() => {
  console.log("Table users created succesfull")
}).catch((erro) => {
  console.log(`There was an error in the table users ${erro} `)
});

module.exports = users;