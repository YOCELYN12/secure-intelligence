import React, { useState } from 'react';
import { Patch } from '../Fetch/Fetch';
import "../Styles/ModalTicket.css"

const ModalEditarTicket = ({ ticket, onClose }) => {
    // Estados para almacenar los valores de entrada
    const [nombre, setNombre] = useState(ticket.Nombre);
    const [descripcion, setDescripcion] = useState(ticket.Descripcion);

    
     // Función para editar el ticket
    const editarTicket = async () => {
        // Crea un objeto con los datos actualizados
        const updatedTicket = {
            Nombre: nombre,
            Descripcion: descripcion
        };
        // Realiza una solicitud PATCH para actualizar el ticket
        const response = await Patch('/UpdateTicket/', updatedTicket, ticket.ID_Tickets);
        // Cierra el modal después de la actualización
        onClose();
    };

    return (
        <div className="modal"> {/* Contenedor del modal */}
            <div className="modal-content"> 
                <br />
                <h2 className='h2'>Editar Ticket</h2>  {/* Título del modal */}
                <br />
                <br />
                <form onSubmit={(e) => { e.preventDefault(); editarTicket(); }}> {/* Maneja el envío del formulario */}

                    <div >
                        <label>Nombre:</label>
                        <input className='modal-int'  type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />   {/* Actualiza el estado al cambiar el valor */}
                        
                    </div>
                    <br />
                    <br />
                    <div>
                        <label>Descripción:</label>
                        <textarea className='modal-int' value={descripcion} onChange={(e) => setDescripcion(e.target.value)}></textarea>
                    </div>

                    <div className='btn-modal'>
                        <button className='enviar-btn' type="submit">Enviar</button> {/* Botón para enviar el formulario */}
                        <button className='enviar-btn' type="button" onClick={onClose}>Cerrar</button> {/* Botón para cerrar el modal */}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ModalEditarTicket;
