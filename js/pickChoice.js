let choiceBool = false;
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
    if (choiceBool === true) {
        window.location.replace(site_properties.game_page);
    }
    else{
        document.querySelector(".error-output").textContent = 'You need to Choose any one Option'; 
    }
}