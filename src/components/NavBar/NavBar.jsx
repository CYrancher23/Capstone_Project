import React from 'react'
import logo from "../../images/cy-Logo.png"
import {slide as Menu} from "react-burger-menu"
import {Link} from "react-router-dom"
import "./NavBar.scss"

function NavBar () {

        return (
            <div>
                <div className="nav">
                    <div className="nav__name">
                        <Link id="background" to="/"><img className="nav__logo" alt="logo" src={logo} /></Link>   
                    </div>
                    <div className="nav__pages">
                        <div className="nav__container">
                            <Link to="/"><p className="nav__title">HOME</p></Link>
                        </div>
                        <div className="nav__container">
                            <Link to="/aboutUs"><p className="nav__title">ABOUT US</p></Link>
                        </div>
                        <div className="nav__container">
                            <Link to="/livestock"><p className="nav__title">AVAILABLE LIVESTOCK</p></Link>
                        </div>
                        <div className="nav__container">
                            <Link to="/hay"><p className="nav__title">HAY SERVICES</p></Link>
                        </div>
                        <div className="nav__container">
                            <Link to="/contactUs"><p className="nav__title">CONTACT US</p></Link>
                        </div>
                        <div className="nav__container">
                            <Link to="/affiliates"><p className="nav__title">AFFILIATES</p></Link>
                        </div>
                   </div>
                    <div className="nav__hamburger">
                        <Menu right id="hamburger">
                            <Link to="/livestock"><p className="nav__text">Livestock</p></Link>
                            <Link to="/hay"><p className="nav__text">Hay</p></Link>
                            <Link to="/aboutUs"><p className="nav__text">About Us</p></Link>
                            <Link to="/contactUs"><p className="nav__text">Contact Us</p></Link>
                            <Link to="/affiliates"><p className="nav__text">Affiliates</p></Link>
                        </Menu>
                    </div>
                </div>
            </div>
        )
    }



export default NavBar