import React from 'react'
import '../Styles/ToDoTickets.css'
import Navbar from './Navbar'
import Footer from './Footer'
import { FaMagnifyingGlass } from "react-icons/fa6";


function ToDoTickets() {
    return (
        <body >

            <div>


                <Navbar />



                <div className='container-logo'>

                    <div className='cont-barra'>
                        <input className="search-container-tickets" type="text" placeholder="Buscar ticket..." />
                    </div>


                    <div className='btn-buscar-tickets' >
                        <button className='icon-buscar-tickets'><FaMagnifyingGlass /> </button>
                    </div>

                </div>

                <button className='btn-crear-ticket' >Crear Ticket</button>

                <div className='cont-tickets' >

                    <div className='cont-nuevos'>

                    </div>


                    <div className='cont-cerrados'>

                    </div>


                    <div className='cont-espera'>

                    </div>

                </div>
            </div>

            <Footer />
        </body>
    )
}

export default ToDoTickets
