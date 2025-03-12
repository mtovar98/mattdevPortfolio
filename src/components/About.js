import { motion, useScroll, useTransform } from "framer-motion";

const AboutSection = () => {
  const { scrollY } = useScroll();

  // Ajustamos el rango para que el efecto dure más
  const leftImageY = useTransform(scrollY, [0, 1500], [-99, 80]);
  const rightImageY = useTransform(scrollY, [0, 2000], [45, -70]);

  // Aumentamos el efecto de escala para cubrir más área sin bordes vacíos
  const scale = useTransform(scrollY, [0, 1500], [1.2, 1.5]);

  return (
    <section id="about" className="min-h-screen flex flex-col bg-black">
      {/* Sección Sobre mí centrada */}
      <div className="w-full mt-10 px-10 text-[13px]">
        <h2 className="text-4xl font-bold text-[#b4f532] mb-6 text-left w-full opacity-75 py-4">
          About me - I'm Miguel, a software developer with a background in Analysis and Software Development, 
          specializing in web development. 
        </h2>
        <div className="flex justify-end w-full py-2">
            <div className="opacity-70 w-[50%] text-textSecondary text-justify">
              <p>
                Since I discovered the world of software development, I knew I wanted to create digital 
                solutions that make a difference. I specialize in web development, blending functionality 
                and design to build dynamic and efficient experiences.
              </p>
              <p className=" py-6">
                With a background in Analysis and Software Development, I have worked with technologies 
                such as HTML, CSS, JavaScript, and frameworks like Angular and React. I have also worked 
                with relational and non-relational databases, including MySQL and MongoDB. Throughout my journey, 
                I have developed projects that reflect my passion for programming and my commitment to technical excellence.
              </p>
              <p>         
                In my portfolio, you will find projects that showcase my focus on developing 
                well-structured and dynamic applications.
              </p>
            </div>
        </div>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-4 mt-10">
        
        {/* Imagen izquierda */}
        <div className="relative w-full h-[500px] overflow-hidden">
          <motion.img
            style={{ y: leftImageY, scale: 1.2 }} 
            src="/images/fondo4.jpeg"
            alt="Imagen Izquierda"
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        </div>

        {/* Imagen derecha */}
        <div className="relative w-full h-[500px] overflow-hidden">
          <motion.img
            style={{ y: rightImageY, scale }} 
            src="/images/imagen3.jpeg"
            alt="Imagen Derecha"
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
