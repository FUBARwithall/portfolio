'use client';

import React, { useState } from 'react';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Skills from './components/skills';
import Education from './components/education';
import Projects from './components/projects';
import Social from './components/social';
import Footer from './components/footer';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />
      <Hero scrollToSection={scrollToSection} />
      <Skills />
      <Education />
      <Projects />
      <Social />
      <Footer />
    </div>
  );
}