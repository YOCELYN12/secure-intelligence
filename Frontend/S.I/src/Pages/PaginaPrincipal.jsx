import React from 'react'
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
import "../Styles/PaginaPrincipal.css"


function PaginaPrincipal() {

    return (

        <div>
            
            <Navbar />

            <div className="app">

                <main>

                    <div className='fondo'>
                        <div className='fondo2'></div>
                    </div>

                  <p>HOLA PRUEBA</p>
                  
                </main>

            </div>

            <Footer />
        </div>

    )
}

export default PaginaPrincipal
