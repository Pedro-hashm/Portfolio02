'use client'
import React, { useState } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon, GlobeAltIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import Image from "next/image";

const navLinks = [
    {
        title: ["Projetos", "Projects"],
        path: ["#projetos", "#projects"]
    },
    {
        title: ["Sobre", "About"],
        path: ["#sobre", "#about"]
    },
    {
        title: ["Contato", "Contact"],
        path: ["#contato", "#contact"]
    }
];

const Header = ({setLanguage, language}) => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  
  return (
    <header 
    className="bg-[rgba(22,19,54,0.8)] backdrop-blur-md text-white md:text-[1.1rem] p-4 pb-3 md:p-7 flex flex-row justify-between fixed top-0 left-0 z-50 w-full"
    style={{ boxShadow: '0 -4px 16px 0 #161336, 0 8px 24px 0 #00000088' }}
    >

      <div className="absolute top-0 left-0 w-full h-[4px] md:h-[4px] bg-[#F8E559] shadow-[0_0_20px_#F8E559]"></div>

      <div className="flex justify-center items-center">
        <span className="font-bold alepholon absolute translate-x-[4.5rem] text-[1.4rem] md:text-[1.6rem] md:translate-x-[6rem]">
          Pedro Vieira
        </span>
      </div>

      <div className="md:hidden">

        <button className="text-[#F8E559] mx-2">
          {!navbarOpen ? (
            <Bars3Icon 
            className="w-10 h-10"
            onClick={() => setNavbarOpen(true)}
            />
          ) : (
            <XMarkIcon 
            className="w-10 h-10" 
            onClick={() => setNavbarOpen(false)} 
            />
          )
          }
          
        </button>

      </div>


      {navbarOpen ? (
        <MenuOverlay links={navLinks} language={language} setLanguage={setLanguage}/>
      ) : null}

      
      <nav className="mt-2 hidden md:block">
        <ul className="flex space-x-4">
          
          {navLinks.map((link) => (
            <li key={language === "pt" ? link.title[0] : link.title[1]}>
              <a href={language === "pt" ? link.path[0] : link.path[1]} className="hover:text-[#F8E559]">
                {language === "pt" ? link.title[0] : link.title[1]}
              </a>
            </li> 
          ))}

          <div className="flex flex-col cursor-pointer group">

            <button className="flex flex-row cursor-pointer hover:text-[#F8E559] z-52">

              <GlobeAltIcon className="w-6 h-6 mr-1 text-[#F8E559]" />
              <a className="">{language === "pt" ? "idioma" : "language"}</a>
              
            </button>

            <div className="absolute top-8 right-1 bg-[rgba(7,6,20,0.5)] pt-10 pb-5 px-3 rounded-xl flex-col gap-5 hidden group-hover:flex">

              <button onClick={() => setLanguage('en')} className="flex flex-row items-center cursor-pointer hover:text-[#F8E559]">
                <img src="/images/us-flag.jpg" alt="English" className="w-6 h-4 mr-2" />
                <a>English</a>
              </button>

              <button onClick={() => setLanguage('pt')} className="flex flex-row items-center cursor-pointer hover:text-[#F8E559]">
                <img src="/images/br-flag.webp" alt="Português" className="w-6 h-4 mr-2" />
                <a>Português</a>
              </button>

            </div>

          </div>

        </ul>

      </nav>

    </header>
  );
}

export default Header;