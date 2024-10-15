import React from 'react'
import Tickets from './Tickets'

const ListaTickets = ({ticketsAPI}) => {
    return (
        <div>
            {ticketsAPI.map((tick) => (
                <Tickets
                    key={tick.id}
                    Nombre={tick.Nombre}
                    Apellido={tick.Apellido}
                    Correo={tick.Correo}
                    ServicioSeleccionado={tick.ServicioSeleccionado}
                    Numero_de_telefono={tick.Numero_de_telefono}
                    Empresa={tick.Empresa}
                    Descripcion={tick.Descripcion}
                />
            ))}

        </div>
    )
}

export default ListaTickets
