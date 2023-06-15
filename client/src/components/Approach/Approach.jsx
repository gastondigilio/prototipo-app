import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import approach from './Approach.module.css';
// import BannerAuto from '../../assets/Approach/bannerAuto.jpg';
// import BannerAuto1 from '../../assets/Approach/bannerAuto2.png';
import FotoUno from '../../assets/Approach/1.jpg'
import FotoDos from '../../assets/Approach/2.jpg'
import FotoTres from '../../assets/Approach/3.jpg'



const Approach = () => {
  const carouselSettings = {
    showStatus: false,
    showThumbs: false,
    infiniteLoop: true,
    interval: 4000,
    autoPlay: true,
    stopOnHover: true,
  };

  return (
    <div id="approach" className={approach.approach}>
      <div className={approach.carouselContainerWeb}>
        <Carousel {...carouselSettings}>
          <div>
            <img src={FotoUno} alt="Imagen 1" />
          </div>
          <div>
            <img src={FotoDos} alt="Imagen 2" />
          </div>
          <div>
            <img src={FotoTres} alt="Imagen 3" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Approach;
