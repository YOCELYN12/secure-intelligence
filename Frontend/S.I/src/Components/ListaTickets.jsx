import React, { useState } from 'react';
import Tickets from './Tickets';
import { Delete, Patch } from '../Fetch/Fetch';
import ModalEditarTicket from './ModalTicket';
import '../Styles/ToDoTickets.css'


const ListaTickets = ({ ticketsAPI }) => {

    const [modalVisible, setModalVisible] = useState(false);
    const [ticketSeleccionado, setTicketSeleccionado] = useState(null);
    const [ticketCerrado, setTicketCerrado] = useState(false)
    const [ticketsClose, setTicketsClose] = useState([])



    const DeleteTickets = async (id) => {
        await Delete(id, "/DeleteTicket/");
    };


    const abrirModal = ( ticket) => {
        setTicketSeleccionado(ticket);
        setModalVisible(true);
    };

    const cerrarModal = () => {
        setModalVisible(false);
        setTicketSeleccionado(null);
    };

    const CloseTicket = async (ticket) => {
        const ticketActualizar = {
            estado: !ticket.estado
        }
        const peticion = await Patch(`/UpdateTicket/${ticket.ID_Tickets}`, ticketActualizar)
        console.log(peticion);

    }




    return (
        <div className='cont-lista-tickets'>
            {ticketsAPI.map((tick) => (
                <Tickets
                    key={tick.ID_Tickets}
                    Nombre={tick.Nombre}
                    Apellido={tick.Apellido}
                    Correo={tick.Correo}
                    ServicioSeleccionado={tick.ID_tipo_servicio}
                    Numero_de_telefono={tick.Numero_de_telefono}
                    Empresa={tick.Empresa}
                    Descripcion={tick.Descripcion}
                    Eliminar={() => DeleteTickets(tick.ID_Tickets)}
                    onEdit={() => abrirModal(tick)}
                    cerrarTicket={() => CloseTicket(tick)}
                />
            ))}
            {modalVisible && (
                <ModalEditarTicket ticket={ticketSeleccionado} onClose={cerrarModal} />
            )}

            {/* {ticketCerrado && (
               
            )} */}
        </div>
    );
};

export default ListaTickets;
