import React, { useState, useEffect } from 'react';
import { Inter } from "next/font/google";

const inter = Inter({
    subsets: ["latin"],
    weight: ["400", "700"], 
});

// Mock Project Component
const Project = ({ img, title, description, tags, link, demo, rep }) => {
    const [isHovered, setIsHovered] = useState(false);
    
    return (
        <div 
            className="relative m-4 w-[340px] bg-gradient-to-br from-[#251d30] to-[#1b1622] rounded-xl overflow-hidden border border-[#ffc44d]/20 transition-all duration-500 hover:scale-105 hover:border-[#ffc44d]/60 hover:shadow-[0_0_30px_rgba(255,196,77,0.3)]"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="relative overflow-hidden h-48">
                <img 
                    src={img} 
                    alt={title}
                    className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-[#1b1622] to-transparent transition-opacity duration-500 ${isHovered ? 'opacity-70' : 'opacity-40'}`}></div>
            </div>
            
            <div className="p-6">
                <h3 className="text-xl font-bold text-[#ffc44d] mb-3">{title}</h3>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">{description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                    {tags.map((tag, i) => (
                        <span 
                            key={i}
                            className="px-3 py-1 bg-[#ffc44d]/10 text-[#ffc44d] text-xs rounded-full border border-[#ffc44d]/30 transition-all duration-300 hover:bg-[#ffc44d]/20 hover:scale-105"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
                
                <div className="flex gap-3">
                    {link && (
                        <a href={link} target="_blank" rel="noopener noreferrer" 
                           className="px-4 py-2 bg-[#ffc44d] text-[#1b1622] rounded-lg text-sm font-semibold transition-all duration-300 hover:bg-[#FFE3A9] hover:shadow-lg hover:scale-105">
                            View Post
                        </a>
                    )}
                    {demo && (
                        <a href={demo} target="_blank" rel="noopener noreferrer"
                           className="px-4 py-2 border border-[#ffc44d] text-[#ffc44d] rounded-lg text-sm font-semibold transition-all duration-300 hover:bg-[#ffc44d]/10 hover:scale-105">
                            Demo
                        </a>
                    )}
                    {rep && (
                        <a href={rep} target="_blank" rel="noopener noreferrer"
                           className="px-4 py-2 border border-[#ffc44d] text-[#ffc44d] rounded-lg text-sm font-semibold transition-all duration-300 hover:bg-[#ffc44d]/10 hover:scale-105">
                            Code
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

const Projects = ({ language = "en" }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const projectsData = [
        {
            img: "https://i.imgur.com/92dkuOG.png",
            title: "CarneMoidaTv Streaming Website",
            description: language === "pt" ? "Um projeto de freelance feito para o dono do canal CarneMoidaTv de mais de 1 milhão de inscritos, o projeto consiste em um site com acesso restrito a assinantes da hotmart, onde usuarios terão interatividade exclusiva com as streams do criador de conteudo." : "A freelance project developed for the owner of the YouTube channel CarneMoidaTV with over 1 million subscribers. The project is a website with restricted access for Hotmart subscribers, where users have exclusive interactive features connected to the creator's livestreams.",
            tags: ["React", "Hotmart API", "TypeScript"],
            link: "https://www.linkedin.com/feed/update/urn:li:activity:7386930003902615552/"
        },
        {
            img: "https://i.imgur.com/u8fy9Gk.png",
            title: "Old React Portfolio Website",
            demo: "https://portfolio-pedrov.vercel.app/",
            rep: "https://github.com/Pedro-hashm/portfolio",
            description: language === "pt" ? "Um site portfólio que desenvolvi quando usei Next.js e React com o intuito de aprender a utilizar os frameworks." : "A portfolio website built with Next.js and React as a hands-on project to explore and learn these frameworks.",
            tags: ["React", "TailwindCSS", "Next.js"]
        },
        {
            img: "https://i.imgur.com/el9a3q9.png",
            title: "Naturagro ERP (Desktop Java Application)",
            rep: "https://github.com/Naturagro/marktplace",
            description: language === "pt" ? "Aplicação desenvolvida como prova da disciplina de Orientação a Objetos, é um ERP de mercadinho com funções de venda, controle de estoque e geração de relatórios, construida puramente em Java" : "Academic project developed for the Object-Oriented Programming course: a mini ERP system for a grocery business featuring sales management, inventory control, and automated reports, built entirely in Java.",
            tags: ["Java", "MySQL", "Maven", "IntelliJ"]
        },
        {
            img: "https://i.imgur.com/Qa31Oyu.png",
            title: "WhatPy",
            description: language === "pt" ? "Esse programa foi feito com Python e Customtkinter,  a função dele é se alimentar de numeros de telefone em uma planilha CSV e mandar mensagens para todos eles de forma automatica." : "WhatPy is a Python application built with CustomTkinter that automates message sending by processing phone numbers from a CSV file.",
            rep: "https://i.imgur.com/UNlGni1.png",
            tags: ["Python", "Customtkinter", "PyWhatKit"]
        },
        {
            img: "https://i.imgur.com/qcAKcG4.png",
            title: "Braz Store",
            demo: "https://brazofc.com",
            description: language === "pt" ? "Um projeto de freelance de uma loja virtual de roupas, feita para um influencer de Instagram usando a Shopify e conceitos de design UI/UX" : "A freelance project for a virtual clothing store built for an Instagram influencer using Shopify and UI/UX design concepts.",
            tags: ["Shopify", "JavaScript", "HTML5", "CSS3"]
        },
        {
            img: "https://i.imgur.com/wfBBbnw.png",
            title: "Revolution of 1824 - A Digital Journey Through the Confederation of Ecuador",
            demo: "https://labpei-ifpe-paulista.github.io/jogo-confederacao-equador/",
            description: language === "pt" ? "Jogo desenvolvido em um projeto de extensão da FACEPE junto do IFPE utilizando GB Studio. O jogo consiste em uma imersão no evento histórico brasileiro da Confederação do Equador para fins educativos." : "A game developed as part of an extension project funded by FACEPE in partnership with IFPE, using GB Studio. It offers an immersive educational experience based on the historical Brazilian movement known as the Confederation of the Equator.",
            tags: ["GB Studio", "Aseprite"]
        }
    ];

    return (
        <section className="flex flex-col items-center top-0 left-0 pt-48 relative z-2 bg-[#1b1622] w-full min-h-screen overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-[#ffc44d]/5 rounded-full blur-3xl animate-float"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#ffc44d]/5 rounded-full blur-3xl animate-float-delayed"></div>
            </div>

            {/* Title with enhanced animation */}
            <div className={`mb-6 md:mb-8 border-b-3 border-[#ffc44d] pb-2 w-[85%] md:w-[30%] justify-self-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
                <h1 className={`${inter.className} text-[3.0rem] md:text-[5.5rem] font-bold bg-gradient-to-r from-[#ffc44d] via-[#FFE3A9] to-[#ffc44d] bg-clip-text text-transparent text-center animate-gradient bg-[length:200%_auto]`}>
                    {language === "pt" ? "PROJETOS" : "PROJECTS"}
                </h1>
            </div>

            {/* Subtitle with fade in */}
            <span className={`mb-3 text-center text-[1rem] md:text-[1.2rem] px-4 text-gray-300 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                {language === "pt" ? "Alguns dos projetos e freelances que tive o prazer de desenvolver." : "Some projects and freelance work I had the pleasure of developing."}
            </span>

            {/* Projects grid with staggered animation */}
            <div className="flex flex-row flex-wrap justify-center px-12 mx-12 items-start gap-8 relative z-10">
                {projectsData.map((project, index) => (
                    <div
                        key={index}
                        className={`transition-all duration-700 px-12 mx-12 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                        style={{ transitionDelay: `${(index + 1) * 200}ms` }}
                    >
                        <Project {...project} />
                    </div>
                ))}
            </div>

            <style jsx>{`
                @keyframes float {
                    0%, 100% {
                        transform: translateY(0) translateX(0);
                    }
                    25% {
                        transform: translateY(-20px) translateX(10px);
                    }
                    50% {
                        transform: translateY(-40px) translateX(-10px);
                    }
                    75% {
                        transform: translateY(-20px) translateX(10px);
                    }
                }

                @keyframes float-delayed {
                    0%, 100% {
                        transform: translateY(0) translateX(0);
                    }
                    25% {
                        transform: translateY(20px) translateX(-10px);
                    }
                    50% {
                        transform: translateY(40px) translateX(10px);
                    }
                    75% {
                        transform: translateY(20px) translateX(-10px);
                    }
                }

                @keyframes gradient {
                    0% {
                        background-position: 0% center;
                    }
                    50% {
                        background-position: 100% center;
                    }
                    100% {
                        background-position: 0% center;
                    }
                }

                .animate-float {
                    animation: float 20s ease-in-out infinite;
                }

                .animate-float-delayed {
                    animation: float-delayed 25s ease-in-out infinite;
                }

                .animate-gradient {
                    animation: gradient 6s ease infinite;
                }
            `}</style>
        </section>
    );
};

export default Projects;