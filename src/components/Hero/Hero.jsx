import React from 'react';
import logo from "../../images/cy-Logo.png";
import "./Hero.scss"

function Hero() {
    return (
        <div>
            <div className="hero">
                <img className="hero__logo" alt="logo" src={logo}/>
            </div>
            <div>
                <p className="hero__text">Family owned and operated since 1995. Providing quality cattle and hay.</p>
            </div>
        </div>
    )
}

export default Hero