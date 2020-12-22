import $ from "jquery";
import axios from 'axios';

window.addEventListener("DOMContentLoaded", (event) => {
  document.querySelector(".content").style.display = "flex";
});

const uri = 'http://localhost:5000/game/add';
const uriUserInput = 'http://localhost:5000/game/userInput/add';
let playerName = localStorage.getItem("userName");
let choice = localStorage.getItem("userChoice");
let computerChoice=choice==="X"?"O":"X";
let board = [0,0,0,0,0,0,0,0,0];
let turn='uesr';
let chances = ["User", "Computer"];
let random = Math.floor(Math.random() * chances.length);
let firstChance = chances[random];
let currentChance = chances[0];
let winPosibilities = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];
let tiePossibility = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let userArray = [];
let computerArray = [];
let check=0;

export function UpdateNameAndChoice() {
  playerName = localStorage.getItem("userName");
  choice = localStorage.getItem("userChoice");
  computerChoice=choice==="X"?"O":"X";
  document.querySelector(".content").style.display = "none";
  random = Math.floor(Math.random() * chances.length)
  firstChance = chances[random];
  restart();
  loadPlayerInfo();
  loadFirstChanceInfo();
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
  animateChar(node, choice);
  addCellIntoUserArray(node);
  getGameSituation();
}

function animateChar(node, print) {
  if (print === "X") {
    $(`.${node}.cross`).addClass("cross-shown");
  }
  if (print === "O") {
    $(`.${node}.circle`).addClass("circle-shown");
  }
}

function addCellIntoUserArray(node) {
  let selectedCellIndex = parseInt(node.charAt(node.length - 1));
  let indexObj ={
    "userInput" : selectedCellIndex
  }
  axios.post(uriUserInput, indexObj)
    .then(res => console.log(res.data));
  userArray.push(selectedCellIndex + 1);
  board[selectedCellIndex]=1;
  turn='Computer';
}

function getGameSituation() {
  let totalSelects = userArray.concat(computerArray);
  totalSelects.sort();
  if (winPosibilities.some((arr) => arr.every((cell) => userArray.includes(cell)))) {
    postGameSitutaionToDB(1);
    displayGameSituationInLabel("WIN");
  } else if (
    winPosibilities.some((arr) =>
      arr.every((cell) => computerArray.includes(cell))
    )
  ) {
    postGameSitutaionToDB(0);
    displayGameSituationInLabel("LOSE");
  } else if (JSON.stringify(tiePossibility) === JSON.stringify(totalSelects)) {
    postGameSitutaionToDB(2);
    displayGameSituationInLabel("TIED");
  }
  else if(turn==='Computer'){
  }
}

function postGameSitutaionToDB(situationInt) {
  let gameObj = {
    "userName": playerName,
    "gameSituation": situationInt
  }
  axios.post(uri, gameObj)
    .then(res => console.log(res.data));
}

function displayGameSituationInLabel(situation) {
  if (situation === "WIN" || situation === "LOSE") {
    document.getElementById("gameSituation").textContent = `YOU ${situation}`;
  } else if (situation === "TIED") {
    document.getElementById("gameSituation").textContent = `GAME ${situation}`;
  }
}

export function restart() {
  $(".cross-shown").removeClass("cross-shown");
  $(".circle-shown").removeClass("circle-shown");
  userArray = [];
  computerArray = [];
  board = [0,0,0,0,0,0,0,0,0];
  check=0;
  document.getElementById("gameSituation").textContent = "";
}

export function loadPlayerInfo() {
  let compChoice;
  if (choice === "X") compChoice = "O";
  else if (choice === "O") compChoice = "X";
  else compChoice = " ";

	computerChoice= compChoice;

  let innerHtml = `
  <div class="player-name"> PLAYER NAME: ${playerName}</div>
  <div class="player-sign">PLAYER'S CHOICE: ${choice}</div>
  <div class="computer-sign">COMPUTER'S CHOICE: ${compChoice}</div>
`;
  document.querySelector("#player-info").innerHTML = innerHtml;
}

export function loadFirstChanceInfo() {
	document.querySelector(
		"#firstChance"
		  ).innerHTML = `${firstChance} got first chance`;
	if(firstChance==="Computer")
	{
	}
  	
}

export function loadCurrentChanceInfo() {
  document.getElementById("currentChance").style.visibility = "visible";
  document.querySelector(
    "#currentChance"
  ).innerHTML = `It's ${currentChance}'s turn`;
}
