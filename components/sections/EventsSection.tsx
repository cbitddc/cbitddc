"use client";

import { useEffect, useRef, useState } from 'react';
import { Calendar, MapPin, Users, Shield, Code, Database, Search, Lock, Globe, Award, Star, Clock } from 'lucide-react';
import Image from 'next/image';

export function EventsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('past');
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

  const pastEvents = [
    {
      title: "CyberSec Summit 2024",
      date: "March 15, 2024",
      location: "CBIT Auditorium",
      attendees: "300",
      type: "Conference",
      icon: Shield,
      description: "Annual cybersecurity conference featuring industry experts and hands-on workshops.",
      highlights: ["Industry Speakers", "Live Hacking Demo", "CTF Competition"],
      image: "/logo.jpeg"
    },
    {
      title: "Ethical Hacking Workshop",
      date: "February 20, 2024",
      location: "Computer Lab 3",
      attendees: "150",
      type: "Workshop",
      icon: Code,
      description: "Intensive hands-on workshop on penetration testing and ethical hacking techniques.",
      highlights: ["Kali Linux Training", "Web App Testing", "Network Security"],
      image: "/logo.jpeg"
    },
    {
      title: "Blockchain & Security Symposium",
      date: "January 10, 2024",
      location: "Tech Auditorium",
      attendees: "200",
      type: "Symposium",
      icon: Database,
      description: "Exploring the intersection of blockchain technology and cybersecurity.",
      highlights: ["Smart Contract Security", "DeFi Protocols", "Web3 Security"],
      image: "/logo.jpeg"
    }
  ];

  const upcomingEvents = [
    {
      title: "AI Security Conference",
      date: "November 15, 2024",
      location: "CBIT Main Auditorium",
      attendees: "Expected Soon",
      type: "Conference",
      icon: Globe,
      description: "Cutting-edge conference on AI security, machine learning threats, and defense strategies.",
      highlights: ["AI Red Teaming", "ML Model Security", "Future of AI Defense"],
      image: "/logo.jpeg"
    },
    {
      title: "Bug Bounty Bootcamp",
      date: "December 5, 2024",
      location: "Cyber Lab",
      attendees: "Limited Seats",
      type: "Bootcamp",
      icon: Search,
      description: "Intensive bug bounty training program with real-world vulnerability discovery.",
      highlights: ["Live Bug Hunting", "OWASP Top 10", "Vulnerability Assessment"],
      image: "/logo.jpeg"
    }
  ];

  const events = activeTab === 'past' ? pastEvents : upcomingEvents;

  return (
    <section id="events" ref={sectionRef} className="py-20 relative overflow-hidden min-h-screen">
        {/* Spline Background */}
        <div className="spline-container">
          <spline-viewer 
            url="https://prod.spline.design/ZBWp-Ex-7fGMo0Iq/scene.splinecode"
            style={{
              width: '100%',
              height: '100%',
              position: 'absolute',
              top: 0,
              left: 0,
              opacity: 0.4,
              pointerEvents: 'none'
            }}
          />
          {/* Progressive overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/85 to-white/90 backdrop-blur-[2px] z-1"></div>
        </div>
        
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
                Join our dynamic cybersecurity events designed to enhance skills, build networks, and advance careers.
              </p>
            </div>
          </div>

          {/* Tabs */}
          <div className={`flex justify-center mb-12 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="bg-gray-100 rounded-2xl p-2 flex">
              <button
                onClick={() => setActiveTab('past')}
                className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === 'past'
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                Past Events
              </button>
              <button
                onClick={() => setActiveTab('upcoming')}
                className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === 'upcoming'
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                Upcoming Events
              </button>
            </div>
          </div>

          {/* Events Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => {
              const Icon = event.icon;
              const delay = index * 200;
              
              return (
                <div 
                  key={index}
                  className={`transform transition-all duration-700 delay-${delay} ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                >
                  <div className="bg-white rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 group hover:scale-105 h-full">
                    
                    {/* Event Image */}
                    <div className="relative mb-6 overflow-hidden rounded-2xl">
                      <Image 
                        src={event.image} 
                        alt={event.title}
                        width={400}
                        height={200}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                          {event.type}
                        </span>
                      </div>
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-xl">
                        <Icon className="w-6 h-6 text-blue-600" />
                      </div>
                    </div>

                    {/* Event Content */}
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                        {event.title}
                      </h3>
                      
                      <p className="text-gray-600 leading-relaxed">
                        {event.description}
                      </p>

                      {/* Event Details */}
                      <div className="space-y-2">
                        <div className="flex items-center text-gray-500">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span className="text-sm">{event.date}</span>
                        </div>
                        <div className="flex items-center text-gray-500">
                          <MapPin className="w-4 h-4 mr-2" />
                          <span className="text-sm">{event.location}</span>
                        </div>
                        <div className="flex items-center text-gray-500">
                          <Users className="w-4 h-4 mr-2" />
                          <span className="text-sm">{event.attendees} Attendees</span>
                        </div>
                      </div>

                      {/* Highlights */}
                      <div className="space-y-2">
                        <h4 className="font-semibold text-gray-800">Key Highlights:</h4>
                        <ul className="space-y-1">
                          {event.highlights.map((highlight, idx) => (
                            <li key={idx} className="flex items-center text-sm text-gray-600">
                              <Star className="w-3 h-3 mr-2 text-yellow-500" />
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Action Button */}
                      <div className="pt-4">
                        <div className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 rounded-xl font-semibold text-center shadow-md">
                          {activeTab === 'past' ? 'Event Completed' : 'Coming Soon'}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Remove call to action with external links */}
        </div>
      </section>
    );
  }
