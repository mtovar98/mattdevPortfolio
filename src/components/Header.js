import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [menuOpen, setMenuOpen] = useState(false);
    const lastScrollY = useRef(window.scrollY);

    useEffect(() => {
        const handleScroll = () => {
            if (!menuOpen) {
                const currentScrollY = window.scrollY;
                setIsVisible(currentScrollY < lastScrollY.current);
                lastScrollY.current = currentScrollY;
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [menuOpen]);

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = "hidden"; // Bloquea el scroll cuando el menú está abierto
        } else {
            document.body.style.overflow = "auto"; // Restaura el scroll cuando el menú se cierra
        }
    }, [menuOpen]);

    return (
        <header className={`fixed top-0 left-0 right-0 text-[#b4f532] py-4 z-50 transition-transform duration-300 ${
            isVisible ? "translate-y-0" : "-translate-y-full"
        } ${menuOpen ? "bg-[#101010]" : "bg-transparent lg:bg-transparent"}`}>
            
            <motion.div 
                id="navbar" 
                className="container mx-auto xs:w-[45vh] xl:w-full lg:w-full flex justify-between items-center px-4 xs:px-0 lg:px-8"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 1, ease: "easeOut", delay: 1.3 }}
            >
                {/* Logo + Info en pantallas grandes */}
                <div className="flex items-center xl:space-x-14 xl:ml-6 xl:mt-6 xs:space-x-2 xs:ml-2 xs:mt-2">
                    {/* Logo */}
                    <a href="#home">
                        <img 
                            alt="Logo" 
                            src="/images/logoHeader.png"
                            className="xl:w-30 xl:h-12 xs:w-18 xs:h-8"
                        />
                    </a>

                    {/* Texto "Available for freelance" solo en pantallas grandes */}
                    <div className="hidden underline lg:block text-[#c2cad0] text-[12px]">
                        <p>AVAILABLE FOR FREELANCE</p>
                        <p>MATTDEV9898@GMAIL.COM</p>
                        <p>+57 312 5687025</p>
                    </div>
                </div>

                {/* Texto "Hello, I'm MATT" solo en pantallas grandes */}
                <p className="hidden lg:block font-robotoMono text-[20px]">Hello, I'm MATT</p>

                {/* Botón menú hamburguesa (abre y cierra) en pantallas pequeñas */}
                <div className="lg:hidden">
                    <button onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <FiX size={20} className="text-[#b4f532]" /> : <FiMenu size={20} className="text-[#b4f532]" />}
                    </button>
                </div>
            </motion.div>

            {/* Menú hamburguesa en pantallas pequeñas */}
            {menuOpen && (
                <div className="fixed inset-0 bg-[#101010] xs:min-h-screen xs:w-[40vh] bg-opacity-90 flex flex-col items-start px-6 py-8 z-50">
                    
                    {/* Botón de cierre (el mismo botón de menú ahora convertido en "X") */}
                    

                    {/* Contenido del Menú */}
                    <div className="mt-6 text-[#b4f532] text-[14px]">
                        <p>Hello, I'm MATT</p>
                    </div>
                    
                    <div className="mt-4 text-[#c2cad0] text-[10px]">
                        <p>AVAILABLE FOR FREELANCE</p>
                        <p>MATTDEV9898@GMAIL.COM</p>
                        <p>+57 312 5687025</p>
                    </div>

                    {/* Links del Menú */}
                    <nav className="mt-4 w-full">
                        <ul className="space-y-2 underline text-[#b4f532] text-[10px]">
                            <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
                            <li><a href="#about" onClick={() => setMenuOpen(false)}>About Me</a></li>
                            <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
                            <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
                        </ul>
                    </nav>
                </div>
            )}
        </header> 
    );
};

export default Navbar;
