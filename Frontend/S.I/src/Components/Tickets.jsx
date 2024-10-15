import React, { useState } from 'react'
// import ToDoTickets from './ToDoTickets'

const Tickets = ({ Nombre, Apellido, Correo, ServicioSeleccionado, Numero_de_telefono, Empresa, Descripcion }) => {


  return (
    <div>
      <div className='cont-Padre-ticket'>
        <div className='cont-Hijo-ticket'>

          <p>Nombre: {Nombre} </p>
          <p>Apellido: {Apellido} </p>
          <p>Correo: {Correo}</p>
            <p value="">Servicio Seleccionado : {ServicioSeleccionado}</p>
          <p>Numero de telefono: {Numero_de_telefono}</p>
          <p>Empresa: {Empresa}</p>
          <p>Descripcion: {Descripcion}</p>

        </div>

      </div>

    </div>
  )
}

export default Tickets
