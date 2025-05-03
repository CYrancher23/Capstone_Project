import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import "./Form.scss";


function Form(){

    const [state, handleSubmit] = useForm("mqkgoyoq");
  if (state.succeeded) {
      return <p>Thanks for reaching out!</p>;
  }

    return(
    
    <form className="form" onSubmit={handleSubmit}>
      <div className="form__align">
        <div className="form__div--info">
          <label>
            <h1 className="form__labels">Name</h1>
          </label>
          <input
            className="form__box--regular"
            name="name"
          />
          <ValidationError 
            prefix="name" 
            field="name"
            errors={state.errors}
          />
          <label htmlFor="email">
            <h1 className="form__labels">Email Address</h1>
          </label>
          <input
            className="form__box--regular"
            type="email" 
            name="email"
          />
          <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
          />
        </div>
        <div className="form__div--info">
          <label>
            <h1 className="form__labels">Phone Number</h1>
          </label>
          <input
            className="form__box--regular" 
            name="phoneNumber"/>
          <ValidationError 
            prefix="PhoneNumber" 
            field="phoneNumber"
            errors={state.errors}
          />
          <label>
            <h1 className="form__labels">Subject</h1>
          </label>
          <input
            className="form__box--regular" 
            name="subject"/>
          <ValidationError 
            prefix="Subject" 
            field="subject"
            errors={state.errors}
          />
        </div>
      </div>
        <div className="form__div--message">
          <label>
            <h1 className="form__labels">Message</h1>
          </label>
          <textarea
            className="form__box--message"
            name="message"
          />
          <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
          />
          <button className="form__button" type="submit" disabled={state.submitting}>
            Send
          </button>
        </div>
      </form>
    )
}

export default Form