import PlayArea from "./grid";
import NewGame from "./newgame";
import GameSituation from "./gameSituation";
import "../../css/index.css";
import { loadFirstChanceInfo } from "../game.js";
import React from "react";

class ChanceInfo extends React.Component {
  componentDidMount() {
    loadFirstChanceInfo();
  }
  render() {
    return (
      <div className="chanceInfo">
        <label id="firstChance" className="firstChance"></label>
      </div>
    );
  }
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
