import React from 'react'
import "../Styles/Login.css"

function Login() {
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
      <input style={{ backgroundColor: "transparent", border: "3px solid blue" }} className='input_login' type="text" required />

      <p className='letras-input'>Password</p>
      <input style={{ backgroundColor: "transparent", border: "3px solid blue" }} className='input_login' type="password" required />

    </div>

    <p className='login-acceso'>Already have an account? <link rel="stylesheet" href="Login" /></p>

    <button className='button_login' type="submit">Entrar</button>

  </form>

</div>

</div>
    </div>
  )
}

export default Login
