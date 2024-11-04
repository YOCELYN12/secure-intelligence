import React, { useState } from 'react';
import Tickets from './Tickets';
import { Delete, Patch } from '../Fetch/Fetch';
import ModalEditarTicket from './ModalTicket';
import '../Styles/ToDoTickets.css'


const ListaTickets = ({ ticketsAPI }) => {
      // Hooks de estado para gestionar la visibilidad del modal y el ticket seleccionado
    const [modalVisible, setModalVisible] = useState(false);
    const [ticketSeleccionado, setTicketSeleccionado] = useState(null);
    const [ticketCerrado, setTicketCerrado] = useState(false)
    const [ticketsClose, setTicketsClose] = useState([])

       /** Elimina un ticket por su ID, el ID del ticket a eliminar.**/
   
    const DeleteTickets = async (id) => {
        await Delete(id, "/DeleteTicket/");
    };

    // Abre el modal para editar el ticket seleccionado.
    const abrirModal = ( ticket) => {
        setTicketSeleccionado(ticket); // Establece el ticket seleccionado
        setModalVisible(true); // Muestra el modal
    };
    

    // Cierra el modal de edición y reinicia el ticket seleccionado.
    const cerrarModal = () => {
        setModalVisible(false);
        setTicketSeleccionado(null);
    };
    
    // Cambia el estado del ticket seleccionado (abierto/cerrado).
    const CloseTicket = async (ticket) => {
        const ticketActualizar = {
            estado: !ticket.estado
        }
        const peticion = await Patch(`/UpdateTicket/${ticket.ID_Tickets}`, ticketActualizar)
       

    }




    return (
        <div className='cont-lista-tickets'>
            {/* Mapea los tickets y renderiza el componente Tickets para cada uno */}
            {ticketsAPI.map((tick) => (
                <Tickets
                    key={tick.ID_Tickets} // Clave única para cada ticket
                    Nombre={tick.Nombre}  // Nombre del ticket
                    Apellido={tick.Apellido}  // Apellido del ticket
                    Correo={tick.Correo}  // Correo del ticket
                    ServicioSeleccionado={tick.ID_tipo_servicio}  // Tipo de servicio seleccionado
                    Numero_de_telefono={tick.Numero_de_telefono}  // Número de teléfono
                    Empresa={tick.Empresa} // Nombre de la empresa
                    Descripcion={tick.Descripcion} // Descripción
                    Eliminar={() => DeleteTickets(tick.ID_Tickets)} // Función de eliminación
                    onEdit={() => abrirModal(tick)} // Función de edición
                    cerrarTicket={() => CloseTicket(tick)} // Función para cerrar el ticket
                />
            ))}

            {/* Renderizado condicional del modal para editar un ticket */}
            {modalVisible && (
                <ModalEditarTicket ticket={ticketSeleccionado} onClose={cerrarModal} />
            )}

        </div>
    );
};

export default ListaTickets;
