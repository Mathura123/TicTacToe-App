const algo=require('./../Algorithm/computerAlgo.js');

let computerOutput; 
let board = [0,0,0,0,0,0,0,0,0];

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
  board =variableObj["userInput"]
  console.log(board)
  computerOutput=algo.response(board);
  console.log(`AI Move for FrontEnd ${computerOutput}`);
  res.json(computerOutput);
});

module.exports={
  router : router
}