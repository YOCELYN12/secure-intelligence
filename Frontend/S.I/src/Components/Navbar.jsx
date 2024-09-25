import React from 'react'
import '../Styles/Nav.css'

function Navbar() {
  return (

    <nav className='navbar'>

     <div>
        <img className='logo' src="https://i.imgur.com/mVC3h38.png" alt="mmmm" />
      </div>
      
      <div className='container-logo-search'>

        <div className='cont-barra'>
          <input className="search-container" type="text" placeholder="Buscar..." />
          <button type="submit"></button>
        </div>

      </div>

    </nav>

  )
}

export default Navbar
