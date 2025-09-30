"use client";

import { useEffect, useRef, useState } from 'react';
import { Shield, Users, Award, Target, Brain, Code, Lock, Globe } from 'lucide-react';
import { WaveTransition } from '../ui/WaveTransition';

export function AboutSection() {
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

  const features = [
    {
      icon: Shield,
      title: "Cybersecurity Excellence",
      description: "Leading-edge security practices and threat analysis",
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: Brain,
      title: "Innovation Hub",
      description: "Cutting-edge research and development in digital security",
      color: "text-cyan-600",
      bgColor: "bg-cyan-50"
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Collaborative learning and knowledge sharing",
      color: "text-indigo-600",
      bgColor: "bg-indigo-50"
    },
    {
      icon: Target,
      title: "Skill Development",
      description: "Practical training and certification programs",
      color: "text-blue-700",
      bgColor: "bg-blue-50"
    }
  ];

  const stats = [
    { number: "500+", label: "Active Members", icon: Users },
    { number: "50+", label: "Events Conducted", icon: Award },
    { number: "10+", label: "Industry Partners", icon: Globe },
    { number: "95%", label: "Placement Rate", icon: Target }
  ];

  return (
    <>
      {/* Wave transition from hero */}
      <WaveTransition 
        fromColor="rgb(15 23 42)" 
        toColor="rgb(255 255 255)" 
        direction="down" 
      />
      
      <section id="about" ref={sectionRef} className="py-20 bg-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-cyan-50/30"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center mb-16">
            <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="mb-6">
                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-800 bg-clip-text text-transparent text-center">
                  About DDC
                </h2>
              </div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                The Digital Defence Club at CBIT is a premier student organization dedicated to fostering 
                cybersecurity excellence, innovation, and leadership in the digital age.
              </p>
            </div>
          </div>

          {/* Stats Section */}
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="bg-gradient-to-br from-blue-500 to-cyan-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 transform group-hover:scale-110 transition-all duration-300 shadow-lg">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const delay = index * 200;
              
              return (
                <div 
                  key={index}
                  className={`transform transition-all duration-700 delay-${delay} ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                >
                  <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 group hover:scale-105">
                    <div className={`${feature.bgColor} w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-7 h-7 ${feature.color}`} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mission Statement */}
          <div className={`text-center max-w-4xl mx-auto transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-12 text-white shadow-2xl">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">Our Mission</h3>
              <p className="text-lg md:text-xl leading-relaxed opacity-95">
                To cultivate a community of cybersecurity enthusiasts who are equipped with cutting-edge knowledge, 
                practical skills, and ethical principles to defend the digital world against evolving threats while 
                fostering innovation and collaboration in the field of information security.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Wave transition to next section */}
      <WaveTransition 
        fromColor="rgb(255 255 255)" 
        toColor="rgb(15 23 42)" 
        direction="down" 
      />
    </>
  );
}
