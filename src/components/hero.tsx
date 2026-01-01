'use client';

import React from 'react';

interface HeroProps {
  scrollToSection: (id: string) => void;
}

export default function Hero({ scrollToSection }: HeroProps) {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-4xl text-center">
        <h1 className="text-7xl font-black mb-6">
            Piresabil<span className="text-blue-600"> Panji </span>Wistyorafi
        </h1>
        <p className="text-2xl mb-4 text-gray-700">
          A not so <span className="text-red-500 font-bold">creative</span> developer who turns{' '}
          <span className="text-blue-600 font-bold">music</span> into{' '}
          <span className="text-yellow-500 font-bold">code</span>
        </p>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Building digital experiences that make people go "wow!" and "is that it?"
        </p>
        <button
          onClick={() => scrollToSection('projects')}
          className="px-8 py-4 bg-blue-600 text-white font-bold text-lg hover:bg-blue-700 transition-all transform hover:scale-105 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
        >
          Check Out My Work
        </button>
      </div>
    </section>
  );
}