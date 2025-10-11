import React, { useLayoutEffect, useRef } from "react";
import "stylesheets/Welcome.css";
import profile from "imgs/profile.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { horizontalLoop } from "hooks/horizontalLoop";
import { useTranslation } from "react-i18next";

gsap.registerPlugin(ScrollTrigger);

const Welcome = () => {
    const { t } = useTranslation();

    const profileImgRef = useRef(null);
    const rolesRef = useRef(null);
    const buttonRef = useRef(null);
    const titleWelcome = useRef([]);

    useLayoutEffect(() => {
        const tl = gsap.timeline();

        gsap.set(titleWelcome.current, { opacity: 0, y: -50 });

        horizontalLoop(titleWelcome.current, {
            repeat: -1,
            paused: false,
            speed: 2,
            paddingRight: "100px",
        });

        tl.fromTo(
            profileImgRef.current,
            { opacity: 0.8, scale: 0.8, y: 30 },
            { opacity: 1, scale: 1, y: 0, duration: 1, ease: "power3.out" }
        )
            .fromTo(
                titleWelcome.current,
                { opacity: 0, y: -50 },
                { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" },
                "-=0.1"
            )
            .fromTo(
                rolesRef.current,
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
                "-=1.2"
            )
            .fromTo(
                buttonRef.current,
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
                "-=1.0"
            );
    }, [titleWelcome]);

    return (
        <div className="welcome" id="home">
            <div className="title-container">
                <img
                    ref={profileImgRef}
                    className="welcome__img--title-container"
                    src={profile}
                    alt=""
                />
                <div className="title-scroll-container">
                    <h1
                        className="welcome__h1--title-container"
                        ref={(el) => (titleWelcome.current[0] = el)}
                    >
                        HAROLD ORMEÑO
                    </h1>
                    <h1
                        className="welcome__h1--title-container"
                        ref={(el) => (titleWelcome.current[1] = el)}
                    >
                        HAROLD ORMEÑO
                    </h1>
                </div>
            </div>
            <div className="title-bottom">
                <div ref={rolesRef} className="roles">
                    <p className="roles__p">{t("welcome.rol-1")}</p>
                    <span className="roles__span">/</span>
                    <p className="roles__p">{t("welcome.rol-2")}</p>
                </div>
                <div ref={buttonRef} className="button-container">
                    <a
                        href="mailto:h4roldsmail@gmail.com?subject=Hello Harold!"
                        className="button welcome__button"
                    >
                        {t("welcome.btn-1")}
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Welcome;
