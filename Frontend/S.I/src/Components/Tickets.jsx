import React, { useState } from 'react'
// import ToDoTickets from './ToDoTickets'
import "../Styles/Tickets.css"
import { FaCheckCircle } from "react-icons/fa";
import { TbHttpDelete } from "react-icons/tb";
import { TiEdit } from "react-icons/ti";
import { FaRegFolderClosed } from "react-icons/fa6";


const Tickets = ({ Nombre, Apellido, Correo, ServicioSeleccionado, Numero_de_telefono, Empresa, Descripcion }) => {


  return (
    <div>
      <div className='cont-Padre-ticket'>

        <div className='cont-Hijo-ticket'>
          <p>Nombre: {Nombre} </p>
          <p>Apellido: {Apellido} </p>
        </div>

        <div className='cont-ticket-datos'>
          <p>Correo: {Correo}</p>
          <p value="">Servicio Seleccionado : {ServicioSeleccionado}</p>

        </div>

        <div className='cont-ticket'>
          <p>Numero de telefono: {Numero_de_telefono}</p>
          <p>Empresa: {Empresa}</p>
        </div>

        <div className='cont-ticket-descripcion'>
          <p>Descripcion: {Descripcion}</p>
        </div>

        <div className='btn-tickets'>
          <button><TbHttpDelete /></button>
          <button><FaCheckCircle /></button>
          <button><TiEdit /></button>
          <button><FaRegFolderClosed /></button>
        </div>



      </div>

    </div>
  )
}

export default Tickets
