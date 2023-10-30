import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

interface DeleteConfirmProps {
    message: string
    onConfirm: () => void
}


const ScannerConfirmDestory = ({ message, onConfirm }: DeleteConfirmProps) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleConfirm = () => {
        handleClose();
        onConfirm();
    }

    return (
        <>
            <button
                onClick={handleShow}
                className="icon-badge trash">
                <FontAwesomeIcon icon={faTrashAlt} />
            </button>
            <Modal
                show={show}
                onHide={handleClose}
                keyboard={false}
                centered
                fullscreen
                className={`mc-modal entity-delete-modal`}>
                <Modal.Body className="modal-content">
                    <p>{message}</p>
                    <br />
                    <div>
                        <button type="button" onClick={handleConfirm} className="mc-btn btn-blue">Yes</button>
                        <button type="button" onClick={handleClose} className="mc-btn">Cancel</button>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default ScannerConfirmDestory;