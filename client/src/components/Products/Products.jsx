import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import CardProducts from "../CardProducts/CardProducts";
import { getAllProducts } from "../Redux/Actions/index.jsx";
import productsSt from "./Products.module.css";
import ArrowLeft from '../../assets/shared/arrowLeft.svg'

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop } = document.documentElement || document.body;
      if (scrollTop > 100) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div id="products" className={productsSt.products}>
      {/* <h2 className={productsSt.titleProducts}>Products</h2> */}
      <div className="container">
        <h1 className="display-3 mb-3 animated slideInDown" style={{color:"#3483FA" }}>Products</h1>
        <nav aria-label="breadcrumb" className="animated slideInDown">
          <ol className="breadcrumb text-uppercase">
            <li className="breadcrumb-item" style={{color:"#3483FA"}}><a style={{textDecoration:"none", color:"inherit"}} href="/home">Home</a></li>
            <li className="breadcrumb-item active" style={{color:"#3483FA"}} aria-current="page">Products</li>
          </ol>
        </nav>
      </div>
      <div className={productsSt.cardContainerWeb}>
        {products.rows?.map((e) => (
          <CardProducts
            img={e.image1}
            name={e.productName}
            price={e.salePrice}
            categories={e.category.name}
            key={e.id}
          />
        ))}
      </div>
      <a href="/home" className={productsSt.btnVolver}>
        Volver
      </a>
      {showScrollButton && (
        <div className={productsSt.scrollButton} onClick={handleScrollToTop}>
          <img src={ArrowLeft} />
        </div>
      )}
    </div>
  );
};

export default Products;
