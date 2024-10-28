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
    const [tickAbiertos, setTickAbiertos] = useState([])
    // Crear el estado de cerrados NO SE LE OLVIDE PONERLE USE STATE
    const [TicketsTerminados, setTicketsTerminados] = useState([])
    const [OpenCerrados, setOpenCerrados] = useState(false)
    const [open, setOpen] = useState(true);
    // const [abrirServicio, setAbrirServicio] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)


    const abrirModal = () => {
        setIsModalOpen(true);
    };

    const cerrarModal = () => {
        setIsModalOpen(false);
    };

    const TicketsCerrados = () => {
        setOpenCerrados(true)
    }

    const TicketsAbiertos = () => {
        setOpenCerrados(false)
        setOpen(true)
    }


    useEffect(() => {
        const obtenerTicket = async () => {
            const GetTickets = await Get("/postTicket")
            setTick(GetTickets)
        }
        obtenerTicket()

        const obtenerTicketAbiertos = async () => {
            const ticketsxAtender = tick.filter((estadoTicket) => estadoTicket.estado === true);
            setTickAbiertos(ticketsxAtender)

        }
        obtenerTicketAbiertos()

        // CREAR LA LOGICA PARA LOS FALSOS
        const obtenerTicketTerminados = async () => {
            const ticketsAtendidos = tick.filter((estadoTicket => estadoTicket.estado === false));
            setTicketsTerminados(ticketsAtendidos)
        }
        obtenerTicketTerminados()

        console.log(TicketsTerminados);

    }, [tick])

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

                        <button onClick={TicketsCerrados} className='menu'>
                            <h6 style={{ fontSize: "120%" }}> ❌ Tickets cerrados</h6>
                        </button>
                        
                         <button onClick={TicketsAbiertos} className='menu'>
                            <h6 style={{ fontSize: "120%" }}> ➕ Tickets Abiertos</h6>
                        </button>


                    </div>

                </div>


                <div className='cont-tickets' >



                    {/* Mostrar el renderizado */}



                    <div className='cont-nuevos'>
                        {open && OpenCerrados == false &&
                            <ListaTickets ticketsAPI={tickAbiertos} />
                        }

                        {OpenCerrados &&
                            <ListaTickets ticketsAPI={TicketsTerminados} />
                        }
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
