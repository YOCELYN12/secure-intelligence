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


function PaginaPrincipal() {
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);



    return (

        <div>

            <Navbar />

            <div className="app">



                <div className='fondo'>

                    <div className='fondo2'>
                        <LetrasPublicidad />
                        <CardPublicidad />
                        <CardFundadoras />
                    </div>

                    <Cards />

                    <button className='bton' onClick={handleOpenModal}> <p className='letras-nosotros'> Por que nosotros?</p></button>

                    <Modal show={showModal} onClose={handleCloseModal} />

                </div>

                <Modal />
            </div>

            <Footer />
        </div>

    )
}

export default PaginaPrincipal
