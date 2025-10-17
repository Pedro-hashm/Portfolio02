'use client';
import React from "react";
import Image from "next/image";
import { CheckCircle } from "lucide-react";

const Parallax = ({language}) => {
    return (
        <section 
            className="relative pt-24 z-2 bg-[#271f31] w-full h-screen"
            style={{
                backgroundImage:
                    "linear-gradient(120deg, #271f31 55%, #F8E559 100%)",
                backgroundSize: "200% 200%",
                animation: "movingGradient 8s ease-in-out infinite",                
            }}    
        >
           
            <video
                autoPlay
                loop
                muted
                className="absolute top-0 left-0 w-full h-full object-cover pt-24 opacity-2"
                style={{ zIndex: -1 }}
                src="/images/noise3.mp4"
            >
            </video>

            <div className="flex flex-col md:flex-row justify-center items-center h-full">
                <div className="flex flex-row justify-center items-center">
                    <Image
                        src="/images/logoComp.png"
                        alt="Minha foto"
                        width={80}
                        height={80}
                        className=" rounded-lg justify-center items-center md:w-[120px] md:h-[180px]"
                    />
                    <span className="relative text-5xl md:ml-2 md:text-6xl alepholon">
                        Pedro <br />
                        Vieira
                    </span>
                </div>

                <div className="flex flex-col p-10 gap-3 md:gap-0 md:ml-4 md:mt-5">
                    <div className="flex flex-row items-center">
                        <CheckCircle className={`absolute ${language == "pt" ? "translate-x-[2rem]" : "translate-x-[3.2rem] "} hide-on-mobile w-5 h-5 text-[#F8E559] mr-2 md:translate-x-[-2rem] md:relative"`} strokeWidth={2} />
                        <span className="flex-1 text-[1.2rem] text-white text-center md:text-left">
                            {language == "pt" ? "Desenvolvedor FullStack hide-on-desktop" : "FullStack Developer"}
                        </span>
                        <CheckCircle className="text-[#F8E559] hide-on-desktop"></CheckCircle>
                    </div>
                    <div className="flex flex-row items-center">
                        <CheckCircle className={`absolute ${language == "pt" ? "translate-x-[-1rem]" : "translate-x-[1.65rem]"} hide-on-mobile w-5 h-5 text-[#F8E559] mr-2 md:translate-x-[-2rem] md:relative"`} strokeWidth={2} />
                        <span className="flex-1 text-[1.2rem] text-white text-center md:text-left"> {language == "pt" ? "Apaixonado por resolver problemas" : "Passionate problem solver" } </span>
                        <CheckCircle className="text-[#F8E559] hide-on-desktop"></CheckCircle>
                    </div>
                    <div className="flex flex-row items-center">
                        <CheckCircle className={`absolute ${language == "pt" ? "translate-y-[-0.8rem] translate-x-[0.6rem]" : "translate-y-[-0.9rem] translate-x-[0rem]"} hide-on-mobile w-5 h-5 text-[#F8E559] mr-2 md:translate-x-[-2rem] md:translate-y-[0.1rem] md:relative`} strokeWidth={2} />
                        <span className="flex-1 text-[1.2rem] text-white text-center md:text-left md:translate-x-[-1.8rem]"> {language == "pt" ? "Amo trabalhar em um time com diferentes talentos" : "Love working in teams with diverse skill sets" } </span>
                        <CheckCircle className="text-[#F8E559] hide-on-desktop"></CheckCircle>
                    </div>
                </div>

            </div>

        </section>
        
    )
}

export default Parallax;