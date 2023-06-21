import React, { useState } from "react";
import cardCategories from "./CardCategories.module.css";

export default function CardCategories({ name, img }) {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div
      className={cardCategories.card}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={img} alt="Imagen" className={cardCategories.image} />
      {hovered && <h3 className={cardCategories.name}>{name}</h3>}
    </div>
  );
}
