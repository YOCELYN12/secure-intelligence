import React, { useState, useEffect } from 'react'
import '../Styles/ModalServicios.css'
import { Post } from '../Fetch/Fetch';

function ModalServicios({ isOpen, onClose }) {

    // Estados para almacenar los valores de entrada
    const [intNombre, setIntNombre] = useState("")
    const [intArea, setIntArea] = useState("")
    const [intDescripcion, setIntDescripcion] = useState("")



    const enviarServicio = async (e) => {

        e.preventDefault()
        // Objeto con los datos del servicio
        let datos = {
            Nombre: intNombre,
            Area: intArea,
            Descripcion_servicio: intDescripcion
        }
        // Realiza la petición POST con los datos
        await Post(datos, "/post/")

    }
    
    // Si el modal no está abierto, no se renderiza nada
    if (!isOpen) return null;

    return (
        <div className='modal-overlay' onClick={onClose}> {/* Capa de fondo que cierra el modal al hacer clic */}
            <div className='cont-tipo-servicios' onClick={e => e.stopPropagation()}> {/* Contenedor del modal */}
                <div>

                    <h5 className='h5'>Agregar nuevos servicios</h5>

                    <div className='centrar-contenedor'>

                        <div className='inputs'>

                            <p className='letras-servicio'>Nombre</p>
                            <input className='input' type="text" value={intNombre} onChange={(e) => setIntNombre(e.target.value)} />

                            <br />
                            <p className='letras-servicio'>Area</p>
                            <input className='input' type="text" value={intArea} onChange={(e) => setIntArea(e.target.value)} />

                            <br />
                            <p className='letras-servicio'>Descripcion del servicio</p>
                            <input className='input' type="text" value={intDescripcion} onChange={(e) => setIntDescripcion(e.target.value)} />

                        </div>
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
