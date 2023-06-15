
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import CardFeaturedProducts from "../CardFeaturedProducts/CardFeaturedProducts";
import { getAllProducts } from "../Redux/Actions/index.jsx";
import featuredProducts from './FeaturedProducts.module.css';
import ArrowRight from '../../assets/shared/arrowRight.svg'
import ArrowLeft from '../../assets/shared/arrowLeft.svg'

const FeaturedProducts = () => {
    const dispatch = useDispatch()

    const products = useSelector(state => state.products);
    console.log("PRODUCTOS DESTACADOS: ", products)

    useEffect(() => {
        dispatch(getAllProducts());
    }, [dispatch]);

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % (products.rows?.length || 1));
    };

    const handlePrev = () => {
        setCurrentIndex(prevIndex => (prevIndex - 1 + (products.rows?.length || 1)) % (products.rows?.length || 1));
    };

    const carouselSettingsMobile = {
        showStatus: false,
        showThumbs: false,
        infiniteLoop: true,
        interval: 4000,
        autoPlay: true,
        stopOnHover: true,
    };

    const displayedProducts = products.rows?.slice(0, 4);

    return (
        <div className={featuredProducts.featuredProducts}>
            <h2 className={featuredProducts.titleProducts}>
                Productos destacados
            </h2>
            <div className={featuredProducts.cardContainerWeb}>
                <div className={featuredProducts.carouselButtons}>
                    <button className={featuredProducts.carouselButtonPrev} onClick={handlePrev}><img src={ArrowLeft} /></button>
                </div>
                <div className={featuredProducts.cardRow}> 
                    {displayedProducts?.map((e, index) => (
                        <CardFeaturedProducts
                            img={e.image1}
                            name={e.productName}
                            price={e.salePrice}
                            categories={e.category.name}
                            key={e.id}
                        />
                    ))}
                </div>
                <div className={featuredProducts.carouselButtons}>
                    <button className={featuredProducts.carouselButtonNext} onClick={handleNext}><img src={ArrowRight} /></button>
                </div>
            </div>
            {/* <div className={`${featuredProducts.cardContainerMobile} customCarousel`}>
                <Carousel
                    {...carouselSettingsMobile}
                    renderIndicator={(onClickHandler, isSelected) => (
                        <li
                            className={`dot ${isSelected ? 'selected' : ''}`}
                            style={{ cursor: 'pointer' }}
                            onClick={onClickHandler}
                        />
                    )}
                >
                    {products.rows?.map(e => (
                        <CardFeaturedProducts
                            img={e.image1}
                            name={e.productName}
                            price={e.salePrice}
                            categories={e.category.name}
                            key={e.id}
                        />
                    ))}
                </Carousel>
            </div> */}
        </div>
    );
}

export default FeaturedProducts;


