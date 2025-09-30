"use client";

import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Shield, Users, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

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

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-40 h-40 bg-blue-600/5 rounded-full animate-pulse blur-xl"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-blue-500/5 rounded-full animate-pulse blur-xl" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Ready to join the Digital Defence Club? Have questions about cybersecurity or blockchain? 
            We'd love to hear from you.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Connect with DDC
              </h3>
              <p className="text-gray-300 mb-8">
                The Digital Defence Club at CBIT is your gateway to cybersecurity and blockchain technology. 
                Join us in building a secure digital future.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-blue-600/20 rounded-full">
                  <Mail className="text-blue-400 w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-medium">Email</h4>
                  <p className="text-gray-400">ddc@cbit.ac.in</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-blue-600/20 rounded-full">
                  <MapPin className="text-blue-400 w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-medium">Location</h4>
                  <p className="text-gray-400">Chaitanya Bharathi Institute of Technology<br />Gandipet, Hyderabad - 500075</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-blue-600/20 rounded-full">
                  <Calendar className="text-blue-400 w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-medium">Meeting Times</h4>
                  <p className="text-gray-400">Fridays, 4:00 PM - 6:00 PM<br />Computer Science Department</p>
                </div>
              </div>
            </div>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-6 pt-8">
              <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-blue-600/20 text-center">
                <Shield className="text-blue-400 w-8 h-8 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">200+</div>
                <div className="text-gray-400 text-sm">Active Members</div>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-blue-600/20 text-center">
                <Users className="text-blue-400 w-8 h-8 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">50+</div>
                <div className="text-gray-400 text-sm">Events Organized</div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-blue-600/20">
            <h3 className="text-2xl font-bold text-white mb-6">
              Send us a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="bg-slate-700/50 border-blue-600/30 text-white placeholder-gray-400 focus:border-blue-400"
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-slate-700/50 border-blue-600/30 text-white placeholder-gray-400 focus:border-blue-400"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <Input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="bg-slate-700/50 border-blue-600/30 text-white placeholder-gray-400 focus:border-blue-400"
                  placeholder="What would you like to discuss?"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-slate-700/50 border border-blue-600/30 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors"
                  placeholder="Tell us about your interest in cybersecurity or blockchain..."
                  required
                />
              </div>
              
              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
              >
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
