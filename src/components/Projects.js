import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Projects() {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(1); // La central inicia en index 1

  const projects = [
    { id: 1, image: "/images/imgDer.jpeg", link: "/proyecto1" },
    { id: 2, image: "/images/imgDer.jpeg", link: "/proyecto2" },
    { id: 3, image: "/images/imgDer.jpeg", link: "/proyecto3" },
  ];

  return (
    <section id="projects" className=" flex flex-col justify-center items-center bg-[#101010] font-robotoMono pt-4">
      
      <div className="w-full px-10">
        <h2 className="text-[30px] text-[#c3cad0] text-center w-full px-20 py-10">PROJECTS</h2>
      </div>
      
      <div
        className="relative flex justify-center items-center w-full max-w-4xl h-[400px]"
        onMouseLeave={() => setActiveIndex(1)} // 👈 Regresa la imagen central al quitar el mouse
      >
        {projects.map((project, index) => {
          // Posiciones relativas para el efecto carrusel
          let position = index - activeIndex;
          let scale = position === 0 ? 1.2 : 1; // La imagen central es más grande
          let zIndex = position === 0 ? 10 : 5; // La imagen central está al frente
          let opacity = position === 0 ? 1 : 0.8; // La central es más visible
          let xOffset = position * 180; // Controla la separación entre imágenes

          return (
            <motion.div
              key={project.id}
              className="absolute cursor-pointer"
              onClick={() => navigate(project.link)}
              onHoverStart={() => setActiveIndex(index)}
              animate={{
                scale,
                zIndex,
                opacity,
                x: xOffset,
              }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <img
                src={project.image}
                alt={`Proyecto ${index + 1}`}
                className="w-[300px] h-auto shadow-lg transition-all"
              />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;