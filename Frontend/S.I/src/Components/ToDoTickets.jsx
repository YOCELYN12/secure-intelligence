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
    const [TickCerrados, setTickCerrados] = useState(false)  // constante que indica si se deben mostrar los tickets cerrados
    const [open, setOpen] = useState(true); //constante para mostrar los tickets abiertos
    const [ticksBusqueda, setTicksBusqueda] = useState([]) //constnte que trae de la API los datos solicitados por la barra de busqueda
    const [isModalOpen, setIsModalOpen] = useState(false)  //Controla la apertura del modal
    const [encontrado, setEncontrado] = useState(false) //constante para el renderizado condicional que se activa al dar click
    const [intBarra, setIntBarra] = useState() //guarda los datos ingresados por el usuario 

     // Función para abrir el modal
    const abrirModal = () => {
        setIsModalOpen(true);
    };
    
    // Función para cerrar el modal
    const cerrarModal = () => {
        setIsModalOpen(false);
    };

    // Función para mostrar tickets cerrados
    const TicketsCerrados = () => {
        setTickCerrados(true)
        setOpen(false)
        setEncontrado(false)
    }
    
    // Función para mostrar tickets abiertos
    const TicketsAbiertos = () => {
        setTickCerrados(false)
        setOpen(true)
    }

    // Efecto que se ejecuta al montar el componente o al cambiar el estado de tick
    useEffect(() => {
         // Función asíncrona para obtener tickets de la API
        const obtenerTicket = async () => {
            const GetTickets = await Get("/postTicket/")
            setTick(GetTickets)
        }
        obtenerTicket()

         // Filtra los tickets abiertos y actualiza el estado
        const obtenerTicketAbiertos = async () => {
            const ticketsxAtender = tick.filter((estadoTicket) => estadoTicket.estado === true);
            setTickAbiertos(ticketsxAtender)

        }
        obtenerTicketAbiertos()

         // Filtra los tickets cerrados y actualiza el estado
        const obtenerTicketTerminados = async () => {
            const ticketsAtendidos = tick.filter((estadoTicket => estadoTicket.estado === false));
            setTicketsTerminados(ticketsAtendidos)
        }
        obtenerTicketTerminados()
    }, [tick])
    


    // Efecto que se ejecuta al cambiar el estado de intBarra
    useEffect(() => {
        traerDatosBarra()
    }, [intBarra])

    // Función asíncrona que busca tickets basados en el valor de intBarra
    const traerDatosBarra = async () => {
        const ticketsBusqueda = await getBusqueda(intBarra)
        setTicksBusqueda(ticketsBusqueda)
        if (ticketsBusqueda.length > 0) {
            setEncontrado(true)
        }
        else {
            setEncontrado(false)
        }
    }

    return (
        <div className='fondo-tickets'>

            {/* Barra de búsqueda de tickets */}
            <div className='container-logo'>
                <button onClick={traerDatosBarra} className='icon-buscar-tickets' ><FaMagnifyingGlass /></button>
                <input className='int-barra-ticket' type="text" placeholder='Buscar Ticket' value={intBarra} onChange={(e) => setIntBarra(e.target.value)} />
            </div>

            {/* Menú de opciones */}
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

            <div>
                {/* Renderizado de la lista de tickets */}
                {open && TickCerrados === false && encontrado === false &&
                    <ListaTickets ticketsAPI={tickAbiertos} />
                }

                {TickCerrados && encontrado === false &&
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
