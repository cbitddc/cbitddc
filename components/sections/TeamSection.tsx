"use client";

import { useEffect, useRef, useState } from 'react';
import { Github, Linkedin } from 'lucide-react';
import Image from 'next/image';

export function TeamSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const teamMembers = [
    {
      id: 1,
      name: "Pradeep",
      position: "President",
      image: "/pradeep - president.jpg",
      linkedin: "https://linkedin.com/in/pradeep",
      github: "https://github.com/pradeep"
    },
    {
      id: 2,
      name: "Inayat",
      position: "Vice President",
      image: "/Inayat -vice president.jpg",
      linkedin: "https://linkedin.com/in/inayat",
      github: "https://github.com/inayat"
    },
    {
      id: 3,
      name: "Vasanthadithya",
      position: "Vice President",
      image: "/vasanthadithya -Vice president (1).jpg",
      linkedin: "https://linkedin.com/in/vasanthadithya",
      github: "https://github.com/vasanthadithya"
    },
    {
      id: 4,
      name: "Ishan",
      position: "General Secretary",
      image: "/ishan-General Secretary.png",
      linkedin: "https://linkedin.com/in/ishan",
      github: "https://github.com/ishan"
    },
    {
      id: 5,
      name: "Keerthana",
      position: "General Secretary",
      image: "/Keerthana-General Secretary .jpg",
      linkedin: "https://linkedin.com/in/keerthana",
      github: "https://github.com/keerthana"
    },
    {
      id: 6,
      name: "Ashwith",
      position: "Joint Secretary",
      image: "/ashwith-Joint Secretary.jpg",
      linkedin: "https://linkedin.com/in/ashwith",
      github: "https://github.com/ashwith"
    },
    {
      id: 7,
      name: "Grace",
      position: "Joint Secretary",
      image: "/Grace-Joint secretary.jpg",
      linkedin: "https://linkedin.com/in/grace",
      github: "https://github.com/grace"
    },
    {
      id: 8,
      name: "Rishwanth",
      position: "Treasurer",
      image: "/Rishwanth -treasurer.jpeg",
      linkedin: "https://linkedin.com/in/rishwanth",
      github: "https://github.com/rishwanth"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="team" 
      ref={sectionRef}
      className="py-20 bg-slate-950 relative overflow-hidden"
    >
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-white via-blue-200 to-blue-300 bg-clip-text text-transparent">
              Meet Our Team
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Dedicated professionals driving innovation in cybersecurity and digital defense
          </p>
        </div>
      </div>

      {/* Team Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              className={`group transform transition-all duration-700 ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-16 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Member Card */}
              <div className="relative overflow-hidden rounded-2xl bg-slate-900/50 border border-blue-500/20 hover:border-blue-500/50 transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-blue-500/20">
                {/* Member Image */}
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Gradient overlay - enhanced for better text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent group-hover:from-slate-950/70 transition-all duration-500" />
                  
                  {/* Code-style corner decoration */}
                  <div className="absolute top-4 left-4 font-mono text-xs text-blue-400 opacity-60 group-hover:opacity-80 transition-opacity duration-300">
                    &lt;member&gt;
                  </div>
                  <div className="absolute top-4 right-4 font-mono text-xs text-blue-400 opacity-60 group-hover:opacity-80 transition-opacity duration-300">
                    &lt;/member&gt;
                  </div>
                  
                  {/* Bottom Info Overlay - Always visible but enhanced on hover */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    {/* Member Info */}
                    <div className="text-center mb-3 opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="text-lg md:text-xl font-bold text-white mb-1 font-mono drop-shadow-lg">
                        {member.name}
                      </h3>
                      <p className="text-blue-300 font-semibold text-sm md:text-base drop-shadow-lg">
                        {member.position}
                      </p>
                    </div>
                    
                    {/* Social Links - Only visible on hover */}
                    <div className="flex justify-center space-x-3 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                      <a
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/icon p-2 bg-blue-600/30 rounded-full border border-blue-500/50 hover:bg-blue-600 hover:border-blue-400 transition-all duration-300 backdrop-blur-sm"
                      >
                        <Github className="w-4 h-4 text-blue-200 group-hover/icon:text-white transition-colors" />
                      </a>
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/icon p-2 bg-blue-600/30 rounded-full border border-blue-500/50 hover:bg-blue-600 hover:border-blue-400 transition-all duration-300 backdrop-blur-sm"
                      >
                        <Linkedin className="w-4 h-4 text-blue-200 group-hover/icon:text-white transition-colors" />
                      </a>
                    </div>
                    
                    {/* Code-style bottom decoration */}
                    <div className="absolute bottom-2 left-4 font-mono text-xs text-blue-500/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                      console.log(&quot;{member.name}&quot;);
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-20 left-10 w-32 h-32 border-2 border-blue-600/10 rounded-full" />
      <div className="absolute bottom-20 right-10 w-24 h-24 border-2 border-blue-600/10 rounded-full" />
      <div className="absolute top-1/2 right-20 w-16 h-16 border-2 border-blue-600/10 rounded-full" />
    </section>
  );
}
