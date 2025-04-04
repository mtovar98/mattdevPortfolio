import { motion, } from "framer-motion";
import { Globe } from "lucide-react";


const AboutSection = () => {
  // const { scrollY } = useScroll();

  // Ajustamos el rango para que el efecto dure más
  // const leftImageY = useTransform(scrollY, [0, 1500], [-99, 80]);
  // const rightImageY = useTransform(scrollY, [0, 2000], [45, -70]);

  // // Aumentamos el efecto de escala para cubrir más área sin bordes vacíos
  // const scale = useTransform(scrollY, [0, 1500], [1.2, 1.5]);

  // const word = ("DEVELOPER - ")
  // const repeatCount = 20;
  // const words = new Array(repeatCount).fill(word).join(" ");

  const estudios = [
    { logo: "/images/logoSena.png", titulo: "Technologist in Software Analysis and Development"},
    { logo: "/images/logoUN.png", titulo: "Diploma in Programming Fundamentals"},
    { logo: "/images/logoDistri.png", titulo: "Diploma in Full Stack Development"},
    { logo: "/images/logoDistri.png", titulo: "Diploma in JavaScript Programming Language"},
    { logo: "/images/logo_libre.png", titulo: "Degree in Environmental Engineering"},
    
  ];

  return (
    <section id="about" className="font-robotoMono min-h-screen items-center flex bg-[#101010]">
      {/* Sección Sobre mí centrada */}
      <div className="w-full xl:mt-20 xs:mt-2 items-center justify-center">
        <h2 className="xl:text-[25px] lg:text-[25px] sm:text-[20px] xs:text-[16px] text-[#c3cad0] text-center w-full xl:px-60 sm:px-20 xs:px-10 py-8">
          ABOUT ME - I'M <span className="text-[#b4f532]">MATT</span>, A SOFTRWARE DEVELOPER WITH A BACKGROUND IN ANALYSIS AND SOFTWARE DEVELOPMENT, SPECIALIZING IN WEB DEVELOPMENT 
        </h2>

        <div className="relative flex justify-center items-center xl:w-[120vh] xl:h-[60vh] xs:w-[90%] xs:h-[25vh] mx-auto overflow-hidden">
            {/* Contenedor del video */}
            <div className="absolute inset-0 flex justify-center items-center ">
              <video
                className="max-h-full w-full object-cover"
                src="/videos/animacion.mp4"
                autoPlay
                loop
                muted
              />
            </div>

            {/* Degradados en los bordes */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 left-0 w-full h-[10%] bg-gradient-to-b from-[#101010] to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full h-[10%] bg-gradient-to-t from-[#101010] to-transparent"></div>
              <div className="absolute left-0 top-0 h-full w-[10%] bg-gradient-to-r from-[#101010] to-transparent"></div>
              <div className="absolute right-0 top-0 h-full w-[10%] bg-gradient-to-l from-[#101010] to-transparent"></div>
            </div>
          </div>

        <div className="flex text-center items-center justify-center w-full xl:py-8 xs:py-4 sm:py-4 text-[#c3cad0]">
            <div className="xl:w-[50%] sm:w-[80%] xs:w-[70%] xs:text-[10px] xl:text-[20px] xs:px-30 xl:px-0 text-justify">
              <p className="text-justify text-align-last-center">
                Since I discovered the world of software development, I knew I wanted to create digital 
                solutions that make a difference. I specialize in web development, blending functionality 
                and design to build dynamic and efficient experiences.
              </p>
              <p className=" py-6 text-justify text-align-last-center">
                With a background in Analysis and Software Development, I have worked with technologies 
                such as HTML, CSS, JavaScript, and frameworks like Angular and React. I have also worked 
                with relational and non-relational databases, including MySQL and MongoDB. Throughout my journey, 
                I have developed projects that reflect my passion for programming and my commitment to technical excellence.
              </p>
              <p className="text-justify text-align-last-center">         
                In my portfolio, you will find projects that showcase my focus on developing 
                well-structured and dynamic applications.
              </p>
            </div>
        </div>


        <div className=" relative flex flex-wrap justify-center items-center gap-4 py-6">

          <div className="absolute xl:w-[980px] xl:h-[400px] border-1 opacity-60 border-transparent pointer-events-none sm:w-[80%] xs:h-[90%] xs:w-[80%]">
            {/* Esquinas del marco */}
            <div className="absolute top-0 left-0 xl:w-6 xl:h-6 xs:w-4 xs:h-4 border-b-2 border-r-2 border-[#c3cad0]"></div>
            <div className="absolute top-0 right-0 xl:w-6 xl:h-6 xs:w-4 xs:h-4 border-b-2 border-l-2 border-[#c3cad0]"></div>
            <div className="absolute bottom-0 left-0 xl:w-6 xl:h-6 xs:w-4 xs:h-4 border-t-2 border-r-2 border-[#c3cad0]"></div>
            <div className="absolute bottom-0 right-0 xl:w-6 xl:h-6 xs:w-4 xs:h-4 border-t-2 border-l-2 border-[#c3cad0]"></div>
          </div>

          {/* Imágenes dentro del marco */}
            <div className="flex flex-wrap xl:gap-4 sm:gap-2 xs:gap-2 p-8 relative justify-center">
              <img src="/images/imgDr.jpeg" alt="Imagen izquierda" className="xl:w-[450px] sm:-[300px] xs:w-[250px] h-auto" />
              <img src="/images/imgDere.jpg" alt="Imagen derecha" className="xl:w-[450px] sm:-[300px] xs:w-[250px]  h-auto" />
            </div>
          </div>



        <div className="w-full px-10">
        <h2 className="xl:text-[25px] sm:text-[20px] xs:text-[18px] text-[#c3cad0] text-center w-full xl:px-20 sm:px-10 xs:px-10 xl:py-8 sm:y-4 xs:y-4">
          UNIVERSITY DEGREES <span className="text-[#b4f532]">AND</span> CERTIFICATIONS 
        </h2>
        </div>

        <div className="flex flex-col items-center text-[#c3cad0] mx-0 xs:mx-2 w-full">
            {estudios.map((estudio, index) => (
              <div key={index} className="xl:w-3/4 flex flex-col items-center py-4 sm:w-[90%] xs:w-[95%]">
                <div className="grid xl:w-2/3 xl:grid-cols-[12rem_auto] sm:grid-cols-[10rem_auto] xs:grid-cols-[8rem_auto] items-center xl:gap-16 sm:gap-8 xs:gap-6">
                  <div className="flex justify-center items-center h-16">
                    <img src={estudio.logo} alt="Logo" className="h-full xl:max-w-[28vh] xs:max-w-[20vh] object-contain" />
                  </div>
                  <div className="h-16 flex items-center">
                    <span className="xl:text-[13px] sm:text-[12px] xs:text-[11px] text-left">{estudio.titulo}</span>
                  </div>
                </div>

                {index < estudios.length - 1 && (
                  <div className="xl:w-2/3 sm:w-[80%] xs:w-[90%] mt-3">
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
                    transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
                  >
                    <div className="flex items-center gap-6">
                      {[...Array(60)].map((_, i) => (
                        <div key={i} className="flex items-center gap-6">
                          <span>PORTFOLIO</span>
                          <Globe className="w-5 h-5 text-[#b4f532]"></Globe>
                        </div>
                      ))}
                    </div>
                </motion.div>
              </div>
      </div>
     
    </section>
  );
};

export default AboutSection;
