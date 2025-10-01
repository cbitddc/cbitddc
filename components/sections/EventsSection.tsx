"use client";

import { useEffect, useRef, useState } from 'react';
import { Instagram, Twitter, Linkedin } from 'lucide-react';
import Image from 'next/image';

export function EventsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Event photos for past events horizontal scroll
  const eventPhotos = [
    { id: 1, src: "/logo.jpeg", alt: "CyberSec Summit 2024", title: "CyberSec Summit 2024" },
    { id: 2, src: "/logo.jpeg", alt: "Ethical Hacking Workshop", title: "Ethical Hacking Workshop" },
    { id: 3, src: "/logo.jpeg", alt: "Bug Bounty Session", title: "Bug Bounty Session" },
    { id: 4, src: "/logo.jpeg", alt: "CTF Competition", title: "CTF Competition" },
    { id: 5, src: "/logo.jpeg", alt: "Security Awareness", title: "Security Awareness" },
    { id: 6, src: "/logo.jpeg", alt: "Blockchain Workshop", title: "Blockchain Workshop" },
    { id: 7, src: "/logo.jpeg", alt: "Penetration Testing", title: "Penetration Testing" },
    { id: 8, src: "/logo.jpeg", alt: "InfoSec Meetup", title: "InfoSec Meetup" },
    { id: 9, src: "/logo.jpeg", alt: "Network Security", title: "Network Security Workshop" },
    { id: 10, src: "/logo.jpeg", alt: "Digital Forensics", title: "Digital Forensics Session" },
  ];

  // Event types for scrolling text
  const eventTypes = [
    "CTFs", "Cybersecurity Workshops", "Bug Bounties", "Ethical Hacking", 
    "Information Security", "Penetration Testing", "Network Security", 
    "Web Application Security", "Digital Forensics", "Malware Analysis",
    "Security Auditing", "Incident Response", "Cryptography"
  ];

  return (
    <section id="events" ref={sectionRef} className="py-20 bg-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-cyan-50/30"></div>
        <div className="absolute top-20 right-10 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-cyan-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center mb-16">
            <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="flex items-center justify-center mb-6">
                <Image 
                  src="/logo.jpeg" 
                  alt="DDC Logo" 
                  width={60} 
                  height={60}
                  className="rounded-2xl shadow-lg mr-4"
                />
                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-800 bg-clip-text text-transparent">
                  Our Events
                </h2>
              </div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Explore our dynamic cybersecurity events and activities that shape the future of digital security.
              </p>
            </div>
          </div>

          {/* Past Events Section */}
          <div className={`mb-16 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Past Events Gallery</h3>
            
            {/* Horizontal Scrolling Photos */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-50 to-cyan-50 p-6 mb-8">
              <div className="flex animate-scroll-horizontal space-x-6">
                {[...eventPhotos, ...eventPhotos].map((photo, index) => (
                  <div 
                    key={`${photo.id}-${index}`}
                    className="flex-shrink-0 group cursor-pointer"
                  >
                    <div className="relative w-64 h-48 overflow-hidden rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105">
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute bottom-4 left-4 text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {photo.title}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Scrolling Event Types */}
            <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 p-4">
              <div className="flex animate-scroll-horizontal-slow space-x-8 text-white">
                {[...eventTypes, ...eventTypes, ...eventTypes].map((type, index) => (
                  <div 
                    key={`${type}-${index}`}
                    className="flex-shrink-0 text-lg font-semibold whitespace-nowrap"
                  >
                    {type}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Upcoming Events Section */}
          <div className={`text-center transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Upcoming Events</h3>
            
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-12 border border-blue-200">
              <div className="max-w-md mx-auto">
                <div className="text-6xl mb-6">📅</div>
                <h4 className="text-2xl font-bold text-gray-800 mb-4">No Upcoming Events</h4>
                <p className="text-gray-600 mb-8">
                  Stay tuned for our next exciting cybersecurity events and workshops!
                </p>
                
                {/* Follow Us Section */}
                <div className="space-y-4">
                  <p className="text-lg font-semibold text-gray-800">Follow us for more updates:</p>
                  <div className="flex justify-center space-x-6">
                    <a 
                      href="#" 
                      className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                    >
                      <Instagram className="w-5 h-5" />
                      <span>Instagram</span>
                    </a>
                    <a 
                      href="#" 
                      className="flex items-center space-x-2 bg-cyan-600 text-white px-4 py-2 rounded-lg hover:bg-cyan-700 transition-colors duration-300"
                    >
                      <Twitter className="w-5 h-5" />
                      <span>Twitter</span>
                    </a>
                    <a 
                      href="#" 
                      className="flex items-center space-x-2 bg-blue-800 text-white px-4 py-2 rounded-lg hover:bg-blue-900 transition-colors duration-300"
                    >
                      <Linkedin className="w-5 h-5" />
                      <span>LinkedIn</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
}
