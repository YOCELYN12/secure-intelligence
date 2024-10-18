import React from 'react'
import Tickets from './Tickets'
import { Delete } from '../Fetch/Fetch'


const ListaTickets = ({ticketsAPI}) => {
    const DeleteTickets = async(id) => {
        await Delete(id, "/DeleteTicket/")
    }

    return (
        <div>
            {ticketsAPI.map((tick) => (
                <Tickets 
                    key={tick.ID_Tickets}
                    Nombre={tick.Nombre}
                    Apellido={tick.Apellido}
                    Correo={tick.Correo}
                    ServicioSeleccionado={tick.Tipo_de_servicio}
                    Numero_de_telefono={tick.Numero_de_telefono}
                    Empresa={tick.Empresa}
                    Descripcion={tick.Descripcion}

                    Eliminar={() => {
                        DeleteTickets(tick.ID_Tickets)
                    }}

                    editarTicket={()=> editarBTN(tick.ID_Tickets)}
                    

                />
            ))}

        </div>
    )
}

export default ListaTickets
