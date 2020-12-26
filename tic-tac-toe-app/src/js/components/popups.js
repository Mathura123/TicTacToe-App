import React from "react";
import siddhi from "../../assets/siddhi.jpeg";
import mathura from "../../assets/mathura.jpeg";
import gautam from "../../assets/gautam.jpeg";
import "../../css/index.css";
import "../game.js";

class Creators extends React.Component {
  componentDidMount() {
    document
      .querySelector(".creators-close")
      .addEventListener("click", function () {
        document.querySelector(".modal-creators").style.display = "none";
      });
  }
  render() {
    return (
      <div className="modal-creators">
        <div className="creators-contents">
          <div className="creators-close">+</div>
          <div className="creators">
            <div className="creators-heading">
              <b>
                <u>CREATORS</u>
              </b>
            </div>
            <div className="creator">
              <img src={mathura} alt="" className="creator-img" />
              <div>
                <b>MATHURA DAS</b>
                <br />
                www.linkedin.com/in/mathuradas
              </div>
            </div>
            <p>
              Senior Analyst, working with Capgemini India from 2020.
              <br />
              Completed Btech in Electrical Engineering from IIT Dhanbad.
            </p>
            <div className="creator">
              <img src={siddhi} alt="" className="creator-img" />
              <div>
                <b>SIDDHI SETH</b>
                <br />
                siddiseth3009@gmail.com
              </div>
            </div>
            <p>
              Senior Analyst, working with Capgemini India from 2020.
              <br />
              Completed Btech in Electrical Engineering from NIT Bhopal.
            </p>
            <div className="creator">
              <img src={gautam} alt="" className="creator-img" />
              <div>
                <b>GAUTAM SINGH</b>
                <br />
                gautamkailashsingh@gmail.com
              </div>
            </div>
            <p>
              Senior Analyst, working with Capgemini India from 2020.
              <br />
              Completed Btech in Mechanical Engineering from IIT Dhanbad.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
class Rules extends React.Component {
  componentDidMount() {
    document
      .querySelector(".help-close")
      .addEventListener("click", function () {
        document.querySelector(".modal-help").style.display = "none";
      });
  }
  render() {
    return (
      <div className="modal-help">
        <div className="help-contents">
          <div className="help-close">+</div>
          <div className="rules">
            <b>
              RULES FOR TIC-TAC-TOE:
              <ul>
                <li>
                  The game is played on a grid that's 3 squares by 3 squares.
                </li>
                <li>
                  You are X, your friend (or the computer in this case) is O.
                  ...
                </li>
                <li>
                  The first player to get 3 of her marks in a row (up, down,
                  across, or diagonally) is the winner.
                </li>
                <li>When all 9 squares are full, the game is over.</li>
              </ul>
            </b>
          </div>
        </div>
      </div>
    );
  }
}
function Popups(props) {
  return (
    <div id="popups">
      <Creators />
      <Rules />
    </div>
  );
}
export default Popups;
