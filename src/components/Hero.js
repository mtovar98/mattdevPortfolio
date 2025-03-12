import { motion, useMotionValue } from "framer-motion";
import React, { useState } from "react";

function Hero() {

    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseMove = (e) => {
        if (!isHovering) return;

        const rect = e.currentTarget.getBoundingClientRect();
        const offsetX = e.clientX - rect.left;
        const offsetY = e.clientY - rect.top;

        const moveX = (offsetX - rect.width / 2) * 0.01; // Ajusta la intensidad del movimiento
        const moveY = (offsetY - rect.height / 2) * 0.01;

        x.set(moveX);
        y.set(moveY);
    };


    return (
        <section id="home" className="h-screen bg-[#1c1c1c] flex flex-col justify-center items-center bg-cover bg-center text-[#b4f532] text-left py-20" >
            <div className="grid grid-cols-1 md:grid-cols-[20%_85%] gap-16 w-[90%] h-[85vh] px-10 relative">
                <motion.div className="flex flex-col justify-center relative mb-20 z-10"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 50 }}
                        transition={{ duration: 1, ease: "easeOut", delay: 1.3 }}                        
                >
                    <h1 className="text-2xl mt-[-80px]">
                        NEW PROJECT 01<br/>
                        TECHNOLOGY<br/>
                        PORTFOLIO<br/>
                        20  /  25
                    </h1>
                    <img alt="logo" src="/images/logo.png" className="absolute bottom-[-60px] left-0 w-[500px] max-w-none z-20"></img>
                </motion.div>


                <div 
                    className="flex justify-center items-center w-full left-10 relative overflow-hidden rounded-2xl"
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => { setIsHovering(false); x.set(0); y.set(0); }}
                    onMouseMove={handleMouseMove}
                    style={{ width: "100%", maxWidth: "85%", height: "80vh" }}
                >
                    <motion.img 
                        alt="Imagen Principal" 
                        src="/images/fotoPrinci.png" 
                        className="w-full h-full object-cover "
                        style={{ x, y, scale: 1 } }
                        transition={{ type: "spring", stiffness: 100, damping: 10 }}
                    />
                   
                    <motion.div className="absolute bottom-4 right-0 text-[#b4f532] px-10 py-2 rounded-lg text-2xl"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 50 }}
                        transition={{ duration: 1, ease: "easeOut", delay: 1.3 }} 
                    >
                        01 / PORTFOLIO 20/25
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default Hero;