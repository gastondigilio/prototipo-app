import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import approach from './Approach.module.css';
import BannerAuto from '../../assets/Approach/bannerAuto.jpg';
import BannerAuto1 from '../../assets/Approach/bannerAuto2.png';

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
      <div className={approach.carouselContainer}>
        <Carousel {...carouselSettings}>
          <div>
            <img src={BannerAuto} alt="Imagen 1" />
          </div>
          <div>
            <img src={BannerAuto1} alt="Imagen 2" />
          </div>
          <div>
            <img src={BannerAuto} alt="Imagen 3" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Approach;
