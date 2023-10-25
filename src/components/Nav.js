import React from "react";
import { Icon } from "@iconify/react";
import logo from "imgs/logo.png";
import 'stylesheets/Nav.css'
const Nav = () => {
    return (
        <div className="nav">
            <img className="nav__img" src={logo} alt="" />
            <div className="nav__language-container">
                <p className="nav__p selected">EN</p>
                <span className="nav__span">/</span>
                <p className="nav__p ">ES</p>
            </div>
            <Icon className="nav__icon" icon="ri:menu-2-fill" />
        </div>
    );
};

export default Nav;
