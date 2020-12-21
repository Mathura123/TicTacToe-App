const router = require("express").Router();
let Game = require("../models/game.model");

router.route("/").get((req, res) => {
  Game.find()
    .then((games) => res.json(games))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const userName = req.body.userName;
  const gameSituation = Number(req.body.gameSituation);

  const newGame = new Game({
    userName,
    gameSituation,
  });

  newGame
    .save()
    .then(() => res.json("Field added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
