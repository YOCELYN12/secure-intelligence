import React from 'react'
import '../Styles/ServicioalCliente.css'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import EmailJS from '../Components/EmailJS'

function ServicioalCliente() {
    return (
        <div className='fondo-serviciocliente'>

            <div className='img-servicio-cliente'>
                <br />
                <Navbar />

                <div className='div-servicio-cliente'>
                    <img className='img-ser' src="https://i.imgur.com/qoQjmbt.png" alt="" />
                    <h1  className='calificacion' >Cuentanos tu experiencia</h1>

                </div>
            </div>



            <EmailJS />



            <footer>
                <Footer />
            </footer>



        </div>
    )
}

export default ServicioalCliente
