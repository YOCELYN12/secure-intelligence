import React, { useState } from 'react'
import Login from '../Components/Login'
import Registro from '../Components/Registro'
import '../Styles/Cuentas.css'
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

function Cuentas() {
  const [LoginyRegistro , setLoginORegistro ] = useState(false);
  const [RegistroyLogin, setRegistroyLogin] = useState(false)
 
  const LoginORegistro = () => {
    setLoginORegistro (true);
  }

  const RegistroOLogin = () => {
    setRegistroyLogin(true)
  }



  return (

    <div className='bodys'>

      <Login />
      <Registro />

      <div   className={`capa1 ${LoginyRegistro ? 'active' : ' ' } ${RegistroyLogin ? 'actives' : ' ' }`}> 
        <div className='capa2'>
          <h1 className='h1'> Welcome <br /> Start your journey <br /> now with our <br /> management <br /> system</h1>
          <div className='btn-capas'>
            <div className='btn1'>
              <button style={{ border: "none", background: "transparent" }} onClick={RegistroOLogin} ><MdKeyboardDoubleArrowLeft /></button>
            </div>

            <div className='btn2' >
              <button style={{ border: "none", background: "transparent" }} onClick={LoginORegistro}  ><MdKeyboardDoubleArrowRight /></button>
            </div>
          </div>

        </div>
      </div>

      

    </div>
  )
}

export default Cuentas







