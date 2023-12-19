import { Icon } from "@iconify/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { horizontalLoop } from "hooks/horizontalLoop";
import React, { useLayoutEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

import "stylesheets/Skills.css";

gsap.registerPlugin(ScrollTrigger);


const Skills = () => {
    const { t } = useTranslation()
    const skillTitle = useRef(null)
    const skilLSubtitle = useRef(null)
    const skillContainer = useRef(null)
    const skillCarousel = useRef(null)

    const skillsRefs = useRef([]);
    useLayoutEffect(() => {
        const loop = horizontalLoop(skillsRefs.current, {
            repeat: -1,
            paused: false,
            speed: 2,
            paddingRight: '60px'
        })
    }, [skillsRefs])

    const timeline = gsap.timeline();
    useLayoutEffect(() => {
        timeline.to(skillTitle.current, {
            scrollTrigger: {
                trigger: skillContainer.current,
                start: 'top center',
                end: 'top center',
                scrub: 2,
            },
            y: 0,
            duration: 1,
        })
        timeline.to(skilLSubtitle.current, {
            scrollTrigger: {
                trigger: skillContainer.current,
                start: 'top center',
                end: 'top center',
                scrub: 3,
            },
            y: 0,
            duration: 1,
        })
        timeline.to(skillCarousel.current, {
            scrollTrigger: {
                trigger: skillContainer.current,
                start: 'top center',
                end: 'top center',
                scrub: 3,
            },
            y: 0,
            duration: 1,
        });
    }, [skillTitle, skillCarousel, skilLSubtitle, skillContainer]);


    return (
        <>
            <div className="skills-header"></div>
            <div className="skills-main-container" ref={skillContainer}>
                <div className="skills-content">
                    <h2 className="skills-content__h2">
                        <span ref={skillTitle}>{t('skills.title')}</span>
                    </h2>
                    <h3 className="skills-content__h3">
                        <span ref={skilLSubtitle}>{t('skills.subtitle')}</span>
                    </h3>
                    <div className="skill-carousel-main-container">
                        <div className="skill-carousel" ref={skillCarousel}>
                            <div className="skills-container">
                                <div className="skills-container__item" ref={el => skillsRefs.current[0] = el}>
                                    <Icon
                                        className="skills-container__item-icon"
                                        icon="simple-icons:html5"
                                    />
                                    <p className="skills-container__item-name">HTML</p>
                                </div>
                                <div className="skills-container__item" ref={el => skillsRefs.current[1] = el}>
                                    <Icon
                                        className="skills-container__item-icon"
                                        icon="simple-icons:css3"
                                    />
                                    <p className="skills-container__item-name">CSS</p>
                                </div>
                                <div className="skills-container__item" ref={el => skillsRefs.current[2] = el}>
                                    <Icon
                                        className="skills-container__item-icon"
                                        icon="simple-icons:javascript"
                                    />
                                    <p className="skills-container__item-name">
                                        JavaScript
                                    </p>
                                </div>
                                <div className="skills-container__item" ref={el => skillsRefs.current[3] = el}>
                                    <Icon
                                        className="skills-container__item-icon"
                                        icon="simple-icons:react"
                                    />
                                    <p className="skills-container__item-name">React</p>
                                </div>
                                <div className="skills-container__item" ref={el => skillsRefs.current[4] = el}>
                                    <Icon
                                        className="skills-container__item-icon"
                                        icon="simple-icons:react"
                                    />
                                    <p className="skills-container__item-name">
                                        React Native
                                    </p>
                                </div>
                                <div className="skills-container__item" ref={el => skillsRefs.current[5] = el}>
                                    <Icon
                                        className="skills-container__item-icon"
                                        icon="simple-icons:firebase"
                                    />
                                    <p className="skills-container__item-name">Firebase</p>
                                </div>
                                <div className="skills-container__item" ref={el => skillsRefs.current[6] = el}>
                                    <Icon
                                        className="skills-container__item-icon"
                                        icon="simple-icons:arduino"
                                    />
                                    <p className="skills-container__item-name">Arduino</p>
                                </div>
                                <div className="skills-container__item" ref={el => skillsRefs.current[7] = el}>
                                    <Icon
                                        className="skills-container__item-icon"
                                        icon="simple-icons:python"
                                    />
                                    <p className="skills-container__item-name">Python</p>
                                </div>
                                <div className="skills-container__item" ref={el => skillsRefs.current[8] = el}>
                                    <Icon
                                        className="skills-container__item-icon"
                                        icon="simple-icons:git"
                                    />
                                    <p className="skills-container__item-name">Git</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="skills-bottom-container">
                        <div className="ordinary-skills">
                            <h3 className="h3">{t('skills.h3')}</h3>
                            <p className="p">
                                Figma, Linux, Windows, Adobe Illustrator, Adobe Photoshop, Adobe Premier, After Effects.
                            </p>
                            <a className="button light">{t('skills.btn-text')}</a>
                        </div>
                        <div className="quote-container">
                            <Icon className="icon" icon="radix-icons:quote" />
                            <p className="quote-container__quote">
                                "{t('skills.quote')}"
                            </p>
                            <p className="quote-container__title">
                                {t('skills.quote-title')}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Skills;
