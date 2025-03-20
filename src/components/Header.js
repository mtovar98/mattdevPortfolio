import { useState, useEffect, useRef } from "react";
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
                    <ul className="flex mt-6  ml-6 space-x-12">
                        <li>
                            <a href="#home" className="flex items-center">
                                <img 
                                    alt="Imagen Principal" 
                                    src="/images/logoHeader.png"
                                    className="w-30 h-14 "
                                ></img>
                            </a>
                        </li>
                        <li>
                            <div className="ml-[20px] underline font-robotoMono text-[#c2cad0] text-[12px]">
                                <p>AVAILABLE FOR FREELANCE</p>
                                <p>MATTDEV9898@GMAIL.COM</p>
                                <p>+57 312 5687025</p>
                            </div>
                        </li>
                    </ul>
                </nav>
                <div className="ml-auto">
                    <p className="font-robotoMono text-[20px]">Hello, I'm MATT</p>
                </div>
            </motion.div>
        </header>      
    );
};




export default Navbar;