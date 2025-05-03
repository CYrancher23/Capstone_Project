import React from 'react';
import {Link} from "react-router-dom";
import "./Employee.scss"



function Employee() {
    return (
        <div id="background_img">
            <div className="employee">
                <div className="employee__card">
                    <div className="employee__info">
                        <h1 className="employee__title">Cow Prices</h1>
                        <p className="employee__text">Get cow prices by breed, and month. Price given is the per pound price.</p>
                        <div className="employee__container-button">
                        <Link className="employee__link" to="/employee/cow/prices"><button className="home__button">Get A Quote</button></Link>
                        </div>
                    </div>
                </div>
                <div className="employee__card">
                    <div className="employee__info">
                        <h1 className="employee__title">Hay Bale Prices </h1>
                        <p className="employee__text">Get price per bale by grass type and month.</p>
                        <div className="employee__container-button">
                            <Link className="employee__link" to="/employee/hay/prices"><button className="home__button">Get A Quote</button></Link>
                        </div>
                    </div>
                </div>
                <div className="employee__card">
                    <div className="employee__info">
                        <h1 className="employee__title">Meat Prices</h1>
                        <p className="employee__text">Get meat prices by the quarter, half cow, or whole cow.</p>
                        <div className="employee__container-button">
                        <Link className="employee__link" to="/employee/meat/prices"><button className="home__button">Get A Quote</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Employee