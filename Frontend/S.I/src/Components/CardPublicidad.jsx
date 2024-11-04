import React from 'react'
import '../Styles/CardPublicidad.css'
import { FaCheck, FaLeaf } from "react-icons/fa6";

function CardPublicidad() {
    return (
       
        // Contenedor principal con la card de publicidad en la pagina principal
        <div className='conte-publicidad' >

           {/* Contenedor secundario que centra la card de publicidad*/}
            <div>

             {/* Muestra el resto de la informacion  sobre la publicidad */}
                <div className='div-precios'>
                    <h1>$50</h1>
                    <h6>/mes</h6>
                </div>

                <h3 className='letras'>Licencia basica</h3>

                <div>
                    <p >
                        Porque la seguridad  nunca fue tan facil de conseguir, como dar un solo click para proteger todas tus aplicaciones de ataques externos 
                    </p>
                </div>

                <hr style={{ color: 'white', border: '2px solid' }} />

                <div className='iconos'>
                    <FaCheck className='color-iconos'/> <p className='texto'>Seguridad</p>
                </div>

                <div className='iconos'>
                    <FaCheck className='color-iconos' /> <p className='texto'>Desarrollo web</p>
                </div>

                <div className="card-body">
                    <a href="GenerarTickets" className="card-link">
                        Adquiera con un click
                    </a>
                   
                </div>
            </div>

        </div>
    )
}

export default CardPublicidad
