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
            className="absolute top-0 left-50 w-[99%] h-full object-cover opacity-20"
            src="/videos/codigo-binario.mov"
            autoPlay
            loop
            muted
        >      
        </video>

      {/* Texto superior derecho */}

      {/* Porcentaje de carga en la esquina inferior derecha */}

      <div className="absolute flex flex-col items-center justify-center  text-[#b4f532] z-10  text-center px-4 py-4">
            <div className=" text-[40px]">
                <span>{progress}%</span>
            </div>
            <p className="text-[20px]"><span className="text-[#c3cad0]">Loading </span>MattDev</p>
        </div>
    </div>
    );
};

export default LoadingScreen;