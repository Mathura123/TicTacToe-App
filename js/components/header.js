function Header(props) {
  return (
    <>
      <div class="heading">
        <img class="heading-image" src="../assets/TabLogo.png" alt=" " />
        <div class="heading-content">
          <b>TIC TAC TOE</b>
        </div>
      </div>
      <div class="button">
        <button class="about-button" id="about-button" onClick={AboutCreators}>
          About Creaters
        </button>
      </div>
    </>
  );
}
const domContainer = document.querySelector("#header");
ReactDOM.render(<Header />, domContainer);
