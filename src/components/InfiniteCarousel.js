
import { motion } from "framer-motion";

// const images = [
//     '/images/imgpro1/fol1.png',
//     '/images/imgpro1/fol2.png',
//     '/images/imgpro1/fol3.png',
//     '/images/imgpro1/fol4.png',
//     '/images/imgpro1/fol5.png',
//     '/images/imgpro1/fol6.png',
//     '/images/imgpro1/fol7.png',
//     '/images/imgpro1/fol8.png',
    
//   ]

  const InfiniteCarousel = ({ images }) => {
    const duplicatedImages = [...images, ...images]


    return (
    <div className="overflow-hidden w-full bg-black">
      <motion.div
        className="flex w-max"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          repeat: Infinity,
          duration: 150, // Cambia la velocidad aquí
          ease: "linear",
        }}
      >
        {duplicatedImages.map((src, index) => (
          <div key={index} className="min-w-[800px]">
            <img
              src={src}
              alt={`Imagen ${index + 1}`}
              className="rounded-lg shadow-lg object-cover w-full h-[400px]"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default InfiniteCarousel;