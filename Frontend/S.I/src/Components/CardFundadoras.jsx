import React from 'react'
import '../Styles/CardFundadoras.css'

function CardFundadoras() {
    return (

        // Contenedor principal, con el contenido de la informacion de la fundadora de la empresa
        <div className='contenedor-fundadoras'>
            {/* Contenedor secundario  que alinea los estilos de la card */}
            <div className="card" style={{ width: "18rem", display: "flex", alignContent: "flex-end", }}>

                {/* Contenedor con la img de perfil de la fundadora, su area de especializacion y su nombre */}
                <div className="card-body">

                    <img className='img-Yennifer' src="https://i.imgur.com/pCmAIAW.jpg" alt="" />
                    <p className='letras-Yennifer'>Yennifer Rivera</p>
                    <p className='pentester'>Pentester</p>

                </div> 
                {/* Imagen representativa */}
                <img src="https://i.imgur.com/C5OvLuO.jpg" className="card-img-top" alt="..." />
                
                {/* Fecha en que la empresa se fundo */}
                <p className="letras-fundadora">
                    3 septiembre 2019
                </p>


            </div>
        </div>

    )
}

export default CardFundadoras
