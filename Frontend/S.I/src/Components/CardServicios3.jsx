import React from 'react'

function CardServicios3() {
  return (
    <div>
      <div style={{marginTop:'20px', marginLeft:'400px'}}>
            <div className="card"style={{ width: "18rem",backgroundColor: 'white', border:'none' }}>

                <div className="card-body">
                    <h5 className="card-title">Charlas</h5>
                    <p className="card-text">Únete a nuestras charlas para explorar el mundo del software y la ciberseguridad. Potencia tus habilidades y mantente un paso adelante en la era digital. ¡Inscríbete hoy!</p>
                    <img src="https://i.imgur.com/avpN5r2.jpg" className="card-img-top" style={{borderRadius:"20px"}} alt=""/>
                    <a href="#" className="btn btn-primary" style={{display:'flex',justifyContent:'center', marginTop:'10px', borderRadius:'20px'}}>Go somewhere</a>
                </div>

            </div>
        </div>
    </div>
  )
}

export default CardServicios3
