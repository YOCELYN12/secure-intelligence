import React from 'react'
import '../Styles/Cuentas.css'

function Cuentas() {
  return (

    <div className='body'>

      <div className='cont_login1'>

        <div className="login-container">

          <form className="login-form">


            <div className='div-Login'>
              <h2 className='letras_login'>Login to your account</h2>
            </div>

            <div className='cont-input'>

              <input style={{backgroundColor: "transparent"}}     className='input_login' type="text" placeholder="Nombre de usuario" required />
              <input      className='input_login' type="password" placeholder="Contraseña" required   />

            </div>

            <button className='button_login' type="submit">Entrar</button>

          </form>

        </div>

      </div>


      <div className='cont1_registro'>

        <div className="registro-container">

          <form className="registro-form">

            <h2 className='letras_registro'>Iniciar Sesión</h2>
            <input className='input_registro' type="text" placeholder="Nombre de usuario" required />
            <input className='input_registro' type="password" placeholder="Contraseña" required />
            <button className='button_registro' type="submit">Entrar</button>

          </form>

        </div>

      </div>

    </div>
  )
}

export default Cuentas
