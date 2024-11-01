import React from 'react'
import '../Styles/CardsOfertas.css'
function CardServicios2() {
  return (
    <div>
      <div>
        <div className="card" style={{ width: "18rem",  background:"black", backdropfilter: "blur(20%)", border: 'none', color:"white" }}>
          <div className="card-body">
            <h5 className="card-title">Desarrollo web</h5>
            <p className="card-text">Crea una página web impactante y funcional que refleje la esencia de tu marca. ¡Lleva tu negocio al siguiente nivel y destaca en el mundo digital!</p>
            <img src="https://i.imgur.com/BjSRzIt.jpg" className="card-img-top" style={{ borderRadius: "20px" }} alt="" />
            <a href="/GenerarTickets" className="btn btn-primary" style={{ display: 'flex', justifyContent: 'center', marginTop: '10px', borderRadius: '20px' }}>Go somewhere</a>
          </div>

        </div>
      </div> 
    </div>

    // <div>
    //   <img src="https://i.imgur.com/BjSRzIt.jpg" className="card-desarrollo"  alt="" />
    // </div>

  )
}

export default CardServicios2
