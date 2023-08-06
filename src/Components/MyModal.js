import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function MyModal(props) {
  const [show, setShow] = useState(false);
  useEffect(() => {                       //By using this Hook, we tell React the component needs to do something after render. 
    setShow(props.show);
  }, [props.show])

  return (
    

      <Modal
        show={show}
        onHide={props.handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {props.content}
        </Modal.Body>
        <Modal.Footer>
          {/* <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button> */}
          <Button variant="primary"onClick={props.handleClose}>OK</Button>
        </Modal.Footer>
      </Modal>
  );
}

export default MyModal;