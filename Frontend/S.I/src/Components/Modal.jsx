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
                        <p>En Secure Intelligence, combinamos experiencia, innovación y pasión por la ciberseguridad. Nuestro equipo de expertos está dedicado a proteger tu información y garantizar la continuidad de tu negocio. Ofrecemos soluciones personalizadas y soporte 24/7, adaptándonos a tus necesidades específicas. Con nosotros, obtienes no solo protección, sino también tranquilidad. ¡Confía en Secure Intelligence y fortalece la seguridad de tu empresa!</p>
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
