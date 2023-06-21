import React from "react";
import navbarAdmin from "./NavbarAdmin.module.css";

const NavbarAdmin = ({ navbarStyle }) => {
  return (
    <nav className={navbarAdmin.navbarAdmin}>
      <h3 className={navbarAdmin.nombre}>¡Hola, @nombre!</h3>
      <ul className={navbarAdmin.ulNavbarAdminWeb}>
        <li className={navbarAdmin.btnAdminCrear}><a style={{textDecoration:"none", color:"#FFFFFF"}} href="#crear-producto">Crear producto</a></li>
        <li className={navbarAdmin.btnAdminCrear}><a style={{textDecoration:"none", color:"#FFFFFF"}} href="#modificar-producto">Modificar producto</a></li>
      </ul>
      {/* <button className={navbarAdmin.btnAdminCrear}>Crear producto</button>
      <button className={navbarAdmin.btnAdminModificar}>Modificar producto</button>
      <button className={navbarAdmin.btnAdminCrear}>Crear categoría</button> */}
    </nav>
  );
};

export default NavbarAdmin;
