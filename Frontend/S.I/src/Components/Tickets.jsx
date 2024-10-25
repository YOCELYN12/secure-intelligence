import React from 'react';
import "../Styles/Tickets.css";


const Tickets = ({ Nombre, Apellido, Correo, ServicioSeleccionado, Numero_de_telefono, Empresa, Descripcion, Eliminar, onEdit }) => {
    return (
        <div className='cont-Padre-ticket'>
            
            <div className='cont-Hijo-ticket'>
                <p>Nombre: {Nombre}</p>
                <p>Apellido: {Apellido}</p>
                <p>Correo: {Correo}</p>
        
            </div>
            <div className='cont-Hijo-ticket'>
              
                <p>Servicio: {ServicioSeleccionado}</p>
                <p>Telefono: {Numero_de_telefono}</p>
                <p>Empresa: {Empresa}</p>
            </div>
            
            <div className='cont-ticket-descripcion'>
                <p>Descripcion: {Descripcion}</p>
            </div>

            <div className='btn-tickets'>
                <button style={{border:"none", backgroundColor:"transparent"}} onClick={Eliminar}>🗑️</button>
                
                <button style={{border:"none", backgroundColor:"transparent"}} onClick={onEdit}>✏️</button>
               
            </div>

            <div className='btn-tickets'>
                
                <button style={{border:"none", backgroundColor:"transparent"}}> ✅</button>
                
                <button style={{border:"none", backgroundColor:"transparent"}} >❌</button>
            </div>
        </div>
    );
};

export default Tickets;
