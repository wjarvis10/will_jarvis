import './css_files/App.css';
import AnchorLink from "react-anchor-link-smooth-scroll";
import { HomePage } from "./components/HomePage.js"

function App() {
  return (
    <div id="app">
      <div id="top"></div>
      <div id="header">
        <AnchorLink href='#top'><button class="navButton2">BORED BEAR</button></AnchorLink>
        <div id="headerButtons">
          <AnchorLink href='#projects'><button class="navButton">PROJECTS</button></AnchorLink>
          <AnchorLink href='#aboutMe'><button class="navButton">ABOUT ME</button></AnchorLink>
        </div>
      </div>
      <HomePage></HomePage>
    </div>
  );
}

export default App;
