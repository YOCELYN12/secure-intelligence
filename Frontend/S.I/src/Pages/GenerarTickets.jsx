import React from 'react'
import { useState, useEffect } from 'react'
import '../Styles/GenerarTickets.css'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Get } from '../Fetch/Fetch'
import { Post } from '../Fetch/Fetch'
import Swal from 'sweetalert2'



function GenerarTickets() {

  const [intNombre, setIntNombre] = useState("")
  const [intApellido, setIntApellido] = useState("")
  const [intCorreo, setIntCorreo] = useState("")
  const [intTipoServicio, setIntTipoServicio] = useState([]) //constante con la lista de tipos de servicios obtenidos de la base de datos 
  const [intServicioSelecionado, setIntServicioSeleccionado] = useState("")  //almacena la opcion que el usuario requiera
  const [intTelefono, setIntTelefono] = useState("")
  const [intEmpresa, setIntEmpresa] = useState("")
  const [intDescripcion, setIntDescripcion] = useState("")

  //Estado que se encarga de traer los Tipos de servicios de la API 
  useEffect(() => {
    const obtenerDatos = async () => {
      const getDatos = await Get("/postServicio/") //llama a la API para obtener los tipos de servicios de la base de datos
      setIntTipoServicio(getDatos) //actualiza el estado con los datos de los servicios obtenidos
      console.log(getDatos);

    }
    obtenerDatos()
  }, [])
  console.log(intTipoServicio)

  const enviarTickets = async (e) => {

    e.preventDefault()
    let datos = {
      Nombre: intNombre,
      Apellido: intApellido,
      Correo: intCorreo,
      Numero_de_telefono: intTelefono,
      Empresa: intEmpresa,
      Descripcion: intDescripcion,
      ID_tipo_servicio: intServicioSelecionado,// Guarda el servicio seleccionado
    }
    const validarInts = intNombre.trim() === "" || intApellido.trim() === "" || intCorreo.trim() === "" ||  intTelefono.trim() === "" || intEmpresa.trim() === "" || intDescripcion.trim() === "" || intServicioSelecionado.trim() === "" 
    if (validarInts) {
      alert
      Swal.fire({
        title: "Incorrect",
        text: "Por favor ingrese los datos solicitados",
        icon: "error"
      })
      return;
    }
   
    const traerTicket = await Post(datos, "/postTicket/") //se encarga de enviar los datos a la API para crear un nuevo ticket
    if (traerTicket) {
      Swal.fire({
        title: "Happy",
        text: "Su ticket fue generado!",
        icon: "success"
      });
    }
  }

  const reiniciarFrom = () => {
    setIntNombre('');
    setIntApellido('');
    setIntCorreo('');
    setIntTelefono('');
    setIntEmpresa('');
    setIntDescripcion('');
    setIntServicioSeleccionado(''); // Reiniciar el select también
  }


  return (


    <div className='fondo-page-ticket'>


      <div className='img'>
        <br />
        <Navbar />

        <div className='div-contenedor'>
          <img className='img-animado' src="https://i.imgur.com/Ty9fxlF.png" alt="" />
          <p className='texto-apartado'>Apartado de Tickets</p>
        </div>

      </div>

      <div className='contenedor-from' >
        <div className='centrar-from'>

          <div>
            <h1 className='letras-bienvenido'>Como podemos ayudarte?</h1>
          </div>


          <div className='cont-nombre'>
            <p>Nombre</p>
            <input type="text" className='int-nombre' value={intNombre} onChange={(e) => setIntNombre(e.target.value)} />
          </div>


          <div className='cont-apellido'>
            <p>Apellido</p>
            <input type="text" className='int-apellido' value={intApellido} onChange={(e) => setIntApellido(e.target.value)} />
          </div>



          <div className='cont-correo'>
            <p>Correo</p>
            <input className='int-correo' type="text" value={intCorreo} onChange={(e) => setIntCorreo(e.target.value)} />
          </div>



          <div className='cont-tipo-servicio' >
            <p>Tipo de servicio</p>

            <select className='select-servicio' value={intServicioSelecionado} onChange={(e) => setIntServicioSeleccionado(e.target.value)}>  {/* Actualizamos solo el valor seleccionado  */}

              <option>Seleccione una opción</option>

              {intTipoServicio.map((tipo) => (
                <option key={tipo.id} value={tipo.ID_tipo_servicio}>{tipo.Nombre}</option>
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
            <button onClick={reiniciarFrom} className='btn-cancelar'>Cancelar</button>
            <button onClick={enviarTickets} className='btn-enviar' >Enviar</button>
          </div>
        </div>

      </div>

      <footer>
        <Footer />
      </footer>



    </div>
  )
}

export default GenerarTickets
