import React from 'react';
import {Link} from "react-router-dom";
import cattle from "../../images/cows_1.jpg";
import cutting from "../../images/Equipment.JPG";
import hay from "../../images/haybale.jpg";
import "./Home.scss"
import Hero from "../../components/Hero/Hero";


function Home() {
    return (
        <div id="background_img">
            <div>
                <Hero/>
            </div>
            <div className="home">
                <div className="home__card">
                    <img className="home__img" alt="cattle" src={cattle}/>
                    <div className="home__info">
                        <h1 className="home__title">CATTLE</h1>
                        <p className="home__text">Our cattle are grassfed, and grain finished.</p>
                        <div className="home__container-button">
                        <Link className="home__link" to="/livestock"><button className="home__button">TAKE A LOOK</button></Link>
                        </div>
                    </div>
                </div>
                <div className="home__card">
                    <img className="home__img" alt="hay cutteing" src={cutting}/>
                    <div className="home__info">
                        <h1 className="home__title">HAY CUTTING </h1>
                        <p className="home__text">We offer custom cut and bailing for up to 50 acres.</p>
                        <div className="home__container-button">
                            <Link className="home__link" to="/hay"><button className="home__button">TAKE A LOOK</button></Link>
                        </div>
                    </div>
                </div>
                <div className="home__card">
                    <img className="home__img" alt="hay" src={hay}/>
                    <div className="home__info">
                        <h1 className="home__title">HAY FOR SALE</h1>
                        <p className="home__text">Our hay is all natural costal Bermuda round bales.</p>
                        <div className="home__container-button">
                        <Link className="home__link" to="hay"><button className="home__button">TAKE A LOOK</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Home