import React, { useLayoutEffect, useRef } from "react";
import "stylesheets/Welcome.css";
import profile from "imgs/profile.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { horizontalLoop } from "hooks/horizontalLoop";
import { useTranslation } from "react-i18next";


gsap.registerPlugin(ScrollTrigger);


const Welcome = () => {
    const { t } = useTranslation()


    const titleWelcome = useRef([])
    useLayoutEffect(() => {
        horizontalLoop(titleWelcome.current, {
            repeat: -1,
            paused: false,
            speed: 2,
            paddingRight: '100px'
        })
    }, [titleWelcome])


    return (
        <div className="welcome" id="home">
            <div className="title-container">
                <img
                    className="welcome__img--title-container"
                    src={profile}
                    alt=""
                />
                <div className="title-scroll-container">
                    <h1 className="welcome__h1--title-container" ref={(el) => (titleWelcome.current[0] = el)}>HAROLD ORMEÑO</h1>
                    <h1 className="welcome__h1--title-container" ref={(el) => (titleWelcome.current[1] = el)}>HAROLD ORMEÑO</h1>
                </div>
            </div>
            <div className="title-bottom">
                <div className="roles">
                    <p className="roles__p">{t("welcome.rol-1")}</p>
                    <span className="roles__span">/</span>
                    <p className="roles__p">{t("welcome.rol-2")}</p>
                </div>
                <div className="button-container">
                    <a href="mailto:h4roldsmail@gmail.com?subject=Hello Harold!" className="button welcome__button">{t("welcome.btn-1")}</a>
                </div>
            </div>
        </div>
    );
};

export default Welcome;
