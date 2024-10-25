import React, { useState, useEffect } from 'react'
import '../Styles/ModalServicios.css'

function ModalServicios() {

    const [intNombre, setIntNombre] = useState("")
    const [intArea, setIntArea] = useState("")
    const [intDescripcion, setIntDescripcion] = useState("")


    
    const enviarServicio = async (e) => {
        e.preventDefault()
        let datos = {
            Nombre: intNombre,
            Area: intArea,
            Descripcion_servicio: intDescripcion
        }
        await Post(datos, "/post/")
    }

    return (
        <div>
            <div className='cont-tipo-servicios'>

                <div className='dev-img-servicio'>

                    <div className='cont-nombre-tipo-servicio'>
                        <p className='letras-servicios'>Nombre</p>
                        <input className='int-nombre' type="text" value={intNombre} onChange={(e) => setIntNombre(e.target.value)} />
                    </div>

                    <div className='cont-area'>
                        <p className='letras-servicios'>Area</p>
                        <input className='int-area' type="text" value={intArea} onChange={(e) => setIntArea(e.target.value)} />
                    </div>

                    <div className='cont-descripcion'>
                        <p className='letras-servicios'>Descripcion del servicio</p>
                        <input className='int-descripcion-servicios' type="text" value={intDescripcion} onChange={(e) => setIntDescripcion(e.target.value)} />
                    </div>

                    <div className='btn-servicios'>
                        <button style={{ cursor: "pointer", zIndex: "100" }} onClick={enviarServicio} className='btn-enviar'>Enviar</button>
                        <button className='btn-cancelar'>Cancelar</button>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default ModalServicios
