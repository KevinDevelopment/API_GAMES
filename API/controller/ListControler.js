const express = require("express");
const router = express.Router();
const Games = require("../model/Games");
const auth = require("../middleware/middleware");

router.get("/games", auth, (request, response) => {
  Games.findAll({
    raw: true, order: [
      ['id', 'DESC']
    ]
  }).then((games) => {
    return response.status(200).json({
      games: games
    })
  }).catch((erro) => {
    console.log("error")
  })
});

module.exports = router;