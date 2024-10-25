import React from 'react';
import "../Styles/Tickets.css";


const Tickets = ({ Nombre, Apellido, Correo, ServicioSeleccionado, Numero_de_telefono, Empresa, Descripcion, Eliminar, onEdit }) => {

    return (
        <div className='cont-Padre-ticket'>
            <div className="accordion" id="accordionExample" style={{ maxWidth:"100%" }}>
                <div className="accordion-item" >
                    <h2 className="accordion-header" >
                        <button  
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
                        <div className="accordion-body">
                            <div className='cont-Hijo-ticket'>
                                <p> <strong>Nombre:</strong> {Nombre}</p>
                                <p> <strong>Apellido:</strong> {Apellido}</p>
                                <p> <strong>Correo:</strong> {Correo}</p>

                            </div>
                            <div className='cont-Hijo-ticket'>

                                <p> <strong> Servicio</strong>: {ServicioSeleccionado}</p>
                                <p> <strong>Telefono: </strong> {Numero_de_telefono}</p>
                                <p> <strong>Empresa:</strong> {Empresa}</p>
                            </div>

                            <div className='cont-ticket-descripcion'>
                                <p> <strong>Descripcion:</strong> {Descripcion}</p>
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
