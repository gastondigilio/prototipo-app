import { React } from "react";
import cardCategories from "./CardCategories.module.css";

export default function CardCategories({ name, img }) {

    return (
        <div className={cardCategories.card}>
            {/* <div > */}
            <img src={img} alt="Imagen" className={cardCategories.image} />
            <h3 className={cardCategories.name}>{name}</h3>
            {/* </div> */}
        </div>
    )

}