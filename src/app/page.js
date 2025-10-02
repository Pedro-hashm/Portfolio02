// app/page.js

'use client'; 
import Header from './components/header';
import KnowHow from './components/KnowHow';
import Parallax from './components/Parallax';
import Projects from './components/Projects';
import About from './components/About';
import React, { useState } from "react";

export default function Home() {
  const [language, setLanguage] = useState("pt");
  
  return (
      <main className="bg-[#271f31]"> {/* Remova o min-h-screen e o flex-col daqui por enquanto */}
        <div>

          <title> Pedro Vieira | Full Stack Developer </title>

          <Header language={language} setLanguage={setLanguage}/>
          
          {/* Seção 1: Ocupa a primeira tela */}
          <Parallax language={language}/>
          
          {/* Seção 2: O contêiner que define a duração do scroll */}
          <div className="relative h-[200vh]">
            <KnowHow language={language}/>
          </div>
          
          {/* Seção 3: Aparece no final */}
          <Projects language={language}/>

          {/* Seção 4: Aparece no final */}
          <About language={language}/>

        </div>
      </main>
  );
}