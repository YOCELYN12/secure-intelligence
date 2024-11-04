import React, { useState } from 'react'
import emailjs from 'emailjs-com';
import "../Styles/EmailJS.css"


function EmailJS() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
    });

   
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();


        

       


        emailjs.send('service_hsyfrc4', 'template_1jou0wk', templateParams, 'aAFEAp-nZ-DPo89L6')
            .then((response) => {
                console.log('Correo enviado!', response.status, response.text);
            })
            .catch((error) => {
                console.error('Error al enviar el correo:', error);
            });
    };


   

    return (
        <div>
            <form onSubmit={handleSubmit}>

                <div className='from-fondo'>
                    <div className='from'>
                        <div>
                            <h1>Envianos un correo con tu opinion</h1>
                        </div>

                        <br />



                        <label >
                            <p className='names' >Nombre:</p>
                            <input className='int' type="text" name="name" value={formData.name} onChange={handleChange} required />
                        </label>
                        <br />
                        <br />


                        <label>

                            <p className='names'> Email: </p>

                            <input className='int' type="email" name="email" value={formData.email} onChange={handleChange} required />
                        </label>


                        <br />
                        <br />


                        <label>
                            <p className='names'>Teléfono:  </p>

                            <input className='int' type="text" name="phone" value={formData.phone} onChange={handleChange} required />
                        </label>
                        <br />
                        <br />
                        <label>
                            <p className='names'>Empresa:  </p>

                            <input className='int' type="text" name="company" value={formData.company} onChange={handleChange} required />
                        </label>


                        <br />


                        <label>
                            <br />
                            <p className='names'> Mensaje:</p>
                            <input className='int' name="message" value={formData.message} onChange={handleChange} required />
                        </label>
                    </div>


                    <br />
                    <div className='btn-servicio-cliente'>
                        
                        <button className='btn-enviar-servicio' type="submit">Enviar</button>
                    </div>


                </div>

            </form>

        </div>
    )
}

export default EmailJS
