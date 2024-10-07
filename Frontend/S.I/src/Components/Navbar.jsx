import React from 'react'
import '../Styles/Nav.css'
import { IoPersonAdd } from "react-icons/io5";
import { FaMagnifyingGlass } from "react-icons/fa6";


function Navbar() {
  return (
    <nav className='navbar'>

      <div>
        <img className='logo' src="https://i.imgur.com/OzhReRY.png" alt="mmmm" />
      </div>

      <div className='container-logo-search'>

        <div className='cont-barra'>
          <input className="search-container" type="text" placeholder="Buscar..." />
        </div>


        <div className='btn-buscar' >
          <button className='icon-buscar'><FaMagnifyingGlass  /> </button>
        </div>
      </div>

      <div className='account'>
        <button className='btn-account'>
          <IoPersonAdd className=' icon-account' />
          <p >Account</p>
        </button>
      </div>

      

    </nav>
  )
}

export default Navbar
