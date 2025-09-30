"use client";

import { useEffect, useRef, useState } from 'react';
import { Calendar, MapPin, Users, Shield, Code, Database, Search, Lock, Globe } from 'lucide-react';
import { CyberBackground } from '@/components/CyberBackground';

export function PastEventsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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
    <section id="events" ref={sectionRef} className="py-24 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 relative overflow-hidden">
      {/* Cyber background with matrix effect */}
      <CyberBackground opacity={0.25} nodeCount={20} showMatrix={true} />
      
      {/* Interactive cyber elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-32 right-40 cyber-float-1">
          <div className="cyber-node secure">
            <Database className="text-green-400 w-5 h-5" />
          </div>
        </div>
        <div className="absolute bottom-40 left-32 cyber-float-3">
          <div className="cyber-node threat">
            <Search className="text-red-400 w-5 h-5" />
          </div>
        </div>
        
        {/* Binary data streams */}
        <div className="binary-stream top-stream">
          {Array.from({ length: 30 }, (_, i) => (
            <span key={i} className="binary-char" style={{ animationDelay: `${i * 0.08}s` }}>
              {Math.random() > 0.5 ? '1' : '0'}
            </span>
          ))}
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 cyber-glow-text">
            Past Events
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-cyan-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Cybersecurity Awareness Workshop",
              date: "March 2024",
              participants: "150+ Students",
              description: "Introduction to cybersecurity fundamentals, common threats, and protection strategies for students.",
              icon: Shield,
              type: "Workshop"
            },
            {
              title: "Ethical Hacking Bootcamp",
              date: "February 2024",
              participants: "80 Participants",
              description: "Hands-on penetration testing workshop covering basic vulnerability assessment and security testing.",
              icon: Code,
              type: "Bootcamp"
            },
            {
              title: "Blockchain Technology Seminar",
              date: "January 2024",
              participants: "200+ Attendees",
              description: "Understanding blockchain fundamentals, cryptocurrency basics, and smart contract development.",
              icon: Database,
              type: "Seminar"
            },
            {
              title: "Digital Forensics Workshop",
              date: "December 2023",
              participants: "60 Students",
              description: "Introduction to digital forensics tools and techniques for investigating cyber incidents.",
              icon: Search,
              type: "Workshop"
            },
            {
              title: "Password Security Campaign",
              date: "November 2023",
              participants: "Campus-wide",
              description: "Awareness campaign on password security, 2FA implementation, and secure authentication practices.",
              icon: Lock,
              type: "Campaign"
            },
            {
              title: "Web Application Security Lab",
              date: "October 2023",
              participants: "40 Students",
              description: "Hands-on lab session covering common web vulnerabilities like XSS, SQL injection, and CSRF.",
              icon: Globe,
              type: "Lab Session"
            }
          ].map((event, index) => (
            <div
              key={event.title}
              className={`transform transition-all duration-700 ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-16 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="cyber-card-enhanced bg-slate-800/30 backdrop-blur-sm p-6 rounded-2xl border border-green-500/30 hover:border-green-400/60 transition-all duration-300 group h-full">
                <div className="flex items-center mb-4">
                  <div className="cyber-icon-container p-3 bg-green-600/20 rounded-full mr-4 group-hover:bg-green-600/30 transition-colors">
                    <event.icon className="text-green-400 w-6 h-6 cyber-icon-glow" />
                  </div>
                  <span className="px-3 py-1 bg-green-600/20 text-green-400 rounded-full text-xs font-medium cyber-highlight">
                    {event.type}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors cyber-pulse-text">
                  {event.title}
                </h3>
                
                <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                  {event.description}
                </p>
                
                <div className="space-y-2 text-sm mb-4">
                  <div className="flex items-center text-gray-400">
                    <Calendar size={14} className="mr-2 text-green-400" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center text-gray-400">
                    <Users size={14} className="mr-2 text-green-400" />
                    <span>{event.participants}</span>
                  </div>
                </div>
                
                <div className="cyber-progress-bar">
                  <div className="cyber-progress-fill" style={{ width: `${80 + index * 3}%` }}></div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-blue-600/20 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Want to Join Our Next Event?
            </h3>
            <p className="text-gray-300 mb-6">
              Stay updated with DDC activities and be part of CBIT's cybersecurity community.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
              Get Notified
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
