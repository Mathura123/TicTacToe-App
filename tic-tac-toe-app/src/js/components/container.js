import CenterBody from "./centerBody";
import { loadPlayerInfo } from "../game.js";
import React from "react";
import helpboard from "../../assets/helpboard.png";
import "../../css/index.css";

class HelpInfo extends React.Component {
  componentDidMount() {
    document.getElementById("help").addEventListener("click", function () {
      document.querySelector(".modal-help").style.display = "flex";
    });
  }
  render() {
    return (
    <div className="help-info">
      <div className="help" id="help">
        <img src={helpboard} alt="" height="50%" width="50%" />
      </div>
    </div>
  );
  }
}
class PlayerInfo extends React.Component {
  componentDidMount() {
    loadPlayerInfo();
  }
  render() {
    return <div className="player-info" id="player-info"></div>;
  }
}
function Container(props) {
  return (
    <div className="container" id="container">
      <HelpInfo />
      <CenterBody />
      <PlayerInfo />
    </div>
  );
}

export default Container;
