import React, { useState } from 'react'
import "../Styles/Login.css"
import { useNavigate } from 'react-router-dom'
import {Get} from "../Fetch/Fetch"


function Login() {
  

  const[intName, setIntName ] = useState("")
  const[intPassword, setIntPassword] = useState("")

  const navigate = useNavigate()

  const validarUser = async(e) => {
    
    try {
      e.preventDefault()
      const data = await Get("users")

      const validarUsuarios = data.find(datos => datos.Name === intName && datos.Password === intPassword)
      if (validarUsuarios){
        navigate("/PaginaAdmin")
      }else(alert("hbhfebfhefbef"))

    } catch (error) {
      console.log("error")
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
              <input style={{ backgroundColor: "transparent", border: "3px solid blue" }} className='input_login' type="text" value={intName} onChange={(e) => setIntName(e.target.value)} required />

              <p className='letras-input'>Password</p>
              <input style={{ backgroundColor: "transparent", border: "3px solid blue" }} className='input_login' type="password" value={intPassword} onChange={(e) => setIntPassword(e.target.value)}required />

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
