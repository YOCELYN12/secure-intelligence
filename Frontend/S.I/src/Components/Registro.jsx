import React, { useState } from 'react'
import "../Styles/Registro.css"
import { useNavigate } from 'react-router-dom'
import { PostUsuario } from '../Fetch/Fetch'
import Swal from 'sweetalert2'


function Registro() {

  // Hook para la navegación
  const navegar = useNavigate()
  
    // Estados para almacenar los valores de entrada
  const [intName, setIntName] = useState("")
  const [intPassword, setIntPassword] = useState("")
  const [intEmail, setIntEmail] = useState("")

  const registrarse = async (e) => {
    e.preventDefault()

    // Objeto con los datos del usuario
    let datos = {
      username: intName,
      password: intPassword,
      email: intEmail
    }
   

    
    // Validación de espacios en blanco
    const validarEspacios = intName.trim() === "" || intPassword.trim() === "" || intEmail.trim() === "";


    // Si hay campos vacíos, se muestra un mensaje de error
    if (validarEspacios) {
      Swal.fire({
        title: "Ups!",
        text: "Por favor ingrese los datos solicitados",
        icon: "error"
      })
      return;
    }

    // Realiza la petición para registrar el usuario
    const peticion = await PostUsuario(datos, '/registro')
     
    // Manejo de la respuesta
    if (peticion) {
      Swal.fire({
        title: "Happy",
        text: "Sus datos fueron registrados!",
        icon: "success"
      });
     

    }
  }




  return (
    <div>
      <div className='cont1_registro'>

        <div className="registro-container">

          <form className="registro-form">

            <div className='div-registro'>
              <h2 className='letras_registro'>Create an account</h2>
            </div>

            <div className='cont-input-registro'>
              <p className='letras-input' >Nombre</p>
              <input style={{ backgroundColor: 'transparent', border: '3px solid blue' }} className='input_registro' type="text" value={intName} onChange={(e) => setIntName(e.target.value)} required />

              <p className='letras-input'>Password</p>
              <input style={{ backgroundColor: 'transparent', border: '3px solid blue' }} className='input_registro' type="password" value={intPassword} onChange={(e) => setIntPassword(e.target.value)} required />

              <p className='letras-input'>Email</p>
              <input style={{ backgroundColor: 'transparent', border: '3px solid blue' }} className='input_registro' type="text" value={intEmail} onChange={(e) => setIntEmail(e.target.value)} required />
            </div>

            <p className='letras_footer'>Already have an account?</p>

            <button className='button_registro' type="submit" onClick={registrarse}>Registrarse</button>
          </form>

        </div>

      </div>
    </div>
  )
}

export default Registro
