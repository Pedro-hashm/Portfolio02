import { Inter } from "next/font/google";
import { Github, Linkedin, Mail } from 'lucide-react';


const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"], 
});

const About = ({language}) => {

    const handleSubmit = async (e) => {
    }

    return (
        <section className="flex flex-col items-center top-0 left-0 relative z-2 bg-[#1b1622] pt-48 w-screen h-[225vh]">

            <div className="mb-6 md:mb-8 border-b-3 border-[#ffc44d] pb-2 w-[85%] md:w-[30%]">

                <h1 className={`${inter.className} text-[3.5rem] md:text-[5.5rem] font-bold bg-gradient-to-r from-[#ffc44d] to-[#FFE3A9] bg-clip-text text-transparent text-center`}>{language === "pt" ? "Sobre Mim" : "About Me"}</h1>

            </div>

            <span className="mb-3 text-center text-[1rem] md:text-[1.2rem] px-2">{language === "pt" ? "Minha tragetória até aqui" : "My path until here"}</span>

            <div className="flex flex-col items-center justify-center md:flex-row md:mb-48 md:mt-8">

                <img
                    src="https://avatars.githubusercontent.com/u/183213000?v=4"
                    className="rounded-full w-96 h-auto p-8"
                ></img>

                <div className="
                    w-0 h-0
                    border-l-[20px] border-r-[20px] border-b-[20px]
                    border-l-transparent border-r-transparent border-b-[#2a2730]
                    md:border-l-0 md:border-b-0
                    md:border-t-[20px] md:border-b-[20px] md:border-r-[20px]
                    md:border-t-transparent md:border-b-transparent md:border-r-[#2a2730]
                "
                ></div>

                <div className="bg-[#2a2730] md:rounded-2xl flex flex-col w-full justify-center items-center max-w-3xl px-0">

                    <div className="w-full">

                        <h1 className="text-center md:text-left md:px-14 font-bold text-[1.4rem] break-words px-3 pt-6 mt-6 pb-6">
                            {language === "pt" ? (
                                <>
                                Olá! Meu nome é Pedro Vieira
                                </>
                            ) : (
                                <>
                                Hello! My name is Pedro Vieira
                                </>
                            )}
                        </h1>

                        <div className="flex flex-row justify-center md:justify-start md:px-22 gap-4 pb-6">

                            <div className="flex flex-row gap-2">
                                <Linkedin className="w-6 bg-black flex items-center justify-center p-[0.1rem]" />
                                <a href="https://www.linkedin.com/in/pedro-vieira-2b83382b7/" target="_blank" rel="noopener noreferrer" className="text-white">Linkedin</a>
                            </div>

                            <div className="flex flex-row gap-2">
                                <Github className="w-6 bg-black rounded-full flex items-center justify-center p-[0.1rem]" />
                                <a href="https://github.com/Pedro-hashm" target="_blank" rel="noopener noreferrer" className="text-white">Github</a>
                            </div>
                
                        </div>

                        <p className="text-center md:text-left md:px-14 text-[1.1rem] break-words px-12 pb-3">
                            I’m a fullstack developer with a strong focus on building responsive and efficient web applications using React.
                        </p>

                        <p className="text-center md:text-left md:px-14 text-[1.1rem] break-words px-12 pb-3">
                            Even with a relatively short time in the field, I've gained solid experience in tackling real-world challenges, writing clean code, and ensuring high-quality user experiences.
                        </p>

                        <p className="text-center md:text-left md:px-14 text-[1.1rem] break-words px-12 pb-3">
                            What I love most about development is the process of solving unique problems—creativity and persistence are key, and I bring both to every project.
                        </p>

                        <p className="text-center md:text-left md:px-14 text-[1.1rem] break-words px-12 pb-3">
                            I’ve also worked on streamlining deployment processes and maintaining strong collaboration within teams to deliver projects efficiently.
                        </p>

                        <p className="text-center md:text-left md:px-14 text-[1.1rem] break-words px-12 pb-3">
                            Every day is an opportunity to learn something new, and I thrive on that.
                        </p>

                        <p className="text-center md:text-left md:px-14 text-[1.1rem] break-words px-12 pb-3">
                            Whether it’s refining my skills or exploring new technologies, I’m always looking for ways to grow and improve.
                        </p>

                        <p className="text-center md:text-left md:px-14 text-[1.1rem] break-words px-12 pb-3">
                            If you're looking for someone who’s ready to contribute to your projects and take on new challenges, I’d love to connect!
                        </p>

                        <p className="text-center md:text-left md:px-14 font-bold text-[1.1rem] break-words px-12 pb-3">
                            I would be very happy if you contacted me
                        </p>

                        <div className="flex flex-row gap-2 justify-center py-5 pb-48 md:pb-14 md:justify-start md:px-14">
                            <Mail className="w-6 flex items-center justify-center p-[0.1rem]" />
                            <a href="https://github.com/Pedro-hashm" target="_blank" rel="noopener noreferrer" className="text-white">Contact-me</a>
                        </div>

                    </div>

                </div>

            </div>

            <div className="
                mb-0 flex flex-col items-center 
                bg-gradient-to-b from-[#2a2730] to-[#1b1622] 
                md:bg-none md:bg-[#1b1622]
                "
            >

                <div className="mb-6 md:mb-8 border-b-3 border-[#ffc44d] pb-2">
                    <h1 className={`${inter.className} text-[3.5rem] md:text-[5.5rem] font-bold bg-gradient-to-r from-[#ffc44d] to-[#FFE3A9] bg-clip-text text-transparent text-center`}>{language === "pt" ? "Contato" : "Contact"}</h1>
                </div>

                <p className="text-center text-[1rem] break-words px-12 pb-8 pt-6 md:pt-0 md:pb-14">

                    Need a developer? Want to work together? Just want to say hi? My inbox is always open. I'll do my best to get back to you!

                </p>

                <div>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-[calc(100vw-3rem)] md:w-[50rem] mb-36">
                        <div>
                            <label
                                htmlFor='email' 
                                className="text-white text-lg"
                            >
                                Your Email
                            </label>
                            <input
                                name="email"
                                type="email"
                                id="email"
                                required
                                className='bg-[#2a2730] text-white w-full p-2 mt-2 rounded-lg border border-[#1b1622]'
                                placeholder='example@gmail.com'
                            />
                        </div>
                        <div>
                            <label
                                htmlFor='subject' 
                                className="text-white text-lg"
                            >
                                Subject
                            </label>
                            <input
                                name="subject"
                                type="text"
                                id="subject"
                                required
                                className='bg-[#2a2730] text-white w-full p-2 mt-2 rounded-lg border border-[#1b1622]'
                                placeholder='Just saying hi'
                            />
                        </div>
                        <div>
                            <label
                                htmlFor='message' 
                                className="text-white text-lg"
                            >
                                Message
                            </label>
                            <textarea
                                name="message"
                                id="message"
                                required
                                className="bg-[#2a2730] text-white w-full p-2 mt-2 h-40 rounded-lg border border-[#1b1622] resize-none"
                                placeholder="Let's talk about..."
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="place-self-center bg-[#2a2730] text-white p-2 rounded-lg mt-8 hover:border hover:border-[#ffc44d] transition w-[50%]"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>

            <div className="p-6 bg-[#100e14] w-screen flex justify-center items-center">
                <span className="text-center text-[0.8rem] pb-6">© 2025 Pedro Vieira. All rights reserved.</span>
            </div>

        </section>
    )
} 

export default About;