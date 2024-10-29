import React, { useState } from 'react'

import emailjs from 'emailjs-com';

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

        const templateParams = {
            from_name: formData.name,
            from_email: formData.email,
            phone: formData.phone,
            company: formData.company,
            message: formData.message,
        };

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
                <label>
                    Nombre:
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                </label>
                <br />
                <label>
                    Email:
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </label>
                <br />
                <label>
                    Teléfono:
                    <input type="text" name="phone" value={formData.phone} onChange={handleChange} required />
                </label>
                <br />
                <label>
                    Empresa:
                    <input type="text" name="company" value={formData.company} onChange={handleChange} required />
                </label>
                <br />
                <label>
                    Mensaje:
                    <textarea name="message" value={formData.message} onChange={handleChange} required />
                </label>
                <br />
                <button type="submit">Enviar</button>
            </form>

        </div>
    )
}

export default EmailJS
