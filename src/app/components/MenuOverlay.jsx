'use client'

const MenuOverlay = ({links, language, setLanguage}) => {

    return (
        <div className="fixed top-19 left-0 w-full h-screen bg-[rgba(9,8,22,0.8)] z-49 flex flex-col items-start p-5 pt-10">

            <ul className="space-y-4">
                {links.map((link, index) => (
                    <li key={index}>
                        <a href={language === "pt" ? link.path[0] : link.path[1]} className="text-lg text-[#ffffff] hover:text-[#F8E559]">
                            {language === "pt" ? link.title[0] : link.title[1]}
                        </a>
                    </li>
                ))}
            </ul>

            <button onClick={() => setLanguage('en')} className="mt-4 flex flex-row cursor-pointer">
                <img src="/images/us-flag.jpg" alt="English" className="w-6 h-4 mr-2 mt-1" />
                <a>
                    English
                </a>
            </button>

            
            <button onClick={() => setLanguage('pt')} className="mt-4 flex flex-row cursor-pointer">
                <img src="/images/br-flag.webp" alt="English" className="w-6 h-4 mr-2 mt-1" />
                <a>
                    Português
                </a>
            </button>

        </div>
    )
}

export default MenuOverlay; 