import products from "./Products.module.css";

const Products = () => {

  return (
    <div id="products" className={products.products}>
      <h2 className={products.titleProducts}>
        Products
      </h2>
      <div className={products.cardContainerWeb}>
        <div className={products.card}>
          <a href="/products/detail">
            <h3>Hosting</h3>
            <hr />
            {/* <img src={Formas1} alt="" /> */}
            <p className={products.description}>
              Lorem ipsum dolor sit, amet consectetur.
            </p>
          </a>
        </div>
        <div className={products.card}>
          <h3>Web Page</h3>
          <hr />
          {/* <img src={Formas3} alt="" /> */}
          <p className={products.description}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br />
            {/* <br />
            Doloribus, tenetur. */}
          </p>
        </div>
        <div className={products.card}>
          <h3>Maintenance</h3>
          <hr />
          {/* <img src={Formas2} alt="" /> */}
          <p className={products.description}>
            Lorem ipsum dolor sit, amet consectetur.
          </p>
        </div>
      </div>
      <div className={products.cardContainerMobile}>
        <div className={products.card}>
          <a href="/products/detail">
            <h3>Hosting</h3>
            <hr />
            {/* <img src={Formas1} alt="" /> */}
            <p className={products.description}>
              Lorem ipsum dolor sit, amet consectetur.
            </p>
          </a>
        </div>
        <div className={products.card1}>
          <h3>Web Page</h3>
          <hr />
          {/* <img src={Formas3} alt="" /> */}
          <p className={products.description}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br />
            {/* <br />
            Doloribus, tenetur. */}
          </p>
        </div>
        <div className={products.card1}>
          <h3>Maintenance</h3>
          <hr />
          {/* <img src={Formas2} alt="" /> */}
          <p className={products.description}>
            Lorem ipsum dolor sit, amet consectetur.
          </p>
        </div>
      </div>
      {/* <div >  */}
      <a href="/home" className={products.btnVolver}>Volver</a>
      {/* </div> */}
    </div>
  );
};

export default Products;
