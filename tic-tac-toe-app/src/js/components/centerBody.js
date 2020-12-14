import PlayArea from "./grid";
import NewGame from "./newgame";
import "../../css/index.css";
import { loadFirstChanceInfo } from "../game.js";
import { loadCurrentChanceInfo } from "../game.js";
import React from "react";

class ChanceInfo extends React.Component {
  componentDidMount() {
    loadFirstChanceInfo();
    loadCurrentChanceInfo();
    setTimeout(
      () => (document.getElementById("firstChance").style.opacity = "0"),
      8000
    );
  }
  render() {
    return (
      <div className="chanceInfo">
        <label id="firstChance" className="firstChance"></label>
        <label id="currentChance" className="currentChance"></label>
      </div>
    );
  }
}
function GameSituation(props) {
  return <label id="gameSituation"></label>;
}
function CenterBody(props) {
  return (
    <div className="centerBody">
      <ChanceInfo />
      <PlayArea />
      <GameSituation />
      <NewGame />
    </div>
  );
}

export default CenterBody;
