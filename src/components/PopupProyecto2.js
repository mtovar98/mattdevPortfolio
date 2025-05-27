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
    <div className="fixed inset-0 z-50 bg-[#101010] font-robotoMono text-white overflow-y-auto">
      {/* Botón de cerrar */}
      <button
        onClick={onClose}
        className="absolute top-6 right-8 text-4xl text-[#b4f532] font-bold hover:backdrop-brightness-100"
      >
        ✕
      </button>

      {/* Contenido personalizado */}
      <div className="min-h-screen flex flex-col items-center justify-start p-20">
        {/* Aquí va tu contenido personalizado del proyecto 1 */}
        <h2 className="text-[30px] mb-6">PROJECT 02 - <a href="https://folcloricacol.com/" className="text-[#b4f532] cursor-pointer" target="_blank" rel="noopener noreferrer">VETA</a></h2>
        
        <InfiniteCarousel images={imagesProyecto2}></InfiniteCarousel>
        
        <p className="text-lg max-w-2xl text-center mb-6">
          Aquí puedes escribir todo el contenido del modal del proyecto 2.
        </p>

      </div>
    </div>
  );
};

export default PopupProyecto1;
