
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import CardCategories from '../CardCategories/CardCategories.jsx';
import { getAllCategories } from "../Redux/Actions/index.jsx";
import allCategories from './Categories.module.css'

const Categories = () => {
    const dispatch = useDispatch()

    const categories = useSelector(state => state.categories);
    console.log("CATEGORIES: ", categories)

    useEffect(() => {
        dispatch(getAllCategories());
    }, [dispatch]);

    const carouselSettingsMobile = {
        showStatus: false,
        showThumbs: false,
        infiniteLoop: true,
        interval: 4000,
        autoPlay: true,
        stopOnHover: true,
    };

    const displayedProducts = categories?.slice(0, 3);

    return (
        <div className={allCategories.categories}>
            <h2 className={allCategories.titleProducts}>
                Categories
            </h2>
            <button className={allCategories.btn}>See all categories</button>
            <div className={allCategories.cardContainerWeb}>
                <div className={allCategories.cardRow}> 
                    {displayedProducts?.map((e, index) => (
                        <CardCategories
                            img={e.image}
                            name={e.name}
                            key={e.id}
                        />
                    ))}
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

export default Categories;


