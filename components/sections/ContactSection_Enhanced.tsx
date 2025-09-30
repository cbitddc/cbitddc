"use client";

import { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Send, Shield, Users, Calendar, Instagram, Twitter, Linkedin, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { WaveTransition } from '../ui/WaveTransition';
import Image from 'next/image';

export function ContactSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "ddc@cbit.edu",
      description: "Get in touch for inquiries and collaborations"
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+91 98765 43210",
      description: "Speak directly with our team members"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "CBIT Campus, Hyderabad",
      description: "Computer Science Department, Room 301"
    }
  ];

  const socialLinks = [
    { icon: Instagram, href: "#", color: "hover:text-pink-500" },
    { icon: Twitter, href: "#", color: "hover:text-blue-400" },
    { icon: Linkedin, href: "#", color: "hover:text-blue-600" },
    { icon: Github, href: "#", color: "hover:text-gray-600" }
  ];

  return (
    <>
      {/* Wave transition from previous section */}
      <WaveTransition 
        fromColor="rgb(15 23 42)" 
        toColor="rgb(255 255 255)" 
        direction="down" 
      />
      
      <section id="contact" ref={sectionRef} className="py-20 bg-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-cyan-50/30"></div>
        <div className="absolute top-10 left-10 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        
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
                  Contact Us
                </h2>
              </div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Ready to join our cybersecurity community? Get in touch with us and start your digital defense journey.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Contact Information */}
            <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-16 opacity-0'}`}>
              <div className="space-y-8">
                
                {/* Contact Cards */}
                <div className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <div key={index} className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 group">
                        <div className="flex items-start space-x-4">
                          <div className="bg-gradient-to-br from-blue-500 to-cyan-600 w-14 h-14 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <Icon className="w-7 h-7 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-gray-800 mb-2">{info.title}</h3>
                            <p className="text-blue-600 font-semibold text-lg mb-1">{info.content}</p>
                            <p className="text-gray-600">{info.description}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Quick Stats */}
                <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-6 text-white">
                  <h3 className="text-xl font-bold mb-4">Why Join DDC?</h3>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <Shield className="w-8 h-8 mx-auto mb-2 opacity-90" />
                      <div className="text-2xl font-bold">500+</div>
                      <div className="text-sm opacity-90">Members</div>
                    </div>
                    <div>
                      <Users className="w-8 h-8 mx-auto mb-2 opacity-90" />
                      <div className="text-2xl font-bold">50+</div>
                      <div className="text-sm opacity-90">Events</div>
                    </div>
                    <div>
                      <Calendar className="w-8 h-8 mx-auto mb-2 opacity-90" />
                      <div className="text-2xl font-bold">5+</div>
                      <div className="text-sm opacity-90">Years</div>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Follow Us</h3>
                  <div className="flex justify-center space-x-4">
                    {socialLinks.map((social, index) => {
                      const Icon = social.icon;
                      return (
                        <a
                          key={index}
                          href={social.href}
                          className={`bg-gray-100 hover:bg-gray-200 p-3 rounded-xl transition-all duration-300 ${social.color} transform hover:scale-110`}
                        >
                          <Icon className="w-6 h-6" />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className={`transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-16 opacity-0'}`}>
              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Name</label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Subject</label>
                    <Input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What's this about?"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      placeholder="Tell us more about your inquiry..."
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                      required
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className={`text-center mt-16 transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-8 text-white shadow-2xl">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Begin Your Cybersecurity Journey?</h3>
              <p className="text-lg mb-6 opacity-90">
                Join hundreds of students and professionals in building a more secure digital future.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-xl hover:bg-gray-100 transition-colors duration-300 text-lg">
                  Join DDC Today
                </button>
                <button className="border-2 border-white text-white font-bold py-3 px-8 rounded-xl hover:bg-white hover:text-blue-600 transition-colors duration-300 text-lg">
                  View Membership
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
