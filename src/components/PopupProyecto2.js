import React, { useEffect } from "react";
import InfiniteCarousel from "./InfiniteCarousel";

const imagesProyecto2 = [
    '/images/imgpro2/vet1.png',
    '/images/imgpro2/vet2.png',
    '/images/imgpro2/vet3.png',
    '/images/imgpro2/vet4.png',
    '/images/imgpro2/vet5.png',    
  ]

const PopupProyecto1 = ({ onClose }) => {
  // Bloquear scroll del fondo
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "auto");
  }, []);

  return (
    <div className="fixed min-h-screen inset-0 z-50 bg-[#101010] font-robotoMono text-white overflow-y-auto">
      
      {/* Botón de cerrar */}
      <button
        onClick={onClose}
        className="absolute top-2 right-4 xl:text-4xl xs:text-2xl text-[#b4f532] font-bold hover:backdrop-brightness-100"
      >
        ✕
      </button>

      {/* Contenido personalizado */}
      <div className="min-h-screen flex flex-col items-center justify-start xl:p-20 xs:p-10">
        {/* Aquí va tu contenido personalizado del proyecto 1 */}
        <h2 className="xl:text-[30px] text-center xs:text-[14px] ms:text-[20px] sm:text-[20px] mb-10">
            PROJECT 02 - 
            <a 
                href="https://folcloricacol.com/" 
                className="text-[#b4f532] cursor-pointer" 
                target="_blank" 
                rel="noopener noreferrer">VETA</a>
        </h2>
        {/* carrusel */}
        <div className="flex flex-col md:flex-row gap-16 items-center justify-center w-full">

            <div className="w-full md:w-[60%] xs:w-[50vh] ms:w-[40vh]">
                <InfiniteCarousel images={imagesProyecto2}></InfiniteCarousel>
            </div>

            <div className="w-full md:w-[50%]">
                <p className="text-lg text-justify xl:text-[15px] xs:text-[12px]">
                This project involved the development of a landing page for VetaWood, 
                a company that specializes in the sale of handcrafted wooden products. 
                he website was built using WordPress and customized based on a pre-designed template. 
                It serves primarily as an informational platform to showcase the brand, its product offerings, and contact details. 
                The focus was on delivering a clean, responsive, and visually appealing layout 
                that reflects the natural aesthetic of the brand, without the integration 
                of e-commerce functionalities such as a shopping cart.
                </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default PopupProyecto1;
