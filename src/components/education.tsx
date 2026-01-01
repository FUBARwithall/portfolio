'use client';

import React, { useState, useEffect, useRef } from 'react';
import { GraduationCap, Award, Users, ChevronLeft, ChevronRight } from 'lucide-react';
import { school, certificate, organization } from '../data/education';

export default function Education() {
  const [selectedCert, setSelectedCert] = useState<number | null>(null);
  const [currentCertIndex, setCurrentCertIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      nextCert();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentCertIndex]);

  const nextCert = () => {
    setCurrentCertIndex((prev) => (prev === certificate.length - 1 ? 0 : prev + 1));
  };

  const prevCert = () => {
    setCurrentCertIndex((prev) => (prev === 0 ? certificate.length - 1 : prev - 1));
  };

  useEffect(() => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const card = container.children[currentCertIndex] as HTMLElement;
      
      if (card) {
        const scrollPosition = card.offsetLeft - container.offsetLeft;
        
        container.scrollTo({
          left: scrollPosition,
          behavior: 'smooth',
        });
      }
    }
  }, [currentCertIndex]);


  return (
    <section id="education" className="min-h-screen flex justify-center px-6 py-20">
      <div className="max-w-6xl w-full">
        {/* Header */}
        <div className="flex items-center gap-4 mb-12">
          <GraduationCap className="w-12 h-12 text-red-500 md:ml-12" />
          <h2 className="text-5xl font-black">Learning Journey</h2>
        </div>

        {/* Education Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-black mb-6 flex items-center gap-3">
            <GraduationCap className="w-8 h-8 text-blue-600" />
            Education
          </h3>
          <div className="space-y-6">
            {school.map((edu, idx) => (
              <div
                key={idx}
                className="bg-white p-6 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  {/* School Logo */}
                  <div className="flex-shrink-0 w-16 h-16 bg-white border-4 border-black p-2 flex items-center justify-center">
                    <img
                      src={edu.img}
                      alt={edu.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  {/* School Info */}
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-1">
                      <div>
                        <h4 className="text-xl font-bold text-blue-600">{edu.degree}</h4>
                        <p className="text-base text-gray-700">{edu.name}</p>
                      </div>
                      <span className="px-3 py-1 bg-yellow-400 text-black font-bold text-xs rotate-2 whitespace-nowrap self-start">
                        {edu.year}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certificates Section (Updated) */}
        <div className="mb-16 relative group">
          <h3 className="text-3xl font-black mb-6 flex items-center gap-3">
            <Award className="w-8 h-8 text-yellow-500" />
            Certificates
          </h3>

          {/* Container Scroll */}
          <div 
            ref={scrollRef}
            className="pt-2 flex overflow-x-hidden gap-6 pb-8 snap-x snap-mandatory scroll-smooth"
          >
            {certificate.map((cert, idx) => (
              <div
                key={idx}
                className="
                  /* SIZING KARTU: Kunci lebar agar pas 3 kolom dan tidak melebar */
                  w-full md:w-[calc(33.333%-1rem)] md:max-w-[calc(33.333%-1rem)]
                  
                  flex-shrink-0 snap-start 
                  bg-white border-4 border-black 
                  shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] 
                  transition-all hover:-translate-y-1 overflow-hidden cursor-pointer
                "
                onClick={() => setSelectedCert(selectedCert === idx ? null : idx)}
              >
                {/* CONTAINER GAMBAR:
                    Gunakan bg-gray-200 atau bg-black agar jika gambar portrait ada sisa ruang, terlihat rapi 
                */}
                <div className="relative h-48 bg-gray-200 border-b-4 border-black overflow-hidden flex items-center justify-center">
                  <img
                    src={cert.img}
                    alt={cert.title}
                    /* OBJECT FIT:
                      Gunakan 'object-contain' agar seluruh sertifikat (landscape/portrait) terlihat utuh.
                      Gunakan 'p-2' (padding) agar sertifikat tidak nempel ke border.
                    */
                    className="w-full h-full object-contain p-2 hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="p-4">
                  <h4 className="text-xl font-bold truncate">{cert.title}</h4>
                  <p className="text-gray-700">
                    <span className="font-bold text-blue-600">{cert.issuer}</span>
                  </p>
                  <div className="flex flex-col text-sm text-gray-600 mb-2">
                    <span>Issued: {cert.date}</span>
                    <span>Expires: {cert.expiryDate}</span>
                  </div>
                  
                  {/* Tombol view credential (disesuaikan logicnya jika url kosong) */}
                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-4 py-2 bg-blue-600 text-white font-bold text-sm hover:bg-blue-700 transition-all border-2 border-black"
                      onClick={(e) => e.stopPropagation()}
                    >
                      View Credential →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons (Absolute) */}
          <button 
            onClick={prevCert}
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 md:-ml-8 bg-white border-4 border-black p-2 hover:bg-yellow-400 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-y-0 active:shadow-none transition-all z-10"
            aria-label="Previous Certificate"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={nextCert}
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 md:-mr-8 bg-white border-4 border-black p-2 hover:bg-yellow-400 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-y-0 active:shadow-none transition-all z-10"
            aria-label="Next Certificate"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-3 mt-2">
            {certificate.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentCertIndex(idx)}
                className={`h-3 transition-all border-2 border-black ${
                  currentCertIndex === idx ? 'w-8 bg-blue-600' : 'w-3 bg-white hover:bg-gray-200'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Organizations Section */}
        <div>
          <h3 className="text-3xl font-black mb-6 flex items-center gap-3">
            <Users className="w-8 h-8 text-red-500" />
            Organizations
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {organization.map((org, idx) => (
              <div
                key={idx}
                className="bg-white p-6 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  {/* Organization Logo */}
                  <div className="flex-shrink-0 w-16 h-16 bg-white border-4 border-black p-2 flex items-center justify-center">
                    <img
                      src={org.img}
                      alt={org.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  {/* Organization Info */}
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                      <h4 className="text-xl font-bold text-blue-600">{org.name}</h4>
                      <span className="px-3 py-1 bg-red-500 text-white font-bold text-xs rotate-2 whitespace-nowrap self-start">
                        {org.year}
                      </span>
                    </div>
                    <p className="text-gray-700 font-medium">
                      <span className="text-yellow-500">★</span> {org.position}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}