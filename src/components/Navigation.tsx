import React from 'react';
import { User, Briefcase, Code, FolderOpen, Mail } from 'lucide-react';
import type { Section } from '../App';

interface NavigationProps {
  activeSection: Section;
  setActiveSection: (section: Section) => void;
}

export function Navigation({ activeSection, setActiveSection }: NavigationProps) {
  const navItems = [
    { id: 'about' as Section, label: 'About', icon: User },
    { id: 'experience' as Section, label: 'Experience', icon: Briefcase },
    { id: 'skills' as Section, label: 'Skills', icon: Code },
    { id: 'portfolio' as Section, label: 'Portfolio', icon: FolderOpen },
    { id: 'contact' as Section, label: 'Contact', icon: Mail },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50 shadow-sm">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center py-4">
          <div className="font-bold text-xl text-slate-800">
            Tony Kipkoech
          </div>
          
          <div className="hidden md:flex gap-1">
            {navItems.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveSection(id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeSection === id
                    ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                    : 'text-slate-600 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                <Icon size={18} />
                <span>{label}</span>
              </button>
            ))}
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden flex gap-1 overflow-x-auto">
            {navItems.map(({ id, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveSection(id)}
                className={`flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 ${
                  activeSection === id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-slate-600 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                <Icon size={18} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}