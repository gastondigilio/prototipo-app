import { React } from "react";
import cardProducts from "./CardProducts.module.css";

export default function CardProducts({ name, price, categories, img}) {

    return (
        <div className={cardProducts.container} >

            <div className={cardProducts.contentImg} >

                <img src={img} />

            </div>

            <h3>{name}</h3>
            <p>{categories}</p>
            <p><b>$ {price},00</b></p>
        </div>
    )

}