import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface Props { 
  activeTab: string; 
  setActiveTab: (t: string) => void; 
}

export const Navbar: React.FC<Props> = ({ activeTab, setActiveTab }) => {
  const [isOpen, setIsOpen] = useState(false);
  const tabs = [
    { id: 'home', label: 'Home' },
    { id: 'articles', label: 'Articles' },
    { id: 'events', label: 'Events' }
  ];

  const handleNav = (id: string) => {
    setActiveTab(id);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-ust-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          <div onClick={() => handleNav('home')} className="flex items-center gap-3 cursor-pointer group">
            <img 
              src="https://placehold.co/150x150/0F172A/FFC72C?text=TS" 
              alt="UST Technovation Society Logo" 
              className="w-11 h-11 rounded-full object-cover border border-slate-200 group-hover:shadow-md transition-shadow"
            />
            <div className="hidden sm:block">
              <span className="text-lg font-black text-ust-navy uppercase block leading-none tracking-tight">
                UST Technovation
              </span>
              <span className="text-[11px] font-bold text-slate-500 uppercase block tracking-widest mt-1">
                Society
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {tabs.map(t => (
              <button 
                key={t.id} 
                onClick={() => handleNav(t.id)}
                className={`text-sm font-bold uppercase tracking-wide py-1.5 transition-colors border-b-2 ${
                  activeTab === t.id 
                    ? 'text-ust-goldDark border-ust-goldDark' 
                    : 'text-slate-600 border-transparent hover:text-ust-navy hover:border-slate-300'
                }`}
              >
                {t.label}
              </button>
            ))}
            <button 
              onClick={() => handleNav('events')}
              className="bg-ust-gold hover:bg-ust-goldDark text-white px-5 py-2.5 rounded text-sm font-bold shadow transition-colors"
            >
              Get Involved
            </button>
          </nav>

          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-slate-600 hover:text-ust-navy focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 px-4 pt-2 pb-6 shadow-xl absolute w-full">
          <div className="flex flex-col space-y-2">
            {tabs.map(t => (
              <button
                key={t.id}
                onClick={() => handleNav(t.id)}
                className={`text-left px-4 py-3 rounded text-sm font-bold uppercase tracking-wider ${
                  activeTab === t.id 
                    ? 'bg-yellow-50 text-ust-goldDark' 
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                {t.label}
              </button>
            ))}
            <div className="pt-4 px-2">
              <button 
                onClick={() => handleNav('events')}
                className="w-full bg-ust-navy text-white px-4 py-3 rounded text-sm font-bold uppercase tracking-wide shadow"
              >
                Get Involved
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
