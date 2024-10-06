import React from 'react'

function CardServicios4() {
  return (
    <div>
      <div style={{marginTop:'10px', marginLeft:'200px'}}>
            <div className="card"style={{ width: "18rem",backgroundColor: 'white', border:'none' }}>

                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <img src="https://i.imgur.com/JYFA4H6.jpg" className="card-img-top" style={{borderRadius:"20px"}} alt=""/>
                    <a href="#" className="btn btn-primary" style={{display:'flex',justifyContent:'center', marginTop:'10px', borderRadius:'20px'}}>Go somewhere</a>
                </div>

            </div>
        </div>
    </div>
  )
}

export default CardServicios4
