'use client';

import React, { useState } from 'react';
import { Rocket, ChevronLeft, ChevronRight } from 'lucide-react';

type Project = {
  title: string
  role: string
  description: string
  tech: string[]
  color: string
  img: string
}

const projects: Project[] = [
  {
    title: 'Daring Membaca',
    role: 'Full Stack Developer',
    description: 'A simple and intuitive java based library app for those who want to read books.',
    tech: ['Java', 'MongoDB'],
    color: 'border-green-500',
    img: '/projects/Daring membaca.png'
  },
  {
    title: 'EN-ID Translator',
    role: 'Full Stack Developer',
    description: 'AI powered English to Indonesian translator using Dataset from SEACROWD and Helsinki model for training.',
    tech: ['Python', 'PyTorch', 'Transformers'],
    color: 'border-red-500',
    img: '/projects/EN - ID Translator.png'
  },
  {
    title: 'KueQ',
    role: 'Full Stack Developer',
    description: 'E-commerce for selling electronic products with a user-friendly interface and secure payment options.',
    tech: ['Laravel', 'PHP', 'MySQL', 'Bootstrap'],
    color: 'border-yellow-500',
    img: '/projects/KueQ.png'
  },
{
    title: 'PPM',
    role: 'Full Stack Developer',
    description: 'A web profile project for helping local businesses to promote their products.',
    tech: ['FLask', 'Sqlite'],
    color: 'border-yellow-500',
    img: '/projects/PPM.png'
  },
];
function ProjectCard({ project }: { project: Project }) {
  return (
    <div
      className={`h-full bg-white border-4 ${project.color} shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all hover:-translate-y-2 overflow-hidden flex flex-col`}
    >
      <div className="pt-4 pb-4">
        <h3 className="text-2xl font-bold text-center">{project.title}</h3>
      </div>

      <div className="relative h-48 bg-gray-100 border-y-4 border-black overflow-hidden shrink-0">
        <img
          src={project.img}
          alt={project.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform"
        />
      </div>

      <div className="px-6 pt-4">
        <p className="text-sm font-bold text-blue-600">{project.role}</p>
      </div>

      <div className="px-6 pt-2 pb-4 flex-grow">
        <p className="text-gray-600 text-justify line-clamp-3">
          {project.description}
        </p>
      </div>

      <div className="px-6 pb-6 mt-auto">
        <div className="flex flex-wrap gap-2">
          {project.tech.slice(0, 3).map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-black text-white text-sm font-bold"
            >
              {tech}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="px-3 py-1 bg-gray-800 text-white text-sm font-bold">
              +{project.tech.length - 3}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [currentPage, setCurrentPage] = useState(0);

  // Logic: 
  // Mobile: Slide 0 to Length-1
  // Desktop: Slide 0 to Length-2 (Because we show 2 items at a time)
  // We use Math.max(1, ...) to handle edge case if there is only 1 project
  const maxPageMobile = projects.length;
  const maxPageDesktop = Math.max(1, projects.length - 1);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % maxPageDesktop);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + maxPageDesktop) % maxPageDesktop);
  };

  const nextPageMobile = () => {
    setCurrentPage((prev) => (prev + 1) % maxPageMobile);
  };

  const prevPageMobile = () => {
    setCurrentPage((prev) => (prev - 1 + maxPageMobile) % maxPageMobile);
  };

  return (
    <section id="projects" className="min-h-screen flex justify-center px-6 bg-blue-600">
      <div className="max-w-6xl w-full pt-16 pb-16">
        <div className="flex items-center gap-4 mb-12">
          <Rocket className="w-12 h-12 text-yellow-500 md:ml-12" />
          <h2 className="text-5xl font-black text-white">Cool Stuff I Built</h2>
        </div>

        <div className="relative max-w-5xl mx-auto">
          
          {/* Mobile View - 1 project per slide */}
          <div className="md:hidden">
            {/* Slider Window */}
            <div className="overflow-hidden px-1 py-4">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentPage * 100}%)` }}
              >
                {projects.map((project, idx) => (
                  <div key={idx} className="w-full flex-shrink-0 px-3">
                    <ProjectCard project={project} />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Controls */}
            <div className="flex justify-center items-center gap-6 mt-6">
              <button
                onClick={prevPageMobile}
                className="w-14 h-14 flex items-center justify-center bg-yellow-500 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] active:shadow-none active:translate-x-[2px] active:translate-y-[2px] transition-all"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
              
              <button
                onClick={nextPageMobile}
                className="w-14 h-14 flex items-center justify-center bg-yellow-500 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] active:shadow-none active:translate-x-[2px] active:translate-y-[2px] transition-all"
              >
                <ChevronRight className="w-8 h-8" />
              </button>
            </div>
          </div>

          {/* Desktop View - 2 projects per slide */}
          <div className="hidden md:block">
            {/* Slider Window */}
            <div className="overflow-hidden px-1 py-4">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentPage * 50}%)` }}
              >
                {projects.map((project, idx) => (
                  <div key={idx} className="w-1/2 flex-shrink-0 px-4">
                    <ProjectCard project={project} />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Controls */}
            <div className="flex justify-center items-center gap-6 mt-8">
              <button
                onClick={prevPage} // Use prevPageMobile for mobile view section
                className="w-14 h-14 flex items-center justify-center bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-yellow-500 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] active:shadow-none active:translate-x-[2px] active:translate-y-[2px] transition-all group"
              >
                <ChevronLeft className="w-8 h-8 transition-colors" />
              </button>
              
              <button
                onClick={nextPage} // Use nextPageMobile for mobile view section
                className="w-14 h-14 flex items-center justify-center bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-yellow-500 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] active:shadow-none active:translate-x-[2px] active:translate-y-[2px] transition-all group"
              >
                <ChevronRight className="w-8 h-8 transition-colors" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}