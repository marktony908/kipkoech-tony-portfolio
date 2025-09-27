import React from 'react';
import { Github, Linkedin, Twitter, Mail, Heart, ArrowUp } from 'lucide-react';

export function Footer() {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/marktony908', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/kipkoech-tony-3b97a12a9/', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://x.com/home', label: 'Twitter' },
    { icon: Mail, href: 'mailto:kipkoechtony510@gmail.com', label: 'Email' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width%3D%2260%22 height%3D%2260%22 viewBox%3D%220 0 60 60%22 xmlns%3D%22http://www.w3.org/2000/svg%22%3E%3Cg fill%3D%22none%22 fill-rule%3D%22evenodd%22%3E%3Cg fill%3D%22%23ffffff%22 fill-opacity%3D%220.02%22%3E%3Ccircle cx%3D%227%22 cy%3D%227%22 r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
      
      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Tony Kipkoech
              </h3>
              <p className="text-slate-300 mb-6 leading-relaxed max-w-md">
                Software Engineer & Cloud Architect passionate about building scalable solutions 
                that make a difference. Always ready for the next challenge.
              </p>
              <div className="flex gap-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : '_self'}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : ''}
                    className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all duration-300 transform hover:scale-110"
                    title={link.label}
                  >
                    <link.icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#about" className="text-slate-300 hover:text-white transition-colors">About</a></li>
                <li><a href="#experience" className="text-slate-300 hover:text-white transition-colors">Experience</a></li>
                <li><a href="#skills" className="text-slate-300 hover:text-white transition-colors">Skills</a></li>
                <li><a href="#portfolio" className="text-slate-300 hover:text-white transition-colors">Portfolio</a></li>
                <li><a href="#contact" className="text-slate-300 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold mb-4 text-white">Get In Touch</h4>
              <ul className="space-y-2 text-slate-300">
                <li>
                  <a href="mailto:kipkoechtony510@gmail.com" className="hover:text-white transition-colors">
                    kipkoechtony510@gmail.com
                  </a>
                </li>
                <li>
                  <a href="tel:+254745694981" className="hover:text-white transition-colors">
                    +254 745 694 981
                  </a>
                </li>
                <li>Nairobi, Kenya</li>
                <li className="text-green-400 font-medium">Available for opportunities</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800">
          <div className="max-w-6xl mx-auto px-6 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2 text-slate-300">
                <span>&copy; 2024 Tony Kipkoech. All rights reserved.</span>
                <span className="hidden md:inline">•</span>
                <span className="flex items-center gap-1">
                  Built with <Heart size={16} className="text-red-500" /> and React
                </span>
              </div>
              
              <button
                onClick={scrollToTop}
                className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors group"
              >
                <span>Back to top</span>
                <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}