import home from './Home.module.css';
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Approach from '../Approach/Approach';
import MediosDePago from '../MediosDePago/MediosDePago';
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts';
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
            {/* <a href="#" class="btn btn-lg btn-primary btn-lg-square rounded-0 back-to-top"><i class="bi bi-arrow-up"></i></a> */}
            <Approach />
            <FeaturedProducts />
            <MediosDePago />
        </div>
    );
}

export default Home;
