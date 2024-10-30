import React, { useState, useEffect } from 'react'
import '../Styles/ToDoTickets.css'
import Footer from './Footer'
import { FaMagnifyingGlass } from "react-icons/fa6";
import { Get, getBusqueda } from '../Fetch/Fetch';
import ListaTickets from './ListaTickets';
import { BiMenuAltRight } from "react-icons/bi";
import ModalServicios from './ModalServicios';

function ToDoTickets() {

    const [tick, setTick] = useState([])  //constante que guarda los tickets guardados en la API 

    const [tickAbiertos, setTickAbiertos] = useState([]) //constante que guarda los tickets abiertos  de la API 

    const [TicketsTerminados, setTicketsTerminados] = useState([])//constante que trae de la API los tickets cerrados, los que ya se atendieron

    const [OpenCerrados, setOpenCerrados] = useState(false)
    const [open, setOpen] = useState(true);
    const [ticksBusqueda, setTicksBusqueda] = useState([])
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [encontrado, setEncontrado] = useState(false)

    const [intBarra, setIntBarra] = useState()



    const abrirModal = () => {
        setIsModalOpen(true);
    };

    const cerrarModal = () => {
        setIsModalOpen(false);
    };

    const TicketsCerrados = () => {
        setOpenCerrados(true)
        setOpen(false)
        setEncontrado(false)
    }

    const TicketsAbiertos = () => {
        setOpenCerrados(false)
        setOpen(true)
    }


    useEffect(() => {

        const obtenerTicket = async () => {
            const GetTickets = await Get("/postTicket/")
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

        // CREAR LA LOGICA PARA LOS FALSOS
    }, [tick])

    useEffect(() => {
        traerDatosBarra()
    }, [intBarra])


    const traerDatosBarra = async () => {
        const ticketsBusqueda = await getBusqueda(intBarra)
        setTicksBusqueda(ticketsBusqueda)
        if (ticketsBusqueda.length > 0) {
            setEncontrado(true)
            console.log(`estado del true ${encontrado}`);

        }
        else {
            setEncontrado(false)
            console.log(`estado del false ${encontrado}`);

        }
        console.log(ticksBusqueda);
    }

    return (
        <div className='fondo-tickets'>



            <div className='container-logo'>

                <div className='container-logo2'>

                    <button onClick={traerDatosBarra} className='icon-buscar-tickets'><FaMagnifyingGlass /></button>
                    <input className='into-barra' type="text" value={intBarra} onChange={(e) => setIntBarra(e.target.value)} />

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



            <div className="cont-tickets">
                {/* Mostrar el renderizado */}
                {open && OpenCerrados === false && encontrado === false &&
                    <ListaTickets ticketsAPI={tickAbiertos} />
                }
                {OpenCerrados && encontrado === false &&
                    <ListaTickets ticketsAPI={TicketsTerminados} />

                }
                {encontrado &&
                    <ListaTickets ticketsAPI={ticksBusqueda} />
                }
            </div>

            <footer>
                <Footer />
            </footer>

        </div>

    )
}

export default ToDoTickets
