import React, { useEffect } from "react";
import InfiniteCarousel from "./InfiniteCarousel";



const imagesProyecto1 = [
    '/images/imgpro1/fol1.png',
    '/images/imgpro1/fol2.png',
    '/images/imgpro1/fol3.png',
    '/images/imgpro1/fol4.png',
    '/images/imgpro1/fol5.png',
    '/images/imgpro1/fol6.png',
    '/images/imgpro1/fol7.png',
    '/images/imgpro1/fol8.png',
    
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
        <h2 className="xl:text-[30px] text-center xs:text-[14px] ms:text-[20px] sm:text-[20px] mb-10">
          PROJECT 01 -{" "}
          <a
            href="https://folcloricacol.com/"
            className="text-[#b4f532] cursor-pointer"
            target="_blank"
            rel="noopener noreferrer"
          >
            FOLCLÓRICA
          </a>
        </h2>

        {/* Carrusel + texto: en columna en mobile, en fila en desktop */}
        <div className="flex flex-col md:flex-row gap-16 items-center justify-center w-full">
          
          {/* Carrusel con 70% del ancho en desktop */}
          <div className="w-full md:w-[60%] xs:w-[50vh] ms:w-[40vh]">
            <InfiniteCarousel images={imagesProyecto1} />
          </div>

          {/* Texto con 30% del ancho en desktop */}
          <div className="w-full md:w-[50%]">
            <p className="text-lg text-justify xl:text-[15px] xs:text-[12px]">
              This project is an e-commerce website developed for Folclórica Col, built using a Shopify theme as its base. The development process involved customizing the theme using Liquid, Shopify’s templating language. The website features a fully functional online store with an integrated payment gateway, enabling secure and seamless transactions. The project was completed within a three-week timeframe, focusing on responsive design, product catalog setup, and user-friendly navigation.
            </p>
          </div>

        </div>
      </div>

      </div>
  );
};

export default PopupProyecto1;
