import React from 'react';
import "../Styles/Tickets.css";
import { FaCheckCircle } from "react-icons/fa";
import { TbHttpDelete } from "react-icons/tb";
import { TiEdit } from "react-icons/ti";
import { FaRegFolderClosed } from "react-icons/fa6";

const Tickets = ({ Nombre, Apellido, Correo, ServicioSeleccionado, Numero_de_telefono, Empresa, Descripcion, Eliminar, onEdit }) => {
    return (
        <div className='cont-Padre-ticket'>
            <div className='cont-Hijo-ticket'>
                <p>Nombre: {Nombre}</p>
                <p>Apellido: {Apellido}</p>
            </div>
            <div className='cont-ticket-datos'>
                <p>Correo: {Correo}</p>
                <p>Servicio: {ServicioSeleccionado}</p>
            </div>
            <div className='cont-ticket'>
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
