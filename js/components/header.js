function Header(props) {
  return (
    <>
      <div className="heading">
        <img className="heading-image" src="../assets/TabLogo.png" alt=" " />
        <div className="heading-content">
          <b>TIC TAC TOE</b>
        </div>
      </div>
      <div className="button">
        <button className="about-button" id="about-button" onClick={AboutCreators}>
          About Creaters
        </button>
      </div>
    </>
  );
}
const domContainer = document.querySelector("#header");
ReactDOM.render(<Header />, domContainer);
