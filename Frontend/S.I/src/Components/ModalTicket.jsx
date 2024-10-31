import React, { useState } from 'react';
import { Patch } from '../Fetch/Fetch';
import "../Styles/ModalTicket.css"

const ModalEditarTicket = ({ ticket, onClose }) => {
    const [nombre, setNombre] = useState(ticket.Nombre);
    const [descripcion, setDescripcion] = useState(ticket.Descripcion);

    // console.log(ticket)

    const editarTicket = async () => {
        const updatedTicket = {
            Nombre: nombre,
            Descripcion: descripcion
        };
        const response = await Patch('/UpdateTicket/', updatedTicket, ticket.ID_Tickets);
        console.log(response);
        onClose();
    };

    return (
        <div className="modal">
            <div className="modal-content"> 
                <br />
                <h2 className='h2'>Editar Ticket</h2> 
                <br />
                <br />
                <form onSubmit={(e) => { e.preventDefault(); editarTicket(); }}>

                    <div >
                        <label>Nombre:</label>
                        <input className='modal-int'  type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                    </div>
                    <br />
                    <br />
                    <div>
                        <label>Descripción:</label>
                        <textarea className='modal-int' value={descripcion} onChange={(e) => setDescripcion(e.target.value)}></textarea>
                    </div>

                    <div className='btn-modal'>
                        <button className='enviar-btn' type="submit">Enviar</button>
                        <button className='enviar-btn' type="button" onClick={onClose}>Cerrar</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ModalEditarTicket;
