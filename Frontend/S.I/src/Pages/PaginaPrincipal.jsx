import React from 'react'
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
import "../Styles/PaginaPrincipal.css"
import Cards from '../Components/Cards'
import CardPublicidad from '../Components/CardPublicidad'
import LetrasPublicidad from '../Components/LetrasPublicidad'
import CardFundadoras from '../Components/CardFundadoras'
import CardServicios3 from '../Components/CardServicios3'
import CardServicios4 from '../Components/CardServicios4'


function PaginaPrincipal() {
   
    return (
        <div style={{ backgroundColor: "black" }}>
            <div >
                <div className='fondo'>

                    <div className='fondo2'>
                        <br />
                        <nav>
                            <Navbar />
                        </nav>
                        <LetrasPublicidad />
                        <CardPublicidad />
                        <CardFundadoras />
                    </div>

                </div>

                <div className='fondo2-publicidad'>

                    <div className='container-desarrollo'>
                        <h1>Desarrollo web </h1>
                        <h4>Crea una página web impactante y funcional que refleje la esencia de tu marca. ¡Lleva tu negocio al siguiente nivel y destaca en el mundo digital!</h4>
                    </div>

                    <img src="https://i.imgur.com/PqSbEUj.png" className='posicion1' alt="" />
                </div>


                <div className='conte-cards-fondo'>
                    <div className='centrar-cards'>
                        <CardServicios4 />
                        <CardServicios3 />
                        <div className='clase-mediaquery'>
                            <Cards />
                        </div>
                    </div>

                </div>

              

            </div>

            <div className='foter'>
                <Footer />
            </div>
        </div>

    )
}

export default PaginaPrincipal
