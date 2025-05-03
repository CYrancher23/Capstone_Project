import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import {Modal} from 'react-bootstrap';
import "./ModalLivestock.scss";

function ModalLivestock(props) {

    const [state, handleSubmit] = useForm("mqkgoyoq");
  if (state.succeeded) {
      return ;
  }

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          {/* <Modal.Title id="contained-modal-title-vcenter">
            {props.selected}
          </Modal.Title> */}
        </Modal.Header>
        <Modal.Body>
          <div className="modal1">
            <form  onSubmit={handleSubmit}>
                <div className="modal1__align">
                    <div className="modal1__div--info">
                    <label>
                        <h1 className="modal1__labels">Name</h1>
                    </label>
                    <input
                        className="modal1__box--regular"
                        name="name"
                    />
                    <ValidationError 
                        prefix="name" 
                        field="name"
                        errors={state.errors}
                    />
                    <label htmlFor="email">
                        <h1 className="modal1__labels">Email Address</h1>
                    </label>
                    <input
                        className="modal1__box--regular"
                        type="email" 
                        name="email"
                    />
                    <ValidationError 
                        prefix="Email" 
                        field="email"
                        errors={state.errors}
                    />
                    </div>
                    <div className="modal1__div--info">
                    <label>
                        <h1 className="modal1__labels">Phone Number</h1>
                    </label>
                    <input
                        className="modal1__box--regular" 
                        name="phoneNumber"/>
                    <ValidationError 
                        prefix="PhoneNumber" 
                        field="phoneNumber"
                        errors={state.errors}
                    />
                    <label>
                        <h1 className="modal1__labels">Subject</h1>
                        
                    </label>
                    <textarea
                        id="subject" 
                        name="subject"
                        type="text"
                        value={`Howdy! I would like to speak to you about, ${props.selected}.`}
                        readOnly
                        rows= "2"
                        cols="20"
                        />

                    
                    <ValidationError 
                        prefix="Subject" 
                        field="subject"
                        errors={state.errors}
                    />
                    </div>
                </div>
                    <div className="modal1__div--message">
                    <label>
                        <h1 className="modal1__labels">Message</h1>
                    </label>
                    <textarea
                        className="modal1__box--message"
                        name="message"
                    />
                    <ValidationError 
                        prefix="Message" 
                        field="message"
                        errors={state.errors}
                    />
                    <button className="modal1__button" type="submit" disabled={state.submitting}>
                        Send
                    </button>
                    <button className="modal1__button" type="button" onClick={props.onHide}>
                        Close
                    </button>
                    </div>
        </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    );
  }

  export default ModalLivestock