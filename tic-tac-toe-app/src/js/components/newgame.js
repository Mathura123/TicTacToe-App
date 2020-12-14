import {restart} from '../game.js'
import {newUserSignup} from '../game.js'
import '../../css/index.css';
import '../game.js'

function NewGame(props) {
  return (
    <div>
      <button className="restart" onClick={restart}>
        <b>RESTART</b>
      </button>
      <a href="../../public/pickChoice.html"><button className="new-user" onClick={newUserSignup}>
        <b>New User?</b>
      </button>
      </a>
    </div>
  );
}

export default NewGame;