'use client';

import React, { useState } from 'react';
import { Code } from 'lucide-react';
import Image from 'next/image';
import { Marquee } from "../components/ui/marquee";
import { languages, frameworks, tools, type Skill } from '../data/skills'

function SkillCard({ item }: { item: Skill }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="bg-white flex flex-col items-center justify-center
                 w-28 h-28 border-4 border-black
                 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]
                 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]
                 transition-all hover:-translate-y-1 cursor-pointer
                 flex-shrink-0"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered ? (
        <span className="font-bold text-lg text-center px-2">
          {item.name}
        </span>
      ) : item.picture ? (
        <Image
          src={item.picture}
          alt={item.name}
          width={64}
          height={64}
        />
      ) : (
        <span className="font-bold text-lg text-center px-2">
          {item.name}
        </span>
      )}
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen flex justify-center px-6 bg-blue-600">
      <div className="max-w-6xl w-full pt-16 pb-16">
        <div className="flex items-center gap-4">
          <Code className="w-12 h-12 text-white md:ml-12" />
          <h2 className="text-5xl font-black text-white">My Toolkit</h2>
        </div>

        <h4 className="text-3xl font-black text-white pt-8 pb-4">Languages</h4>
        <div className="relative">
          <Marquee pauseOnHover className="[--gap:1.5rem] mb-8">
            {languages.map((item, idx) => (
              <SkillCard key={idx} item={item} />
            ))}
          </Marquee>

          {/* Left gradient */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-16
            bg-gradient-to-r from-blue-600 to-transparent z-10" />

          {/* Right gradient */}
          <div className="pointer-events-none absolute right-0 top-0 h-full w-16
            bg-gradient-to-l from-blue-600 to-transparent z-10" />
        </div>

        <h4 className="text-3xl font-black text-white pb-4">Frameworks</h4>
        <div className='relative'>
          <Marquee pauseOnHover reverse className="[--gap:1.5rem] mb-8">
            {frameworks.map((item, idx) => (
              <SkillCard key={idx} item={item} />
            ))}
          </Marquee>

          {/* Left gradient */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-16
            bg-gradient-to-r from-blue-600 to-transparent z-10" />

          {/* Right gradient */}
          <div className="pointer-events-none absolute right-0 top-0 h-full w-16
            bg-gradient-to-l from-blue-600 to-transparent z-10" />
        </div>

        <h4 className="text-3xl font-black text-white pb-4">Tools</h4>
        <div className='relative'>
          <Marquee pauseOnHover className="[--gap:1.5rem] mb-8">
            {tools.map((item, idx) => (
              <SkillCard key={idx} item={item} />
            ))}
          </Marquee>

          {/* Left gradient */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-16
            bg-gradient-to-r from-blue-600 to-transparent z-10" />

          {/* Right gradient */}
          <div className="pointer-events-none absolute right-0 top-0 h-full w-16
            bg-gradient-to-l from-blue-600 to-transparent z-10" />
        </div>
      </div>
    </section>
  );
}