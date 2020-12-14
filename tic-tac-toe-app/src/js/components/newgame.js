import { PickChoice, restart } from "../game.js";
import "../../css/index.css";
import "../game.js";

function NewGame(props) {
  return (
    <div>
      <button className="restart" onClick={restart}>
        <b>RESTART</b>
      </button>
      <button className="new-user" id="new-user" onClick={PickChoice}>
        <b>New User?</b>
      </button>
    </div>
  );
}

export default NewGame;
