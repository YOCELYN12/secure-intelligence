import React, { useState } from 'react'
import Login from '../Components/Login'
import Registro from '../Components/Registro'
import '../Styles/Cuentas.css'
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

function Cuentas() {
  //Estados para determinar de que lado se debe mostrar la capa 
  const [LoginyRegistro , setLoginORegistro ] = useState(false);
  const [RegistroyLogin, setRegistroyLogin] = useState(false)
 
    // Función para activar el inicio de sesión
  const LoginORegistro = () => {
    setLoginORegistro (true);
  }
  
  // Función para activar el registro
  const RegistroOLogin = () => {
    setRegistroyLogin(true)
  }



  return (

    <div className='bodys'>

      {/* Componente de inicio de sesión */}
      <Login />

      {/* Componente de registro */}
      <Registro />
      
        {/* Capa que muestra un mensaje de bienvenida y botones para cambiar entre vistas */}
      <div   className={`capa1 ${LoginyRegistro ? 'active' : ' ' } ${RegistroyLogin ? 'actives' : ' ' }`}> 
        <div className='capa2'>
          <h1 className='h1'> Welcome <br /> Start your journey <br /> now with our <br /> management <br /> system</h1>
          <div className='btn-capas'>

            {/* Botón para cambiar a la vista de registro */}
            <div className='btn1'>
              <button style={{ border: "none", background: "transparent" }} onClick={RegistroOLogin} ><MdKeyboardDoubleArrowLeft /></button>
            </div>
            
             {/* Botón para cambiar a la vista de inicio de sesión */}
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







