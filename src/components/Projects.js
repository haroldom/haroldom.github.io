import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import project1 from "imgs/project1.png";
import project2 from "imgs/project2.png";
import project3 from "imgs/project3.png";
import "stylesheets/Projects.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Icon } from "@iconify/react";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
    const imgContainer = useRef(null);
    const imagesRefs = useRef([]);
    const [windowHeight, setWindowHeight] = useState(window.innerHeight);
    const titlesRefs = useRef([]);
    const titleContainer = useRef(null);
    const buttonsRefs = useRef([]);

    useLayoutEffect(() => {
        titlesRefs.current.forEach((title, index) => {
            let chars = new SplitType(title.children[0]);
            gsap.from(chars.chars, {
                opacity: 0.3,
                y: "40%",
                stagger: 0.1,
                scrollTrigger: {
                    trigger: imagesRefs.current[index],
                    start: "top center",
                    end: "bottom bottom",
                    scrub: 1,
                },
            });
            gsap.fromTo(
                title,
                {
                    x: -100,
                },
                {
                    x: 0,
                    scrollTrigger: {
                        trigger: imagesRefs.current[index],
                        start: "top center",
                        end: "bottom bottom",
                        scrub: 1,
                    },
                }
            );
        });
    });

    // This animation is for the titles container
    useLayoutEffect(() => {
        const finalY = 0.9 * windowHeight * -4 - 132 * 4 - 150;
        const animation = gsap.fromTo(
            titlesRefs.current,
            {
                y: 0,
            },
            {
                y: finalY,
                ease: "none",
                scrollTrigger: {
                    trigger: imgContainer.current,
                    start: "top top",
                    end: "bottom bottom",
                    scrub: 1,
                },
            }
        );
        return () => {
            animation.kill();
        };
    }, [windowHeight]);

    // This animation is for the images
    useLayoutEffect(() => {
        const container = imgContainer.current;
        const finalY = 0.9 * windowHeight * -4 - 132 * 4 - 150;
        const animation = gsap.fromTo(
            imagesRefs.current,
            {
                y: 0,
            },
            {
                y: finalY,
                ease: "none",
                scrollTrigger: {
                    trigger: container,
                    start: "top top",
                    end: "bottom bottom",
                    scrub: 1,
                },
            }
        );
        return () => {
            animation.kill();
        };
    }, [windowHeight]);

    const handleResize = () => {
        setWindowHeight(window.innerHeight);
    };


    // This is the animation for the buttons-links projects
    useLayoutEffect(() => {
        buttonsRefs.current.forEach((button) => {
            button.addEventListener("mouseenter", () => {
                gsap.to(button.children[0], { scale: .7, duration: 0.3 });
                gsap.to(button.children[1], { scale: 1.1, duration: 0.3});
                gsap.to(button.children[2], { x: 15, opacity: 0, duration: 0.3});
                gsap.fromTo(button.children[3], {x:-15, opacity: 0}, { x: 0, opacity: 1, duration: 0.3});
            });
            button.addEventListener("mouseleave", () => {
                gsap.to(button.children[0], { scale: 1, duration: 0.3 });
                gsap.to(button.children[1], { scale: 0, duration: 0.3});
                gsap.to(button.children[2], { x: 0, opacity: 1, duration: 0.3});
                gsap.to(button.children[3], {x:-15, opacity: 0, duration: 0.3} );
            });
        });
    });

    window.addEventListener("resize", handleResize);

    return (
        <div className="projects_section" ref={imgContainer}>
            <div className="projects_carousel">
                <div className="projects_mask">
                    <div className="project_circle right"></div>
                    <div className="project_circle left"></div>
                </div>
                <div className="projects-images">
                    <img
                        ref={(el) => (imagesRefs.current[0] = el)}
                        src={project3}
                        alt=""
                        className="project__img"
                    />
                    <img
                        ref={(el) => (imagesRefs.current[1] = el)}
                        src={project3}
                        alt=""
                        className="project__img"
                    />
                    <img
                        ref={(el) => (imagesRefs.current[2] = el)}
                        src={project3}
                        alt=""
                        className="project__img"
                    />
                    <img
                        ref={(el) => (imagesRefs.current[3] = el)}
                        src={project3}
                        alt=""
                        className="project__img"
                    />
                    <img
                        ref={(el) => (imagesRefs.current[4] = el)}
                        src={project3}
                        alt=""
                        className="project__img"
                    />
                </div>
                <div
                    className="projects-titles"
                    ref={(el) => (titleContainer.current = el)}
                >
                    <div
                        className="project__title"
                        ref={(el) => (titlesRefs.current[0] = el)}
                    >
                        <h3 className="project__title-h3">Nam</h3>
                        <a
                            className="project__title-button"
                            ref={(el) => (buttonsRefs.current[0] = el)}
                            href="#"
                        >
                            <span className="button-normal"></span>
                            <span className="button-hover"></span>
                            <Icon
                                className="icon icon-normal"
                                icon="basil:arrow-right-solid"
                            />
                            <Icon
                                className="icon icon-hover"
                                icon="basil:arrow-right-solid"
                            />
                        </a>
                    </div>
                    <div
                        className="project__title"
                        ref={(el) => (titlesRefs.current[1] = el)}
                    >
                        <h3 className="project__title-h3">Nam</h3>
                        <a
                            className="project__title-button"
                            ref={(el) => (buttonsRefs.current[1] = el)}
                            href="#"
                        >
                            <span className="button-normal"></span>
                            <span className="button-hover"></span>
                            <Icon
                                className="icon icon-normal"
                                icon="basil:arrow-right-solid"
                            />
                            <Icon
                                className="icon icon-hover"
                                icon="basil:arrow-right-solid"
                            />
                        </a>
                    </div>
                    <div
                        className="project__title"
                        ref={(el) => (titlesRefs.current[2] = el)}
                    >
                        <h3 className="project__title-h3">Nam</h3>
                        <a
                            className="project__title-button"
                            ref={(el) => (buttonsRefs.current[2] = el)}
                            href="#"
                        >
                            <span className="button-normal"></span>
                            <span className="button-hover"></span>
                            <Icon
                                className="icon icon-normal"
                                icon="basil:arrow-right-solid"
                            />
                            <Icon
                                className="icon icon-hover"
                                icon="basil:arrow-right-solid"
                            />
                        </a>
                    </div>
                    <div
                        className="project__title"
                        ref={(el) => (titlesRefs.current[3] = el)}
                    >
                        <h3 className="project__title-h3">Nam</h3>
                        <a
                            className="project__title-button"
                            ref={(el) => (buttonsRefs.current[3] = el)}
                            href="#"
                        >
                            <span className="button-normal"></span>
                            <span className="button-hover"></span>
                            <Icon
                                className="icon icon-normal"
                                icon="basil:arrow-right-solid"
                            />
                            <Icon
                                className="icon icon-hover"
                                icon="basil:arrow-right-solid"
                            />
                        </a>
                    </div>
                    <div
                        className="project__title"
                        ref={(el) => (titlesRefs.current[4] = el)}
                    >
                        <h3 className="project__title-h3">Nam</h3>
                        <a
                            className="project__title-button"
                            ref={(el) => (buttonsRefs.current[4] = el)}
                            href="#"
                        >
                            <span className="button-normal"></span>
                            <span className="button-hover"></span>
                            <Icon
                                className="icon icon-normal"
                                icon="basil:arrow-right-solid"
                            />
                            <Icon
                                className="icon icon-hover"
                                icon="basil:arrow-right-solid"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
