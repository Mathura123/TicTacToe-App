import $ from "jquery";
import axios from 'axios';

window.addEventListener("DOMContentLoaded", (event) => {
  document.querySelector(".content").style.display = "flex";
});

const uri = 'http://localhost:5000/game/add';
let playerName = localStorage.getItem("userName");
let choice = localStorage.getItem("userChoice");
let computerChoice=choice==="X"?"O":"X";//new
let board= ['_', '_', '_', '_', '_', '_', '_', '_', '_'];//new
//let board= [0,1,2,3,4,5,6,7,8];
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

/*if(firstChance==="Computer" && check===0)
{
	check=1;
	let selectedCellIndex = Math.floor(Math.random() * 9);
	computerArray.push((selectedCellIndex)+1);
  	board[selectedCellIndex]=computerChoice;
  	let n='block_'+selectedCellIndex;
  	animateChar(n, computerChoice);
  	turn='User';
  	//getGameSituation();
}*/

export function UpdateNameAndChoice() {
  playerName = localStorage.getItem("userName");
  choice = localStorage.getItem("userChoice");
  computerChoice=choice==="X"?"O":"X";
  document.querySelector(".content").style.display = "none";
  random = Math.floor(Math.random() * chances.length)
  firstChance = chances[random];
  restart();
  loadPlayerInfo();
  // setTimeout(() => (document.getElementById("firstChance").style.opacity = "0"),8000);
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
  userArray.push(selectedCellIndex + 1);
  board[selectedCellIndex]=choice;//new
  turn='Computer';
  //getGameSituation();
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
	addCellIntoComputerArray();
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
  board= ['_', '_', '_', '_', '_', '_', '_', '_', '_'];
  check=0;
  document.getElementById("gameSituation").textContent = "";
}

export function loadPlayerInfo() {
  let compChoice;
  if (choice === "X") compChoice = "O";
  else if (choice === "O") compChoice = "X";
  else compChoice = " ";

  let innerHtml = `
  <div class="player-name"> PLAYER NAME: ${playerName}</div>
  <div class="player-sign">PLAYER'S CHOICE: ${choice}</div>
  <div class="computer-sign">COMPUTER'S CHOICE: ${compChoice}</div>
`;
  document.querySelector("#player-info").innerHTML = innerHtml;
}

export function loadFirstChanceInfo() {
	if(firstChance==="Computer" && check===0)
	{
		
		let selectedCellIndex = Math.floor(Math.random() * 9);
		computerArray.push((selectedCellIndex)+1);
		board[selectedCellIndex]=computerChoice;
		let n='block_'+selectedCellIndex;
		animateChar(n, computerChoice);
		turn='User';
		firstChance="Computer";
		//restart();
		check=1;
	}
  	document.querySelector(
    "#firstChance"
  	).innerHTML = `${firstChance} got first chance`;
}

export function loadCurrentChanceInfo() {
  document.getElementById("currentChance").style.visibility = "visible";
  document.querySelector(
    "#currentChance"
  ).innerHTML = `It's ${currentChance}'s turn`;
}







//Computer's Move
function addCellIntoComputerArray() {
  let selectedCellIndex = findBestMove();
  //let selectedCellIndex=minimax(board, computerChoice);
  //computerArray.push(changeIndex(selectedCellIndex)+1);
  computerArray.push((selectedCellIndex)+1);
  board[selectedCellIndex]=computerChoice;
  let n='block_'+selectedCellIndex;
  animateChar(n, computerChoice);
  turn='User';
  getGameSituation();
}

/*function changeIndex(selectedCellIndex)
{
	switch(selectedCellIndex)
	{
		case 0:
			return 0;
		case 1:
			return 3;
		case 2:
			return 6;
		case 3:
			return 1;
		case 4:
			return 4;
		case 5:
			return 7;
		case 6:
			return 2;
		case 7:
			return 5;
		case 8:
			return 8;
		default:
			return 0;																																														
	}
}*/

let player = computerChoice, opponent = choice; 
let computerMove=0;

