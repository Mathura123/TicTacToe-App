class newgame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <button id="restart" class="restart" onclick="restart()">
          <b>RESTART</b>
        </button>
        <button class="new-user" onclick="newUserSignup()">
          <b>New User?</b>
        </button>
      </>
    );
  }
}
