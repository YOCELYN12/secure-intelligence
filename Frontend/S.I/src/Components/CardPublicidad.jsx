import React from 'react'
import '../Styles/CardPublicidad.css'
import { FaCheck, FaLeaf } from "react-icons/fa6";

function CardPublicidad() {
    return (
        // Contenedor principal con la card de publicidad en la pagina principal
        <div style={{display:'flex', justifyContent:'center', marginTop:"-300px"}}>

           {/* Contenedor secundario que centra la card de publicidad*/}
            <div  className='cont-publicidad2'>

             {/* Muestra el resto de la informacion  sobre la publicidad */}
                <div className='div-precios'>
                    <h1>$39</h1>
                    <h6>/month</h6>
                </div>

                <h3 className='letras'>Basic License</h3>

                <div className="card-body">

                    <p className="card-text" style={{color:'white'}}>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </p>
                </div>

                <hr style={{ color: 'white', border: '2px solid' }} />

                <div className='iconos'>
                    <FaCheck className='color-iconos'/> <p className='texto'>hpla</p>
                </div>

                <div className='iconos'>
                    <FaCheck className='color-iconos' /> <p className='texto'>hpla</p>
                </div>

                <div className="card-body">
                    <a href="#" className="card-link">
                        Card link
                    </a>
                    <a href="#" className="card-link">
                        Another link
                    </a>
                </div>
            </div>

        </div>
    )
}

export default CardPublicidad
