import { motion } from "framer-motion";
import { useState, useEffect } from "react";

function Hero() {
    const fullText = "DEVELOPER";
    const speed = 150; // Velocidad de escritura (ms)
    const pauseTime = 2000; // Tiempo de espera antes de borrar (ms)
    const initialDelay = 2500 // Delay inicial antes de empezar a escribir
    const [text, setText] = useState("");
    const [isTyping, setIsTyping] = useState(false);

    useEffect(() => {
        let index = 0;
        let isDeleting = false;

        const startTyping = () => {
            setIsTyping(true); // Activa la animación después del delay inicial
            const typeWriter = () => {
                if (isDeleting) {
                    setText(""); // Borra todo de golpe
                    setTimeout(() => {
                        isDeleting = false;
                        index = 0; // Reinicia el índice
                        setIsTyping(true);
                        typeWriter();
                    }, speed);
                    return;
                }

                setText(fullText.slice(0, index + 1));
                index++;

                if (index === fullText.length) {
                    setTimeout(() => {
                        isDeleting = true;
                        setIsTyping(false); // Oculta el cursor al borrar
                        typeWriter();
                    }, pauseTime);
                    return;
                }
                setTimeout(typeWriter, speed);
            };
            typeWriter();
        };

        // ⏳ Agregar delay inicial antes de iniciar la animación
        setTimeout(startTyping, initialDelay);
    }, []);



    return (
        <section 
            id="home" 
            className="h-screen bg-[#101010] flex justify-center items-center relative overflow-hidden"
        >
            <div className="absolute w-full h-full inset-0">
            {/* Imagen de fondo con degradado en los bordes */}
            <div className="absolute inset-0 w-full h-full hidden sm:block z-10">
                <img 
                    alt="Imagen Principal" 
                    src="/images/imgPrinci.png" 
                    className="object-contain -translate-x-10 transition-none animate-none"
                />
            </div>
            {/* Imagen exclusiva para mobile */}
            <div className="absolute inset-0 xs:w-[120%] sm:w-[140%] ms:w-[140%] h-full xs:-translate-x-[8%] ms:-translate-x-[18%] sm:-translate-x-[18%] overflow-hidden xl:hidden z-10">
                <img 
                    alt="Imagen Mobile" 
                    src="/images/imgPrinci.png" 
                    className="xs:w-[170%] h-full object-cover transition-none -translate-x-[8%] scale-95 animate-none"
                />
            </div>
                
                {/* Degradado para mezclar la imagen con el fondo */}
                <div className="absolute inset-0 pointer-events-none z-10">
                {/* Degradados en los bordes */}
                    <div className="absolute top-0 left-0 w-full h-[10%] bg-gradient-to-b from-[#101010] to-transparent"></div>
                    <div className="absolute bottom-0 left-0 w-full h-[10%] bg-gradient-to-t from-[#101010] to-transparent"></div>
                    <div className="absolute left-0 top-0 h-full w-[10%] bg-gradient-to-r from-[#101010] to-transparent"></div>
                    <div className="absolute right-0 top-0 h-full w-[10%] bg-gradient-to-l from-[#101010] to-transparent"></div>
                </div>
            </div>
            

            {/* Texto centrado con borde y sin relleno */}
            <motion.h1 
                className="absolute text-[160px] text-transparent uppercase tracking-wider z-10 xs:-translate-x-3 xs:text-[50px] sm:text-[60px] md:text-[120px] lg:text-[160px]"
                style={{WebkitTextStroke: "1px #c3cad0"}}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                transition={{ duration: 1.4 }}
            >
                {text}
                <span className={`blinking-cursor ${isTyping ? "" : ""}`}>_</span>
            </motion.h1>

    
            {/* Contenedor del texto */}
            <motion.div 
                className="absolute bottom-10 w-full text-center text-[#b4f532] z-10"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 1.3 }}
            >
                <h1 className="text-[20px] lg:text-[20px] xl:text-[20px] xs:text-[16px] xs:mb-12 mb-6">
                    NEW PROJECT 01<br/>
                    DEVELOPER<br/>
                    PORTFOLIO  20 / 25<br/>
                </h1>
            </motion.div>
        </section>
    );
}

export default Hero;
