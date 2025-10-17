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

            <span className="mb-3 text-center text-[1rem] md:text-[1.2rem] px-4">{language === "pt" ? "Alguns dos projetos e freenlaces que tive o prazer de desenvolver." : "Some projects and freelance work I had the pleasure of developing."}</span>

            <div className="flex flex-row flex-wrap justify-center items-center">
                
                <Project
                    img="https://i.imgur.com/Qa31Oyu.png"
                    title="WhatPy"
                    description={language === "pt" ? "Esse programa foi feito com Python e Customtkinter, a função dele é se alimentar de numeros de telefone em uma planilha CSV e mandar mensagens para todos eles de forma automatica." : "WhatPy is a Python application built with CustomTkinter that automates message sending by processing phone numbers from a CSV file."}
                    rep="https://github.com/Pedro-hashm/WhatPy"
                    tags={["Python", "Customtkinter", "PyWhatKit"]}
                />

                <Project
                    img="https://i.imgur.com/FD5ATP0.png"
                    title="Braz Store"
                    demo={"https://brazofc.com"}
                    description={language === "pt" ? "Um projeto de freelance de uma loja virtual de roupas, feita para um influencer de Instagram usando a Shopify e conceitos de design UI/UX" : "A freelance project for a virtual clothing store built for an Instagram influencer using Shopify and UI/UX design concepts."}
                    tags={["Shopify", "JavaScript", "HTML5", "CSS3"]}
                />
                
                <Project
                    img="https://i.imgur.com/iGeXT8R.png"
                    title="Naturagro ERP (Desktop Java Application)"
                    rep={"https://github.com/Naturagro/marktplace"}
                    description={language === "pt" ? "Aplicação desenvolvida como prova da disciplina de Orientação a Objetos, é um ERP de mercadinho com funções de venda, controle de estoque e geração de relatórios, construida puramente em Java" : "Academic project developed for the Object-Oriented Programming course: a mini ERP system for a grocery business featuring sales management, inventory control, and automated reports, built entirely in Java."}
                    tags={["Java", "MySQL", "Maven", "IntelliJ"]}
                />

                <Project
                    img="https://i.imgur.com/ByqcY7Z.png"
                    title="Old React Portfolio Website"
                    demo={"https://portfolio-pedrov.vercel.app/"}
                    rep={"https://github.com/Pedro-hashm/portfolio"}
                    description={language === "pt" ? "Um site portfólio que desenvolvi quando usei Next.js e React com o intuito de aprender a utilizar os frameworks." : "A portfolio website built with Next.js and React as a hands-on project to explore and learn these frameworks."}
                    tags={["React", "TailwindCSS", "Next.js"]}
                />

                <Project
                    img="https://i.imgur.com/wfBBbnw.png"
                    title="Revolution of 1824 - A Digital Journey Through the Confederation of Ecuador"
                    demo={"https://labpei-ifpe-paulista.github.io/jogo-confederacao-equador/"}
                    description={language === "pt" ? "Jogo desenvolvido em um projeto de extensão da FACEPE junto do IFPE utilizando GB Studio. O jogo consiste em uma imersão no evento histórico brasileiro da Confederação do Equador para fins educativos." : "A game developed as part of an extension project funded by FACEPE in partnership with IFPE, using GB Studio. It offers an immersive educational experience based on the historical Brazilian movement known as the Confederation of the Equator."}
                    tags={["GB Studio", "Aseprite"]}
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