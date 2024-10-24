import React from 'react';
import "../Styles/Tickets.css";
import { FaCheckCircle } from "react-icons/fa";
import { TbHttpDelete } from "react-icons/tb";
import { TiEdit } from "react-icons/ti";
import { FaRegFolderClosed } from "react-icons/fa6";

const Tickets = ({ Nombre, Apellido, Correo, ServicioSeleccionado, Numero_de_telefono, Empresa, Descripcion, Eliminar, onEdit }) => {
    return (
        <div className='cont-Padre-ticket'>
            <div className='opciones'>
                <h5>Nombre</h5>
                <h5>Apellido</h5>
                <h5>Correo</h5>
                <h5>Servicio</h5>
                <h5>Telefono</h5>
                <h5>Empresa</h5>
                <h5>Descripcion</h5>
            </div>



            

            <div className='cont-Hijo-ticket'>
                <p>Nombre: {Nombre}</p>
                <p>Apellido: {Apellido}</p>
                <p>Correo: {Correo}</p>
            </div>

            <div className='cont-ticket'>
                <p>Servicio: {ServicioSeleccionado}</p>
                <p>Telefono: {Numero_de_telefono}</p>
                <p>Empresa: {Empresa}</p>
            </div>

            <div className='cont-ticket-descripcion'>
                <p>Descripcion: {Descripcion}</p>
            </div>

            <div className='btn-tickets'>
                <button onClick={Eliminar}><TbHttpDelete /></button>
                <button><FaCheckCircle /></button>
                <button onClick={onEdit}><TiEdit /></button>
                <button><FaRegFolderClosed /></button>
            </div>
        </div>
    );
};

export default Tickets;
