import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CardProducts from "../CardProducts/CardProducts";
import { getAllProducts } from "../Redux/Actions/index.jsx";
import productsSt from "./Products.module.css";

const Products = () => {

  const dispatch = useDispatch()

  const products = useSelector(state => state.products);
  console.log("PRODUCTOS: ", products)

  useEffect(() => {

    dispatch(getAllProducts());

  }, [dispatch]);

  return (
    <div id="products" className={productsSt.products}>
      <h2 className={productsSt.titleProducts}>
        Products
      </h2>
      <div className={productsSt.cardContainerWeb}>
        {
          products.rows?.map(e => <CardProducts img={e.image1} name={e.productName} price={e.salePrice} categories={e.category.name} key={e.id} />)
        }
      </div>
      {/* <div >  */}
      <a href="/home" className={productsSt.btnVolver}>Volver</a>
      {/* </div> */}
    </div>
  );
};

export default Products;
