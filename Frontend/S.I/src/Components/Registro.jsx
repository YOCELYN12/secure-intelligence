import React from 'react'
import "../Styles/Registro.css"

function Registro() {
  c









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
              <input style={{ backgroundColor: 'transparent', border: '3px solid blue' }} className='input_registro' type="text" required />

              <p className='letras-input'>Password</p>
              <input style={{ backgroundColor: 'transparent', border: '3px solid blue' }} className='input_registro' type="password" required />

              <p className='letras-input'>Email</p>
              <input style={{ backgroundColor: 'transparent', border: '3px solid blue' }} className='input_registro' type="text" required />
            </div>

            <p className='letras_footer'>Already have an account? <a href="Login"> </a></p>

            <button className='button_registro' type="submit">Entrar</button>
          </form>

        </div>

      </div>
    </div>
  )
}

export default Registro
