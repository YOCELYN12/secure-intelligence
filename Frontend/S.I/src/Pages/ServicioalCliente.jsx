import React from 'react'
import '../Styles/ServicioalCliente.css'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import EmailJS from '../Components/EmailJS'

function ServicioalCliente() {
    return (
        <div>

            <Navbar />
            {/* <div>
                <img className='img-servicio' src="https://i.imgur.com/w4vMyPo.png" alt="" />
            </div>

            <div>
                <h1 className='letras-cliente'>Servicio al cliente</h1>
            </div>

            <div className='conte-nombre'>
                <p>Nombre</p>
                <input type="text" className='inp-nombre' />
            </div>

            
            <div className='conten-correo'>
                <p>Correo</p>
                <input className='inp-area' type="text"  />
            </div>

             
            <div className='calificanos'>
                <p>Calificanos</p>
                <input className='inp-calificanos' type="text"  />
            </div>


            <div className='conte-btn'>
                <button className='bton-cancelar'> Cancelar</button>
                <button className='bton-enviar'>Enviar</button>
            </div> */}


            <EmailJS/>



           <div className='fotter'>
            <Footer />
            </div>


        </div>
    )
}

export default ServicioalCliente
