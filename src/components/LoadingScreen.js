import { useEffect, useState } from "react";



const LoadingScreen = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);
    
    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(onComplete, 900);
                    return 100;
                }
                return prev + 1;
            });
        }, 15);

        return () => clearInterval(interval);
    }, [onComplete]);

    return (
        <div className=" font-robotoMono fixed top-0 left-0 w-full h-full flex items-center justify-center bg-cover bg-center"> 
        <video
            className="absolute top-0 left-50 w-[99%] h-full object-cover opacity-2"
            src="/videos/codigo-binario.mov"
            autoPlay
            loop
            muted
        >      
        </video>

      {/* Texto superior derecho */}

      {/* Porcentaje de carga en la esquina inferior derecha */}

      <div className="absolute bottom-10 right-8 flex flex-col  text-[#b4f532] font-bold z-10 opacity-90 px-2 py-4">
            <div className="flex items-center justify-between text-7xl space-x-2">
                <span>WEB</span>
                <span>{progress}%</span>
            </div>
            <p className="text-7xl">DEVELOPER</p>
        </div>
      {/* <div className="absolute bottom-15 right-8 text-[#b4f532] text-7xl font-bold z-10 opacity-90">
        {progress}%
      <p className="absolute top-8 right-14 text-[#b4f532] text-7xl font-bold z-10">Web Developer</p>
      </div> */}
    </div>
    );
};

export default LoadingScreen;