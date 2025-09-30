"use client";

import { useEffect, useRef, useState } from 'react';
import { Github, Linkedin, Mail, Shield, Users, Code, BookOpen } from 'lucide-react';

export function TeamSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const teamMembers = [
    {
      id: 1,
      name: "Dr. Priya Sharma",
      role: "Faculty Coordinator",
      department: "Computer Science & Engineering",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
      linkedin: "#",
      email: "priya.sharma@cbit.ac.in",
      icon: BookOpen,
      description: "Expert in Network Security and Cryptography"
    },
    {
      id: 2,
      name: "Arjun Reddy",
      role: "Club President",
      department: "CSE - Final Year",
      image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400",
      linkedin: "#",
      github: "#",
      email: "arjun.reddy@students.cbit.ac.in",
      icon: Shield,
      description: "Cybersecurity enthusiast, CTF champion"
    },
    {
      id: 3,
      name: "Sneha Patel",
      role: "Technical Lead",
      department: "CSE - Third Year",
      image: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=400",
      linkedin: "#",
      github: "#",
      email: "sneha.patel@students.cbit.ac.in",
      icon: Code,
      description: "Blockchain developer, Smart contract specialist"
    },
    {
      id: 4,
      name: "Rohit Kumar",
      role: "Events Coordinator",
      department: "IT - Third Year",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400",
      linkedin: "#",
      github: "#",
      email: "rohit.kumar@students.cbit.ac.in",
      icon: Users,
      description: "Organizing workshops and seminars"
    },
    {
      id: 5,
      name: "Meera Singh",
      role: "Research Coordinator",
      department: "CSE - Second Year",
      image: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400",
      linkedin: "#",
      github: "#",
      email: "meera.singh@students.cbit.ac.in",
      icon: BookOpen,
      description: "Digital forensics and incident response"
    },
    {
      id: 6,
      name: "Vikash Jain",
      role: "Outreach Lead",
      department: "ECE - Second Year",
      image: "https://images.pexels.com/photos/3778680/pexels-photo-3778680.jpeg?auto=compress&cs=tinysrgb&w=400",
      linkedin: "#",
      github: "#",
      email: "vikash.jain@students.cbit.ac.in",
      icon: Users,
      description: "Community building and partnerships"
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
    <section id="team" ref={sectionRef} className="py-24 bg-gradient-to-br from-slate-800 via-gray-900 to-slate-800 relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-40 h-40 bg-blue-600/5 rounded-full animate-pulse blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-blue-500/5 rounded-full animate-pulse blur-xl" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Team
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Meet the dedicated individuals driving cybersecurity and blockchain innovation at CBIT
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mt-4 rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              className={`transform transition-all duration-700 ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-16 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-blue-600/20 hover:border-blue-600/40 transition-all duration-300 group overflow-hidden">
                <div className="relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                  
                  {/* Role icon */}
                  <div className="absolute top-4 left-4 p-2 bg-blue-600/20 rounded-full">
                    <member.icon className="text-blue-400 w-5 h-5" />
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-blue-400 font-medium mb-1">{member.role}</p>
                  <p className="text-gray-400 text-sm mb-3">{member.department}</p>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {member.description}
                  </p>
                  
                  {/* Social links */}
                  <div className="flex space-x-3">
                    <a
                      href={member.email}
                      className="p-2 bg-slate-700 rounded-full hover:bg-blue-600 transition-colors group/icon"
                    >
                      <Mail className="w-4 h-4 text-gray-400 group-hover/icon:text-white" />
                    </a>
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        className="p-2 bg-slate-700 rounded-full hover:bg-blue-600 transition-colors group/icon"
                      >
                        <Linkedin className="w-4 h-4 text-gray-400 group-hover/icon:text-white" />
                      </a>
                    )}
                    {member.github && (
                      <a
                        href={member.github}
                        className="p-2 bg-slate-700 rounded-full hover:bg-blue-600 transition-colors group/icon"
                      >
                        <Github className="w-4 h-4 text-gray-400 group-hover/icon:text-white" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Join team CTA */}
        <div className="text-center mt-16">
          <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-blue-600/20 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Want to Join Our Team?
            </h3>
            <p className="text-gray-300 mb-6">
              We're always looking for passionate students interested in cybersecurity and blockchain technology.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
              Join DDC
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
