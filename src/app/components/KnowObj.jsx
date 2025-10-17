'use client'
import Image from "next/image";

const KnowObj = ({title, imgUrl}) => {

    return (
    <div className="flex flex-col items-center justify-center transform transition duration-300 hover:scale-110 gap-0 md:gap-4">
        <div className="w-12 h-8 md:w-18 md:h-18 overflow-hidden">
            <img
                src={imgUrl}
                alt={title}
                className="w-full h-full object-contain md:grayscale hover:grayscale-0 transition duration-300 max-w-[80px]"
            />
        </div>
        <span className="text-[0.9rem] md:text-[1.1rem] font-thin">
            {title}
        </span>
    </div>
)}

export default KnowObj; 