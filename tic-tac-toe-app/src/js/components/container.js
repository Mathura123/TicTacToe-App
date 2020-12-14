import CenterBody from './centerBody';
import {Help} from '../game.js';
import {loadPlayerInfo} from '../game.js'
import React from 'react';
import helpboard from '../../assets/helpboard.png'
import '../../css/index.css';

function HelpInfo(props) {
    return ( 
        <div className="help-info">
            <div className="help" id="help">
                <img src={helpboard} alt="" height="250px" width="250px" onClick={Help}/>
            </div>
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
        <div class="container" id="container">
            <HelpInfo/>
            <CenterBody/>
            <PlayerInfo/>
        </div>
    )
}

export default Container;
