class ChanceInfo extends React.Component {
  componentDidMount() {
    loadFirstChanceInfo();
    loadCurrentChanceInfo();
    loadPlayerInfo();
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
function HelpInfo(props) {
  return (
    <div class="help-info">
      <a class="help" id="help" onClick={Help}>
        <img
          src="../assets/helpboard.png"
          alt=""
          height="250px"
          width="250px"
        />
      </a>
    </div>
  );
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
function Container(props) {
  return (
    <div className="container">
      <HelpInfo />
      <CenterBody />
      <div class="player-info" id="player-info"></div>
    </div>
  );
}

const domContainer = document.querySelector("#container");
ReactDOM.render(<Container />, domContainer);
