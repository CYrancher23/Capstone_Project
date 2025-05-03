import React from 'react';
import  "./ModalImage.scss";
import {Modal} from 'react-bootstrap';

function ModalImage(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          {/* <Modal.Title id="contained-modal-title-vcenter">
          {props.name}
          </Modal.Title> */}
        </Modal.Header>
        <Modal.Body>
         <img className="modalImg" alt="cow" src={props.selected}/>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    );
  }

  export default ModalImage