import React, { Component } from 'react';
import "./Livestock.scss";
import ModalLivestock from "../../components/ModalLivestock/ModalLivestock";
import ModalImage from "../../components/ModalImage/ModalImage"
import livestock from '../../data/livestock.json'

class Livestock extends Component {

    state={
        livestock:[],
        showModal: false,
        selected: null,
        showModal2: false,
        // selected2: null
    }



    render() {
        console.log(livestock)
        return (
            <div className="livestock">
                <div>
                    <h1 className="livestock__title">Livestock</h1>
                </div>
                <div>
                    <p className="livestock__description">All cattle have been Ivomec'd, and raised on hay, and grain finished.</p>
                </div>
                <div className="livestock__alignment">
                    {livestock?.map((data)=>{
                        return(
                        
                                <div  key={data.id} className="livestock__container">
                                    <div>
                                    
                                        <img className="livestock__img" alt="cow" src={data.image}
                                        onClick={() => this.setState({showModal2: true, selected: data.image})}/>
                                    </div>
                                    <div>
                                        <h1 className="livestock__name">{data.name}</h1>
                                        <p className="livestock__text"><span className="livestock__text--span">Born:</span> {data.birthdate}</p>
                                        <p className="livestock__text"><span className="livestock__text--span">Sex:</span> {data.sex}</p>
                                        <p className="livestock__text"><span className="livestock__text--span">Breed:</span> {data.breed}</p>
                                        <p className="livestock__text"><span className="livestock__text--span">Availability: </span>{data.availability}</p>
                                        <div className="livestock__container--button">
                                          <button className="livestock__button" onClick={() => this.setState({showModal: true, selected: data.name})}>INQUIRE</button>
                                        </div>
                                    </div>
                                </div>
                        
                    )
                })} 
                
            </div>
            <ModalLivestock
                show={this.state.showModal}
                onHide={() => this.setState({showModal: false})}
                selected={this.state.selected}
            />
            <ModalImage
                show={this.state.showModal2}
                onClick={() => this.setState({showModal2: false})}
                selected={this.state.selected}
            />
             
            </div>
        )
    }
}


export default Livestock