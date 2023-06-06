import React from 'react';
import about from './About.module.css';

const About = () => {
  return (
    <div id="about" className={about.about}>
      <h2 className={about.titleAbout}>About us</h2>
      <div className={about.containerText}>
        <p className={about.text}>
          Bienvenidos a nuestra aplicación prototipo, un emocionante proyecto en desarrollo que tiene como objetivo revolucionar la forma en que interactuamos con el mundo digital. Somos un equipo apasionado de profesionales creativos y visionarios que se han unido para crear una experiencia única y atractiva para nuestros usuarios.
        </p>
        <p className={about.text}>
          Nuestro prototipo de aplicación nace de la pasión por la innovación y la búsqueda constante de soluciones creativas a los desafíos actuales. Nos hemos propuesto ofrecer una plataforma que simplifique y mejore la vida de las personas, proporcionando una amplia gama de funcionalidades intuitivas y emocionantes.
        </p>
        <p className={about.text}>
          Con un enfoque centrado en el usuario, nuestro equipo ha trabajado arduamente para diseñar una interfaz elegante y fácil de usar que permita a nuestros usuarios explorar, interactuar y descubrir nuevas posibilidades. Nos esforzamos por brindar una experiencia fluida y personalizada, adaptada a las necesidades individuales de cada usuario.
        </p>
      </div>
    </div>
  );
}

export default About;
