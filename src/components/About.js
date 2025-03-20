import { motion, useScroll, useTransform } from "framer-motion";


const AboutSection = () => {
  const { scrollY } = useScroll();

  // Ajustamos el rango para que el efecto dure más
  const leftImageY = useTransform(scrollY, [0, 1500], [-99, 80]);
  const rightImageY = useTransform(scrollY, [0, 2000], [45, -70]);

  // Aumentamos el efecto de escala para cubrir más área sin bordes vacíos
  const scale = useTransform(scrollY, [0, 1500], [1.2, 1.5]);

  const word = ("DEVELOPER - ")
  const repeatCount = 20;
  const words = new Array(repeatCount).fill(word).join(" ");

  const estudios = [
    { logo: "/images/logoSena.png", titulo: "Technologist in Software Analysis and Development"},
    { logo: "/images/logoUN.png", titulo: "Diploma in Programming Fundamentals"},
    { logo: "/images/logoDistri.png", titulo: "Diploma in Full Stack Development"},
    { logo: "/images/logoDistri.png", titulo: "Diploma in JavaScript Programming Language"},
    { logo: "/images/logo_libre.png", titulo: "Degree in Environmental Engineering"},
    
  ];

  return (
    <section id="about" className="font-robotoMono min-h-screen flex bg-[#101010]">
      {/* Sección Sobre mí centrada */}
      <div className="w-full mt-20 px-10">
        <h2 className="text-[30px] text-[#c3cad0] text-center w-full px-20 py-8">
          ABOUT ME - I'M <span className="text-[#b4f532]">MATT</span>, A SOFTRWARE DEVELOPER WITH A BACKGROUND IN ANALYSIS AND SOFTWARE DEVELOPMENT, SPECIALIZING IN WEB DEVELOPMENT 
        </h2>

        <div className="relative items-center w-full h-[500px] overflow-hidden mt-6 mb-6">
          <video
              className="w-full h-full object-cover"
              src="/videos/animacion.mp4"
              autoPlay
              loop
              muted
          >      
          </video>
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-[10%] bg-gradient-to-b from-[#101010] to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-[10%] bg-gradient-to-t from-[#101010] to-transparent"></div>
            <div className="absolute left-0 top-0 h-full w-[10%] bg-gradient-to-r from-[#101010] to-transparent"></div>
            <div className="absolute right-0 top-0 h-full w-[10%] bg-gradient-to-l from-[#101010] to-transparent"></div>
          </div>
        </div>

        <div className="flex text-center items-center justify-center w-full py-8 text-[#c3cad0]">
            <div className="w-[50%] text-justify">
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


        <div className=" relative flex justify-center items-center gap-4 py-6">

          <div className="absolute w-[980px] h-[400px] border-1 opacity-60 border-transparent pointer-events-none">
            {/* Esquinas del marco */}
            <div className="absolute top-0 left-0 w-6 h-6 border-b-2 border-r-2 border-[#c3cad0]"></div>
            <div className="absolute top-0 right-0 w-6 h-6 border-b-2 border-l-2 border-[#c3cad0]"></div>
            <div className="absolute bottom-0 left-0 w-6 h-6 border-t-2 border-r-2 border-[#c3cad0]"></div>
            <div className="absolute bottom-0 right-0 w-6 h-6 border-t-2 border-l-2 border-[#c3cad0]"></div>
          </div>

          {/* Imágenes dentro del marco */}
            <div className="flex gap-4 p-6 relative">
              <img src="/images/imgDr.jpeg" alt="Imagen izquierda" className="w-[450px] h-auto" />
              <img src="/images/imgDere.jpg" alt="Imagen derecha" className="w-[450px] h-auto" />
            </div>
          </div>



        <div className="w-full px-10">
        <h2 className="text-[30px] text-[#c3cad0] text-center w-full px-20 py-8">
          UNIVERSITY DEGREES <span className="text-[#b4f532]">AND</span> CERTIFICATIONS 
        </h2>
        </div>

        <div className="flex flex-col items-center text-[#c3cad0] w-full">
            {estudios.map((estudio, index) => (
              <div 
                key={index} 
                className="w-3/4 flex flex-col items-center py-4"
              >
                <div className="grid w-2/3 grid-cols-[12rem_auto] items-center gap-16">
                  {/* Columna de logos con tamaño fijo */}
                  <div className="flex justify-center items-center h-16">
                    <img 
                      src={estudio.logo} 
                      alt="Logo" 
                      className="h-full max-w-[30vh] object-contain"
                    />
                  </div>

                  {/* Columna de títulos con alineación fija */}
                  <div className="h-16 flex items-center">
                    <span className="text-[13px] text-left">{estudio.titulo}</span>
                  </div>
                </div>

                {/* Línea divisoria entre estudios */}
                {index < estudios.length - 1 && (
                  <div className="w-2/3 mt-3">
                    <hr className="border-t-2 border-white opacity-60" />
                  </div>
                )}
              </div>
            ))}
          </div>
              <div className="overflow-hidden bg-[#101010] py-8 w-full">
                <motion.div
                  className="flex whitespace-nowrap text-[#b4f532] text-[20px]"
                  animate={{ x: ["0%", "-100%"] }}
                  transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
                >
                  <div className="flex space-x-4">
                    {[...Array(20)].map((_, i) => (
                      <span key={i}>DEVELOPER •</span>
                    ))}
                  </div>
                  <div className="flex space-x-4 ml-4">
                    {[...Array(20)].map((_, i) => (
                      <span key={i}>DEVELOPER •</span>
                    ))}
                  </div>
                </motion.div>
              </div>
      </div>
     
    </section>
  );
};

export default AboutSection;
