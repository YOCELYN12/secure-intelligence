import React from 'react'
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
import "../Styles/PaginaPrincipal.css"
import Cards from '../Components/Cards'
import CardPublicidad from '../Components/CardPublicidad'
import LetrasPublicidad from '../Components/LetrasPublicidad'


function PaginaPrincipal() {

    return (

        <div>

            <Navbar />

            <div className="app">

                <main>

                    <div className='fondo'>
                        <div className='fondo2'>
                            <LetrasPublicidad/>
                            <CardPublicidad />
                        </div>
                    </div>

                    <Cards /> 

                </main>

            </div>

            <Footer />
        </div>

    )
}

export default PaginaPrincipal
