import React from 'react'
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
import "../Styles/PaginaPrincipal.css"
import Cards from '../Components/Cards'
import CardPublicidad from '../Components/CardPublicidad'
import LetrasPublicidad from '../Components/LetrasPublicidad'
import CardFundadoras from '../Components/CardFundadoras'
import Modal from '../Components/Modal'
import { useState } from 'react'
import CardsOfertas from '../Components/CardsOfertas'
import CardServicios2 from '../Components/CardServicios2'
import CardServicios3 from '../Components/CardServicios3'
import CardServicios4 from '../Components/CardServicios4'


function PaginaPrincipal() {
    const [abrirModal, setAbrirModal] = useState(false);
    const verModal = () => setAbrirModal(true);
    const cerrarModal = () => setAbrirModal(false);

    return (
        <div style={{ backgroundColor: "black" }}>
            <div className="app">
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

                <div className='fondo2-prueba'>

                    <div className='container-desarrollo'>
                        <h1>Desarrollo web </h1>
                        <h4>Crea una página web impactante y funcional que refleje la esencia de tu marca. ¡Lleva tu negocio al siguiente nivel y destaca en el mundo digital!</h4>
                    </div>

                    <img src="https://i.imgur.com/PqSbEUj.png" className='img-posicion' alt="" />
                </div>


                {/* <button className='bton' onClick={verModal}> <p className='letras-nosotros'> Por que nosotros?</p></button>

                <Modal show={abrirModal} onClose={cerrarModal} /> */}


                <div className='conte-cards-fondo'>
                    <div className='centrar-cards'>
                        <CardServicios4 />
                        <CardServicios3 />

                    </div>

                </div>

                {/* <CardsOfertas />
                
                <Cards />
                <Modal /> */}

            </div>

            <div className='foter'>
                <Footer />
            </div>
        </div>

    )
}

export default PaginaPrincipal
