'use client';
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { CheckCircle } from "lucide-react";

const Parallax = ({language = "en"}) => {
    const [isVisible, setIsVisible] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        setIsVisible(true);
        
        const handleMouseMove = (e) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 20;
            const y = (e.clientY / window.innerHeight - 0.5) * 20;
            setMousePosition({ x, y });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const features = [
        {
            pt: "Desenvolvedor FullStack",
            en: "FullStack Developer"
        },
        {
            pt: "Apaixonado por resolver problemas",
            en: "Passionate problem solver"
        },
        {
            pt: "Amo trabalhar em um time com diferentes talentos",
            en: "Love working in teams with diverse skill sets"
        }
    ];

    return (
        <section 
            className="relative pt-24 z-2 bg-[#271f31] w-full h-screen overflow-hidden"
            style={{
                backgroundImage: "linear-gradient(120deg, #271f31 55%, #F8E559 100%)",
                backgroundSize: "200% 200%",
                animation: "movingGradient 8s ease-in-out infinite",                
            }}    
        >
            {/* Animated video background */}
            

            {/* Floating particles */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-20 left-10 w-2 h-2 bg-[#F8E559] rounded-full animate-float-particle opacity-60"></div>
                <div className="absolute top-40 right-20 w-3 h-3 bg-[#F8E559] rounded-full animate-float-particle-delayed opacity-40" style={{animationDelay: '1s'}}></div>
                <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-[#F8E559] rounded-full animate-float-particle opacity-50" style={{animationDelay: '2s'}}></div>
                <div className="absolute top-60 right-1/3 w-2 h-2 bg-[#F8E559] rounded-full animate-float-particle-delayed opacity-70" style={{animationDelay: '0.5s'}}></div>
            </div>

            <div className="flex flex-col md:flex-row justify-center items-center h-full relative z-10">
                {/* Logo and Name Section */}
                <div 
                    className={`flex flex-row justify-center items-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}
                    style={{
                        transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`
                    }}
                >
                    <div className="relative group">
                        <div className="absolute inset-0 bg-[#F8E559] rounded-lg blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                        <Image
                            src="/images/logoComp.png"
                            alt="Minha foto"
                            width={80}
                            height={80}
                            className="rounded-lg justify-center items-center md:w-[120px] md:h-[180px] transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 relative z-10"
                        />
                    </div>
                    <span className="relative text-5xl md:ml-2 md:text-6xl alepholon">
                        <span className="inline-block animate-text-reveal" style={{animationDelay: '0.2s'}}>P</span>
                        <span className="inline-block animate-text-reveal" style={{animationDelay: '0.3s'}}>e</span>
                        <span className="inline-block animate-text-reveal" style={{animationDelay: '0.4s'}}>d</span>
                        <span className="inline-block animate-text-reveal" style={{animationDelay: '0.5s'}}>r</span>
                        <span className="inline-block animate-text-reveal" style={{animationDelay: '0.6s'}}>o</span>
                        <br />
                        <span className="inline-block animate-text-reveal" style={{animationDelay: '0.7s'}}>V</span>
                        <span className="inline-block animate-text-reveal" style={{animationDelay: '0.8s'}}>i</span>
                        <span className="inline-block animate-text-reveal" style={{animationDelay: '0.9s'}}>e</span>
                        <span className="inline-block animate-text-reveal" style={{animationDelay: '1s'}}>i</span>
                        <span className="inline-block animate-text-reveal" style={{animationDelay: '1.1s'}}>r</span>
                        <span className="inline-block animate-text-reveal" style={{animationDelay: '1.2s'}}>a</span>
                    </span>
                </div>

                {/* Features List */}
                <div 
                    className={`flex flex-col p-10 gap-3 md:gap-0 md:ml-4 md:mt-5 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}
                    style={{
                        transform: `translate(${mousePosition.x * -0.3}px, ${mousePosition.y * -0.3}px)`
                    }}
                >
                    {features.map((feature, index) => (
                        <div 
                            key={index}
                            className={`flex flex-row items-center group transition-all duration-500 hover:translate-x-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
                            style={{
                                transitionDelay: `${(index + 4) * 150}ms`
                            }}
                        >
                            <div className="relative">
                                <CheckCircle 
                                    className={`absolute ${
                                        language === "pt" 
                                            ? index === 0 ? "translate-x-[2rem]" : index === 1 ? "translate-x-[-1rem]" : "translate-y-[-0.8rem] translate-x-[0.6rem]"
                                            : index === 0 ? "translate-x-[3.2rem]" : index === 1 ? "translate-x-[1.65rem]" : "translate-y-[-0.9rem] translate-x-[0rem]"
                                    } hide-on-mobile w-5 h-5 text-[#F8E559] mr-2 md:translate-x-[-2rem] ${index === 2 ? 'md:translate-y-[0.1rem]' : ''} md:relative transition-all duration-300 group-hover:scale-125 group-hover:rotate-12`}
                                    strokeWidth={2}
                                />
                                <div className="absolute inset-0 bg-[#F8E559] rounded-full blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300 hide-on-mobile"></div>
                            </div>
                            <span className={`flex-1 text-[1.2rem] text-white text-center md:text-left ${index === 2 ? 'md:translate-x-[-1.8rem]' : ''} transition-all duration-300 group-hover:text-[#F8E559]`}>
                                {language === "pt" ? feature.pt : feature.en}
                            </span>
                            <CheckCircle 
                                className="text-[#F8E559] hide-on-desktop transition-all duration-300 group-hover:scale-125 group-hover:rotate-12"
                            />
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                @keyframes movingGradient {
                    0%, 100% {
                        background-position: 0% 50%;
                    }
                    50% {
                        background-position: 100% 50%;
                    }
                }

                @keyframes float-particle {
                    0%, 100% {
                        transform: translate(0, 0) scale(1);
                        opacity: 0;
                    }
                    10% {
                        opacity: 0.6;
                    }
                    50% {
                        transform: translate(100px, -100px) scale(1.5);
                        opacity: 0.8;
                    }
                    90% {
                        opacity: 0.3;
                    }
                    100% {
                        transform: translate(200px, -200px) scale(0.5);
                        opacity: 0;
                    }
                }

                @keyframes float-particle-delayed {
                    0%, 100% {
                        transform: translate(0, 0) scale(1);
                        opacity: 0;
                    }
                    10% {
                        opacity: 0.5;
                    }
                    50% {
                        transform: translate(-120px, -80px) scale(1.8);
                        opacity: 0.7;
                    }
                    90% {
                        opacity: 0.2;
                    }
                    100% {
                        transform: translate(-240px, -160px) scale(0.8);
                        opacity: 0;
                    }
                }

                @keyframes text-reveal {
                    0% {
                        opacity: 0;
                        transform: translateY(20px) rotateX(-90deg);
                    }
                    100% {
                        opacity: 1;
                        transform: translateY(0) rotateX(0);
                    }
                }

                .animate-float-particle {
                    animation: float-particle 8s ease-in-out infinite;
                }

                .animate-float-particle-delayed {
                    animation: float-particle-delayed 10s ease-in-out infinite;
                }

                .animate-text-reveal {
                    animation: text-reveal 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) both;
                }

                .hide-on-mobile {
                    display: none;
                }

                .hide-on-desktop {
                    display: block;
                }

                @media (min-width: 768px) {
                    .hide-on-mobile {
                        display: block;
                    }
                    .hide-on-desktop {
                        display: none;
                    }
                }
            `}</style>
        </section>
    );
};

export default Parallax;