import Modal from "react-bootstrap/Modal";
import Button from 'react-bootstrap/Button';

type MyModalProps = {
    title: string;
    children?: React.ReactElement;
    open: boolean;
    onClose: () => void;
}

export const MyModal = ({title, children, open, onClose}: MyModalProps) => {
  return (
    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={open}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {children}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onClose}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};
