import { React } from "react";
import cardProducts from "./CardProducts.module.css";

export default function CardProducts({ name, price, categories, img }) {

    return (
        // <div className={cardProducts.container} >

        //     <div className={cardProducts.contentImg} >

        //         <img src={img} />

        //     </div>

        //     <h3>{name}</h3>
        //     <p>{categories}</p>
        //     <p><b>$ {price},00</b></p>
        // </div>

        <div className={cardProducts.card}>
            <img src={img} alt="Imagen" className={cardProducts.image} />
            <div className={cardProducts.content}>
                <p className={cardProducts.categories}>{categories}</p>
                <h3 className={cardProducts.title}>{name}</h3>
                <p className={cardProducts.price}>${price},00</p>
            </div>
            <button className={cardProducts.btn}>VER MAS</button>
        </div>
    )

}