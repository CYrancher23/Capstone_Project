import React, { Component } from 'react';
import "./Hay.scss";
import hayBale from '../../images/haybale.jpg';
import baling from '../../images/tractor_baling.jpg';
import ModalLivestock from "../../components/ModalLivestock/ModalLivestock";

export default class Hay extends Component {

    state={
        
        showModal: false,
        selected: null,
        
    }

    render() {
        return (
            <div className="hay--margin">
               
                <div className="hay">
                    <h1 className="hay__title--page">Hay Services</h1>
                  
                    <div>
                        <p className="hay__text">Hay is one of the most vital and versatile resource for any farmer or rancher. Not just for food for livestock but also for animal bedding, and pen hygiene.</p>
                    </div>
                </div>
                <div className="hay__services">
                    <div className="hay__custom">
                        <div>
                            <img className="hay__img" alt="tractor baling" src={baling}/>
                        </div>
                        <div className="hay__container">
                            <h1 className="hay__title">Custom baling</h1>
                            <p className="hay__text">We can provide custom round baling services for up to, 50 acres.</p>
                            
                        </div>
                        <div className="hay__container--button">
                            <button className="hay__button" onClick={() => this.setState({showModal: true, selected: "Custom cutting"})}>INQUIRE</button>
                        </div>
                    </div>
                    <div className="hay__sale">
                        <div>
                            <img className="hay__img" alt="hay bale" src={hayBale}/>
                        </div>
                        <div className="hay__container">
                            <h1 className="hay__title">Round bales for sale</h1>
                            <p className="hay__text">Unfortunately we do not have any bales for sale at this time.</p>
                            
                        </div>
                        <div className="hay__container--button">
                            <button className="hay__button" onClick={() => this.setState({showModal: true, selected: "Hay for sale"})}>INQUIRE</button>
                        </div>
                    </div>
                </div>
                <ModalLivestock
                 show={this.state.showModal}
                 onHide={() => this.setState({showModal: false})}
                 selected={this.state.selected}
             />
            </div>
        )
    }
}
