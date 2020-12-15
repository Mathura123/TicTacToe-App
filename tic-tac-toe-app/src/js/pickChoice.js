let choiceBool = false;
let userName = "User";
var choice;
window.addEventListener("DOMContentLoaded", (event) => {});

export function selectChoice(buttonId) {
  if (buttonId === "cross") {
    choiceBool = true;
    // document.querySelector("#choiceChar").textContent = "X";
    let element = document.querySelector("#choiceChar")
    if (element) {
        element.textContent = "X";
    }
    let element2 = document.querySelector(".error-output")
    if(element2){
      element2.textContent = "";
    }
  }
  if (buttonId === "circle") {
    choiceBool = true;
    // document.querySelector("#choiceChar").textContent = "O";
    let element = document.querySelector("#choiceChar")
    if (element) {
        element.textContent = "X";
    }
    let element2 = document.querySelector(".error-output")
    if(element2){
      element2.textContent = "";
    }
  }
}

export function continueOnClick() {
  if (choiceBool === true && document.getElementById("name").value) {
    choice = document.querySelector("#choiceChar").textContent;
    userName = document.getElementById("name").value;
    localStorage.removeItem("userChoice");
    localStorage.removeItem("userName");
    localStorage.setItem("userChoice", choice);
    localStorage.setItem("userName", userName);
    window.location.replace("./index.html");
  } else if (!choiceBool) {
    document.querySelector(".error-output").textContent =
      "You need to Choose any one Option";
  } else {
    document.querySelector(".error-output").textContent = "Name is required";
  }
}
// document.on("keypress", function (e) {
//   if (e.which === 13) {
//     continueOnClick();
//   }
// });
