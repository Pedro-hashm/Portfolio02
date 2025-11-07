'use client'
import { useEffect, useState } from 'react';

const MenuOverlay = ({links, language, setLanguage, onClose}) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Trigger animation after mount
        setTimeout(() => setIsVisible(true), 10);
    }, []);

    const handleLinkClick = () => {
        if (onClose) {
            onClose();
        }
    };

    return (
        <div className={`fixed top-0 left-0 w-full h-screen bg-[rgba(9,8,22,0.95)] backdrop-blur-md z-30 flex flex-col items-start p-8 pt-24 transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            {/* Efeito de barra lateral animada */}
            <div className={`absolute left-0 top-24 w-1 bg-[#F8E559] shadow-[0_0_20px_#F8E559] transition-all duration-700 ${isVisible ? 'h-64' : 'h-0'}`}></div>
            
            <ul className="space-y-6 ml-6">
                {links.map((link, index) => (
                    <li 
                        key={index}
                        className={`transition-all duration-500 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}
                        style={{ transitionDelay: `${index * 100 + 200}ms` }}
                    >
                        <a 
                            href={language === "pt" ? link.path[0] : link.path[1]} 
                            className="text-2xl font-medium text-[#ffffff] hover:text-[#F8E559] transition-all duration-300 relative group inline-block"
                        >
                            {language === "pt" ? link.title[0] : link.title[1]}
                            {/* Underline animado */}
                            <span className="absolute left-0 bottom-[-4px] w-0 h-[3px] bg-[#F8E559] shadow-[0_0_10px_#F8E559] transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    </li>
                ))}
            </ul>
            
            {/* Divisor animado */}
            <div className={`w-full h-[1px] bg-gradient-to-r from-transparent via-[#F8E559] to-transparent my-8 ml-6 transition-all duration-700 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`} style={{ transitionDelay: '600ms' }}></div>
            
            {/* Seletor de idioma */}
            <div className="ml-6 space-y-4">
                <p className={`text-sm text-gray-400 mb-3 transition-all duration-500 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`} style={{ transitionDelay: '700ms' }}>
                    {language === "pt" ? "Idioma" : "Language"}
                </p>
                
                <button 
                    onClick={() => setLanguage('en')} 
                    className={`flex flex-row items-center cursor-pointer hover:text-[#F8E559] text-white transition-all duration-500 hover:translate-x-2 group ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}
                    style={{ transitionDelay: '800ms' }}
                >
                    <div className="relative overflow-hidden rounded">
                        <img 
                            src="/images/us-flag.jpg" 
                            alt="English" 
                            className="w-8 h-6 mr-3 transition-transform duration-300 group-hover:scale-110" 
                        />
                    </div>
                    <span className="text-lg font-medium">English</span>
                </button>
                
                <button 
                    onClick={() => setLanguage('pt')} 
                    className={`flex flex-row items-center cursor-pointer hover:text-[#F8E559] text-white transition-all duration-500 hover:translate-x-2 group ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}
                    style={{ transitionDelay: '900ms' }}
                >
                    <div className="relative overflow-hidden rounded">
                        <img 
                            src="/images/br-flag.webp" 
                            alt="Português" 
                            className="w-8 h-6 mr-3 transition-transform duration-300 group-hover:scale-110" 
                        />
                    </div>
                    <span className="text-lg font-medium">Português</span>
                </button>
            </div>

            {/* Padrão decorativo animado no fundo */}
            <div className={`absolute bottom-10 right-10 w-32 h-32 border-2 border-[#F8E559] rounded-full opacity-10 transition-all duration-1000 ${isVisible ? 'scale-100 rotate-0' : 'scale-0 rotate-180'}`} style={{ transitionDelay: '400ms' }}></div>
            <div className={`absolute bottom-20 right-20 w-20 h-20 border-2 border-[#F8E559] rounded-full opacity-10 transition-all duration-1000 ${isVisible ? 'scale-100 rotate-0' : 'scale-0 -rotate-180'}`} style={{ transitionDelay: '600ms' }}></div>
        </div>
    )
}

export default MenuOverlay;