// This function returns true if there are moves 
// remaining on the board. It returns false if 
// there are no moves left to play. 
function isMovesLeft(board) 
{ 
	for(let i=0;i<9;i++)
		if(board[i] === "_")
		return true; 
	return false;
} 

// This is the evaluation function
function evaluate(b) 
{ 
	// Checking for Rows for X or O victory. 
	for (let row = 0; row < 3; row++) 
	{ 
		if (b[0+3*row] === b[1+3*row] && b[1+3*row] === b[2+3*row]) 
		{ 
			if (b[0+3*row] === player) 
				return +10; 
			else if (b[0+3*row] === opponent) 
				return -10; 
		} 
	} 

	// Checking for Columns for X or O victory. 
	for (let col = 0; col < 3; col++) 
	{ 
		if (b[3*0+col] === b[3*1+col] && b[3*1+col] === b[3*2+col]) 
		{ 
			if (b[3*0+col] === player) 
				return +10; 

			else if (b[3*0+col] === opponent) 
				return -10; 
		} 
	} 

	// Checking for Diagonals for X or O victory. 
	if (b[0] === b[4] && b[4] === b[8]) 
	{ 
		if (b[0] === player) 
			return +10; 
		else if (b[0] === opponent) 
			return -10; 
	} 

	if (b[2] === b[4] && b[4] === b[6]) 
	{ 
		if (b[2] === player) 
			return +10; 
		else if (b[2] === opponent) 
			return -10; 
	} 

	// Else if none of them have won then return 0 
	return 0; 
} 

// This is the minimax function. It considers all 
// the possible ways the game can go and returns 
// the value of the board 
function minimax(board,depth,isMax) 
{ 
	let score = evaluate(board); 

	// If Maximizer has won the game 
	// return his/her evaluated score 
	if (score === 10) 
		return score; 

	// If Minimizer has won the game 
	// return his/her evaluated score 
	if (score === -10) 
		return score; 

	// If there are no more moves and 
	// no winner then it is a tie 
	if (isMovesLeft(board) === false) 
		return 0; 

	// If this maximizer's move 
	if (isMax) 
	{ 
		let best = -1000; 

		// Traverse all cells 
		for (let i = 0; i < 3; i++) 
		{ 
			for (let j = 0; j < 3; j++) 
			{ 
				// Check if cell is empty 
				if (board[i*3+j]==='_') 
				{ 
					// Make the move 
					board[i*3+j] = player; 

					// Call minimax recursively and choose 
					// the maximum value 
					best = Math.max(best, minimax(board, 
									depth + 1, !isMax)); 

					// Undo the move 
					board[i*3+j] = '_'; 
				} 
			} 
		} 
		return best+depth; 
	} 

	// If this minimizer's move 
	else
	{ 
		let best = 1000; 

		// Traverse all cells 
		for (let i = 0; i < 3; i++) 
		{ 
			for (let j = 0; j < 3; j++) 
			{ 
				// Check if cell is empty 
				if (board[i*3+j] === '_') 
				{ 
					// Make the move 
					board[i*3+j] = opponent; 

					// Call minimax recursively and choose 
					// the minimum value 
					best = Math.min(best, minimax(board, 
									depth + 1, !isMax)); 

					// Undo the move 
					board[i*3+j] = '_'; 
				} 
			} 
		} 
		return best; 
	} 
} 

// This will return the best possible 
// move for the player 
function findBestMove() 
{ 
	let bestVal = -1000; 

	// Traverse all cells, evaluate minimax function 
	// for all empty cells. And return the cell 
	// with optimal value. 
	for (let i = 0; i < 3; i++) 
	{ 
		for (let j = 0; j < 3; j++) 
		{ 
			// Check if cell is empty 
			if (board[i*3+j] === '_') 
			{ 
				// Make the move 
				board[i*3+j] = player; 

				// compute evaluation function for this 
				// move. 
				let moveVal = minimax(board, 0, false); 

				// Undo the move 
				board[i*3+j] = '_'; 

				// If the value of the current move is 
				// more than the best value, then update 
				// best/ 
				if (moveVal > bestVal) 
				{ 
          			computerMove=3*i+j;
          			bestVal = moveVal; 
				} 
			} 
		} 
	}

	return computerMove; 
} 
