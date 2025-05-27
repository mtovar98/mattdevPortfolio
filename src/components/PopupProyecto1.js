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
    <div className="fixed  inset-0 z-50 bg-[#101010] font-robotoMono text-white overflow-y-auto">
      
      {/* Botón de cerrar */}
      <button
        onClick={onClose}
        className="absolute top-6 right-8 text-4xl text-[#b4f532] font-bold hover:backdrop-brightness-100"
      >
        ✕
      </button>

      {/* Contenido personalizado */}
      <div className="min-h-screen flex flex-col  items-center justify-start p-20">

        {/* Aquí va tu contenido personalizado del proyecto 1 */}
        <h2 className="text-[30px] mb-10">PROJECT 01 - <a href="https://folcloricacol.com/" className="text-[#b4f532] cursor-pointer" target="_blank" rel="noopener noreferrer">FOLCLÓRICA</a></h2>

            <InfiniteCarousel images={imagesProyecto1}></InfiniteCarousel>
            
            {/* Puedes agregar más contenido, imágenes, textos, enlaces, etc */}
            <p className="text-lg max-w-2xl text-center py-8 mb-6">
              Aquí puedes escribir todo el contenido de por que mi polla es una soroca y la amo 
            </p>
        </div>

      </div>
  );
};

export default PopupProyecto1;
