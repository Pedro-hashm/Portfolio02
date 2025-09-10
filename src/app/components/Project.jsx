'use client'
import { Play, Github } from 'lucide-react';

const Project = ({img, title, description, demo, rep, tags}) => {

    return (
        <div className="flex flex-col px-12 py-6 md:p-2">

            <div className='flex flex-col p-2 max-w-md w-full'>
                <img
                    src={img}
                    alt={title}
                    className="object-cover w-full h-full"
                />
                <div className="bg-slate-100 rounded-b-2xl px-8 py-5">
                    <span className="text-slate-800 font-bold text-[1.3rem]">{title}</span>
                    <p className="text-slate-900 mt-4 mb-16">{description}</p>
                    {demo && (
                        <div className="flex flex-row mb-2 gap-2 px-4">
                            <Play className="w-6 h-6 bg-slate-900 rounded-full flex items-center justify-center p-[0.1rem]" />
                            <a href={demo} target="_blank" rel="noopener noreferrer" className="text-slate-700 font-bold cursor-pointer">Demo</a>
                        </div>
                    )}
                    {rep && (
                        <div className="flex flex-row gap-2 px-4">
                            <Github className="w-6 h-6 bg-slate-900 rounded-full flex items-center justify-center p-[0.1rem]" />
                            <a href={rep} target="_blank" rel="noopener noreferrer" className="text-slate-700 font-bold cursor-pointer">GitHub Code</a>
                        </div>
                    )}
                    <div className="flex flex-row gap-2 mt-8 text-slate-800 font-bold bg-[#c4c4c4] rounded-full p-1 px-2 w-full">
                        {tags && tags.map((tag, index) => (
                            <span className='bg-[#ffff] rounded-full p-1 text-[0.8rem]' key={index}>{tag}</span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project; 