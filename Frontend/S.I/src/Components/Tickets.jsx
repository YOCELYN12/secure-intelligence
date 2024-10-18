import React, { useState } from 'react'
// import ToDoTickets from './ToDoTickets'
import "../Styles/Tickets.css"
import { FaCheckCircle } from "react-icons/fa";
import { TbHttpDelete } from "react-icons/tb";
import { TiEdit } from "react-icons/ti";
import { FaRegFolderClosed } from "react-icons/fa6";


const Tickets = ({ Nombre, Apellido, Correo, ServicioSeleccionado, Numero_de_telefono, Empresa, Descripcion, Eliminar }) => {

  const [FormularioEditar, setFomularioEditar] = useState(false);


  const Editar = () => {
    setFomularioEditar(!FormularioEditar);
  }



  return (
    <div>
      <div className='cont-Padre-ticket'>

        <div className='cont-Hijo-ticket'>
          <p>Nombre: {Nombre} </p>
          <p>Apellido: {Apellido} </p>
        </div>

        <div className='cont-ticket-datos'>
          <p>Correo: {Correo}</p>
          <p value="">Servicio: {ServicioSeleccionado}</p>

        </div>

        <div className='cont-ticket'>
          <p>Telefono: {Numero_de_telefono}</p>
          <p>Empresa: {Empresa}</p>
        </div>

        <div className='cont-ticket-descripcion'>
          <p>Descripcion: {Descripcion}</p>
        </div>


        <div className='btn-tickets'>
          <button onClick={Eliminar} ><TbHttpDelete /></button>
          <button><FaCheckCircle /></button>

          {!FormularioEditar && (
            <button><TiEdit onClick={Editar} /></button>
          )}

          <button><FaRegFolderClosed /></button>
        </div>

        {FormularioEditar && (
          <div className="modal">
            <div className="modal-content">
              {/* <span className="close" onClick={cerrarModal}>&times;</span> */}
              <h2>Formulario Modal</h2>

              <form>

                <div>
                  <label>Nombre:</label>
                  <input type="text" name="nombre"  />
                </div>

                <div>
                  <label>Servicio selecionado:</label>
                  <input type="text" name="nombre" />
                </div>

                <div>
                  <label>Descripcion:</label>
                  <textarea name="mensaje" ></textarea>
                </div>

                <button type="submit">Enviar</button>

              </form>
            </div>
          </div>
        )}



      </div>

    </div>
  )
}

export default Tickets
