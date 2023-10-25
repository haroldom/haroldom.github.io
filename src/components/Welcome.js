import React from "react";
import "stylesheets/Welcome.css";
import profile from "imgs/profile.png";

const Welcome = () => {
    return (
        <div className="welcome">
            <div className="title-container">
                <img
                    className="welcome__img--title-container"
                    src={profile}
                    alt=""
                />
                <h1 className="welcome__h1--title-container">HAROLD ORMEÑO</h1>
            </div>
            <div className="roles">
                <p className="roles__p">WEB-DESIGNER</p>
                <span className="roles__span">/</span>
                <p className="roles__p">FRONTEND DEVELOPER</p>
            </div>
            <div className="button-container">
                <button className="welcome__button">CONNECT WITH ME</button>
            </div>
        </div>
    );
};

export default Welcome;
