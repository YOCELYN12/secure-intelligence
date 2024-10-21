import React, { useState } from 'react';
import { Patch } from '../Fetch/Fetch';

const ModalEditarTicket = ({ ticket, onClose }) => {
    const [nombre, setNombre] = useState(ticket.Nombre);
    const [descripcion, setDescripcion] = useState(ticket.Descripcion);

    // console.log(ticket)

    const editarTicket = async () => {
        const updatedTicket = {
            Nombre: nombre,
            Descripcion: descripcion
        };
        const response = await Patch('/UpdateTicket/', updatedTicket,ticket.ID_Tickets);
        console.log(response);
        onClose(); 
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <h2>Editar Ticket</h2>
                <form onSubmit={(e) => { e.preventDefault(); editarTicket(); }}>
                    
                    <div>
                        <label>Nombre:</label>
                        <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                    </div>
                    <div>
                        <label>Descripción:</label>
                        <textarea value={descripcion} onChange={(e) => setDescripcion(e.target.value)}></textarea>
                    </div>
                    <button type="submit">Enviar</button>
                    <button type="button" onClick={onClose}>Cerrar</button>
                </form>
            </div>
        </div>
    );
};

export default ModalEditarTicket;
