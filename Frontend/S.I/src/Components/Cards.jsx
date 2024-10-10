import React from 'react'
import '../Styles/Cards.css'


function Cards() {
    return (
        <div style={{marginLeft: '580px', marginTop:'5%'}}>
            <div className="card" style={{ width: "18rem",backgroundColor: 'white', border:'none' }}>

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
