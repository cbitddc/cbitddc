"use client";

import { useState, useEffect, useRef } from 'react';
import { Mail, Phone } from 'lucide-react';
import Image from 'next/image';

export function ContactSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setIsLeaving(false);
        } else if (isVisible) {
          setIsLeaving(true);
          setTimeout(() => setIsVisible(false), 300);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "ddc@cbit.edu",
      description: "Get in touch for inquiries and collaborations"
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+91 98765 43210",
      description: "Speak directly with our team members"
    }
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-cyan-50/30"></div>
        <div className="absolute top-10 left-10 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header with coming animation */}
          <div className="text-center mb-16">
            <div className={`transform transition-all duration-1000 ${
              isVisible && !isLeaving 
                ? 'translate-y-0 opacity-100 scale-100' 
                : isLeaving
                ? 'translate-y-10 opacity-0 scale-95'
                : 'translate-y-10 opacity-0 scale-95'
            }`}>
              <div className="flex items-center justify-center mb-6">
                <Image 
                  src="/logo.jpeg" 
                  alt="DDC Logo" 
                  width={60} 
                  height={60}
                  className="rounded-2xl shadow-lg mr-4"
                />
                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-800 bg-clip-text text-transparent">
                  Contact Us
                </h2>
              </div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Get in touch with the Digital Defence Club team
              </p>
            </div>
          </div>

          {/* Contact Information with slide animations */}
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div 
                  key={index}
                  className={`transform transition-all duration-1200 delay-${300 + index * 200} ${
                    isVisible && !isLeaving 
                      ? index === 0 
                        ? 'translate-x-0 opacity-100 rotate-0' 
                        : 'translate-x-0 opacity-100 rotate-0'
                      : isLeaving
                      ? index === 0
                        ? '-translate-x-32 opacity-0 -rotate-2'
                        : 'translate-x-32 opacity-0 rotate-2'
                      : index === 0
                        ? '-translate-x-32 opacity-0 -rotate-2'
                        : 'translate-x-32 opacity-0 rotate-2'
                  }`}
                >
                  <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 group h-full">
                    <div className="text-center">
                      <div className="bg-gradient-to-br from-blue-500 to-cyan-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <Icon className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">{info.title}</h3>
                      <p className="text-blue-600 font-semibold text-xl mb-4">{info.content}</p>
                      <p className="text-gray-600 leading-relaxed">{info.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Simple footer message */}
          <div className={`text-center mt-16 transform transition-all duration-1000 delay-700 ${
            isVisible && !isLeaving 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-10 opacity-0'
          }`}>
            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-8 text-white shadow-2xl">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Digital Defence Club</h3>
              <p className="text-lg opacity-90">
                Protecting the digital frontier through innovation, education, and collaboration.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
