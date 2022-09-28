const express = require("express");
const router = express.Router();
const Games = require("../model/Games");

router.post("/game", (request, response) => {
  const { title, year, price } = request.body;

  Games.create({
    title: title,
    year: year,
    price: price
  }).then((games) => {
    return response.status(200).json({
      games: games
    });
  }).catch((erro) => {
    console.log(`there was an erro in the insertion ${erro}`)
  })

});

module.exports = router;