import React, { useState } from 'react';
import Tickets from './Tickets';
import { Delete } from '../Fetch/Fetch';
import ModalEditarTicket from './ModalTicket';

const ListaTickets = ({ ticketsAPI }) => {
    
    const [modalVisible, setModalVisible] = useState(false);
    const [ticketSeleccionado, setTicketSeleccionado] = useState(null);

    const DeleteTickets = async (id) => {
        await Delete(id, "/DeleteTicket/");
    };

    const abrirModal = (ticket) => {
        setTicketSeleccionado(ticket);
        setModalVisible(true);
    };

    const cerrarModal = () => {
        setModalVisible(false);
        setTicketSeleccionado(null);
    };

    return (
        <div>
            {ticketsAPI.map((tick) => (
                <Tickets 
                    key={tick.ID_Tickets}
                    Nombre={tick.Nombre}
                    Apellido={tick.Apellido}
                    Correo={tick.Correo}
                    ServicioSeleccionado={tick.Nombre}
                    Numero_de_telefono={tick.Numero_de_telefono}
                    Empresa={tick.Empresa}
                    Descripcion={tick.Descripcion}
                    Eliminar={() => DeleteTickets(tick.ID_Tickets)}
                    onEdit={() => abrirModal(tick)}
                />
            ))}
            {modalVisible && (
                <ModalEditarTicket ticket={ticketSeleccionado} onClose={cerrarModal} />
            )}
        </div>
    );
};

export default ListaTickets;
