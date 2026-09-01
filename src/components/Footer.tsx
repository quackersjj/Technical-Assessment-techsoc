import React from 'react';

export const Footer: React.FC = () => (
  <footer className="bg-ust-navy text-white pt-16 pb-8 border-t-[6px] border-ust-gold">
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div>
          <h3 className="font-bold text-xl mb-4 text-ust-gold">UST Technovation Society</h3>
          <p className="text-slate-300 text-sm max-w-md leading-relaxed">
            The premier student-led technology innovation organization of the University of Santo Tomas, committed to fostering collaborative software engineering, interdisciplinary research, and creative solutions.
          </p>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-4 text-white">Location</h3>
          <p className="text-slate-300 text-sm leading-relaxed">
            TOMASInno Center (TIC)<br />
            Blessed Pier Giorgio Frassati, O.P. Building<br />
            University of Santo Tomas, Manila
          </p>
        </div>
      </div>
      <div className="border-t border-slate-700 pt-8 text-xs text-slate-400 text-center">
        © {new Date().getFullYear()} UST Technovation Society. Replica build.
      </div>
    </div>
  </footer>
);
