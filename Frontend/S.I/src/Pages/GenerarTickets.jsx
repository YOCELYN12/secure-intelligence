import React from 'react'
import '../Styles/GenerarTickets.css'

function GenerarTickets() {
  return (
    <body>
      <div className='img'>

        <div className='div-contenedor'>
          <img className='img-animado' src="https://i.imgur.com/7sU8PnC.png" alt="" />
          <p className='texto-apartado'>Apartado de Tickets</p>
        </div>


        <div>
          <h1 className='letras-bienvenido'>Como podemos ayudarte?</h1>
          <p>Nombre</p>
          <p>Apellido</p>
          <p>Correo</p>
          <select name=""  id="">  
            <option value=""> <p>Tipo de servicio</p>
            <p>Hola</p></option>
          </select>
          <p>Numero de telefono</p>
          <p>Decripcion</p>
          <input type="text" />
        </div>

      </div>
    </body>
  )
}

export default GenerarTickets
