import Approach from "../../Approach/Approach"
import CrearProducto from "../Productos/CrearProducto/CrearProducto"
import ModificarProductos from "../Productos/ModificarProductos/ModificarProductos"
import homeAdmin from "./HomeAdmin.module.css"


const HomeAdmin = () => {
  return (
    <div className={homeAdmin.homeAdmin}>
        {/* <h1 className={homeAdmin.titleHomeAdmin}>Home admin</h1> */}
        <CrearProducto />
        <ModificarProductos />
    </div>
  )
}

export default HomeAdmin