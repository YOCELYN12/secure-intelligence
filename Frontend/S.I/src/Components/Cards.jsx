import React from 'react'



function Cards() {
    return (
        //Card exportada de boostrap
        //Contenedor principal que definira la posicion de la card en la pagina pricipal 
        <div style={{marginLeft: '580px', marginTop:'5%'}}>

            {/* contenedor secundario que le dara a la card los estilos de bootstrap */}
            <div className="card" style={{ width: "18rem",backgroundColor: 'white', border:'none' }}>
                
                {/* contenedor con la informacion necesaria para la card */}
                <div className="card-body">
                    <h5 className="card-title">Desarrollo de software</h5>
                    <p className="card-text">Transforma tus ideas en soluciones digitales efectivas. Ofrecemos desarrollo de software personalizado, adaptado a tus necesidades y objetivos.¡Descubre cómo podemos impulsar tu negocio hoy!.</p>
                    <img src="https://i.imgur.com/JYFA4H6.jpg" className="card-img-top" style={{borderRadius:"20px"}} alt=""/>
                    <a href="/GenerarTickets" className="btn btn-primary" style={{display:'flex',justifyContent:'center', marginTop:'10px', borderRadius:'20px'}}>Go somewhere</a>
                </div>

            </div>
        </div>
    )
}


export default Cards
