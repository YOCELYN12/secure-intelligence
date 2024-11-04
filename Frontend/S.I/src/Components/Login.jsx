import React, { useState } from 'react'
import "../Styles/Login.css"
import { useNavigate } from 'react-router-dom'
import { PostUsuario } from "../Fetch/Fetch"
import Swal from 'sweetalert2'
import { crearCookie } from '../Fetch/cookie'


function Login() {
  const [intName, setIntName] = useState("")
  const [intPassword, setIntPassword] = useState("")

  const navigate = useNavigate()

  const validarUser = async (e) => {

    try {
      e.preventDefault()
      // Objeto con los datos del usuario
      const usuario = {
        username: intName,
        password: intPassword
      }

      // Validación de campos de entrada
      const validarInputs = intName.trim() === "" || intPassword.trim() === "";


      // Si hay campos vacíos, se muestra un mensaje de error
      if (validarInputs) {
        Swal.fire({
          title: "Incorrect",
          text: "Por favor ingrese los datos solicitados",
          icon: "error"
        })
        return;
      }

      // Realiza la petición para iniciar sesión
      const respuestaPost = await PostUsuario(usuario, '/login')

      // Crear cookies con los datos de respuesta
      crearCookie("cookie", respuestaPost.token, 1) // Crea una cookie llamada "cookie" con el token del usuario, que expirará en 1 día.
      crearCookie("super", respuestaPost.super, 1)  // Crea una cookie llamada "super" con un valor relacionado a los privilegios del usuario, que también expirará en 1 día.

      // Manejo de la respuesta
      if (respuestaPost.success) {
        Swal.fire({
          title: "Good job!",
          text: "You clicked the button!",
          icon: "success"
        });

        navigate("/") // Redirige al usuario a la página principal

      } else if (respuestaPost.error) {
        Swal.fire({
          title: "Incorrect",
          text: "Datos ingresados incorrectos",
          icon: "error"
        });
      }




    } catch (error) {
      if (respuestaPost.error) {
        Swal.fire({
          title: "Incorrect",
          text: "Datos ingresados incorrectos",
          icon: "error"
        });
      }
    }
  }




  return (
    <div>
      <div className='cont_login1'>

        <div className="login-container2">

          <form className="login-form">

            <div className='div-letras-login'>
              <h2 className='letras_login'>Login to your account</h2>
            </div>

            <div className='cont-input-login'>

              <p className='letras-input'>Nombre</p>
              <input style={{ backgroundColor: "transparent", border: "3px solid blue" }} className='input_login' type="text" value={intName} onChange={(e) => setIntName(e.target.value)} />

              <p className='letras-input'>Password</p>
              <input style={{ backgroundColor: "transparent", border: "3px solid blue" }} className='input_login' type="password" value={intPassword} onChange={(e) => setIntPassword(e.target.value)} />

            </div>

            <p className='login-acceso'>Already have an account? <link rel="stylesheet" href="Login" /></p>

            <button className='button_login' type="submit" onClick={validarUser}>Entrar</button>

          </form>

        </div>

      </div>
    </div>
  )
}

export default Login
