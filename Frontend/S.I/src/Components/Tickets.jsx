import React from 'react';
import "../Styles/Tickets.css";


const Tickets = ({ Nombre, Apellido, Correo, ServicioSeleccionado, Numero_de_telefono, Empresa, Descripcion, Eliminar, onEdit, cerrarTicket}) => {

    return (
        <div>

            <div className='cont-cart-ticket'>

                <div className='card-ticket'>

                    <div className='cont-Hijo-ticket' >
                        <p> Nombre: {Nombre}</p>
                        <p> Apellido: {Apellido}</p>
                    </div>


                    <div className='cont-Hijo-ticket'>
                        <p> Correo: {Correo}</p>
                        <p> Servicio: {ServicioSeleccionado}</p>
                    </div>



                    <div className='cont-Hijo-ticket' >
                        <p> Telefono: {Numero_de_telefono}</p>
                        <p> Empresa:{Empresa}</p>
                    </div>

                    <p> Descripcion: {Descripcion}</p>


                    <div >
                        <button className='btn-tickets' onClick={Eliminar}>🗑️</button>
                        <button className='btn-tickets' onClick={onEdit}>✏️</button>
                        <button className='btn-tickets'  onClick={cerrarTicket}>❌</button>

                    </div>

    
                </div>

            </div>






        </div>
    );
};

export default Tickets;
