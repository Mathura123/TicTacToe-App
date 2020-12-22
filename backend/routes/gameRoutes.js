const router = require("express").Router();
let Game = require("../models/game.model");
let variableObj={};
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
    .then(() => res.json("Game Situation added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});


router.route("/userInput/add").post((req, res) => {
  variableObj["userInput"] = req.body.userInput; 
  res.json(`User input added at + ${variableObj["userInput"]}`);
  module.exports.userInput = variableObj["userInput"];
  console.log(variableObj["userInput"])
});
module.exports = router;
