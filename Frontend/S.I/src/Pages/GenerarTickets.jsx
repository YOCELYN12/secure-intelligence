import React from 'react'
import { useState, useEffect } from 'react'
import '../Styles/GenerarTickets.css'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Get } from '../Fetch/Fetch'
import { Post } from '../Fetch/Fetch'
import Swal from 'sweetalert2'



function GenerarTickets() {

  // Constantes que van a guardar los datos que el usuario ingrese en los inputs
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

    }
    obtenerDatos()
  }, [])


  // Evento que se va a encargar de enviar los tik
  const enviarTickets = async (e) => {

    e.preventDefault()

    // Array que se va a encargar de guardar los datos ingresados por el usuario, y mandarlos a la API
    let datos = {
      Nombre: intNombre,
      Apellido: intApellido,
      Correo: intCorreo,
      Numero_de_telefono: intTelefono,
      Empresa: intEmpresa,
      Descripcion: intDescripcion,
      ID_tipo_servicio: intServicioSelecionado,// Guarda el servicio seleccionado
    }

    // validacion para asegurar que todos los inputs esten completados
    const validarInts = intNombre.trim() === "" || intApellido.trim() === "" || intCorreo.trim() === "" ||  intTelefono.trim() === "" || intEmpresa.trim() === "" || intDescripcion.trim() === "" || intServicioSelecionado.trim() === "" 

    // Validacion de espacios, no permite que los datos se envien si los intputs estan vacios
    if (validarInts) {
      alert
      Swal.fire({
        title: "Incorrect",
        text: "Por favor ingrese los datos solicitados",
        icon: "error"
      })
      return;
    }

    //envia los datos a la API y se guarda la respuesta
    const generarTicket = await Post(datos, "/postTicket/") 


    // Mensaje para informar al usuario que los datos fueron enviados
    if (generarTicket) {
      Swal.fire({
        title: "Happy",
        text: "Su ticket fue generado!",
        icon: "success"
      });
    }
  }
  
  // Evento que se encargar de limpiar los inputs en caso de que el usuario desee no enviar la informacion ingresada
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

          {/* Campos del formulario */}
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
            <p>Tipo de servicio</p>  {/* Etiqueta que indica al usuario qué seleccionar */}
             


            {/* Menú desplegable (select) para elegir el tipo de servicio */}
            <select className='select-servicio' value={intServicioSelecionado} onChange={(e) => setIntServicioSeleccionado(e.target.value)}>  {/* Actualizamos solo el valor seleccionado  */}
              <option>Seleccione una opción</option>
               {/* Mapeo de los tipos de servicio obtenidos para generar opciones en el select */}
              {intTipoServicio.map((tipo) => (
                <option key={tipo.id}  // Clave única para cada opción basada en el ID del tipo de servicio
                 value={tipo.ID_tipo_servicio} // Valor que se asigna al select cuando se selecciona esta opción
                 >{tipo.Nombre}</option> 
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
