import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import AboutMe from "./Components/AboutMe/AboutMe";

function App() {
  return (
    <div className="App">
        <Header />
        <Home />
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
        </header>
        <AboutMe />
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
        </header>
    </div>
  );
}

export default App;
