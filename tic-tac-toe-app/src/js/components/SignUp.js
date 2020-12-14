//import { selectChoice } from "../pickChoice.js";
//import { continueOnClick } from "../pickChoice.js";
import "../../css/pickChoice.css";
import "../game.js";
//import "../pickChoice.js";

function PickChoice(Props) {
  return (
    <div className="content" id="content">
      <div className="header-content">
        <h1 className="glow-header">Pick Your Choice</h1>
      </div>
      <div className="options">
        <button
          id="cross"
          className="choice-button"
          /*onClick={selectChoice(this)}*/
        >
          X
        </button>
        <button
          id="circle"
          className="choice-button"
          /*onClick={selectChoice(this)}*/
        >
          O
        </button>
      </div>
      <div className="showChoiceLabel">
        <label className="label">Your Choice : </label>
        <label id="choiceChar" className="label"></label>
      </div>
      <input id="name" type="text" placeholder="YOUR NAME" />
      <div id="error-output" className="error-output"></div>
      <button className="continue-button" /*onClick={continueOnClick(this)}*/>
        Continue
      </button>
    </div>
  );
}

export default PickChoice;
