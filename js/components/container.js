function HelpInfo(props) {
    return ( 
        <div class="help-info">
        <a class="help" id="help">
            <img src="../assets/helpboard.png" alt="" height="250px" width="250px" />
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
            <div class="player-info" id="player-info"></div>
        );
    }
}
function Container(props){
    return(
        <div class="container">
            <HelpInfo/>
            <CenterBody/>
            <PlayerInfo/>
        </div>
    )
}

const domContainer = document.querySelector('#container');
ReactDOM.render(<Container/>, domContainer);