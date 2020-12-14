import { AboutCreators } from "../game.js";
import TabLogo from "../../assets/TabLogo.png";
import "../../css/pickChoice.css";
function Header(props) {
  return (
    <header class="header" id="header">
      <div className="heading">
        <img className="heading-image" src={TabLogo} alt=" " />
        <div className="heading-content">
          <b>TIC TAC TOE</b>
        </div>
      </div>
      <div className="button">
        <button
          className="about-button"
          id="about-button"
          onClick={AboutCreators}
        >
          About Creaters
        </button>
      </div>
    </header>
  );
}

export default Header;
