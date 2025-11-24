import React, { useRef } from "react";
import logo from "imgs/logo.webp";
import 'stylesheets/Nav.css'
import gsap, { Power2 } from "gsap";
import { useLayoutEffect } from "react";
import LanguageChanger from "./LanguageChanger";

const Nav = () => {

    // For the 3 lines in the fullpage menu animation
    const fullPageMenu = useRef(null)
    let tl = gsap.timeline({ paused: true });
    const menuBarContainer = useRef(null)

    // Some gsap animations for the fullpage-nav open/hide

    // For the menu bar button animation
    let menuBar = gsap.timeline();
    useLayoutEffect(() => {
        menuBar.to(menuBarContainer.current.querySelector('.bar-1'), 0.5, {
            attr: { d: "M8,2 L2,8" },
            stroke: "#000",
            x: 1,
            ease: Power2.easeInOut
        }, 'start')
        menuBar.to(menuBarContainer.current.querySelector('.bar-2'), 0.5, {
            stroke: "#000",
            autoAlpha: 0
        }, 'start')
        menuBar.to(menuBarContainer.current.querySelector('.bar-3'), 0.5, {
            stroke: "#000",
            attr: { d: "M8,8 L2,2" },
            x: 1,
            ease: Power2.easeInOut
        }, 'start')
        menuBar.reverse();
    }, [menuBarContainer, menuBar, tl])

    const handleMenuBarClick = () => {
        const body = document.querySelector('.App')
        if (menuBar.reversed()) {
            body.style.height = "100vh"
            body.style.overflowY = 'clip'
        } else {
            body.style.height = "unset"
            body.style.overflowY = 'unset'
        }
        menuBar.reversed(!menuBar.reversed())
        tl.reversed(!tl.reversed())
    }



    useLayoutEffect(() => {
        tl.to(fullPageMenu.current, {
            duration: 0,
            display: "block",
            ease: 'Expo.easeInOut',
        })
        tl.from(fullPageMenu.current.querySelectorAll('.menu-bg span'), {
            duration: 1,
            x: "100%",
            stagger: 0.1,
            ease: 'Expo.easeInOut'
        })
        tl.from(fullPageMenu.current.querySelectorAll('.main-menu li a'), {
            opacity: 0,
            duration: 1.5,
            y: "100%",
            stagger: 0.2,
            ease: 'Expo.easeInOut'
        }, "-=0.5")
        tl.from(fullPageMenu.current.querySelectorAll('.social-links li '), {
            duration: .5,
            y: "100%",
            opacity: 0,
            stagger: 0.1,
            ease: 'Expo.easeInOut'
        }, "-=0.5")
        tl.reverse();
    }, [fullPageMenu, tl])

    return (
        <>
            <div className="nav">
                <img className="nav__img" src={logo} alt="" />
                <LanguageChanger />
                <div className="menu-icon" onClick={handleMenuBarClick}>
                    <svg viewBox="0 0 12 10" ref={menuBarContainer} className="hamburger" height="25px" width="25px">
                        <path d="M10, 2 L2,2" className="bar-1"></path>
                        <path d="M2,5 L10,5" className="bar-2"></path>
                        <path d="M10,8 L2,8" className="bar-3"></path>
                    </svg>
                </div>
            </div>
            <div className="fullpage-menu" ref={fullPageMenu}>
                <div className="fullpage-menu-inner">
                    <div className="menu-bg">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <nav>
                        <ul className="main-menu">
                            <li><a rel="noreferrer" onClick={handleMenuBarClick} href="#home">Home</a></li>
                            <li><a rel="noreferrer" onClick={handleMenuBarClick} href="#about">About</a></li>
                            <li><a rel="noreferrer" onClick={handleMenuBarClick} href="#projects">Projects</a></li>
                            <li><a rel="noreferrer" onClick={handleMenuBarClick} href="#contact">Contact</a></li>

                        </ul>
                    </nav>
                    <div className="header-nav-footer">
                        <ul className="social-links">
                            <li><a target="_blank" rel="noreferrer" href="https://www.github.com/haroldom">Github</a></li>
                            <li><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/haroldom">Linkedin</a></li>
                            <li><a target="_blank" rel="noreferrer" href="https://www.twitter.com/sebaasom">Twitter</a></li>
                            <li>&copy;2025</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Nav;
