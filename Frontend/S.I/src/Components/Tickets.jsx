import React from 'react';
import "../Styles/Tickets.css";


const Tickets = ({ Nombre, Apellido, Correo, ServicioSeleccionado, Numero_de_telefono, Empresa, Descripcion, Eliminar, onEdit }) => {

    return (
        <div className='cont-Padre-ticket'>
            <div className="accordion" id="accordionExample" style={{ maxWidth:"100%" }}>
                <div className="accordion-item" >
                    <h2 className="accordion-header" >
                        <button   style={{backgroundColor:"rgba(38, 35, 30, 0.758)"}}
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                        >
                            Tipo de servicio: {ServicioSeleccionado}
                        </button>
                    </h2>
                    <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        data-bs-parent="#accordionExample"
                        
                    >
                        <div className="accordion-body" style={{backgroundColor:"rgba(28, 30, 30, 0.758)"}}>

                            <div className='cont-Hijo-ticket'>
                                <p> Nombre: {Nombre}</p>
                                <p> Apellido: {Apellido}</p>
                                <p> Correo: {Correo}</p>

                            </div>

                            <div className='cont-Hijo-ticket'>

                                <p> Servicio: {ServicioSeleccionado}</p>
                                <p> Telefono: {Numero_de_telefono}</p>
                                <p> Empresa:{Empresa}</p>
                            </div>

                            <div className='cont-ticket-descripcion'>
                                <p> Descripcion: {Descripcion}</p>
                            </div>

                            <div className='btn-tickets'>
                                <button style={{ border: "none", backgroundColor: "transparent" }} onClick={Eliminar}>🗑️</button>

                                <button style={{ border: "none", backgroundColor: "transparent" }} onClick={onEdit}>✏️</button>

                            </div>

                            <div className='btn-tickets'>

                                <button style={{ border: "none", backgroundColor: "transparent" }}> ✅</button>

                                <button style={{ border: "none", backgroundColor: "transparent" }} >❌</button>
                            </div>

                        </div>
                    </div>
                </div>

            </div>




        </div>
    );
};

export default Tickets;
