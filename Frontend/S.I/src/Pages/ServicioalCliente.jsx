import React from 'react'
import '../Styles/ServicioalCliente.css'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

function ServicioalCliente() {
    return (
        <div>

            <Navbar />
            <div>
                <img className='img-servicio' src="https://i.imgur.com/w4vMyPo.png" alt="" />
            </div>

            <div>
                <h1 className='letras-cliente'>Servicio al cliente</h1>
            </div>

            <div className='conte-nombre'>
                <p>Nombre</p>
                <input type="text" className='inp-nombre' />
            </div>

            
            <div className='conte-area'>
                <p>Area en que mejorar</p>
                <input className='inp-area' type="text"  />
            </div>


            
            <div className='conte-queja'>
                <p>Queja</p>
                <input className='inp-queja' type="text"  />
            </div>

            
            <div className='conte-select' >
                <p>Desea ser contactado</p>

                <select className='select-siono' >
                    <option value="" >Seleccione una opción</option>
                    <option value="opcion1">Si</option>
                    <option value="opcion2">No</option>
                </select>

            </div>


             
            <div className='calificanos'>
                <p>Calificanos</p>
                <input className='inp-calificanos' type="text"  />
            </div>


            <div className='conte-btn'>
                <button className='bton-cancelar'> Cancelar</button>
                <button className='bton-enviar'>Enviar</button>
            </div>

















           <div className='fotter'>
            <Footer />
            </div>


        </div>
    )
}

export default ServicioalCliente
