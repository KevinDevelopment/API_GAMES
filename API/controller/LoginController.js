const express = require("express");
const router = express.Router();
const Users = require("../model/Users");
const bcrypt = require("bcrypt");
const token = require("../token/token");

router.post("/auth", async (request, response) => {

  const { email, password } = request.body;

  if (!email || !password) {
    return response.status(400).json({
      message: "invalid data"
    })
  };

  const verifyUser = await Users.findOne({
    attributes: ['id', 'name', 'email', 'password'],
    where: {
      email: email
    }
  });

  if (!verifyUser) {
    return response.status(404).json({
      message: "user not found"
    })
  };

  const verifyPassword = await bcrypt.compare(password, verifyUser.password);

  if (!verifyPassword) {
    return response.status(401).json({
      message: "invalid password or user"
    })
  };

  return response.status(200).json({
    user: verifyUser,   
    token: token({id: verifyUser.id}) 
  })

});

module.exports = router;