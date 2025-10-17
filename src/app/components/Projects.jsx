import { Inter } from "next/font/google";
import Project from './Project';

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"], 
});

const Projects = ({language}) => {
    return (
        <section className="flex flex-col items-center top-0 left-0 pt-48 relative z-2 bg-[#1b1622] w-full min-h-screen">
            <div className="mb-6 md:mb-8 border-b-3 border-[#ffc44d] pb-2 w-[85%] md:w-[30%] justify-self-center">
                <h1 className={`${inter.className} text-[3.0rem] md:text-[5.5rem] font-bold bg-gradient-to-r from-[#ffc44d] to-[#FFE3A9] bg-clip-text text-transparent text-center`}>{language === "pt" ? "PROJETOS" : "PROJECTS"}</h1>
            </div>

            <span className="mb-3 text-center text-[1rem] md:text-[1.2rem] px-2">{language === "pt" ? "Alguns dos projetos pessoais, freelances, ou outros em que desenvolvi." : "Some personal, freelancing or other projects i developed."}</span>

            <div className="flex flex-row flex-wrap justify-center items-center">
                
                <Project
                    img="https://i.imgur.com/Qa31Oyu.png"
                    title="WhatPy"
                    description={language === "pt" ? "desc pt br" : "WhatPy is a Python-based automation tool for sending WhatsApp messages using customtkinter, making it easy to interact with contacts programmatically."}
                    rep="https://github.com/Pedro-hashm/WhatPy"
                    tags={["Python", "Customtkinter", "PyWhatKit"]}
                />

                <Project
                    img="https://i.imgur.com/FD5ATP0.png"
                    title="Braz Store"
                    demo={"https://brazofc.com"}
                    description={language === "pt" ? "desc pt br" : "desc en"}
                    tags={["Shopify", "JavaScript", "HTML5", "CSS3"]}
                />
                
                <Project
                    img="https://i.imgur.com/iGeXT8R.png"
                    title="Naturagro ERP (Desktop Java Application)"
                    rep={"https://github.com/Naturagro/marktplace"}
                    description={language === "pt" ? "desc pt br" : "Marktplace is a Java-based desktop ERP application designed to manage and streamline business operations, focusing on inventory, sales, and financial processes for agricultural businesses."}
                    tags={["Java", "MySQL", "Maven", "IntelliJ"]}
                />

                <Project
                    img="https://i.imgur.com/ByqcY7Z.png"
                    title="Old React Portfolio Website"
                    demo={"https://portfolio-pedrov.vercel.app/"}
                    rep={"https://github.com/Pedro-hashm/portfolio"}
                    description={language === "pt" ? "desc pt br" : "A personal portfolio website i built while learning React for the first time, showcasing projects, skills, and experiences."}
                    tags={["React", "TailwindCSS", "Next.js"]}
                />

                <Project
                    img="https://i.imgur.com/wfBBbnw.png"
                    title="Revolution of 1824 - A Digital Journey Through the Confederation of Ecuador"
                    demo={"https://labpei-ifpe-paulista.github.io/jogo-confederacao-equador/"}
                    description={language === "pt" ? "desc pt br" : "A game that immerses players in the historical events of the Confederation of Ecuador, allowing them to explore this pivotal moment in Brazilian history in a fun and engaging way."}
                    tags={["GbStudio"]}
                />

                <Project
                    img="https://i.imgur.com/A9xR7U7.png"
                    title="CarneMoidaTv Streaming Website"
                    demo={"https://carniceiros.moedor.com/"}
                    description={language === "pt" ? "desc pt br" : "eng desc"}
                    tags={["React", "Hotmart API", "TypeScript"]}
                />

            </div>

        </section>
    )
}

export default Projects;