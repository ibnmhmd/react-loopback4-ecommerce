import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function ErrorModal(props) {
  return (
    <>
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header>
          <Modal.Title className = "text-center font-weight-bold text-uppercase">VALIDATION ERROR</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-danger font-weight-bold error is_t_center" >{props.errorMessage}</Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={props.handleClose}>
            Close
          </Button>      
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default ErrorModal;