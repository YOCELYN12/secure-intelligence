import React from 'react'
import '../Styles/GenerarTickets.css'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

function GenerarTickets() {
  return (
    <body>

      <Navbar />

      <div className='img'>

        <div className='div-contenedor'>
          <img className='img-animado' src="https://i.imgur.com/7sU8PnC.png" alt="" />
          <p className='texto-apartado'>Apartado de Tickets</p>
        </div>

      </div>


      <div>
        <h1 className='letras-bienvenido'>Como podemos ayudarte?</h1>
      </div>


      <div className='cont-nombre'>
        <p>Nombre</p>
        <input type="text" className='int-nombre' />
      </div>


      <div className='cont-apellido'>
        <p>Apellido</p>
        <input className='int-apellido' type="text" />
      </div>



      <div className='cont-correo'>
        <p>Correo</p>
        <input className='int-correo' type="text" />
      </div>



      <div className='cont-tipo-servicio'>
        <p>Tipo de servicio</p>

        <select className='select-servicio' id="servicios">
          <option value="">Seleccione una opción</option>
          <option value="opcion1">Desarrollo web</option>
          <option value="opcion2">Desarrollo de software</option>
          <option value="opcion3">Hacking</option>
          <option value="opcion3">Mantenimiento</option>
        </select>

      </div>



      <div className='cont-telefono'>
        <p>Numero de telefono</p>
        <input className='int-numero-telefono' type="num" />
      </div>

      <div className='cont-empresa'>
        <p>Empresa</p>
        <input className='int-empresa' type="text" />
      </div>

      <div className='cont-descripcion'>
        <p>Decripcion</p>
        <input className='int-descripcion' type="text" />
      </div>


      <div className='cont-btn'>
        <button className='btn-cancelar'>Cancelar</button>
        <button className='btn-enviar' >Enviar</button>

      </div>


      <Footer className="footer" />


    </body>
  )
}

export default GenerarTickets
