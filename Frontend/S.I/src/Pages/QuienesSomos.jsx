import React from 'react'
import '../Styles/QuienesSomos.css'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

function QuienesSomos() {
    return (

        <div>

            <Navbar />

            <div className='img-fondos'>
                <div className='cont-palabras'>
                    <div className='letras-quienesSomos'>
                        <h1 className='h1'>Quienes somos?</h1>
                        <h6 className='h6'>Solo desarrollamos software?</h6>
                    </div>

                </div>
            </div>

            <div >
                <img className='img-grupo-trabajo' src="https://i.imgur.com/CoQNwVB.jpg" alt="" />
                <p className='palabras-quienesSomos'>En Secure Intelligence, somos un equipo apasionado de expertos en tecnología comprometidos con la innovación y la excelencia. Nos dedicamos a la creación de software y desarrollo de páginas web que no solo cumplen con las expectativas de nuestros clientes, sino que las superan.</p>
            </div>

            <img  className='img-clarlas' src="https://i.imgur.com/5SXZoYY.jpg" alt="" />
            <p className='letras-clarlas' >Además de nuestras capacidades de desarrollo, ofrecemos una gama de servicios educativos, incluyendo cursos de hacking ético y ciberseguridad, donde capacitamos a individuos y empresas en las mejores prácticas para protegerse en el entorno digital. Creemos que el conocimiento es la mejor defensa, y estamos comprometidos a formar a la próxima generación de profesionales en tecnología.</p>




            <Footer />

        </div>
    )
}

export default QuienesSomos
