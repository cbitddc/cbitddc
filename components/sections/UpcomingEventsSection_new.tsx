"use client";

import { useEffect, useRef, useState } from 'react';
import { Calendar, Clock, MapPin, Users, Shield, Code, BookOpen, Award } from 'lucide-react';

export function UpcomingEventsSection() {
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
    <section id="upcoming" ref={sectionRef} className="py-24 bg-gradient-to-br from-slate-800 via-gray-900 to-slate-800 relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-40 h-40 bg-blue-600/5 rounded-full animate-pulse blur-xl"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-blue-500/5 rounded-full animate-pulse blur-xl" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Upcoming Events
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Join us for exciting workshops, seminars, and competitions that will enhance your cybersecurity and blockchain skills
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mt-4 rounded-full"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {[
            {
              title: "Web Application Security Workshop",
              date: "November 15, 2024",
              time: "2:00 PM - 5:00 PM",
              location: "Computer Lab 3, CBIT",
              capacity: "40 seats",
              description: "Learn about common web vulnerabilities like XSS, SQL injection, and CSRF. Hands-on practice with real-world scenarios.",
              icon: Shield,
              type: "Workshop",
              status: "Registration Open",
              featured: true
            },
            {
              title: "Blockchain Development Bootcamp",
              date: "November 22, 2024",
              time: "10:00 AM - 4:00 PM",
              location: "Innovation Hub",
              capacity: "30 seats",
              description: "Build your first smart contract and decentralized application. From basics to deployment on testnet.",
              icon: Code,
              type: "Bootcamp",
              status: "Registration Open",
              featured: true
            },
            {
              title: "Cybersecurity Career Fair",
              date: "December 5, 2024",
              time: "11:00 AM - 3:00 PM",
              location: "Main Auditorium",
              capacity: "200+ attendees",
              description: "Meet industry professionals, learn about career opportunities, and network with leading cybersecurity companies.",
              icon: Users,
              type: "Career Fair",
              status: "Coming Soon",
              featured: false
            },
            {
              title: "CTF Competition 2024",
              date: "December 12-13, 2024",
              time: "24 hours",
              location: "Online & On-campus",
              capacity: "100 teams",
              description: "Annual Capture The Flag competition featuring challenges in web security, cryptography, reverse engineering, and more.",
              icon: Award,
              type: "Competition",
              status: "Registration Opens Soon",
              featured: false
            },
            {
              title: "Digital Forensics Seminar",
              date: "December 18, 2024",
              time: "3:00 PM - 5:00 PM",
              location: "Seminar Hall 1",
              capacity: "80 seats",
              description: "Introduction to digital forensics tools and techniques. Guest speaker from law enforcement cyber crime unit.",
              icon: BookOpen,
              type: "Seminar",
              status: "Registration Opens Soon",
              featured: false
            },
            {
              title: "Password Security Awareness Drive",
              date: "January 8, 2025",
              time: "All day",
              location: "Campus-wide",
              capacity: "All students",
              description: "Campus-wide awareness campaign on password security, 2FA, and secure authentication practices.",
              icon: Shield,
              type: "Campaign",
              status: "Planning Phase",
              featured: false
            }
          ].map((event, index) => (
            <div
              key={event.title}
              className={`transform transition-all duration-700 ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-16 opacity-0'
              } ${event.featured ? 'lg:col-span-2' : ''}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className={`bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-blue-600/20 hover:border-blue-600/40 transition-all duration-300 group h-full ${
                event.featured ? 'lg:p-8' : ''
              }`}>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div className="p-3 bg-blue-600/20 rounded-full mr-4 group-hover:bg-blue-600/30 transition-colors">
                      <event.icon className="text-blue-400 w-6 h-6" />
                    </div>
                    <div>
                      <span className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-xs font-medium mr-3">
                        {event.type}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        event.status === 'Registration Open' 
                          ? 'bg-green-600/20 text-green-400'
                          : event.status === 'Coming Soon'
                          ? 'bg-yellow-600/20 text-yellow-400'
                          : 'bg-gray-600/20 text-gray-400'
                      }`}>
                        {event.status}
                      </span>
                    </div>
                  </div>
                </div>
                
                <h3 className={`font-bold text-white mb-3 group-hover:text-blue-400 transition-colors ${
                  event.featured ? 'text-2xl' : 'text-xl'
                }`}>
                  {event.title}
                </h3>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {event.description}
                </p>
                
                <div className={`grid gap-3 text-sm ${event.featured ? 'md:grid-cols-2' : ''}`}>
                  <div className="flex items-center text-gray-400">
                    <Calendar size={14} className="mr-2 text-blue-400" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center text-gray-400">
                    <Clock size={14} className="mr-2 text-blue-400" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center text-gray-400">
                    <MapPin size={14} className="mr-2 text-blue-400" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center text-gray-400">
                    <Users size={14} className="mr-2 text-blue-400" />
                    <span>{event.capacity}</span>
                  </div>
                </div>
                
                {event.status === 'Registration Open' && (
                  <div className="mt-6">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors w-full sm:w-auto">
                      Register Now
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-blue-600/20 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Updated with DDC Events
            </h3>
            <p className="text-gray-300 mb-6">
              Join our WhatsApp group and follow us on social media to get notified about upcoming events and workshops.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                Join WhatsApp Group
              </button>
              <button className="border border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg font-medium transition-colors">
                Follow on Instagram
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
