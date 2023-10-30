import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

interface DeleteConfirmProps {
    btnMsg?: string
    msg: string
    onConfirm: () => void
    mode: string
}


const DeleteConfirmation = (props: DeleteConfirmProps) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleConfirm = () => {
        handleClose();
        props.onConfirm();
    }

    return (
        <>
            <button 
                onClick={handleShow}
                className={`mc-btn ${props.mode === 'CARD' && 'btn-trash'}`}>
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
                    <p>{props.msg}</p>
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

export default DeleteConfirmation;