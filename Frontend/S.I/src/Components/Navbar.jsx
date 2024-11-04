import React from 'react'
import '../Styles/Nav.css'
import { IoPersonAdd } from "react-icons/io5";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import { IoMenu } from "react-icons/io5";
import { traerCookie } from '../Fetch/cookie';


function Navbar() {
  // Hook para la navegación
  const navegar = useNavigate()
  
  // Función para navegar a la página de cuentas
  const irpaginacuentas = async (e) => {
    e.preventDefault(
      navegar("/Cuentas")
    )
  }

  return (
    <nav className='navbar'> {/* Contenedor principal de la barra de navegación */}

      <div>
        <img className='logo' src="https://i.imgur.com/OzhReRY.png" alt="ups" /> {/* Logo de la aplicación */}
      </div>

      <div className='div-nav' > {/* Contenedor de los enlaces de navegación */}

        <a className='letras_nav' href="/">Servicios</a>
        <a className='letras_nav' href="/GenerarTickets">Soporte</a>
        <a className='letras_nav' href="/QuienesSomos">Quienes somos</a>
        <a className='letras_nav' href="/ServicioalCliente">Servicio al cliente</a>
        {traerCookie('super') === 'true' &&  // Verifica si el usuario tiene permisos de administrador
          <a className='letras_nav' href="/PaginaAdmin">Admin</a>
        }

      </div>


      <div className='account'>  {/* Contenedor para la sección de cuenta */}

        <button className='btn-account' onClick={irpaginacuentas} > {/* Botón para ir a la página de cuentas */}
          <IoPersonAdd className='icon-account' /> {/* Icono de cuenta */}
          <p className='accot'>Account</p>  {/* Texto del botón */}
        </button>

      </div>

    </nav>
  )
}

export default Navbar
