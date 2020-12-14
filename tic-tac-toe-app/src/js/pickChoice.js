let choiceBool = false;
let userName = 'User';
var choice;
window.addEventListener('DOMContentLoaded', (event) => {

})

function selectChoice(button) {
    if (button.id == 'cross') {
        choiceBool = true;
        document.querySelector("#choiceChar").textContent = 'X';
        document.querySelector(".error-output").textContent = '';
    }
    if (button.id == 'circle') {
        choiceBool = true;
        document.querySelector("#choiceChar").textContent = 'O';
        document.querySelector(".error-output").textContent = '';
    }
}

function continueOnClick() {
    if (choiceBool === true && document.getElementById("name").value) {
        choice = document.querySelector("#choiceChar").textContent;
        userName = document.getElementById("name").value;
        localStorage.removeItem('userChoice')
        localStorage.removeItem('userName')
        localStorage.setItem('userChoice', choice);
        localStorage.setItem('userName', userName);
        window.location.replace('./index.html');
    } else if (!choiceBool) {
        document.querySelector(".error-output").textContent = 'You need to Choose any one Option';
    } else {
        // document.getElementById('error-output').style.marginLeft = "";
        document.querySelector(".error-output").textContent = 'Name is required';
    }
}
$(document).on('keypress', function (e) {
    if (e.which == 13) {
        continueOnClick();
    }
});