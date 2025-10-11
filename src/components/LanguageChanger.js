import React, { useState, useEffect } from 'react'
import { Icon } from "@iconify/react";
import { useTranslation } from 'react-i18next';

const LanguageChanger = () => {
    const { t, i18n } = useTranslation()

    const getInitialLanguage = () => {
        const savedLanguage = localStorage.getItem('language');
        if (savedLanguage) {
            return savedLanguage === 'es' ? 'Spanish' : 'English';
        }
        return i18n.language === 'es' ? 'Spanish' : 'English';
    };

    const [showDropMenu, setShowDropMenu] = useState(false);
    const [languageSelected, setLanguageSelected] = useState(getInitialLanguage());

    useEffect(() => {
        const savedLanguage = localStorage.getItem('language');
        if (savedLanguage) {
            i18n.changeLanguage(savedLanguage);
            setLanguageSelected(savedLanguage === 'es' ? 'Spanish' : 'English');
        }
    }, [i18n]);

    const handleDropDownClick = () => {
        setShowDropMenu(!showDropMenu)
    }

    const handleLanguageChange = (e) => {
        const clickedElement = e.target.closest('li');
        const newLanguage = clickedElement.dataset.language;
        const newLanguageText = clickedElement.querySelector('span').innerText;

        i18n.changeLanguage(newLanguage);
        setLanguageSelected(newLanguageText);
        setShowDropMenu(false);

        localStorage.setItem('language', newLanguage);
    }

    return (
        <>
            <div className="language-menu-container">
                <div className="language-dropdown">
                    <div className="selection" onClick={handleDropDownClick}>
                        <Icon className="icon" icon='mdi:language' />
                        <p className="selected">{languageSelected}</p>
                        <div className={`caret ${showDropMenu ? 'active' : ''}`}></div>
                    </div>
                    <div className="menu-container">
                        <ul className={`menu ${showDropMenu ? 'active' : ''}`}>
                            <li
                                onClick={handleLanguageChange}
                                data-language="es"
                                className={`option ${languageSelected === 'Spanish' ? 'active' : ''}`}
                            >
                                <span>Spanish</span>
                                {languageSelected === 'Spanish' && <span className="dot-indicator"></span>}
                            </li>
                            <li
                                onClick={handleLanguageChange}
                                data-language="en"
                                className={`option ${languageSelected === 'English' ? 'active' : ''}`}
                            >
                                <span>English</span>
                                {languageSelected === 'English' && <span className="dot-indicator"></span>}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LanguageChanger