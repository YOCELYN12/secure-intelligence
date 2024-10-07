import React from 'react'

function CardServicios2() {
  return (
    <div>
      <div style={{marginTop:'80px', marginLeft:'90px'}}>
            <div className="card"style={{ width: "18rem",backgroundColor: 'white', border:'none' }}>

                <div className="card-body">
                    <h5 className="card-title">Desarrollo web</h5>
                    <p className="card-text">Crea una página web impactante y funcional que refleje la esencia de tu marca. ¡Lleva tu negocio al siguiente nivel y destaca en el mundo digital!</p>
                    <img src="https://i.imgur.com/PqSbEUj.png" className="card-img-top" style={{borderRadius:"20px"}} alt=""/>
                    <a href="#" className="btn btn-primary" style={{display:'flex',justifyContent:'center', marginTop:'10px', borderRadius:'20px'}}>Go somewhere</a>
                </div>

            </div>
        </div>
    </div>
  )
}

export default CardServicios2
