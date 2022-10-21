const express = require("express");
const app = express();
const cors = require("cors");
const helmet = require("helmet");
const connection = require("./connection/connection");
const Games = require("./model/Games");
const users = require("./model/Users");
const InsertController = require("./controller/InsertController");
const ListController = require("./controller/ListControler");
const ListGames = require("./controller/ListGame");
const DeleteController = require("./controller/DeleteController");
const AlterController = require("./controller/AlterController");
const UserController = require("./controller/UserController");
const LoginController = require("./controller/LoginController");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000" }));
app.use(helmet());

app.use("/", InsertController);
app.use("/", ListController);
app.use("/", ListGames);
app.use("/", DeleteController);
app.use("/", AlterController);
app.use("/", UserController);
app.use("/", LoginController);

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
});