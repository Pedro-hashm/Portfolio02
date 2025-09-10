import { Inter } from "next/font/google";
import { Github, Linkedin } from 'lucide-react';


const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"], 
});

const About = ({language}) => {
    return (
        <section className="flex flex-col items-center top-0 left-0 relative z-2 bg-[#1b1622] pt-48 w-screen h-[100vh]">

            <div className="mb-6 md:mb-8 border-b-3 border-[#ffc44d] pb-2 w-[85%] md:w-[30%]">

                <h1 className={`${inter.className} text-[3.5rem] md:text-[5.5rem] font-bold bg-gradient-to-r from-[#ffc44d] to-[#FFE3A9] bg-clip-text text-transparent text-center`}>{language === "pt" ? "Sobre Mim" : "About Me"}</h1>

            </div>

            <span className="mb-3 text-center text-[1rem] md:text-[1.2rem] px-2">{language === "pt" ? "Minha tragetória até aqui" : "My path until here"}</span>

            <img
                src="https://avatars.githubusercontent.com/u/183213000?v=4"
                className="rounded-full w-96 h-auto p-8"
            ></img>

            <div className="pt-8 w-0 h-0 border-l-[20px] border-r-[20px] border-b-[20px] border-l-transparent border-r-transparent border-b-[#2a2730]"></div>

            <div className="flex flex-col w-full justify-center items-center max-w-3xl px-0">
                <div className="bg-[#2a2730] w-full">
                    <h1 className="text-center font-bold text-[1.4rem] break-words px-3 pt-6 mt-6 pb-6">
                        {language === "pt" ? (
                            <>
                            Olá! Meu nome é <br /> Pedro Vieira
                            </>
                        ) : (
                            <>
                            Hello! My name is <br /> Pedro Vieira
                            </>
                        )}
                    </h1>
                    <div className="flex flex-row justify-center gap-4 pb-6">

                        <div className="flex flex-row gap-2">
                            <Linkedin className="w-6 bg-black flex items-center justify-center p-[0.1rem]" />
                            <a href="https://www.linkedin.com/in/pedro-vieira-2b83382b7/" target="_blank" rel="noopener noreferrer" className="text-white">Linkedin</a>
                        </div>

                        <div className="flex flex-row gap-2">
                            <Github className="w-6 bg-black rounded-full flex items-center justify-center p-[0.1rem]" />
                            <a href="https://github.com/Pedro-hashm" target="_blank" rel="noopener noreferrer" className="text-white">Github</a>
                        </div>
                        
                    </div>

                    <p className="text-center text-xl break-words px-3 pb-3">askdjaslkdjaklsdjaklsdjklasdjklasjdklasjdklajsdkljasdasdasdasdasdas</p>
                </div>
            </div>

        </section>
    )
} 

export default About;