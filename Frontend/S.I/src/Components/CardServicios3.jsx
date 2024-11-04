import React from 'react'

function CardServicios3() {
  return (
    
    <div  style={{ width: "18rem", backgroundColor: 'transparent', color:"white", border: 'none' }}>
      <div className="card-body">
        <h5 style={{display:"flex", justifyContent:"center", margin:"30px"}}>Charlas</h5>
        <p className="card-text">Únete a nuestras charlas para explorar el mundo del software y la ciberseguridad. Potencia tus habilidades y mantente un paso adelante en la era digital. ¡Inscríbete hoy!</p>
        <img src="https://i.imgur.com/jNDy5P6.png" className="card-img-top" style={{ borderRadius: "20px" }} alt="" />
        <a href="#" className="btn btn-primary" style={{ display: 'flex', justifyContent: 'center', marginTop: '10px', borderRadius: '20px' }}>Go somewhere</a>
      </div>
    </div>

  )
}

export default CardServicios3
