"use client";

import { useEffect, useRef, useState } from 'react';
import { Calendar, MapPin, Users, Shield, Code, Database, Search, Lock, Globe } from 'lucide-react';

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
      {/* Subtle background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-40 h-40 bg-blue-600/5 rounded-full animate-pulse blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-blue-500/5 rounded-full animate-pulse blur-xl" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Past Events
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full"></div>
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
              <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-blue-600/20 hover:border-blue-600/40 transition-all duration-300 group h-full">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-blue-600/20 rounded-full mr-4 group-hover:bg-blue-600/30 transition-colors">
                    <event.icon className="text-blue-400 w-6 h-6" />
                  </div>
                  <span className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-xs font-medium">
                    {event.type}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {event.title}
                </h3>
                
                <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                  {event.description}
                </p>
                
                <div className="space-y-2 text-sm">
                  <div className="flex items-center text-gray-400">
                    <Calendar size={14} className="mr-2" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center text-gray-400">
                    <Users size={14} className="mr-2" />
                    <span>{event.participants}</span>
                  </div>
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
