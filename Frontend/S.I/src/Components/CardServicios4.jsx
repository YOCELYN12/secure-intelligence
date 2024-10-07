import React from 'react'
import { FaLeaf } from 'react-icons/fa6'

function CardServicios4() {
  return (
    <div>
      <div style={{ marginTop: '-40%', marginLeft: '950px'}}>
        <div className="card" style={{ width: "18rem", backgroundColor: 'white', border: 'none' }}>

          <div className="card-body">
            <h5 className="card-title" style={{display:"flex", justifyContent:'center'}}>Mantenimiento</h5>
            <p className="card-text">Asegura el óptimo rendimiento de tus aplicaciones. Nuestro servicio de mantenimiento corrige errores, mejora funcionalidades y adapta tu software a nuevas tecnologías. ¡Invierte en la sostenibilidad de tu negocio y mantén a tus usuarios satisfechos!</p>
            <img src="https://i.imgur.com/3ZdObHc.png" className="card-img-top" style={{ borderRadius: "20px" }} alt="" />
            <a href="#" className="btn btn-primary" style={{ display: 'flex', justifyContent: 'center', marginTop: '10px', borderRadius: '20px' }}>Go somewhere</a>
          </div>

        </div>
      </div>
    </div>
  )
}


export default CardServicios4
