import React from 'react'

function Cards() {
    return (
        <div style={{display:'flex', justifyContent:'center'}}>
            <div className="card" style={{ width: "18rem", }}>

            

                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <img src="https://i.imgur.com/JYFA4H6.jpg" className="card-img-top" alt=""/>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>

               
            </div>
        </div>
    )
}

export default Cards
