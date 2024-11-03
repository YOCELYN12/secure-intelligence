import React from 'react'
import '../Styles/QuienesSomos.css'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

function QuienesSomos() {
    return (

        <div className='fondo-quienes-somos'>

            <div className='img-fondos'>
                <br />
                <Navbar />
                <div className='cont-palabras'>
                    <h1 className='h1'>Quienes somos?</h1>
                </div>
            </div>

            <div >
                <img className='img-grupo-trabajo' src="https://i.imgur.com/CoQNwVB.jpg" alt="" />
                <p className='palabras-quienesSomos'>En Secure Intelligence, somos un equipo apasionado de expertos en tecnología comprometidos con la innovación y la excelencia. Nos dedicamos a la creación de software y desarrollo de páginas web que no solo cumplen con las expectativas de nuestros clientes, sino que las superan.</p>
            </div>

            <img className='imge-clarlas' src="https://i.imgur.com/5SXZoYY.jpg" alt="" />
            <p className='letras-clarlas' >Además de nuestras capacidades de desarrollo, ofrecemos una gama de servicios educativos, incluyendo cursos de hacking ético y ciberseguridad, donde capacitamos a individuos y empresas en las mejores prácticas para protegerse en el entorno digital. Creemos que el conocimiento es la mejor defensa, y estamos comprometidos a formar a la próxima generación de profesionales en tecnología.</p>


            <div className='mapa' >
                <iframe
                    width="50%"
                    height={500}
                    frameBorder={0}
                    scrolling="no"
                    marginHeight={0}
                    marginWidth={0}
                    src="https://maps.google.com/maps?width=100%25&height=600&hl=es&q=Paus%20it+(Secure%20intelligence)&t=k&z=17&ie=UTF8&iwloc=B&output=embed"
                >
                    &lt;a href="https://www.gps.ie/car-satnav-gps/"&gt;GPS car tracker&lt;/a&gt;
                </iframe>
            </div>

            <p className='Ubicacion '> Encuentranos en: <br /> Pozos Santa Ana, escuela republica de Francia, 200 metros este <br />
                Nuestro horario: <br />Lunes - Viernes de 9am - 5pm 
            </p>
            
            <footer>
                <Footer />
            </footer>



        </div>
    )
}

export default QuienesSomos
