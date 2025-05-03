import './Affiliates.scss'
import React from 'react';
import logo from "../../images/cy-Logo.png";
import knives from "../../images/wendling_knives.jpg";


function Affiliates() {
 
  return (
    <div className="links">
      <div>
        <h1 className="links__title">Affiliates and Links</h1>
        
      </div>
        <div className='links__container'>
          <div className='links__card'>
            <img className='links__img' alt="logo" src= {logo}/>
            <h2 className='links__title--card'>Check us out on Facebook!</h2>
            <p className='links__text'>Follow us on Facebook to get the latest in sales and offers!</p>
            <div className='links__container-button'>
              <button className='links__button' onClick={function handleClick(){window.open("https://www.facebook.com/people/CY-Ranch/61566369394708/")}}>Click here</button>
            </div>
          </div>
          <div className='links__card'>
          <img className='links__img' alt="wendling kinves" src= {knives}/>
            <h2 className='links__title--card'>Wendling Knives and Leather</h2>
            <p className='links__text'>Hand forged knives and hand made leather goods. Request a custom product or check out what is available!</p>
            <div className='links__container-button'>
              <button className='links__button' onClick={function handleClick(){window.open("https://www.facebook.com/WendlingKnives")}}>Click here</button>
            </div>
          </div>
        </div>
      </div>
    
  );
}


export default Affiliates