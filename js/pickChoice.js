let choiceBool = false;
window.addEventListener('DOMContentLoaded', (event) => {

})
function selectChoice(button) {
    if (button.id == 'cross') {
        choiceBool = true;
        document.querySelector("#choiceChar").textContent = 'X';
    }
    if (button.id == 'circle') {
        choiceBool = true;
        document.querySelector("#choiceChar").textContent = 'O';
    }
}