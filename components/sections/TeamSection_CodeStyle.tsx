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
      name: "Dr. Priya Sharma",
      position: "Faculty Coordinator",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
      linkedin: "https://linkedin.com/in/priya-sharma",
      github: "https://github.com/priya-sharma"
    },
    {
      id: 2,
      name: "Arjun Reddy",
      position: "Club President",
      image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400",
      linkedin: "https://linkedin.com/in/arjun-reddy",
      github: "https://github.com/arjun-reddy"
    },
    {
      id: 3,
      name: "Sneha Patel",
      position: "Technical Lead",
      image: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=400",
      linkedin: "https://linkedin.com/in/sneha-patel",
      github: "https://github.com/sneha-patel"
    },
    {
      id: 4,
      name: "Rohit Kumar",
      position: "Events Coordinator",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400",
      linkedin: "https://linkedin.com/in/rohit-kumar",
      github: "https://github.com/rohit-kumar"
    },
    {
      id: 5,
      name: "Meera Singh",
      position: "Research Coordinator",
      image: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400",
      linkedin: "https://linkedin.com/in/meera-singh",
      github: "https://github.com/meera-singh"
    },
    {
      id: 6,
      name: "Vikash Jain",
      position: "Outreach Lead",
      image: "https://images.pexels.com/photos/3778680/pexels-photo-3778680.jpeg?auto=compress&cs=tinysrgb&w=400",
      linkedin: "https://linkedin.com/in/vikash-jain",
      github: "https://github.com/vikash-jain"
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                  
                  {/* Code-style corner decoration */}
                  <div className="absolute top-4 left-4 font-mono text-xs text-blue-400 opacity-60">
                    &lt;member&gt;
                  </div>
                  <div className="absolute bottom-4 right-4 font-mono text-xs text-blue-400 opacity-60">
                    &lt;/member&gt;
                  </div>
                  
                  {/* Hover Overlay with Info */}
                  <div className="absolute inset-0 bg-slate-950/95 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-center items-center p-6">
                    {/* Member Info */}
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-white mb-2 font-mono">
                        {member.name}
                      </h3>
                      <p className="text-blue-300 font-semibold text-lg">
                        {member.position}
                      </p>
                    </div>
                    
                    {/* Social Links */}
                    <div className="flex space-x-4">
                      <a
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/icon p-3 bg-blue-600/20 rounded-full border border-blue-500/30 hover:bg-blue-600 hover:border-blue-400 transition-all duration-300"
                      >
                        <Github className="w-5 h-5 text-blue-400 group-hover/icon:text-white transition-colors" />
                      </a>
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/icon p-3 bg-blue-600/20 rounded-full border border-blue-500/30 hover:bg-blue-600 hover:border-blue-400 transition-all duration-300"
                      >
                        <Linkedin className="w-5 h-5 text-blue-400 group-hover/icon:text-white transition-colors" />
                      </a>
                    </div>
                    
                    {/* Code-style bottom decoration */}
                    <div className="absolute bottom-4 left-4 font-mono text-xs text-blue-500/60">
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
