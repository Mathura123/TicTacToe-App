let playerName = localStorage.getItem('userName');
choice = localStorage.getItem('userChoice');
let chances = ['User', 'Computer'];
let firstChance = chances[0];
let currentChance = chances[0];
let winPosibilities =[[1,2,3],
                      [4,5,6],
                      [7,8,9],
                      [1,4,7],
                      [2,5,8],
                      [3,6,9],
                      [1,5,9],
                      [3,5,7]
];
let tiePossibility = [1,2,3,4,5,6,7,8,9];
let userArray = [];
let computerArray = [];
window.addEventListener('DOMContentLoaded', (event) => {
  loadPlayerInfo();
  loadFirstChanceInfo();
  loadCurrentChanceInfo();
  setTimeout(() => document.getElementById("firstChance").style.opacity = "0", 8000);
});
document.getElementById('about-button').addEventListener("click", function () {
  document.querySelector('.modal-creators').style.display = "flex";
});
document.querySelector('.creators-close').addEventListener("click", function () {
  document.querySelector('.modal-creators').style.display = "none";
});
document.getElementById('help').addEventListener("click", function () {
  document.querySelector('.modal-help').style.display = "flex";
});
document.querySelector('.help-close').addEventListener("click", function () {
  document.querySelector('.modal-help').style.display = "none";
});

function workOnCell(node){
  animateChar(node);
  addCellIntoUserArray(node);
  getGameSituation();
}

function animateChar(node) {
  if (choice === 'X') {
    $(`.${node.id}.cross`).addClass('cross-shown')
  }
  if (choice === 'O') {
    $(`.${node.id}.circle`).addClass('circle-shown')
  }
}

function addCellIntoUserArray(node){
      let selectedCellIndex = parseInt(node.id.charAt(node.id.length - 1));
      userArray.push(selectedCellIndex+1);
      getGameSituation();
}

function getGameSituation(){
      let totalSelects = userArray.concat(computerArray);
      totalSelects.sort();
      if(winPosibilities.some(arr => arr.every(cell => userArray.includes(cell)))){
        displayGameSituationInLabel("WIN");
      }
      else if(winPosibilities.some(arr => arr.every(cell => computerArray.includes(cell)))){
        displayGameSituationInLabel("LOSE");
      }
      else if(JSON.stringify(tiePossibility)===JSON.stringify(totalSelects)){
        displayGameSituationInLabel("TIED");
      }
}

function displayGameSituationInLabel(situation){
        if(situation==="WIN" || situation === "LOSE"){
              document.getElementById("gameSituation").textContent = `YOU ${situation}`;
        }
        else if(situation=="TIE"){
          document.getElementById("gameSituation").textContent = `GAME ${situation}`;
        }
}

function newUserSignup() {
  window.location = site_properties.pickChoice_page;
}

function restart() {
  $(".cross-shown").removeClass("cross-shown");
  $(".circle-shown").removeClass("circle-shown");
  userArray = [];
  computerArray = [];
  document.getElementById("gameSituation").textContent = '';
}

function loadPlayerInfo() {
  let compChoice;
  if (choice === 'X')
    compChoice = 'O';
  else if (choice === 'O')
    compChoice = 'X';
  else
    compChoice = ' ';

  let innerHtml = `
  <div class="player-name"> PLAYER NAME: ${playerName}</div>
  <div class="player-sign">PLAYER'S CHOICE: ${choice}</div>
  <div class="computer-sign">COMPUTER'S CHOICE: ${compChoice}</div>
`;
  document.querySelector('#player-info').innerHTML = innerHtml
}

function loadFirstChanceInfo() {
  document.querySelector('.firstChance').innerHTML = `${firstChance} got first chance`;
}

function loadCurrentChanceInfo() {
  document.getElementById("currentChance").style.visibility = "visible";
  document.querySelector('.currentChance').innerHTML = `It's ${currentChance}'s turn`;
}