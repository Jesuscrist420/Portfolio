import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import AboutMe from "./Components/AboutMe/AboutMe";
import Skills from "./Components/Skills/Skills";
import ContactMe from "./Components/Contact/ContactMe";

function App() {

     return (
        <div className="App">
            <Header className="NavBar" />
            <header className="App-header">
                <Home />
                <img src={logo} className="App-logo" alt="logo" />
            </header>
            <header className="App-header">
                <AboutMe />
                <img src={logo} className="App-logo" alt="logo" />
            </header>
            <header className="App-header">
                <Skills />
                <img src={logo} className="App-logo" alt="logo" />
            </header>
            <header className="App-header">
                <ContactMe />
                <img src={logo} className="App-logo" alt="logo" />
            </header>
        </div>
    );
}

export default App;
