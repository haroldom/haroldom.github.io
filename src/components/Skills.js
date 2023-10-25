import { Icon } from "@iconify/react";
import React from "react";

import "stylesheets/Skills.css";

const Skills = () => {
    return (
        <div className="skills-main-container">
            <div className="skills-content">
                <h2 className="skills-content__h2">
                    Updated with industry standard technologies
                </h2>
                <h3 className="skills-content__h3">
                    Always learning something new
                </h3>
                <div className="skills-container">
                    <div className="skills-container__item">
                        <Icon
                            className="skills-container__item-icon"
                            icon="simple-icons:html5"
                        />
                        <p className="skills-container__item-name">HTML</p>
                    </div>
                    <div className="skills-container__item">
                        <Icon
                            className="skills-container__item-icon"
                            icon="simple-icons:css3"
                        />
                        <p className="skills-container__item-name">CSS</p>
                    </div>
                    <div className="skills-container__item">
                        <Icon
                            className="skills-container__item-icon"
                            icon="simple-icons:javascript"
                        />
                        <p className="skills-container__item-name">
                            JavaScript
                        </p>
                    </div>
                    <div className="skills-container__item">
                        <Icon
                            className="skills-container__item-icon"
                            icon="simple-icons:react"
                        />
                        <p className="skills-container__item-name">React</p>
                    </div>
                    <div className="skills-container__item">
                        <Icon
                            className="skills-container__item-icon"
                            icon="simple-icons:react"
                        />
                        <p className="skills-container__item-name">
                            React Native
                        </p>
                    </div>
                    <div className="skills-container__item">
                        <Icon
                            className="skills-container__item-icon"
                            icon="simple-icons:firebase"
                        />
                        <p className="skills-container__item-name">Firebase</p>
                    </div>
                    <div className="skills-container__item">
                        <Icon
                            className="skills-container__item-icon"
                            icon="simple-icons:git"
                        />
                        <p className="skills-container__item-name">Git</p>
                    </div>
                    <div className="skills-container__item">
                        <Icon
                            className="skills-container__item-icon"
                            icon="simple-icons:arduino"
                        />
                        <p className="skills-container__item-name">Arduino</p>
                    </div>
                    <div className="skills-container__item">
                        <Icon
                            className="skills-container__item-icon"
                            icon="simple-icons:python"
                        />
                        <p className="skills-container__item-name">Python</p>
                    </div>
                </div>
                <h3 className="h3">ALSO SOME BUNCH OF ORDINARY SKILLS</h3>
                <p className="p">
                    FIGMA, LINUX, WINDOWS, ADOBE ILLUSTRATOR, ADOBE PHOTOSHOP,
                    ADOBE PREMIER, AFTER EFFECTS.
                </p>
                <button className="light">Get my résumé</button>
            </div>
        </div>
    );
};

export default Skills;
