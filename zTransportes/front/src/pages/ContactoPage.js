import React, { useState } from 'react';
import '../style/contacto.css';
import axios from 'axios';

const ContactoPage = (props) => {
    const initialForm = {
        nombre: '',
        email: '',
        telefono: '',
        mensaje: ''
    };
    
    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value // Forma dinámica de actualizar el estado
        }));
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        setMsg(''); // Limpia el mensaje antes de enviar
        setSending(true);
        try {
            const response = await axios.post('/api/contacto', formData);
            setSending(false);
            setMsg(response.data.message);
            if (!response.data.error) {
                setFormData(initialForm); // Solo resetear el formulario si no hay error
            }
        } catch (error) {
            setSending(false);
            setMsg('Hubo un error al enviar el formulario. Inténtelo nuevamente.');
        }
    };

    return (
        <main className="holder contacto">
            <div className="columna">
                <h2>Complete el siguiente formulario</h2>
                <form onSubmit={handleSubmit} className="formulario">
                    <p>
                        <label>Nombre</label>
                        <input
                            type="text"
                            name="nombre"
                            value={formData.nombre}
                            onChange={handleChange}
                        />
                    </p>
                    <p>
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </p>
                    <p>
                        <label>Teléfono</label>
                        <input
                            type="tel"
                            name="telefono"
                            value={formData.telefono}
                            onChange={handleChange}
                        />
                    </p>
                    <p>
                        <label>Comentario</label>
                        <textarea
                            name="comentario"
                            value={formData.comentario}
                            onChange={handleChange}
                        ></textarea>
                    </p>
                    <p className="centrar"><input type="submit" value="Enviar" /></p>
                </form>
                {sending ? <p>Enviando...</p> : null}
                {msg ? <p>{msg}</p> : null}
            </div>
            <div className="columna de datos">
                <h2>Otras vías de comunicación</h2>
                <p>También puede contactarse con nosotros usando los siguientes medios</p>
                <ul>
                    <li>Teléfono: 3464440163</li>
                    <li>Email: cristiantravesaro15@gmail.com</li>
                    <li>Facebook: Cris Travesaro</li>
                    <li>Twitter: Cristian_Travesaro</li>
                    <li>Skype: Cris_Travesaro</li>
                </ul>
            </div>
        </main>
    );
};

export default ContactoPage;
