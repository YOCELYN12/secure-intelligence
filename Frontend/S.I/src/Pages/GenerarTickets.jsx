import React from 'react'
import { useState, useEffect } from 'react'
import '../Styles/GenerarTickets.css'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Get } from '../Fetch/Fetch'
import { Post } from '../Fetch/Fetch'



function GenerarTickets() {

  const [intNombre, setIntNombre] = useState("")
  const [intApellido, setIntApellido] = useState("")
  const [intCorreo, setIntCorreo] = useState("")
  const [intTipoServicio, setIntTipoServicio] = useState([]) //constante con la lista de tipos de servicios obtenidos de la base de datos 
  const [intServicioSelecionado, setIntServicioSeleccionado] = useState("")  //almacena la opcion que el usuario requiera
  const [intTelefono, setIntTelefono] = useState("")
  const [intEmpresa, setIntEmpresa] = useState("")
  const [intDescripcion, setIntDescripcion] = useState("")

  console.log()



  //Estado que se encarga de traer los Tipos de servicios de la API 
  useEffect(() => {
    const obtenerDatos = async () => {
      const getDatos = await Get("/post/") //llama a la API para obtener los tipos de servicios de la base de datos
      setIntTipoServicio(getDatos) //actualiza el estado con los datos de los servicios obtenidos
      console.log(getDatos);
      
    }
    obtenerDatos()
  }, [])





  const enviarTickets = async (e) => {
    e.preventDefault()
    let datos = {
      Nombre: intNombre,             
      Apellido: intApellido,
      Correo: intCorreo,
      Numero_de_telefono: intTelefono,
      Empresa: intEmpresa,
      Descripcion: intDescripcion,
      ID_tipo_servicio_id: intServicioSelecionado,// Guarda el servicio seleccionado
    }

    await Post(datos, "/postTicket") //se encarga de enviar los datos a la API para crear un nuevo ticket
  }


  return (


    <div>

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
        <input type="text" className='int-nombre' value={intNombre} onChange={(e) => setIntNombre(e.target.value)} />
      </div>


      <div className='cont-apellido'>
        <p>Apellido</p>
        <input className='int-apellido' type="text" value={intApellido} onChange={(e) => setIntApellido(e.target.value)} />
      </div>



      <div className='cont-correo'>
        <p>Correo</p>
        <input className='int-correo' type="text" value={intCorreo} onChange={(e) => setIntCorreo(e.target.value)} />
      </div>



      <div className='cont-tipo-servicio' >
        <p>Tipo de servicio</p>

        <select className='select-servicio' value={intServicioSelecionado} onChange={(e) => setIntServicioSeleccionado(e.target.value)}> { /*Actualizamos solo el valor seleccionado*/}
          <option>Seleccione una opción</option>

          {/* {Array.isArray(intTipoServicio) && intTipoServicio.map((tipo) => (
            <option key={tipo.id} value={tipo.id}>
              {tipo.Nombre}
            </option>
          ))} */}

          {intTipoServicio.map((tipo) => (
            <option key={tipo.id} value={tipo.id} >   {/* Aquí asignamos el id como value */}
              {tipo.Nombre}
            </option>
          ))}



        </select>

      </div>



      <div className='cont-telefono'>
        <p>Numero de telefono</p>
        <input className='int-numero-telefono' type="num" value={intTelefono} onChange={(e) => setIntTelefono(e.target.value)} />
      </div>

      <div className='cont-empresa'>
        <p>Empresa</p>
        <input className='int-empresa' type="text" value={intEmpresa} onChange={(e) => setIntEmpresa(e.target.value)} />
      </div>

      <div className='conte-descripcion'>
        <p>Decripcion</p>
        <input className='int-descripcion' type="text" value={intDescripcion} onChange={(e) => setIntDescripcion(e.target.value)} />
      </div>


      <div className='cont-btn'>
        <button className='btn-cancelar'>Cancelar</button>
        <button onClick={enviarTickets} className='btn-enviar' >Enviar</button>

      </div>

      <div className='footeer'>
        <Footer />
      </div>


    </div>
  )
}

export default GenerarTickets
