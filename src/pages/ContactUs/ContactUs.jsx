import './ContactUs.scss'
import React from 'react';
import Form from "../../components/Form/Form"
import horses from "../../images/horses.JPG"

function ContactUs() {
 
  return (
    <div className="contact">
      <div>
        <h1 className="contact__title">Contact Us</h1>
      </div>
      <div className="contact__container">
        <div className="contact__container--left">
          <div>
            <img className="contact__img" alt="scenic" src={horses}/>
          </div>
          <div className="contact__container--text">
            <p className="contact__text">If you have any questions or would like to just reach out, please send us an email. We would love to here from you!</p>
          </div>
        </div>
        <div className="contact__form">
          <Form/>
        </div>
      </div>
    </div>
  );
}


export default ContactUs