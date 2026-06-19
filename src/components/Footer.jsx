import { Icon } from "@iconify/react";
import { t } from "i18next";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import 'stylesheets/Footer.css'
const Footer = () => {
    const { t } = useTranslation()
    const [isCopied, setIsCopied] = useState(false);

    const copyEmailToClipboard = () => {
        setIsCopied(true)
        setTimeout(()=>{
            setIsCopied(false)
        }, 2000)
        navigator.clipboard.writeText('h4roldsmail@gmail.com')
    }

    return (
        <div className="footer" id="contact">
            <div className="footer__title">
                <h2 className="footer__h2">{t('footer.title')}</h2>
                <Icon className="footer__icon" icon="vaadin:enter" />
            </div>
            <div className="footer__bottom">
                <div className="footer__bottom-left">
                    <p className="footer__p">{t('footer.p')}</p>
                    <ul className="footer__socialmedia">
                        <li>
                            <Icon icon="mdi:github" />
                            <a href="https://www.github.com/haroldom" target="_blank">Github</a>
                        </li>
                        <li>
                            <Icon icon="bi:twitter-x" />
                            <a href="https://www.twitter.com/sebaasom" target="_blank">Twitter</a>
                        </li>
                        <li>
                            <Icon icon="mdi:linkedin" />
                            <a href="https://www.linkedin.com/in/haroldom" target="_blank">Linkedin</a>
                        </li>
                        <li>
                            <Icon icon="mdi:instagram" />
                            <a href="https://www.instagram.com/sebaasom" target="__blank">Instagram</a>
                        </li>
                    </ul>
                </div>
                <div className="footer__bottom-right footer__email-container" onClick={copyEmailToClipboard}>
                    <span  className={isCopied ? 'active' : ''}>Copied!</span>
                    <p>h4roldsmail@gmail.com</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
