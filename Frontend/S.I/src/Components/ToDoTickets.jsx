import React, { useState, useEffect } from 'react'
import '../Styles/ToDoTickets.css'
import Footer from './Footer'
import { FaMagnifyingGlass } from "react-icons/fa6";
import { Get } from '../Fetch/Fetch';
import ListaTickets from './ListaTickets';
import { BiMenuAltRight } from "react-icons/bi";
import ModalServicios from './ModalServicios';




function ToDoTickets() {

    const [tick, setTick] = useState([])
    const [open, setOpen] = useState(false);
    const [abrirServicio, setAbrirServicio] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)

    const abrirModal = () => {
        setIsModalOpen(true);
    };

    const cerrarModal = () => {
        setIsModalOpen(false);
    };



    useEffect(() => {
        const obtenerTicket = async () => {
            const GetTickets = await Get("/postTicket")
            setTick(GetTickets)
            console.log(tick);
        }
        obtenerTicket()
    }, [])




    return (
        <div className='fondo-tickets'>

            <div>



                <div className='container-logo'>
                    <div className='container-logo2'>

                        {/* <button className='icon-buscar-tickets'><FaMagnifyingGlass /> </button> */}

                    </div>
                </div>


                <button className='btn-crear-ticket' >Crear Ticket</button>

                <div className='contenedor-menu-tickets'>
                    <div className='opciones-menu'>
                        <button onClick={abrirModal} className='menu'><h6 style={{ fontSize: "120%" }}> ➕ Agregar servicios</h6>
                            <ModalServicios isOpen={isModalOpen} onClose={cerrarModal} />
                        </button>

                    </div>

                </div>


                <div className='cont-tickets' >

                    <div className='cont-nuevos'>

                        <ListaTickets ticketsAPI={tick} />

                    </div>


                </div>




                {/* */}
            </div>




            <div className='foo'>

                <Footer />

            </div>

        </div>

    )
}

export default ToDoTickets
