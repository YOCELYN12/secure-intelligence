import React from 'react'
import { FaCheck, FaLeaf } from "react-icons/fa6";
import '../Styles/CardsOfertas.css'

function CardsOfertas() {
    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: "-70%", marginLeft:'990px'}}>

                <div style={{ width: "18rem", backgroundColor: 'rgba(1, 1, 1, 0.4)',  padding:'20px', width:'300px', height:'450px', backgroundColor:'white'}}>
                    <div className='precios'>
                        <h1>$39</h1>
                        <h6>/month</h6>
                    </div>

                    <h3 className='letras'>Basic License</h3>

                    <div className="card-body">

                        <p className="card-text" style={{ color: 'black',  }}>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </p>
                        
                    </div>

                    <hr style={{ color: 'white', border: '2px solid' }} />

                    <div className='iconos'>
                        <FaCheck className='color-iconos' /> <p className='texto'>hpla</p>
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


        </div>
    )
}

export default CardsOfertas
