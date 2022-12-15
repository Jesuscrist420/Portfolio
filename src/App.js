import logo from './logo.svg';
import './App.css';
import NavBar from "./Components/Header/NavBar";
import Home from "./Components/Home/Home";
import AboutMe from "./Components/AboutMe/AboutMe";
import Skills from "./Components/Skills/Skills";
import ContactMe from "./Components/Contact/ContactMe";
import { gsap } from "gsap";

function App() {

    let tl = gsap.timeline();

     return (
        <div className="App">
            <NavBar tl={tl} />
            <div id="homeSection" className="App-header">
                <Home tl={tl}/>
            </div>
            <div id="aboutMeSection" className="App-header">
                <AboutMe />
            </div>
            <header id="skillsSection" className="App-header">
                <Skills />
                <img src={logo} className="App-logo" alt="logo" />
            </header>
            <header id="contactMeSection" className="App-header">
                <ContactMe />
                <img src={logo} className="App-logo" alt="logo" />
            </header>
        </div>
    );
}

export default App;
