import React from 'react'
import Login from '../Components/Login'
import Registro from '../Components/Registro'
import '../Styles/Cuentas.css'
import CapaLoginyRegistro from '../Components/CapaLoginyRegistro'
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

function Cuentas() {


  return (

    <div className='bodys'>
 
  




      <Login />
      <div className='capa1'>
        <div className='capa2'>
          <h1 className='h1'> Welcome <br /> Start your journey <br /> now with our <br /> management <br /> system</h1>
          <div className='btn-capas'>
            <div className='btn1'>
              <button style={{ border: "none", background: "transparent" }} ><MdKeyboardDoubleArrowLeft /></button>
            </div>

            <div className='btn2' >
              <button style={{ border: "none", background: "transparent" }} ><MdKeyboardDoubleArrowRight /></button>
            </div>
          </div>

        </div>
      </div>


      <Registro />

    </div>
  )
}

export default Cuentas
