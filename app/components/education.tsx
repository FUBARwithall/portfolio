'use client';

import React, { useState, useEffect, useRef } from 'react';
import { GraduationCap, Award, Users, ChevronLeft, ChevronRight } from 'lucide-react';

const school = [
  {
    degree: 'Natural Science',
    img: "/education/school/sman3-tegal.png",
    name: 'SMAN 3 Kota Tegal',
    year: '2020 - 2023'
  },
  {
    degree: 'Bachelor of Informatics Engineering',
    img: "/education/school/unh-tegal.png",
    name: 'Universitas Harkat Negeri',
    year: '2023 - NOW'
  }
];

const certificate = [
  {
    title: "Belajar dasar AI",
    img: "/education/certification/Belajar dasar AI - Piresabil panji wistyorafi.png",
    issuer: "Dicoding Indonesia",
    date: "2025-09",
    expiryDate: "2028-09",
    credentialUrl: "https://www.dicoding.com/certificates/1RXYQ1YGKZVM"
  },
  {
    title: "Responsive web design",
    img: "/education/certification/Responsive Web Design Cert - JustParadis.png",
    issuer: "freeCodeCamp",
    date: "2025-10",
    expiryDate: "Null",
    credentialUrl: "https://freecodecamp.org/certification/justparadis/responsive-web-design"
  },
  {
    title: "Computer Network",
    img: "/education/certification/Computer Network.jpg",
    issuer: "Huawei",
    date: "2025-5",
    expiryDate: "Null",
    credentialUrl: ""
  },
  {
    title: "Cloud Advance: Architecture and Technologies",
    img: "/education/certification/Cloud Advanced - Architecture and Technologies.jpg",
    issuer: "Huawei",
    date: "2025-11",
    expiryDate: "Null",
    credentialUrl: ""
  }
];

const organization = [
  {
    name: 'Polytechnic English Club',
    img: "/education/organization/henc-logo.png",
    year: '2024',
    position: 'Creative division'
  },
  {
    name: 'Harkat English Club',
    img: "/education/organization/henc-logo.png",
    year: '2025',
    position: 'Enterprise division'
  }
];

export default function Education() {
  const [selectedCert, setSelectedCert] = useState<number | null>(null);
  const [currentCertIndex, setCurrentCertIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  // --- Logic Auto Play & Pagination ---

  // 1. Auto Play setiap 5 detik
  useEffect(() => {
    const interval = setInterval(() => {
      nextCert();
    }, 5000); // 5000ms = 5 detik

    return () => clearInterval(interval);
  }, [currentCertIndex]);

  // 2. Fungsi Next / Prev
  const nextCert = () => {
    setCurrentCertIndex((prev) => (prev === certificate.length - 1 ? 0 : prev + 1));
  };

  const prevCert = () => {
    setCurrentCertIndex((prev) => (prev === 0 ? certificate.length - 1 : prev - 1));
  };

  // 3. Efek Scroll saat index berubah
  useEffect(() => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const card = container.children[currentCertIndex] as HTMLElement;
      
      if (card) {
        // Scroll container agar kartu target ada di posisi awal (kiri)
        // Kita kurangi sedikit padding (misal 24px/1.5rem) agar pas
        const scrollPosition = card.offsetLeft - container.offsetLeft;
        
        container.scrollTo({
          left: scrollPosition,
          behavior: 'smooth',
        });
      }
    }
  }, [currentCertIndex]);

  // --- End Logic ---

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
                className="min-w-[calc(100%)] md:min-w-[calc(33.333%-1rem)] bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all hover:-translate-y-1 overflow-hidden cursor-pointer snap-start flex-shrink-0"
                onClick={() => setSelectedCert(selectedCert === idx ? null : idx)}
              >
                <div className="relative h-48 bg-gray-100 border-b-4 border-black overflow-hidden">
                  <img
                    src={cert.img}
                    alt={cert.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform"
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
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 bg-blue-600 text-white font-bold text-sm hover:bg-blue-700 transition-all border-2 border-black"
                    onClick={(e) => e.stopPropagation()}
                  >
                    View Credential →
                  </a>
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