"use client";

import { useEffect, useRef, useState } from 'react';
import { Shield, Target, Users, Code, Eye, Rocket, Award, Globe } from 'lucide-react';
import { WaveTransition } from '../ui/WaveTransition';
import Image from 'next/image';

export function VisionMissionSection() {
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

  const visionPoints = [
    {
      icon: Eye,
      title: "Future Vision",
      description: "Leading the cybersecurity landscape with innovative solutions and forward-thinking approaches."
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Creating a worldwide network of digital defenders committed to securing cyberspace."
    },
    {
      icon: Award,
      title: "Excellence Standard",
      description: "Setting benchmarks for cybersecurity education and professional development."
    }
  ];

  const missionPoints = [
    {
      icon: Shield,
      title: "Defend & Protect",
      description: "Equipping members with advanced skills to protect digital infrastructure and data."
    },
    {
      icon: Users,
      title: "Build Community",
      description: "Fostering collaboration and knowledge sharing among cybersecurity enthusiasts."
    },
    {
      icon: Rocket,
      title: "Drive Innovation",
      description: "Pushing boundaries through research, development, and creative problem-solving."
    }
  ];

  return (
    <section id="vision" ref={sectionRef} className="py-20 bg-gradient-to-br from-blue-900 via-slate-900 to-blue-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl animate-pulse animation-delay-4000"></div>
      </div>
      
      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'grid-move 20s linear infinite'
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
                Vision & <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Mission</span>
              </h2>
            </div>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 mx-auto rounded-full"></div>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Vision Section */}
          <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-16 opacity-0'}`}>
            <div className="bg-slate-800/30 backdrop-blur-sm p-8 rounded-3xl border border-blue-500/20 hover:border-blue-400/40 transition-all duration-500 group h-full">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 w-16 h-16 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white">Our Vision</h3>
              </div>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                To be the premier cybersecurity community that shapes the future of digital defense 
                through innovation, excellence, and global collaboration.
              </p>
              
              <div className="space-y-6">
                {visionPoints.map((point, index) => {
                  const Icon = point.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4 group/item">
                      <div className="bg-blue-500/20 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover/item:bg-blue-500/30 transition-colors duration-300">
                        <Icon className="w-6 h-6 text-blue-400" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">{point.title}</h4>
                        <p className="text-gray-400 leading-relaxed">{point.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          
          {/* Mission Section */}
          <div className={`transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-16 opacity-0'}`}>
            <div className="bg-slate-800/30 backdrop-blur-sm p-8 rounded-3xl border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-500 group h-full">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-16 h-16 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white">Our Mission</h3>
              </div>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                To cultivate cybersecurity leaders who protect, innovate, and inspire 
                through cutting-edge education and practical experience.
              </p>
              
              <div className="space-y-6">
                {missionPoints.map((point, index) => {
                  const Icon = point.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4 group/item">
                      <div className="bg-cyan-500/20 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover/item:bg-cyan-500/30 transition-colors duration-300">
                        <Icon className="w-6 h-6 text-cyan-400" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">{point.title}</h4>
                        <p className="text-gray-400 leading-relaxed">{point.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 rounded-2xl p-8 text-white shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Join Our Movement</h3>
            <p className="text-lg mb-6 opacity-90">
              Be part of the next generation of cybersecurity professionals shaping the digital future.
            </p>
            <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-xl hover:bg-gray-100 transition-colors duration-300 text-lg">
              Become a Member
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
              <div className="flex items-center mb-6">
                <div className="p-4 bg-blue-600/20 rounded-full mr-4 group-hover:bg-blue-600/30 transition-colors">
                  <Shield className="text-blue-400 w-8 h-8" />
                </div>
                <h3 className="text-3xl font-bold text-white group-hover:text-blue-400 transition-colors">Vision</h3>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                To establish CBIT as a leading center for cybersecurity education and blockchain innovation, 
                creating skilled professionals who can defend digital infrastructures and build secure 
                decentralized systems for the future.
              </p>
            </div>
          </div>

          {/* Mission Card */}
          <div className={`transform transition-all duration-700 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-16 opacity-0'}`}>
            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 group">
              <div className="flex items-center mb-6">
                <div className="p-4 bg-blue-600/20 rounded-full mr-4 group-hover:bg-blue-600/30 transition-colors">
                  <Target className="text-blue-400 w-8 h-8" />
                </div>
                <h3 className="text-3xl font-bold text-white group-hover:text-blue-400 transition-colors">Mission</h3>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                To provide comprehensive training in cybersecurity practices, ethical hacking, 
                and blockchain technology through hands-on workshops, industry collaborations, 
                and real-world project experience.
              </p>
              
              {/* Mission objectives */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-sm text-gray-400">Cybersecurity Training & Workshops</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-sm text-gray-400">Blockchain Development & Smart Contracts</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-sm text-gray-400">Ethical Hacking & Penetration Testing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Core Values Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-white mb-12">
            Core Values
          </h3>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { title: 'Security', icon: Shield, desc: 'Protecting digital assets and privacy' },
              { title: 'Innovation', icon: Code, desc: 'Advancing blockchain and security tech' },
              { title: 'Education', icon: Users, desc: 'Knowledge sharing and skill development' },
              { title: 'Ethics', icon: Target, desc: 'Responsible and ethical practices' }
            ].map((value, index) => (
              <div key={value.title} className={`text-center transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`} style={{ transitionDelay: `${index * 200}ms` }}>
                <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 group">
                  <div className="inline-flex p-4 bg-blue-600/20 rounded-full mb-4 group-hover:bg-blue-600/30 transition-colors">
                    <value.icon className="w-8 h-8 text-blue-400" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{value.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{value.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}