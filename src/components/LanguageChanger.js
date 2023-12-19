import React, { useState } from 'react'
import { Icon } from "@iconify/react";
import { useTranslation } from 'react-i18next';

const LanguageChanger = () => {
    const { t, i18n } = useTranslation()


    const [showDropMenu, setShowDropMenu] = useState(false);
    const [languageSelected, setLanguageSelected] = useState('English');
    const handleDropDownClick = () => {
        setShowDropMenu(!showDropMenu)
    }

    const handleLanguageChange = (e) => {
        i18n.changeLanguage(e.target.dataset.language)
        setLanguageSelected(e.target.innerText)
        setShowDropMenu(!showDropMenu)
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
                            <li onClick={handleLanguageChange} data-language="es" className="option">Spanish</li>
                            <li onClick={handleLanguageChange} data-language="en" className="option active">English</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LanguageChanger