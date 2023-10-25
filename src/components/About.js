import React from "react";
import hand from "imgs/waving.png";
import "stylesheets/About.css";
import aboutImage from "imgs/aboutImage.jpg"
import { Icon } from "@iconify/react";
const About = () => {
    return (
        <div className="about-main-container">
            <div className="about">
                <p className="about__p--hello">
                    Hello everybody{" "}
                    <img className="about__p-img" src={hand} alt="" />
                </p>
                <h2 className="about__h2">About me</h2>
                <p className="about__p">
                    I started programming when I was 12 years old. Now at 16 I
                    am about to finish high school. I had the opportunity to
                    work on personal projects that won institutional contests in
                    my country.
                </p>
                <p className="about__p">
                    I try to design new experiences and help companies connect
                    with their customers using amazing technologies.
                </p>
                <p className="about__p">
                    When I'm not in front of the computer I'm playing piano,
                    playing soccer or dancing Marinera (Peruvian dance).
                </p>
                <div className="social-links">
                    <Icon className="about__icon" icon="bi:github" />
                    <Icon className="about__icon" icon="bi:linkedin" />
                    <Icon className="about__icon" icon="bi:instagram" />
                    <Icon className="about__icon" icon="bi:twitter-x" />
                </div>
            </div>
            <img className="about__img" src={aboutImage} alt="" />
        </div>
    );
};

export default About;
