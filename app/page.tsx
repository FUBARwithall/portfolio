'use client';

import React, { useState } from 'react';
import Navbar from '../src/components/navbar';
import Hero from '../src/components/hero';
import Skills from '../src/components/skills';
import Education from '../src/components/education';
import Projects from '../src/components/projects';
import Social from '../src/components/social';
import Footer from '../src/components/footer';

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