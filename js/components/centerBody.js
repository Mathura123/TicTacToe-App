function ChanceInfo(props) {
    return ( 
        <div className="chanceInfo">
            <label id="firstChance" className="firstChance"></label>
            <label id="currentChance" className="currentChance"></label>
        </div>
    );
}
function GameSituation(props) {
    return ( 
        <label id="gameSituation"></label>
    );
}
function CenterBody(props) {
    return ( 
        <div className="centerBody">
            <ChanceInfo/>
            <PlayArea/>
            <GameSituation/>
            <NewGame/>
        </div>
    );
}

const domContainer = document.querySelector('#centerBody');
ReactDOM.render(<CenterBody/>, domContainer);