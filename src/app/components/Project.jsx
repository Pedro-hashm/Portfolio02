'use client'
import { Play, Github, Linkedin } from 'lucide-react';

const Project = ({img, title, description, demo, rep, link, tags}) => {
    return (
        <div className="flex flex-col bg-slate-100 rounded-2xl overflow-hidden shadow-md w-[320px] h-[520px]">
            {/* Wrapper da imagem com proporção 1475x1008 */}
            <div className="relative w-full pt-[68.3%] bg-gray-200">
                <img
                    src={img}
                    alt={title}
                    className="absolute top-0 left-0 w-full h-full object-cover"
                />
            </div>

            {/* Corpo do card com layout fixo */}
            <div className="flex flex-col justify-between flex-1 px-6 py-4">
                <div>
                    <h3 className="text-slate-800 font-bold text-[1.2rem] leading-tight">{title}</h3>
                    <p className="text-slate-900 mt-3 text-[0.95rem] line-clamp-5 overflow-hidden">
                        {description}
                    </p>
                </div>

                <div className="mt-4 space-y-2">
                    {demo && (
                        <div className="flex items-center gap-2">
                            <Play className="w-5 h-5 bg-slate-900 rounded-full text-white p-[0.1rem]" />
                            <a href={demo} target="_blank" rel="noopener noreferrer" className="text-slate-700 font-semibold">Demo</a>
                        </div>
                    )}
                    {rep && (
                        <div className="flex items-center gap-2">
                            <Github className="w-5 h-5 bg-slate-900 rounded-full text-white p-[0.1rem]" />
                            <a href={rep} target="_blank" rel="noopener noreferrer" className="text-slate-700 font-semibold">GitHub</a>
                        </div>
                    )}
                    {link && (
                        <div className="flex items-center gap-2">
                            <Linkedin className="w-5 h-5 bg-slate-900 rounded-full text-white p-[0.1rem]" />
                            <a href={link} target="_blank" rel="noopener noreferrer" className="text-slate-700 font-semibold">LinkedIn</a>
                        </div>
                    )}

                    <div className="flex flex-wrap gap-2 mt-3 bg-[#c4c4c4] rounded-full p-1 px-2 w-full">
                        {tags?.map((tag, index) => (
                            <span key={index} className="bg-white rounded-full p-1 text-[0.8rem] font-semibold">{tag}</span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;
