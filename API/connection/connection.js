const Sequelize = require("sequelize");
const connection = new Sequelize('games', 'kevin', '12345', {
  host: "localhost",
  dialect: "mysql",  
  timezone: '-03:00',  
  logging: false
});

connection.authenticate().then(() => {
  console.log("connection established success");
}).catch((erro) => {
  console.log(`There was an error in the connection ${erro}`)
});

module.exports = connection;
