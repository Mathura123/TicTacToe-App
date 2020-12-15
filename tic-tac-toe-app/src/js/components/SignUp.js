// import { selectChoice } from "../pickChoice.js";
// import { continueOnClick } from "../pickChoice.js";
import "../../css/pickChoice.css";
// import "../game.js";
import React from "react";
import {UpdateNameAndChoice} from "../game.js";
//import "../pickChoice.js";
// let choiceBool = false;
// let choiceChar="";
// let errorOutput = "";

class PickChoice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bool : false,
      char: "",
      err : "",
      name: ""
    };
  }
  selectChoice(buttonId){
    if (buttonId === "cross") {
    this.setState({bool : true});
    this.setState({char : "X"});
  }
  if (buttonId === "circle") {
    this.setState({bool : true});
    this.setState({char : "O"});
  }
  }
  updateName(){
    this.setState( {name: document.getElementById("name").value});
  }
  continueOnClick(){
    if (this.state.bool === true && document.getElementById("name").value) {
      
      localStorage.removeItem("userChoice");
      localStorage.removeItem("userName");
      localStorage.setItem("userChoice", this.state.char);
      localStorage.setItem("userName", this.state.name);
      UpdateNameAndChoice();
    } else if (!this.state.bool) {
      document.querySelector(".error-output").textContent ="You need to Choose any one Option";
    } else {
      document.querySelector(".error-output").textContent = "Name is required";
    }
  }
  render() {
    return(
    <div className="content" id="content">
      <div className="header-content">
        <h1 className="glow-header">Pick Your Choice</h1>
      </div>
      <div className="options">
        <button id="cross" className="choice-button" onClick={()=>this.selectChoice("cross")}>X</button>
        <button id="circle" className="choice-button" onClick={()=>this.selectChoice("circle")}>O</button>
      </div>
      <div className="showChoiceLabel">
        <label className="label">Your Choice : </label>
    <label id="choiceChar" className="choiceChar label">{this.state.char}</label>
      </div>
      <input id="name" type="text" placeholder="YOUR NAME" onChange={()=>this.updateName()}/>
    <div id="error-output" className="error-output">{this.state.err}</div>
      <button className="continue-button" onClick={()=>this.continueOnClick()}>
        Continue
      </button>
    </div>
    );
  }
}

export default PickChoice;
