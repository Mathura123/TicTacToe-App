'use strict';

class NewGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <button className="restart" onClick={restart}>
          <b>RESTART</b>
        </button>
        <button className="new-user" onClick={newUserSignup}>
          <b>New User?</b>
        </button>
      </div>
    );
  }
}
const domContainer = document.querySelector('#newGame');
ReactDOM.render(<NewGame/>, domContainer);