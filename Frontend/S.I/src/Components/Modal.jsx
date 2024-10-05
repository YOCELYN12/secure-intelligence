import React from 'react';
import "../Styles/Modal.css";

function Modal({ show, onClose }) {
    return (
        <div className={`modal fade ${show ? 'show' : 'hide'}`} style={{ display: show ? 'block' : 'none', }} tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden={!show}>
            <div className="modal-dialog" >
                <div className="modal-content" >
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button
                            type="button"
                            className="btn-close"
                            onClick={onClose}
                            aria-label="Close"
                        />
                    </div>
                    <div className="modal-body">
                        <p>Modal body text goes here.</p>
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={onClose}
                        >
                            Close
                        </button>
                      
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;
