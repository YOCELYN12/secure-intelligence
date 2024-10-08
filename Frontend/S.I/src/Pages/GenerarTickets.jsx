import React from 'react'
import { useState, useEffect } from 'react'
import '../Styles/GenerarTickets.css'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Post } from '../Fetch/Fetch'

function GenerarTickets() {

  const [intNombre, setIntNombre] = useState("")
  const [intApellido, setIntApellido] = useState("")
  const [intCorreo, setIntCorreo] = useState("")
  const [intServicio, setIntServicio] = useState("")
  const [intTelefono, setIntTeleno] = useState("")
  const [intEmpresa, setIntEmpresa] = useState("")
  const [intDescripcion, setIntDescripcion] = useState("")
  

  const enviarTickets = async (e) => {
    e.preventDefault()
    let datos ={
      nombre:nombre,
      Apellido:Apellido,
      Corre:Correo,
      Tipo_de_servicio:Tipo_de_servicio,
      Numero_de_telefono: Numero_de_telefono,
      Empresa:Empresa,
      Descripcion:Descripcion
    }

    await Post(datos, "productos")
  }

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
        <input type="text" className='int-nombre'  value={intNombre} onChange={(e) => setIntNombre(e.target.value)}/>
      </div>


      <div className='cont-apellido'>
        <p>Apellido</p>
        <input className='int-apellido' type="text"  value={intApellido} onChange={(e) => setIntApellido(e.target.value)}/>
      </div>



      <div className='cont-correo'>
        <p>Correo</p>
        <input className='int-correo' type="text"  value={intCorreo} onChange={(e) => setIntCorreo (e.target.value)}/>
      </div>



      <div className='cont-tipo-servicio' >
        <p>Tipo de servicio</p>

        <select className='select-servicio' id="servicios" value={intServicio} onChange={(e) => setIntServicio (e.target.value)}>
          <option value="" >Seleccione una opción</option>
          <option value="opcion1">Desarrollo web</option>
          <option value="opcion2">Desarrollo de software</option>
          <option value="opcion3">Hacking</option>
          <option value="opcion3">Mantenimiento</option>
        </select>

      </div>



      <div className='cont-telefono'>
        <p>Numero de telefono</p>
        <input className='int-numero-telefono' type="num"  value={intTelefono} onChange={(e) => setIntTeleno(e.target.value)}/>
      </div>

      <div className='cont-empresa'>
        <p>Empresa</p>
        <input className='int-empresa' type="text" value={intEmpresa} onChange={(e) => setIntEmpresa(e.target.value)} />
      </div>

      <div className='cont-descripcion'>
        <p>Decripcion</p>
        <input className='int-descripcion' type="text" value={intDescripcion} onChange={(e) => setIntDescripcion(e.target.value)} />
      </div>


      <div className='cont-btn'>
        <button className='btn-cancelar'>Cancelar</button>
        <button  onClick={enviarTickets} className='btn-enviar' >Enviar</button>

      </div>

      <div className='footeer'>
        <Footer/>
      </div>


    </body>
  )
}

export default GenerarTickets
