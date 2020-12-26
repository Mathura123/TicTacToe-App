import TabLogo from "../../assets/TabLogo.png";
import React from "react";
import "../../css/index.css";

class Header extends React.Component {
  componentDidMount() {
    document
     .getElementById("about-button")
     .addEventListener("click", function () {
       document.querySelector(".modal-creators").style.display = "flex";
     });
  }

  render(){
    return (
    <header className="header" id="header">
      <div className="heading">
        <img className="heading-image" src={TabLogo} alt=" " />
        <div className="heading-content">
          <b>TIC TAC TOE</b>
        </div>
      </div>
      <div className="button">
        <button className="about-button" id="about-button">
          About Creaters
        </button>
      </div>
    </header>
  );
}
}

export default Header;
