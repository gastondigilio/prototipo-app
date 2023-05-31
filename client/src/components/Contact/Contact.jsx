import "./Contact.css"
// import emailjs from 'emailjs-com'

const Contact = () => {

  // const sendEmail = (e) => {
  //   e.preventDefault();


  //   emailjs.sendForm('service_b03bhxe', 'template_h28vewp', e.target, 'user_hemxVajsRTQAXOdlZY1u3')
  //     .then((result) => {
  //       console.log(result.text);
  //     }, (error) => {
  //       console.log(error.text);
  //     })
  //   e.target.reset();
  //   alert('Message Sent');
  // };

  return (
    <div id="contact" className="contact">
          <h2 className="titleContact">Contact us</h2>
      <div className="contactContent">
        <div className="contactText">
          <div className="divTexto">
            <p className="primerTexto">QUEREMOS ACERCARTE LA MEJOR SOLUCIÓN PARA AGILIZAR TU EMPRESA.</p>
            <p className="segundoTexto">Podés solicitarnos una demo de producto o una reunión con nuestros especialistas en desarrollos a medida para poder brindarte la solución en tecnología que tu empresa necesita.</p>
          </div>
        </div>
        <form className="contactForm">
          <div className="formContact">
            <div className="divInput">
              <input className="inputContact" placeholder="Name" name="name" required />
            </div>
            <div className="divInput">
              <input className="inputContact" name="email" placeholder="Email" required />
            </div>
            <div className="divInput">
              <input className="inputContact" type="text" name="subject" placeholder="Subject" required />
            </div>
            <div className="divInput">
              <textarea type="text" id="" cols="30" rows="8" name="message" placeholder="Your message" required />
            </div>
            <div>
              <input className="inputBtn" type="submit" value="Send Message" />
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact
