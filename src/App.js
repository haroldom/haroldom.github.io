import "App.css";
import About from "components/About";
import Nav from "components/Nav";
import Projects from "components/Projects";
import Welcome from "components/Welcome";
import Skills from "./components/Skills";

function App() {
    return (
        <div className="App">
            <Nav />
            <Welcome />
            <About/>
            <Projects/>
            <Skills/>
        </div>
    );
}

export default App;
