const express = require("express");
const router = express.Router();
const Users = require("../model/Users");
const bcrypt = require("bcrypt");

router.post("/user", async (request, response) => {

  const { name, email, password } = request.body;
  const hashed = await bcrypt.hash(password, 10);

  const verifyUser = await Users.findOne({
    raw: true,
    attributes: ['id', 'name', 'email', 'password'],
    where: {
      email: email
    }
  });

  if (!verifyUser) {
    const user = await Users.create({
      name: name,
      email: email,
      password: hashed
    }).then((user) => {
      return response.status(200).json({
        User: user,
        message: "user created"
      })
    }).catch((erro) => {
      return response.status(400).json({
        message: "sorry, there was an error",
        error: erro
      })
    })
  } else {
    return response.status(400).json({
      message: "there is already an account with this email"
    })
  }
})

module.exports = router;