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
        window.location.replace(site_properties.game_page);
    } else if (!choiceBool) {
        document.querySelector(".error-output").textContent = 'You need to Choose any one Option';
    } else {
        document.getElementById('error-output').style.marginLeft = "28.7%";
        document.querySelector(".error-output").textContent = 'Name is required';
    }
}

$('input').on('focusin', function () {
    $(this).parent().find('label').addClass('active');
});

$('input').on('focusout', function () {
    if (!this.value) {
        $(this).parent().find('label').removeClass('active');
    }
});
$(document).on('keypress',function(e) {
    if(e.which == 13) {
        continueOnClick();
    }
});