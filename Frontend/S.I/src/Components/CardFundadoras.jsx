import React from 'react'
import '../Styles/CardFundadoras.css'

function CardFundadoras() {
    return (

        <div className='prueba'>
            <div className="card" style={{ width: "18rem", display: "flex", alignContent: "flex-end",}}>
                <div className="card-body">

                    <p className="card-text">
                       <img className='img-Yennifer' src="https://i.imgur.com/pCmAIAW.jpg" alt="" />
                       <p className='letras-Yennifer'>Yennifer Rivera</p>
                       <p className='pentester'>Pentester</p>
                    </p>

                </div>
                <img src="https://i.imgur.com/C5OvLuO.jpg" className="card-img-top" alt="..." />

                <div className="Card">

                    <p className="letras-fundadora">
                        3 septiembre 2019
                    </p>

                </div>
            </div>
        </div>

    )
}

export default CardFundadoras
