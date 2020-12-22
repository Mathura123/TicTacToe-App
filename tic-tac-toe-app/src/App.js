import Header from "./js/components/header";
import Play from "./js/components/play";
import Container from "./js/components/container";
import Footer from "./js/components/footer";
import Popups from "./js/components/popups";
import PickChoice from "./js/components/SignUp";
import GameSituation from "./js/components/gameSituation";
import "./css/index.css";
import "./css/pickChoice.css";
import "./js/game.js";
//import "./js/pickChoice.js";

function App() {
  return (
    <>
      <Header />
      <Play />
      <Container />
      <GameSituation />
      <Footer />
      <Popups />
      <PickChoice />
    </>
  );
}

export default App;
