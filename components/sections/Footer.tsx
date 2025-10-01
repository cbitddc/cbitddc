"use client";

import { Mail, Phone } from 'lucide-react';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 border-t border-blue-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 items-center">
          
          {/* Logo and Club Name */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start mb-4">
              <Image 
                src="/logo.jpeg" 
                alt="DDC Logo" 
                width={50} 
                height={50}
                className="rounded-xl shadow-lg mr-3"
              />
              <div>
                <h3 className="text-xl font-bold text-white">Digital Defence Club</h3>
                <p className="text-blue-400 text-sm">CBIT</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm max-w-xs">
              Protecting the digital frontier through innovation, education, and collaboration.
            </p>
          </div>

          {/* Contact Information */}
          <div className="text-center">
            <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-center">
                <Mail className="w-4 h-4 text-blue-400 mr-2" />
                <span className="text-gray-300 text-sm">ccc@cbit.ac.in</span>
              </div>
              <div className="flex items-center justify-center">
                <Phone className="w-4 h-4 text-blue-400 mr-2" />
                <span className="text-gray-300 text-sm">+91 8184889557</span>
              </div>
            </div>
          </div>

          {/* Mission Statement */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold text-white mb-4">Our Mission</h4>
            <p className="text-gray-400 text-sm max-w-xs md:ml-auto">
              Cultivating cybersecurity leaders who protect, innovate, and inspire through cutting-edge education.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-800/30 mt-8 pt-6">
          <div className="text-center">
            <p className="text-gray-500 text-sm">
              © 2025 Digital Defence Club, CBIT. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
