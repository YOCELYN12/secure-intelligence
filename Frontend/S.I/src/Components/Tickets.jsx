import React, { useState } from 'react'

const Tickets = ({Nombre,Apellido,Correo,ServicioSelecionado,Numero_de_telefono,Empresa,Descripcion}) =>{


  return (
    <div>
      <div className='cont-Padre-ticket'>
        <div className='cont-Hijo-ticket'>
          <p>Nombre: {Nombre} </p>
          <p>Apellido: {Apellido} </p>
          <p>Correo: {Correo} </p>


        </div>

      </div>
      
    </div>
  )
}

export default Tickets
