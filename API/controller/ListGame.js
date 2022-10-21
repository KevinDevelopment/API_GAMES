const express = require("express");
const router = express.Router();
const Games = require("../model/Games");
const Auth = require("../middleware/middleware")

router.get("/games/:id", Auth, (request, response) => {

  const { id } = request.params;

  Games.findOne({
    where: {
      id: id
    }
  }).then((game) => {
    if (game == null) {
      return response.status(400).json({
        message: "not found"
      })
    } else {
      return response.status(200).json({
        game: game
      })
    }    
  }).catch((erro) => {
    console.log(`there was an error in the find ${erro}`)
  })
});

module.exports = router;