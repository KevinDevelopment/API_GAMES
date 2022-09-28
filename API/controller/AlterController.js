const express = require("express");
const router = express.Router();
const Games = require("../model/Games");

router.put("/game", (request, response) => {
  const { id, title, year, price } = request.body;

  Games.update({
    title: title,
    year: year,
    price: price
  }, {
    where: {
      id: id
    }
  }).then((game) => {
    return response.status(200).json({
      message: `game ${game} edited succesfully`
    })
  }).catch((erro) => {
    return response.status(400).json({
      message: "There was an error"
    })
  })

})

module.exports = router;