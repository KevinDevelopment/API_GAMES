const express = require("express");
const router = express.Router();
const Games = require("../model/Games");

router.delete("/game/:id", (request, response) => {
  const { id } = request.params;

  Games.destroy({
    where: {
      id: id
    }
  }).then(() => {
    return response.status(200).json({
      message: "deleted game succesfully"
    })
  }).catch((erro) => {
    return response.status(400).json({
      message: "there was an error"
    })
  });

});

module.exports = router;