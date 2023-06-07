
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import contact from './Contact.module.css';
const {
  TEMPLATE_ID, SERVICE_ID, USER_ID,
} = process.env;

const Contact = () => {
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSending(true);

    const serviceID = 'service_zt9xe3a';
    const templateID = 'template_0vj7qks';
    const userID = 'ChlyJXXBOC-gjM_lR';

    const templateParams = {
      sender_name: senderName,
      sender_email: senderEmail,
      message: message,
    };

    emailjs
      .send(serviceID, templateID, templateParams, userID)
      .then(() => {
        setIsSending(false);
        setIsSent(true);
        setSenderName('');
        setSenderEmail('');
        setMessage('');
      })
      .catch((error) => {
        setIsSending(false);
        console.error('Error al enviar el correo:', error);
      });
  };

  return (
    <div className={contact.container}>
      <h2>Contacto</h2>
      <div className={contact.contactText}>
        <div className={contact.divTexto}>
          <p className={contact.primerTexto}>QUEREMOS ACERCARTE LA MEJOR SOLUCIÓN PARA AGILIZAR TU EMPRESA.</p>
          <p className={contact.segundoTexto}>Podés solicitarnos una demo de producto o una reunión con nuestros especialistas en desarrollos a medida para poder brindarte la solución en tecnología que tu empresa necesita.</p>
        </div>
      </div>
      {isSent ? (
        <p>¡Mensaje enviado correctamente!</p>
      ) : (
        <form className={contact.form} onSubmit={handleSubmit}>
          <label htmlFor="senderName">Nombre:</label>
          <input
            type="text"
            id="senderName"
            value={senderName}
            onChange={(e) => setSenderName(e.target.value)}
            required
          />

          <label htmlFor="senderEmail">Email:</label>
          <input
            type="email"
            id="senderEmail"
            value={senderEmail}
            onChange={(e) => setSenderEmail(e.target.value)}
            required
          />

          <label htmlFor="message">Mensaje:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />

          <button type="submit" className={isSending ? contact.disabledButton : ''} disabled={isSending}>
            Enviar
          </button>
        </form>
      )}
    </div>
  );
};

export default Contact;
