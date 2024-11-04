import React from 'react'
import '../Styles/Nav.css'
import { IoPersonAdd } from "react-icons/io5";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import { IoMenu } from "react-icons/io5";
import { traerCookie } from '../Fetch/cookie';


function Navbar() {

  const navegar = useNavigate()

  const irpaginacuentas = async (e) => {
    e.preventDefault(
      navegar("/Cuentas")
    )
  }

  return (
    <nav className='navbar'>

      <div>
        <img className='logo' src="https://i.imgur.com/OzhReRY.png" alt="mmmm" />
      </div>

      <div className='div-nav' >

        <a className='letras_nav' href="/">Servicios</a>
        <a className='letras_nav' href="/GenerarTickets">Soporte</a>
        <a className='letras_nav' href="/QuienesSomos">Quienes somos</a>
        <a className='letras_nav' href="/ServicioalCliente">Servicio al cliente</a>
        {traerCookie('super') === 'true' && 
          <a className='letras_nav' href="/PaginaAdmin">Admin</a>
        }

      </div>


      <div className='account'>

        <button className='btn-account' onClick={irpaginacuentas} >
          <IoPersonAdd className='icon-account' />
          <p className='accot'>Account</p>
        </button>

      </div>

    </nav>
  )
}

export default Navbar
