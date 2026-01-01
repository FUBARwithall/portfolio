'use client';

import React from 'react';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

export default function Social() {
  return (
    <section id="social" className="min-h-screen flex items-center justify-center px-6 pt-16 pb-16">
      <div className="max-w-4xl w-full text-center">
        <h2 className="text-5xl font-black mb-6">Let's Connect Together!</h2>
        <p className="text-xl text-gray-600 mb-6">
          Got a project idea? Just want to chat about tech? I'm all ears! 👂
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto mb-12" style={{ display: 'grid' }}>
          <a
            href="mailto:panjirafi96@gmail.com"
            className="p-6 bg-blue-600 text-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all hover:-translate-y-2 flex items-center justify-center"
          >
            <Mail className="w-12 h-12" />
          </a>
          <a
            href="https://github.com/FUBARwithall"
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 bg-black text-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(59,130,246,1)] hover:shadow-[12px_12px_0px_0px_rgba(59,130,246,1)] transition-all hover:-translate-y-2 flex items-center justify-center"
          >
            <Github className="w-12 h-12" />
          </a>
          <a
            href="https://linkedin.com/in/piresabil-panji-wistyorafi-187791315/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 bg-blue-600 text-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all hover:-translate-y-2 flex items-center justify-center"
          >
            <Linkedin className="w-12 h-12" />
          </a>
          <a
            href="https://x.com/piresabil43700"
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 bg-blue-400 text-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all hover:-translate-y-2 flex items-center justify-center"
          >
            <Twitter className="w-12 h-12" />
          </a>
        </div>
        <div className="inline-block bg-yellow-400 px-8 py-4 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rotate-2">
          <p className="font-bold text-xl">Made with paranoia and insomnia</p>
        </div>
      </div>
    </section>
  );
}