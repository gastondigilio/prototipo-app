import './Home.css';
import React, { useEffect, useState } from "react";
// import Products from '../Products/Products';
import Navbar from '../Navbar/Navbar';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Approach from '../Approach/Approach';

function Home() {
    const [scrollY, setScrollY] = useState(0);
    const [navbarStyle, setNavbarStyle] = useState("");

    useEffect(() => {
        window.addEventListener("scroll", () => {
            let scroll = window.scrollY;
            setScrollY(scroll);
        });
    }, []);

    useEffect(() => {
        if (scrollY >= 30) {
            setNavbarStyle("fixed");
        } else {
            setNavbarStyle("");
        }
    }, [scrollY]);


    return (
        <div className="App">
            <Navbar headNavbar={true} />
            {navbarStyle === "fixed" && <Navbar navbarStyle={navbarStyle} />}
            <Approach />
            <About />
            <Contact />
            <Footer />
        </div>
    );
}

export default Home;
