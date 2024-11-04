import React from 'react';
import "../Styles/Tickets.css";


const Tickets = ({ Nombre, Apellido, Correo, ServicioSeleccionado, Numero_de_telefono, Empresa, Descripcion, Eliminar, onEdit, cerrarTicket}) => {

    return (
        <div>

            <div className='cont-cart-ticket'>

                <div className='card-ticket'>

                    <div className='cont-Hijo-ticket' >
                        <p> Nombre: {Nombre}</p> {/* Muestra el nombre del ticket */}
                        <p> Apellido: {Apellido}</p> {/* Muestra el apellido del ticket */}
                    </div>

                    <div className='cont-Hijo-ticket'>
                        <p> Correo: {Correo}</p> {/* Muestra el correo del ticket */}
                        <p> Servicio: {ServicioSeleccionado}</p> {/* Muestra el servicio seleccionado */}
                    </div>

                    <div className='cont-Hijo-ticket' >
                        <p> Telefono: {Numero_de_telefono}</p> {/* Muestra el número de teléfono */}
                        <p> Empresa:{Empresa}</p> {/* Muestra la empresa asociada */}
                    </div>

                    <p> Descripcion: {Descripcion}</p>  {/* Muestra la descripción del ticket */}

                    <div >

                        {/* Botón para eliminar el ticket */}
                        <button className='btn-tickets' onClick={Eliminar}>🗑️</button>
                        {/* Botón para editar el ticket */}
                        <button className='btn-tickets' onClick={onEdit}>✏️</button>
                        {/* Botón para cerrar el ticket */}
                        <button className='btn-tickets'  onClick={cerrarTicket}>❌</button>

                    </div>

    
                </div>

            </div>






        </div>
    );
};

export default Tickets;
