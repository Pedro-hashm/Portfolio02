'use client'
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon, GlobeAltIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import Image from "next/image";

const navLinks = [
    {
      title: ["KnowHow", "KnowHow"],
      path: ["#knowhow"]
    },
    {
        title: ["Projetos", "Projects"],
        path: ["#projetos"]
    },
    {
        title: ["Sobre", "About"],
        path: ["#sobre"]
    },
    {
        title: ["Contato", "Contact"],
        path: ["#contato"]
    }
];

const Header = ({setLanguage, language}) => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  return (
    <header 
    className={`bg-[rgba(22,19,54,0.8)] backdrop-blur-md text-white md:text-[1.1rem] p-4 pb-3 md:p-7 flex flex-row justify-between fixed top-0 left-0 z-50 w-full transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}
    style={{ boxShadow: '0 -4px 16px 0 #161336, 0 8px 24px 0 #00000088' }}
    >
      {/* Barra superior animada */}
      <div className="absolute top-0 left-0 w-full h-[4px] md:h-[4px] bg-[#F8E559] shadow-[0_0_20px_#F8E559] animate-pulse"></div>
      
      {/* Logo com animação de fade e escala */}
      <div className="flex items-center flex-1">
        <span className={`font-bold alepholon text-[1.4rem] md:text-[1.6rem] transition-all duration-700 delay-300 ${isVisible ? 'scale-100 opacity-100' : 'scale-75 opacity-0'} hover:text-[#F8E559] hover:scale-105 cursor-pointer`}>
          Pedro Vieira
        </span>
      </div>
      
      {/* Menu mobile com animação de rotação */}
      <div className="md:hidden ml-auto z-50 relative">
        <button className="text-[#F8E559] transition-transform duration-300 hover:scale-110 active:scale-95 relative w-10 h-10">
          <Bars3Icon 
            className={`w-10 h-10 absolute top-0 left-0 transition-all duration-500 ${navbarOpen ? 'rotate-90 opacity-0 scale-50' : 'rotate-0 opacity-100 scale-100'}`}
            onClick={() => setNavbarOpen(true)}
          />
          <XMarkIcon 
            className={`w-10 h-10 absolute top-0 left-0 transition-all duration-500 ${navbarOpen ? 'rotate-0 opacity-100 scale-100' : '-rotate-90 opacity-0 scale-50'}`}
            onClick={() => setNavbarOpen(false)} 
          />
        </button>
      </div>
      
      {/* Menu overlay com animação de entrada */}
      <div className={`transition-all duration-500 ${navbarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        {navbarOpen && <MenuOverlay links={navLinks} language={language} setLanguage={setLanguage} onClose={() => setNavbarOpen(false)}/>}
      </div>
      
      {/* Navegação desktop com animações escalonadas */}
      <nav className="mt-2 hidden md:block">
        <ul className="flex space-x-4">
          {navLinks.map((link, index) => (
            <li 
              key={language === "pt" ? link.title[0] : link.title[1]}
              className={`transition-all duration-500 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`}
              style={{ transitionDelay: `${400 + index * 100}ms` }}
            >
              <a 
                href={language === "pt" ? link.path[0] : link.path[1]} 
                className="relative hover:text-[#F8E559] transition-colors duration-300 group"
              >
                {language === "pt" ? link.title[0] : link.title[1]}
                {/* Underline animado */}
                <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-[#F8E559] transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li> 
          ))}
          
          {/* Seletor de idioma com animações */}
          <div 
            className={`flex flex-col cursor-pointer group transition-all duration-500 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`}
            style={{ transitionDelay: '800ms' }}
          >
            <button className="flex flex-row cursor-pointer hover:text-[#F8E559] z-52 transition-all duration-300 group-hover:scale-105">
              <GlobeAltIcon className="w-6 h-6 mr-1 text-[#F8E559] transition-transform duration-300 group-hover:rotate-180" />
              <a className="">{language === "pt" ? "idioma" : "language"}</a>
            </button>
            
            {/* Dropdown animado */}
            <div className="absolute top-8 right-0 bg-[rgba(7,6,20,0.9)] backdrop-blur-sm pt-10 pb-5 px-5 rounded-xl flex-col gap-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-2 shadow-lg min-w-[140px]">
              <button 
                onClick={() => setLanguage('en')} 
                className="flex flex-row items-center cursor-pointer hover:text-[#F8E559] transition-all duration-300 hover:translate-x-2 whitespace-nowrap"
              >
                <img 
                  src="/images/us-flag.jpg" 
                  alt="English" 
                  className="w-6 h-4 mr-2 rounded transition-transform duration-300 hover:scale-110 flex-shrink-0" 
                />
                <span>English</span>
              </button>
              <button 
                onClick={() => setLanguage('pt')} 
                className="flex flex-row items-center cursor-pointer hover:text-[#F8E559] transition-all duration-300 hover:translate-x-2 whitespace-nowrap"
              >
                <img 
                  src="/images/br-flag.webp" 
                  alt="Português" 
                  className="w-6 h-4 mr-2 rounded transition-transform duration-300 hover:scale-110 flex-shrink-0" 
                />
                <span>Português</span>
              </button>
            </div>
          </div>
        </ul>
      </nav>
      
      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }
        .animate-pulse {
          animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </header>
  );
}

export default Header;