import React, { useState } from 'react'
import "../Styles/Registro.css"
import { useNavigate } from 'react-router-dom'
import { PostUsuario } from '../Fetch/Fetch'
import Swal from 'sweetalert2'


function Registro() {
  const navegar = useNavigate()

  const [intName, setIntName] = useState("")
  const [intPassword, setIntPassword] = useState("")
  const [intEmail, setIntEmail] = useState("")

  const registrarse = async (e) => {
    e.preventDefault()
    let datos = {
      username: intName,
      password: intPassword,
      email: intEmail
    }
    console.log(datos);

    

    const validarEspacios = intName.trim() === "" || intPassword.trim() === "" || intEmail.trim() === "";



    if (validarEspacios) {
      Swal.fire({
        title: "Incorrect",
        text: "Por favor ingrese los datos solicitados",
        icon: "error"
      })
      return;
    }


    const peticion = await PostUsuario(datos, '/registro')
    console.log(peticion);
    
    if (peticion) {
      Swal.fire({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success"
      });
      navegar("/")

    } else if (peticion.error) {
      Swal.fire({
        title: "Incorrect",
        text: "Datos ingresados incorrectos",
        icon: "error"
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

            <p className='letras_footer'>Already have an account? <a href="Login"> </a></p>

            <button className='button_registro' type="submit" onClick={registrarse}>Registrarse</button>
          </form>

        </div>

      </div>
    </div>
  )
}

export default Registro
