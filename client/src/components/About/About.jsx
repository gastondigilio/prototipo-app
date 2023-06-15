import Efectivo from '../../assets/mediosDePago/efectivo.png'
import React from 'react';
// import about from './About.module.css';
import './About.css'

const About = () => {
  return (
    <div>
      <div class="container-fluid page-header mb-5 py-5">
        <div class="container">
          <h1 class="display-3 mb-3 animated slideInDown" style={{ color: "#3483FA" }}>About Us</h1>
          <nav aria-label="breadcrumb" class="animated slideInDown">
            <ol class="breadcrumb text-uppercase">
              <li class="breadcrumb-item" style={{ color: "#3483FA" }}><a style={{ textDecoration: "none", color: "inherit" }} href="/home">Home</a></li>
              <li class="breadcrumb-item active" style={{ color: "#3483FA" }} aria-current="page">About</li>
            </ol>
          </nav>
        </div>
      </div>
      <div class="containerCards">
        <section class="tiles">
          <article class="style1">
            <span class="image">
              <img src="images/pic01.jpg" alt="" />
            </span>
            <a href="generic.html">
              <h2>Magna</h2>
              <div class="content">
                <p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
              </div>
            </a>
          </article>
          </section>
      </div>


    </div>
    // <div id="about" className={about.about}>
    //   <h2 className={about.titleAbout}>About us</h2>
    //   <div className={about.containerText}>
    //     <p className={about.text}>
    //       Bienvenidos a nuestra aplicación prototipo, un emocionante proyecto en desarrollo que tiene como objetivo revolucionar la forma en que interactuamos con el mundo digital. Somos un equipo apasionado de profesionales creativos y visionarios que se han unido para crear una experiencia única y atractiva para nuestros usuarios.
    //     </p>
    //     <p className={about.text}>
    //       Nuestro prototipo de aplicación nace de la pasión por la innovación y la búsqueda constante de soluciones creativas a los desafíos actuales. Nos hemos propuesto ofrecer una plataforma que simplifique y mejore la vida de las personas, proporcionando una amplia gama de funcionalidades intuitivas y emocionantes.
    //     </p>
    //     <p className={about.text}>
    //       Con un enfoque centrado en el usuario, nuestro equipo ha trabajado arduamente para diseñar una interfaz elegante y fácil de usar que permita a nuestros usuarios explorar, interactuar y descubrir nuevas posibilidades. Nos esforzamos por brindar una experiencia fluida y personalizada, adaptada a las necesidades individuales de cada usuario.
    //     </p>
    //   </div>
    // </div>
  );
}

export default About;
