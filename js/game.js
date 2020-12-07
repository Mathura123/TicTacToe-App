let playerName = localStorage.getItem('userName');
choice = localStorage.getItem('userChoice');
let chances = ['User', 'Computer'];
let firstChance = chances[0];
let currentChance = chances[0];
window.addEventListener('DOMContentLoaded', (event) => {
  loadPlayerInfo();
  loadFirstChanceInfo();
  loadCurrentChanceInfo();
  setTimeout(() => document.getElementById("firstChance").style.opacity = "0", 5000);
});
document.getElementById('about-button').addEventListener("click", function() {
  document.querySelector('.modal-creators').style.display = "flex";
});
document.querySelector('.creators-close').addEventListener("click", function() {
  document.querySelector('.modal-creators').style.display = "none";
});
document.getElementById('help').addEventListener("click", function() {
  document.querySelector('.modal-help').style.display = "flex";
});
document.querySelector('.help-close').addEventListener("click", function() {
  document.querySelector('.modal-help').style.display = "none";
});
function animateChar(node) {
  if (choice === 'X') {
    $(`.${node.id}.cross`).toggleClass('cross-shown')
  }
  if (choice === 'O') {
    $(`.${node.id}.circle`).toggleClass('circle-shown')
  }
}
function getRules(){
  window.location = site_properties.rules_page;
}

function newUserSignup() {
  window.location = site_properties.pickChoice_page;
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