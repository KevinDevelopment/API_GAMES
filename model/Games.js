const Sequelize = require("sequelize");
const connection = require("../connection/connection");

const games = connection.define("Games", {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  year: {
    type: Sequelize.STRING,
    allowNull: false
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

games.sync({force: false}).then(() => {
  console.log("table created succesfull")
}).catch((erro) => {
  console.log(`There was an error in the table ${erro}`)
});

module.exports = games;