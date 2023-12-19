import "App.css";
import About from "components/About";
import Nav from "components/Nav";
import Projects from "components/Projects";
import Welcome from "components/Welcome";
import Skills from "./components/Skills";
import Footer from "components/Footer";
import Lenis from '@studio-freight/lenis'
import { useEffect, useRef } from "react";

function App() {
    const emailAddress = 'h4roldsmail@gmail.com';
    const subject = "Hey! Let's work together";
    const body = "Hello Harold. My name is "

    window.addEventListener('keyup', (e) => {
        if (e.key == 'Enter') {
            window.scrollTo({
                top: document.body.scrollHeight,
                behavior: 'smooth'
            });
            let mailtoLink = 'mailto:' + encodeURIComponent(emailAddress);
            if (subject) {
                mailtoLink += '?subject=' + encodeURIComponent(subject);
                if (body) {
                    mailtoLink += '&body=' + encodeURIComponent(body);
                }
            }

            // Abre el cliente de correo electrónico
            window.location.href = mailtoLink;
        }
    })
    const lenis = new Lenis()

    function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
    return (
        <div className="App">
            <Nav />
            <Welcome />
            <About/>

            <Projects />
            <Skills />
            <Footer />
        </div>
    );
}

export default App;
