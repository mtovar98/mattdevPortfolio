import { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Navbar = () => {
    const [isVisible, setIsVisible] = useState(true);
    const lastScrollY = useRef(window.scrollY); // guardamos el valor actual del scroll

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            

            if (currentScrollY > lastScrollY.current) {
                setIsVisible(false); // ocultar si el usuario baja
            } else {
                setIsVisible(true); // mostrar si el usuario sube
            }
            lastScrollY.current = currentScrollY; // Actualizar el valor del ultimo scroll
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);


    }, []);
    
    return (
        <header className={`fixed top-0 left-0 right-0 text-col text-[#b4f532] py-4 z-50 transition-transform duration-300 ${
            isVisible ? "translate-y-0" : "-translate-y-full" }`}>

            <motion.div id="navbar" className="container mx-auto flex justify-between items-center text-[11px]"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 1, ease: "easeOut", delay: 1.3 }}
            >
                <nav>
                    <ul className="flex space-x-6">
                        <li>
                            <Link to="home" smooth={true} duration={500} className="hover:text-[#b4f532] cursor-pointer hover:shadow-[0_0_10px_#b4f532]">Home</Link>
                        </li>
                        <li>
                            <Link to="about" smooth={true} duration={500} className="hover:text-[#b4f532] cursor-pointer hover:font-bold">About me</Link>
                        </li>
                        <li>
                            <Link to="projects" smooth={true} duration={500} className="hover:text-[#b4f532] cursor-pointer hover:shadow-[0_0_10px_#b4f532] hover:font-bold">Projects</Link>
                        </li>
                        <li>
                            <Link to="contact" smooth={true} duration={500} className="hover:text-[#b4f532] cursor-pointer">Contact</Link>
                        </li>
                    </ul>
                </nav>
                <div className="ml-auto">
                    <p className="opacity-60">Hello, my name is</p>
                    <p className="font-bold text-[12px] text-center">Miguel Tovar</p>
                </div>
            </motion.div>
        </header>      
    );
};




export default Navbar;