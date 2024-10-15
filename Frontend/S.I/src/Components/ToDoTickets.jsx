import React, { useState, useEffect} from 'react'
import '../Styles/ToDoTickets.css'
import Navbar from './Navbar'
import Footer from './Footer'
import { FaMagnifyingGlass } from "react-icons/fa6";
import { GetJSON, Post } from '../Fetch/Fetch';
// import ListaTickets from './ListaTickets';
import GenerarTickets from '../Pages/GenerarTickets';
import { BiTrafficCone } from 'react-icons/bi';
import ListaTickets from './ListaTickets';


function ToDoTickets() {


    const [intNombre, setIntNombre] = useState("")
    const [intArea, setIntArea] = useState("")
    const [intDescripcion, setIntDescripcion] = useState("")
    const [tick, setTick] = useState([])

    const enviarServicio = async (e) => {
        e.preventDefault()
        let datos = {
            Nombre: intNombre,
            Area: intArea,
            Descripcion_servicio: intDescripcion
        }
        await Post(datos, "post")
    }

    useEffect (() => {
        const obtenerTicket = async() => {
            const getServicios = await GetJSON("tickets")
            setTick(getServicios)
            console.log(tick);
            
        }
        obtenerTicket()
    }, [])



    return (

        <div>
            <div>
                <Navbar />

                <div className='container-logo'>

                    <div className='cont-barra'>
                        <input className="search-container-tickets" type="text" placeholder="Buscar ticket..." />
                    </div>


                    <div className='btn-buscar-tickets' >
                        <button className='icon-buscar-tickets'><FaMagnifyingGlass /> </button>
                    </div>

                </div>

                <button className='btn-crear-ticket' >Crear Ticket</button>
              
                
                <div className='cont-tickets' >

                    <div className='cont-nuevos'>
                        <div className='dev-img-nuevos'>
                            <div className= >

                            </div>


                        </div>

                    </div>


                    <div className='cont-cerrados'>
                        <div className='dev-img-cerrados'>

                        </div>

                    </div>


                    <div className='cont-espera'>
                        <div className='dev-img-espera'>

                        </div>

                    </div>



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
                                <button onClick={enviarServicio} className='btn-enviar'>Enviar</button>
                                <button className='btn-cancelar'>Cancelar</button>
                            </div>

                        </div>

                    </div>
            <ListaTickets ticketsAPI={tick}/>
                </div>
            </div>

            <Footer />
        </div>

    )
}

export default ToDoTickets
