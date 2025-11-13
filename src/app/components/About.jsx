import { Inter } from "next/font/google";
import { Github, Linkedin, Mail } from 'lucide-react';


const inter = Inter({
    subsets: ["latin"],
    weight: ["400", "700"],
});

const About = ({ language }) => {

    const handleSubmit = async (e) => {
        e.preventDefault(); // previne reload da página

        const email = e.target.email.value;
        const subject = language === "pt" 
            ? "Vi seu portfolio, " + e.target.subject.value
            : "From your portfolio, " + e.target.subject.value;
        
        const message = e.target.message.value;

        const mailtoLink = `mailto:pedrosadultos@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;

        window.location.href = mailtoLink;
    }

    return (
        <section id="about" className="flex flex-col items-center top-0 left-0 relative z-2 bg-[#1b1622] pt-48 w-full min-h-[225vh]">

            {/* --- Seção Sobre Mim --- */}
            <div className="mb-6 md:mb-8 border-b-3 border-[#ffc44d] pb-2 w-[85%] md:w-[30%] transition-all duration-300 hover:border-[#ffe3a9]">
                <h1 className={`${inter.className} text-[3.5rem] md:text-[5.5rem] font-bold bg-gradient-to-r from-[#ffc44d] to-[#FFE3A9] bg-clip-text text-transparent text-center transition-all duration-300 hover:opacity-80`}>
                    {language === "pt" ? "Sobre Mim" : "About Me"}
                </h1>
            </div>

            <div className="flex flex-col items-center justify-center md:flex-row md:mb-48 md:mt-8">

                <img
                    src="https://avatars.githubusercontent.com/u/183213000?v=4"
                    className="rounded-full w-96 h-auto p-8 transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-lg hover:shadow-[#ffc44d]/20"
                    alt="Foto de Pedro Vieira"
                ></img>

                {/* --- Seta (Triângulo) --- */}
                <div className="
                    w-0 h-0
                    border-l-[20px] border-r-[20px] border-b-[20px]
                    border-l-transparent border-r-transparent border-b-[#2a2730]
                    md:border-l-0
                    md:border-t-[20px] md:border-b-[20px] md:border-r-[20px]
                    md:border-t-transparent md:border-b-transparent md:border-r-[#2a2730]
                "
                ></div>

                {/* --- Caixa de Texto "Sobre Mim" --- */}
                <div className="bg-[#2a2730] md:rounded-2xl flex flex-col w-full justify-center items-center max-w-3xl px-0 transition-all duration-500 ease-in-out hover:shadow-xl hover:shadow-black/30">
                    <div className="w-full">
                        <h1 className="text-center md:text-left md:px-14 font-bold text-[1.4rem] break-words px-3 pt-6 mt-6 pb-6">
                            {language === "pt" ? "Olá! Meu nome é Pedro Vieira" : "Hello! My name is Pedro Vieira"}
                        </h1>

                        {/* --- Links Sociais --- */}
                        <div className="flex flex-row justify-center md:justify-start md:px-14 gap-6 pb-6">
                            
                            <a href="https://www.linkedin.com/in/pedro-vieira-2b83382b7/" target="_blank" rel="noopener noreferrer" className="flex flex-row gap-2 items-center group cursor-pointer">
                                <Linkedin className="w-6 bg-black flex items-center justify-center p-[0.1rem] rounded-sm transition-all duration-300 ease-in-out transform group-hover:scale-110 group-hover:bg-[#ffc44d] group-hover:text-black" />
                                <span className="text-white transition-all duration-300 ease-in-out group-hover:text-[#ffc44d]">Linkedin</span>
                            </a>

                            <a href="https://github.com/Pedro-hashm" target="_blank" rel="noopener noreferrer" className="flex flex-row gap-2 items-center group cursor-pointer">
                                <Github className="w-6 bg-black rounded-full flex items-center justify-center p-[0.1rem] transition-all duration-300 ease-in-out transform group-hover:scale-110 group-hover:bg-[#ffc44d] group-hover:text-black" />
                                <span className="text-white transition-all duration-300 ease-in-out group-hover:text-[#ffc44d]">Github</span>
                            </a>

                        </div>

                        {/* ... parágrafos ... */}
                        <p className="text-center md:text-left md:px-14 text-[1.1rem] break-words px-12 pb-3">
                            {language === "pt" ? "Gosto de estar envolvido em todo o processo, desde entender a ideia até ver o projeto rodando e entregando resultado." : "I like to be involved in the entire process, from understanding the idea to seeing the project running and delivering results."}
                        </p>
                        <p className="text-center md:text-left md:px-14 text-[1.1rem] break-words px-12 pb-3">
                            {language === "pt" ? "Tenho um olhar prático e gosto de buscar soluções que façam sentido de verdade, tanto pro usuário quanto pro negócio." : "I have a practical outlook and enjoy seeking solutions that truly make sense, both for the user and the business."}
                        </p>
                        <p className="text-center md:text-left md:px-14 text-[1.1rem] break-words px-12 pb-3">
                            {language === "pt" ? "Curto trabalhar em equipe, porque é onde surgem as melhores ideias e onde cada um puxa o outro pra entregar mais." : "I enjoy working in a team, because that's where the best ideas emerge and where everyone pushes each other to deliver more."}
                        </p>
                        <p className="text-center md:text-left md:px-14 text-[1.1rem] break-words px-12 pb-3">
                            {language === "pt" ? "Pra mim, desenvolvimento é sobre construir algo que funcione, que resolva um problema real e que faça diferença no final do dia." : "For me, development is about building something that works, solves a real problem, and makes a difference at the end of the day."}
                        </p>
                        <p className="text-center md:text-left md:px-14 text-[1.1rem] break-words px-12 pb-3">
                            {language === "pt" ? "Já trabalhei em projetos web completos, integrações com APIs de pagamento, automações, plataformas com acesso restrito para criadores de conteúdo e soluções de análise de dados com machine learning aplicadas a Business Intelligence em RH." : "I've worked on complete web projects, integrations with payment APIs, automations, platforms with restricted access for content creators, and data analysis solutions with machine learning applied to HR Business Intelligence."}
                        </p>
                        <p className="text-center md:text-left md:px-14 text-[1.1rem] break-words px-12 pb-3">
                            {language === "pt" ? "Se você tem um projeto desafiador ou quer transformar uma ideia em resultado concreto, vamos conversar, adoro oportunidades de colaborar e criar algo que faça diferença." : "If you have a challenging project or want to turn an idea into a concrete result, let's talk. I love opportunities to collaborate and create something that makes a difference."}
                        </p>

                        {/* --- Link "Contate-me" --- */}
                        <a href="#contact" rel="noopener noreferrer" className="flex ml-[35%] md:ml-0 lg:ml-0 flex-row gap-2 justify-center py-5 pb-48 md:pb-14 md:px-14 items-center group cursor-pointer w-fit">
                            <Mail className="w-6 flex items-center justify-center p-[0.1rem] transition-all duration-300 ease-in-out transform group-hover:scale-110 group-hover:text-[#ffc44d]" />
                            <span className="text-white transition-all duration-300 ease-in-out group-hover:text-[#ffc44d]">
                                {language === "pt" ? "Contate-me" : "Contact-me"}
                            </span>
                        </a>

                    </div>
                </div>

            </div>

            {/* --- Seção Contato --- */}
            <div className="
                mb-0 flex flex-col items-center 
                bg-gradient-to-b from-[#2a2730] to-[#1b1622] 
                md:bg-none md:bg-[#1b1622]
                w-full
                "
            >
                <div id="contact" className="mb-6 md:mb-8 border-b-3 border-[#ffc44d] pb-2 transition-all duration-300 hover:border-[#ffe3a9]">
                    <h1 className={`${inter.className} text-[3.5rem] md:text-[5.5rem] font-bold bg-gradient-to-r from-[#ffc44d] to-[#FFE3A9] bg-clip-text text-transparent text-center transition-all duration-300 hover:opacity-80`}>
                        {language === "pt" ? "Contato" : "Contact"}
                    </h1>
                </div>

                <p className="text-center text-[1rem] break-words px-12 pb-8 pt-6 md:pt-0 md:pb-14">
                    {language === "pt" ? "Precisa de um desenvolvedor? Quer transformar uma ideia em resultado ou só bater um papo sobre projetos? Minha caixa de mensagens está sempre aberta, farei o possível para responder rapidinho!" : "Need a developer? Want to turn an idea into results or just chat about projects? My inbox is always open, I'll do my best to respond quickly!"}
                </p>

                {/* --- Formulário --- */}
                <div id="contato">
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-[calc(100vw-3rem)] md:w-[50rem] mb-36">
                        <div>
                            <label
                                htmlFor='email'
                                className="text-white text-lg"
                            >
                                {language === "pt" ? "Seu Email" : "Your Email"}
                            </label>
                            <input
                                name="email"
                                type="email"
                                id="email"
                                required
                                className='bg-[#2a2730] text-white w-full p-2 mt-2 rounded-lg border border-transparent outline-none transition-all duration-300 ease-in-out focus:ring-2 focus:ring-[#ffc44d] focus:bg-[#2f2c38]'
                                placeholder={language === "pt" ? "exemplo@gmail.com" : 'example@gmail.com'}
                            />
                        </div>
                        <div>
                            <label
                                htmlFor='subject'
                                className="text-white text-lg"
                            >
                                {language === "pt" ? "Assunto" : "Subject"}
                            </label>
                            <input
                                name="subject"
                                type="text"
                                id="subject"
                                required
                                className='bg-[#2a2730] text-white w-full p-2 mt-2 rounded-lg border border-transparent outline-none transition-all duration-300 ease-in-out focus:ring-2 focus:ring-[#ffc44d] focus:bg-[#2f2c38]'
                                placeholder={language === "pt" ? "Só dizendo oi" : 'Just saying hi'}
                            />
                        </div>
                        <div>
                            <label
                                htmlFor='message'
                                className="text-white text-lg"
                            >
                                {language === "pt" ? "Mensagem" : "Message"}
                            </label>
                            <textarea
                                name="message"
                                id="message"
                                required
                                className="bg-[#2a2730] text-white w-full p-2 mt-2 h-40 rounded-lg border border-transparent resize-none outline-none transition-all duration-300 ease-in-out focus:ring-2 focus:ring-[#ffc44d] focus:bg-[#2f2c38]"
                                placeholder={language === "pt" ? "Vamos conversar sobre..." : "Let's talk about..."}
                            ></textarea>
                        </div>
                        
                        {/* --- Botão Enviar --- */}
                        <button
                            type="submit"
                            className="place-self-center bg-[#2a2730] text-white p-3 rounded-lg mt-8 w-[50%] 
                                       font-bold text-lg
                                       transition-all duration-300 ease-in-out transform 
                                       hover:bg-[#ffc44d] hover:text-[#1b1622] hover:scale-105 
                                       hover:shadow-lg hover:shadow-[#ffc44d]/20
                                       focus:outline-none focus:ring-2 focus:ring-[#ffc44d] focus:ring-offset-2 focus:ring-offset-[#1b1622]"
                        >
                            {language === "pt" ? "Enviar" : "Submit"}
                        </button>
                    </form>
                </div>
            </div>

            {/* --- Footer --- */}
            <div className="p-6 bg-[#100e14] w-full flex justify-center items-center">
                <span className="text-center text-[0.8rem] pb-6 text-gray-400 transition-all duration-300 hover:text-[#ffc44d]">
                    {language === "pt" ? "© 2025 Pedro Vieira. Todos os direitos reservados." : "© 2025 Pedro Vieira. All rights reserved."}
                </span>
            </div>

        </section>
    )
}

export default About;