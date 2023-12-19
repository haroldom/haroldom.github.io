import React, { useEffect, useLayoutEffect } from "react";
import hand from "imgs/waving.png";
import "stylesheets/About.css";
import { Icon } from "@iconify/react";
import { useRef } from "react";
import SplitType from "split-type";
import gsap from "gsap";
import { useTranslation } from "react-i18next";
import { useState } from "react";

import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);


let splitTypesInstances = []

const About = () => {
    const { t } = useTranslation()
    const splitTypes = useRef([])
    const aboutContentContainer = useRef(null)

    useLayoutEffect(() => {
        splitTypes.current.forEach((p, i) => {
            const text = new SplitType(p, {
                types: 'chars, words'
            })
            splitTypesInstances[i] = text
        })
    }, [splitTypes])


    useEffect(() => {
        // Variables for use them to animate the text in groups
        const chars = []
        const words = []

        splitTypesInstances.forEach((splitTypeInstance, i) => {
            splitTypeInstance.revert()
            if (!splitTypeInstance.isSplit) {
                if (i === 0) {
                    splitTypeInstance.elements[0].innerText = t('about.p-1')
                } else {
                    splitTypeInstance.elements[0].innerText = t('about.p-2')
                }
                splitTypeInstance.split({ types: 'chars, words' })
                splitTypeInstance.chars.forEach(char => {
                    chars.push(char)
                });
                splitTypeInstance.words.forEach(word => {
                    words.push(word)
                })
            }
        })


        // GSAP ANIMATION TO TEXT ABOUT REVEAL
        var tl = gsap.timeline()
        tl.to(words, {
            scrollTrigger: {
                trigger: aboutContentContainer.current,
                start: 'top 90%',
                end: 'top 70%',
                scrub: true,
            },
            y: 0,
            stagger: 0.1,
            ease: 'power1.out',
            duration: .1,
            opacity: 1,

        })

        gsap.from(chars, {
            scrollTrigger: {
                trigger: aboutContentContainer.current,
                start: 'top 80%',
                end: 'top 20%',
                scrub: true,
                markers: false,
            },
            color: "#727272",
            stagger: 0.2,
        })
    }, [t, aboutContentContainer])

    return (
        <div className="about-main-container" id="about">
            <div className="about">
                <p className="about__p--hello">
                    {t("about.subtitle")}{" "}
                    <img className="about__p-img" src={hand} alt="" />
                </p>
                <h2 className="about__h2">{t("about.title")}</h2>
                <div className="about__content-container">
                    <div className="about__content">
                        <div className="about__p-container" ref={aboutContentContainer}>
                            <p className="about__p" ref={(el) => splitTypes.current[0] = el}>{t("about.p-1")}</p>
                            <p className="about__p" ref={(el) => splitTypes.current[1] = el}>{t("about.p-2")}</p>
                        </div>
                        <div className="about-text-secondary">
                            <p className="about__p-alternative">{t("about.p-3")}</p>
                            <p className="about__p-alternative-2">{t("about.p-4")}</p>
                        </div>
                        <div className="social-links">

                            <a href="https://www.github.com/haroldom" target="_blank"><Icon className="about__icon" icon="bi:github" /></a>
                            <a href="https://www.twitter.com/sebaasom" target="_blank"><Icon className="about__icon" icon="bi:twitter-x" /></a>
                            <a href="https://www.linkedin.com/in/haroldom" target="_blank"><Icon className="about__icon" icon="bi:linkedin" /></a>
                            <a href="https://www.instagram.com/sebaasom" target="_blank"><Icon className="about__icon" icon="bi:instagram" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
