function NewGame(props) {
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
