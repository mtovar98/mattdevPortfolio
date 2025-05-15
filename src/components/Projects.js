import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

function Projects() {
  const navigate = useNavigate();
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0); // Primer proyecto como destacado
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const projects = [
    { id: 1, image: "/images/proj1.png", link: "/proyecto1" },
    { id: 2, image: "/images/proj2.png", link: "/proyecto2" },
  ];

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    // Centrar la primera imagen al cargar
    const child = container.children[0];
    if (child) {
      const scrollLeft =
        child.offsetLeft - container.offsetWidth / 2 + child.offsetWidth / 2;
      container.scrollTo({ left: scrollLeft, behavior: "smooth" });
    }

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const containerWidth = container.offsetWidth;
      const center = scrollLeft + containerWidth / 2;

      let closestIndex = 0;
      let closestDistance = Infinity;

      container.childNodes.forEach((child, index) => {
        const childCenter = child.offsetLeft + child.offsetWidth / 2;
        const distance = Math.abs(center - childCenter);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setActiveIndex(closestIndex);
    };

    container.addEventListener("scroll", handleScroll);
    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      id="projects"
      className="min-h-screen  flex flex-col items-center bg-[#101010] font-robotoMono overflow-hidden sm:py-4"
    >
      <div className="w-full">
        <h2 className="xl:text-[25px] sm:text-[20px] xs:text-[18px] text-[#c3cad0] text-center w-full">
          PROJECTS
        </h2>
      </div>

      {/* Versión Desktop */}
      {!isMobile && (
        <div
          className="relative mt-[12vh] flex justify-center items-center w-full xl:w-[100vh] xl:scale-100 max-w-2xl xl:h-[450px] lg:h-[400px]"
          onMouseLeave={() => setActiveIndex(0)}
        >
          {projects.map((project, index) => {
            let position = index - activeIndex;
            let scale = position === 0 ? 1.2 : 1;
            let zIndex = position === 0 ? 10 : 5;
            let opacity = position === 0 ? 1 : 0.8;
            let xOffset = position * 280;

            return (
              <motion.div
                key={project.id}
                className="absolute cursor-pointer"
                onClick={() => navigate(project.link)}
                onHoverStart={() => setActiveIndex(index)}
                animate={{ scale, zIndex, opacity, x: xOffset }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                <img
                  src={project.image}
                  alt={`Proyecto ${index + 1}`}
                  className="w-[300px] h-[62vh] shadow-lg rounded-xl opacity-90"
                />
              </motion.div>
            );
          })}
        </div>
      )}

      {/* Versión Mobile */}
      {isMobile && (
  <div
    ref={scrollRef}
    className="relative flex scroll-smooth mt-8 space-x-4 snap-x snap-mandatory 
               h-[95vh] sm:h-[70vh] ms:h-[80vh]
               py-14 sm:py-16 ms:py-16
               px-16 sm:px-20 ms:px-20
               justify-start"
    style={{ overflowX: "auto", overflowY: "hidden" }}
  >
    {projects.map((project, index) => {
      let position = index - activeIndex;
      let scale = position === 0 ? 1.2 : 1;
      let zIndex = position === 0 ? 10 : 5;
      let opacity = position === 0 ? 1 : 0.7;

      return (
        <motion.div
          key={project.id}
          className="shrink-0 snap-center cursor-pointer"
          onClick={() => navigate(project.link)}
          animate={{ scale, zIndex, opacity }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <div className="flex justify-center">
            <img
              src={project.image}
              alt={`Proyecto ${index + 1}`}
              className="w-[240px] sm:w-[270px] ms:w-[250px]
                         h-[440px] sm:h-[500px] ms:h-[490px]
                         object-cover rounded-xl shadow-lg opacity-80"
            />
          </div>
        </motion.div>
      );
    })}
  </div>
)}

    </section>
  );
}

export default Projects;
