import React from "react";
import { restart } from "../game.js";
import "../../css/index.css";
import "../game.js";

class NewGame extends React.Component {
  componentDidMount() {
    document.getElementById("new-user").addEventListener("click", function () {
      document.querySelector(".gameSituation").style.display = "none";
      document.querySelector(".content").style.display = "flex";
    });
  }
  render(){
    return (
    <div className="new-game-buttons">
      <button className="restart" onClick={restart}>
        <b>RESTART</b>
      </button>
      <button className="new-user" id="new-user">
        <b>New User?</b>
      </button>
    </div>
  );
  }
}

export default NewGame;
