import $ from "jquery";
import axios from "axios";
import gameOver from "../assets/gameover.png";

window.addEventListener("DOMContentLoaded", (event) => {
  document.querySelector(".content").style.display = "flex";
});

const uri = "http://localhost:5000/game/add";
const uriUserInput = 'http://localhost:5000/game/userInput/add';
const uriComputerOutput = 'http://localhost:5000/game/computerOutput/';
let playerName = localStorage.getItem("userName");
let choice = localStorage.getItem("userChoice");
let computerChoice = choice === "X" ? "O" : "X"; //new
let board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let clickable = [true,true,true,true,true,true,true,true,true];
let chances = ["User", "AI"];
let random = Math.floor(Math.random() * chances.length);
let firstChance = chances[random];
let currentChance = firstChance;
let winPosibilities = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [3, 5, 7],
  [1, 5, 9],
];
let tiePossibility = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let userArray = [];
let computerArray = [];
let gameEnd = false;

export function UpdateNameAndChoice() {
  playerName = localStorage.getItem("userName");
  choice = localStorage.getItem("userChoice");
  computerChoice = choice === "X" ? "O" : "X";
  document.querySelector(".content").style.display = "none";
  random = Math.floor(Math.random() * chances.length);
  firstChance = chances[random];
  restart();
  loadPlayerInfo();
}

export function AboutCreators() {
   document
    .getElementById("about-button")
    .addEventListener("click", function () {
      document.querySelector(".modal-creators").style.display = "flex";
    });
}

export function PickChoice() {
  document.getElementById("new-user").addEventListener("click", function () {
    document.querySelector(".gameSituation").style.display = "none";
    document.querySelector(".content").style.display = "flex";
  });
}

export function CreatorsClose() {
  document
    .querySelector(".creators-close")
    .addEventListener("click", function () {
      document.querySelector(".modal-creators").style.display = "none";
    });
}

export function Help() {
  document.getElementById("help").addEventListener("click", function () {
    document.querySelector(".modal-help").style.display = "flex";
  });
}

export function HelpClose() {
  document.querySelector(".help-close").addEventListener("click", function () {
    document.querySelector(".modal-help").style.display = "none";
  });
}

export function workOnCell(node) {
  let selectedCellIndex = parseInt(node.charAt(node.length - 1));
  if(clickable[selectedCellIndex]){
    animateChar(node, choice);
    addCellIntoUserArray(selectedCellIndex);
    nextMove();
  }
}

function animateChar(node, print) {
  if (print === "X") {
    $(`.${node}.cross`).addClass("cross-shown");
  }
  if (print === "O") {
    $(`.${node}.circle`).addClass("circle-shown");
  }
}

function addCellIntoUserArray(selectedCellIndex) {
  board[selectedCellIndex]=1;
  clickable[selectedCellIndex]=false;
  postUserInput();
  userArray.push(selectedCellIndex + 1);
  currentChance = "AI";
}

function nextMove(){
  getGameSituation();
  if (currentChance === "AI" && gameEnd === false) {
    getComputerMove()
  }
}

function getComputerMove(){
  axios.get(uriComputerOutput)
    .then(res=> {
      console.log(`AI Move: ${res.data}`);
      workOnComputerOutput(res.data);
    });
    currentChance="User";
}

function getGameSituation() {
  let totalSelects = userArray.concat(computerArray);
  totalSelects.sort();
  if (winPosibilities.some((arr) => arr.every((cell) => userArray.includes(cell)))) {
    postGameSitutaionToDB(2);
    GameResult();
    displayGameSituationInLabel("WIN");
    gameEnd=true;
  } else if (winPosibilities.some((arr) =>arr.every((cell) => computerArray.includes(cell)))) {
    postGameSitutaionToDB(0);
    GameResult();
    displayGameSituationInLabel("LOSE");
    gameEnd=true;
  } else if (JSON.stringify(tiePossibility) === JSON.stringify(totalSelects)) {
    postGameSitutaionToDB(1);
    GameResult();
    displayGameSituationInLabel("TIED");
    gameEnd=true;
  } 
}

function workOnComputerOutput(computerMove)
{
  let node="block_"+computerMove;
  animateChar(node, computerChoice);
  computerArray.push(computerMove+1);
  board[computerMove]=2;
  clickable[computerMove]=false;
  getGameSituation();
}

function postGameSitutaionToDB(situationInt) {
  let gameObj = {
    userName: playerName,
    gameSituation: situationInt,
  };
  axios.post(uri, gameObj).then((res) => console.log(res.data));
}

function displayGameSituationInLabel(situation) {
  if (situation === "WIN" || situation === "LOSE") {
    document.getElementById(
      "gameSituation"
    ).innerHTML = `YOU ${situation}       
    <img src=${gameOver} alt="" height="50%" width="50%" />
    `;
  } else if (situation === "TIED") {
    document.getElementById(
      "gameSituation"
    ).innerHTML = `GAME ${situation}       
    <img src=${gameOver} alt="" height="60%" width="60%" />
    `;
  }
}

function GameResult() {
  document.querySelector(".gameSituation").style.display = "block";
}

export function restart() {
  document.querySelector(".gameSituation").style.display = "none";
  $(".cross-shown").removeClass("cross-shown");
  $(".circle-shown").removeClass("circle-shown");
  userArray = [];
  computerArray = [];
  board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  clickable = [true,true,true,true,true,true,true,true,true];
  gameEnd=false;
  currentChance=firstChance;
  loadFirstChanceInfo();
  document.getElementById("gameSituation").textContent = "";
}

export function loadPlayerInfo() {
  let compChoice;
  if (choice === "X") compChoice = "O";
  else if (choice === "O") compChoice = "X";
  else compChoice = " ";

  computerChoice = compChoice;

  let innerHtml = `
  <div class="player-name"> PLAYER NAME: ${playerName}</div>
  <div class="player-sign">PLAYER'S CHOICE: ${choice}</div>
  <div class="computer-sign">AI'S CHOICE: ${compChoice}</div>
`;
  document.querySelector("#player-info").innerHTML = innerHtml;
}

export function loadFirstChanceInfo() {
  document.querySelector(
    "#firstChance"
  ).innerHTML = `${firstChance.toUpperCase()} Won the TOSS`;
  if (firstChance === "AI") {
    postUserInput();
    getComputerMove();
  }
}

function postUserInput()
{
  let indexObj ={
    "userInput" : board
  }
  axios.post(uriUserInput, indexObj)
    .then(res => console.log(res.data));
}