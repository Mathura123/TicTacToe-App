function HelpInfo(props) {
    return ( 
        <div className="help-info">
        <a className="help" id="help">
            <img src="../assets/helpboard.png" alt="" height="250px" width="250px" onClick={Help}/>
        </a>
        </div>
    );
}
class PlayerInfo extends React.Component {
    componentDidMount() {
        loadPlayerInfo();
    }
    render(){
        return ( 
            <div className="player-info" id="player-info"></div>
        );
    }
}
function Container(props){
    return(
        <div className="container">
            <HelpInfo/>
            <CenterBody/>
            <PlayerInfo/>
        </div>
    )
}

const domContainer = document.querySelector('.container');
ReactDOM.render(<Container/>, domContainer);
