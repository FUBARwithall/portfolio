'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  scrollToSection: (id: string) => void;
}

export default function Navbar({ activeSection, scrollToSection }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleNavClick = (section: string) => {
    scrollToSection(section);
    setIsMenuOpen(false);
  };

  const navSections = ['skills', 'education', 'projects', 'social'];

  return (
    <nav
      className={`fixed w-full bg-white/90 backdrop-blur-sm border-b-4 border-blue-600 z-50
      transition-transform duration-300 ${
        hidden ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          
          {/* Logo / Home */}
          <button
            onClick={() => scrollToSection('home')}
            className={`text-2xl font-bold transition-colors ${
              activeSection === 'home' ? 'text-blue-600' : 'text-black'
            }`}
          >
            <span className="text-blue-600">&lt;</span>
            <span>My Portfolio</span>
            <span className="text-blue-600">/&gt;</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-6">
            {navSections.map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`capitalize font-medium transition-all hover:text-blue-600 ${
                  activeSection === section ? 'text-blue-600' : 'text-black'
                }`}
              >
                {section}
              </button>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-black hover:text-blue-600 transition-all"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t-2 border-blue-600">
            <div className="flex flex-col gap-4 mt-4">
              {navSections.map((section) => (
                <button
                  key={section}
                  onClick={() => handleNavClick(section)}
                  className={`capitalize font-medium text-left transition-all hover:text-blue-600 hover:translate-x-2 ${
                    activeSection === section ? 'text-blue-600' : 'text-black'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
