import home from './Home.module.css';
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import Products from '../Products/Products';
import Navbar from '../Navbar/Navbar';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Approach from '../Approach/Approach';
import MediosDePago from '../MediosDePago/MediosDePago';
import { getAllProducts } from "../Redux/Actions/index.jsx";

function Home() {
    const dispatch = useDispatch();
    const [scrollY, setScrollY] = useState(0);
    const [navbarStyle, setNavbarStyle] = useState("");
    const products = useSelector(state => state.products);
    console.log("productos", products)

    useEffect(() => {
        dispatch(getAllProducts());
    }, [dispatch]);

    // useEffect(() => {
    //     window.addEventListener("scroll", () => {
    //         let scroll = window.scrollY;
    //         setScrollY(scroll);
    //     });
    // }, []);

    // useEffect(() => {
    //     if (scrollY >= 30) {
    //         setNavbarStyle("fixed");
    //     } else {
    //         setNavbarStyle("");
    //     }
    // }, [scrollY]);


    return (
        <div className={home.App}>
            {/* <Navbar headNavbar={true} />
            {navbarStyle === "fixed" && <Navbar navbarStyle={navbarStyle} />} */}
            <Approach />
            {/* <About /> */}
            {/* <Contact /> */}
            <MediosDePago />
            {/* <Footer /> */}
        </div>
    );
}

export default Home;
