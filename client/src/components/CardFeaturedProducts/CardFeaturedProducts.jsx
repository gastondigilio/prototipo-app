import { React } from "react";
import cardFeaturedProducts from "./CardFeaturedProducts.module.css";

export default function CardFeaturedProducts({ name, price, categories, img }) {

    return (
        <div className={cardFeaturedProducts.card}>
            <img src={img} alt={name} className={cardFeaturedProducts.img} />
            <div className={cardFeaturedProducts.content}>
                <h3 className={cardFeaturedProducts.name}>{name}</h3>
                <p className={cardFeaturedProducts.categories}>
                    dasdsaaaaa asddddddd asdddddddddd asdddddddddddd asdddddddadssda
                </p>
            </div>
        </div>
        // <div className={cardFeaturedProducts.card}>
        //     <img src={img} alt="Imagen" className={cardFeaturedProducts.image} />
        //     <div className={cardFeaturedProducts.content}>
        //         <p className={cardFeaturedProducts.categories}>{categories}</p>
        //         <h3 className={cardFeaturedProducts.title}>{name}</h3>
        //         <p className={cardFeaturedProducts.price}>${price},00</p>
        //     </div>
        //     <button className={cardFeaturedProducts.btn}>VER MAS</button>
        // </div>
    )

}