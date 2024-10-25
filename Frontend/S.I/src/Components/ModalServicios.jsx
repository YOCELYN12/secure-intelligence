import React, { useState, useEffect } from 'react'
import '../Styles/ModalServicios.css'
import {Post } from '../Fetch/Fetch';

function ModalServicios({ isOpen, onClose }) {

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

    if (!isOpen) return null;

    return (
        <div className='modal-overlay' onClick={onClose}>
            <div className='cont-tipo-servicios' onClick={e => e.stopPropagation()}>
                <div>

                    <h5 className='h5'>Agregar nuevos servicios</h5>

                    <div className='cont-nombre-tipo-servicio'>
                        <p className='letras-servicios'>Nombre</p>
                        <input className='int-nombre-servicio' type="text" value={intNombre} onChange={(e) => setIntNombre(e.target.value)} />
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
                        <button style={{ cursor: "pointer", zIndex: "100" }} onClick={enviarServicio} className='btn-enviar-tipo-servicio'>Enviar</button>
                        <button className='btn-cancelar-tipo-servicio' onClick={onClose}>Cancelar</button>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default ModalServicios
