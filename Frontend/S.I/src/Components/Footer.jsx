import React from 'react'
import '../Styles/Foot.css'
import { HiOutlineMail } from "react-icons/hi";
import { FiTool } from "react-icons/fi";
import { BiMessageDetail } from "react-icons/bi";
import { LuLogIn } from "react-icons/lu";

function Footer() {
  return (

    <footer className="footer">

      <div className='cont_centrar_footer' >
        <div className='cont_footer'>

          <a className='letras_footer' href="/">Servicios</a>
          <a className='letras_footer' href="/GenerarTickets">Soporte</a>
          <a className='letras_footer' href="/QuienesSomos">Quienes somos</a>
          <a className='letras_footer' href="/Cuentas">Centro de cuentas</a>

        </div>
      </div>


      <div className='cont-icon'>
        <div className='cont2-iconos'>

          <HiOutlineMail className='iconos-footer' />
          <FiTool className='iconos-footer' />
          <BiMessageDetail className='iconos-footer' />
          <LuLogIn className='iconos-footer' />

        </div>

      </div>


      <div className='frase-footer'>
        <p>© 2024 Tu Empresa. Todos los derechos reservados.</p>
      </div>

    </footer>

  )
}

export default Footer
