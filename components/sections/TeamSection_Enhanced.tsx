"use client";

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export function TeamSection() {
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

  const teamMembers = [
    {
      name: "Dr. Sarah Chen",
      position: "Faculty Advisor",
      department: "Cybersecurity",
      image: "/logo.jpeg",
      specialties: ["Network Security", "Cryptography", "AI Security"],
      social: {
        linkedin: "#",
        github: "#",
        email: "sarah.chen@cbit.edu"
      },
      achievements: ["Published 50+ Research Papers", "Cybersecurity Expert", "Industry Consultant"]
    },
    {
      name: "Alex Rodriguez",
      position: "Club President",
      department: "Computer Science",
      image: "/logo.jpeg",
      specialties: ["Ethical Hacking", "Web Security", "CTF"],
      social: {
        linkedin: "#",
        github: "#",
        email: "alex.r@student.cbit.edu"
      },
      achievements: ["CTF Champion 2024", "Bug Bounty Hunter", "Security Researcher"]
    },
    {
      name: "Priya Patel",
      position: "Vice President",
      department: "Information Technology",
      image: "/logo.jpeg",
      specialties: ["Digital Forensics", "Incident Response", "Malware Analysis"],
      social: {
        linkedin: "#",
        github: "#",
        email: "priya.p@student.cbit.edu"
      },
      achievements: ["SANS Certified", "Forensics Expert", "Security Analyst"]
    },
    {
      name: "Mohammed Khan",
      position: "Technical Lead",
      department: "Computer Science",
      image: "/logo.jpeg",
      specialties: ["Cloud Security", "DevSecOps", "Container Security"],
      social: {
        linkedin: "#",
        github: "#",
        email: "mohammed.k@student.cbit.edu"
      },
      achievements: ["AWS Security Certified", "K8s Security Expert", "Open Source Contributor"]
    },
    {
      name: "Emily Watson",
      position: "Events Coordinator",
      department: "Information Security",
      image: "/logo.jpeg",
      specialties: ["Risk Assessment", "Compliance", "Security Awareness"],
      social: {
        linkedin: "#",
        github: "#",
        email: "emily.w@student.cbit.edu"
      },
      achievements: ["CISSP Certified", "Event Management Pro", "Community Builder"]
    },
    {
      name: "David Kim",
      position: "Research Head",
      department: "Computer Engineering",
      image: "/logo.jpeg",
      specialties: ["IoT Security", "Blockchain", "Zero Trust"],
      social: {
        linkedin: "#",
        github: "#",
        email: "david.k@student.cbit.edu"
      },
      achievements: ["Research Publications", "Innovation Award", "Tech Speaker"]
    }
  ];



  return (
    <section id="team" ref={sectionRef} className="py-20 bg-gradient-to-br from-blue-900 via-slate-900 to-blue-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl animate-pulse animation-delay-4000"></div>
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-20">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="flex items-center justify-center mb-6">
              <Image 
                src="/logo.jpeg" 
                alt="DDC Logo" 
                width={60} 
                height={60}
                className="rounded-2xl shadow-2xl shadow-blue-500/20 mr-4"
              />
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Our <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Team</span>
              </h2>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Meet the dedicated cybersecurity professionals and students leading the Digital Defence Club.
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 mx-auto rounded-full mt-6"></div>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {teamMembers.map((member, index) => {
            const delay = index * 150;
            
            return (
              <div 
                key={index}
                className={`transform transition-all duration-700 delay-${delay} ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              >
                <div className="bg-slate-800/30 backdrop-blur-sm rounded-3xl overflow-hidden border border-blue-500/20 hover:border-blue-400/40 transition-all duration-500 group">
                  
                  {/* Profile Image */}
                  <div className="w-full h-48 overflow-hidden group-hover:scale-105 transition-transform duration-500">
                    <Image 
                      src={member.image} 
                      alt={member.name}
                      width={300}
                      height={192}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Name and Position Only */}
                  <div className="p-4 text-center">
                    <h3 className="text-lg font-bold text-white mb-1 group-hover:text-blue-400 transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-blue-400 font-medium text-sm">{member.position}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Remove Join Team CTA */}
      </div>
    </section>
  );
}
