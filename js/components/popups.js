function Creators(props) {
  return (
    <div class="modal-creators">
      <div class="creators-contents">
        <div class="creators-close" onClick={CreatorsClose}>
          +
        </div>
        <div class="creators">
          <div class="creators-heading">
            <b>
              <u>CREATORS</u>
            </b>
          </div>
          <br />
          <div class="creator">
            <img src="../assets/siddhi.jpeg" alt="" class="creator-img" />
            <b>SIDDHI SETH</b>
          </div>
          <p>
            Senior Analyst, working with Capgemini India from 2020.
            <br />
            Completed Btech in Electrical Engineering from NIT Bhopal.
          </p>
          <div class="creator">
            <img src="../assets/mathura.jpeg" alt="" class="creator-img" />
            <b>MATHURA DAS</b>
          </div>
          <p>
            Senior Analyst, working with Capgemini India from 2020.
            <br />
            Completed Btech in Electrical Engineering from IIT Dhanbad.
          </p>
        </div>
      </div>
    </div>
  );
}
function Rules(props) {
  return (
    <div class="modal-help">
      <div class="help-contents">
        <div class="help-close" onClick={HelpClose}>
          +
        </div>
        <div class="rules">
          <b>
            RULES FOR TIC-TAC-TOE:
            <ul>
              <li>
                The game is played on a grid that's 3 squares by 3 squares.
              </li>
              <li>
                You are X, your friend (or the computer in this case) is O. ...
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
function Popups(props) {
  return (
    <>
      <Creators />
      <Rules />
    </>
  );
}
const domContainer = document.querySelector("#popups");
ReactDOM.render(<Popups />, domContainer);
