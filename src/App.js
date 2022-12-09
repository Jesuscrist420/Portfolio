import logo from './logo.svg';
import './App.css';
import NavBar from "./Components/Header/NavBar";
import Home from "./Components/Home/Home";
import AboutMe from "./Components/AboutMe/AboutMe";
import Skills from "./Components/Skills/Skills";
import ContactMe from "./Components/Contact/ContactMe";

function App() {

     return (
        <div className="App">
            <NavBar/>
            <div id="homeSection" className="App-header">
                <Home />
            </div>
            <header id="aboutMeSection" className="App-header">
                <AboutMe />
                <img src={logo} className="App-logo" alt="logo" />
            </header>
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
