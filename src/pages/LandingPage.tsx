import React from 'react';
import { ArrowRight, Calendar, Users, Zap } from 'lucide-react';
import { ARTICLES_DATA } from '../data/articles';
import { EVENTS_DATA } from '../data/events';
import { ImagePlaceholder } from '../components/ImagePlaceholder';

export const LandingPage: React.FC<{setActiveTab: (t: string)=>void}> = ({setActiveTab}) => (
  <div className="space-y-20 pb-0">
    
    <section className="bg-slate-50 py-20 border-b border-ust-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-100 text-ust-goldDark text-xs font-bold uppercase rounded-full tracking-wider mb-2">
          <Zap size={14} /> TOMASInno Center Affiliate
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-ust-navy leading-tight max-w-4xl mx-auto">
          The Premier Student-led Innovation Organization of the University of Santo Tomas
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Bridging the academic-industry divide through technical excellence, interdisciplinary research, and collaborative incubation.
        </p>
        <div className="pt-6 flex flex-col sm:flex-row justify-center gap-4">
          <button 
            onClick={() => setActiveTab('events')} 
            className="bg-ust-gold text-white px-8 py-3.5 rounded font-bold shadow hover:bg-yellow-500 transition-colors flex items-center justify-center gap-2"
          >
            View Upcoming Events <ArrowRight size={18} />
          </button>
          <button 
            onClick={() => setActiveTab('articles')} 
            className="bg-white text-ust-navy border border-ust-border px-8 py-3.5 rounded font-bold shadow-sm hover:bg-slate-50 transition-colors"
          >
            Read Our Insights
          </button>
        </div>
      </div>
    </section>

    <section className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-extrabold text-ust-navy">About Us</h2>
        <p className="text-slate-500 mt-2">The foundation of our organizational roadmap.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          {title: 'Vision', desc: 'Fostering a vibrant culture of student-led innovation at UST.'},
          {title: 'Mission', desc: 'Empowering students to become entrepreneurial leaders.'},
          {title: 'Purpose', desc: 'Bridging the academic-industry divide.'}
        ].map(i => (
          <div key={i.title} className="flat-card p-8 rounded-lg text-center">
            <h3 className="text-xl font-bold text-ust-gold mb-3 uppercase tracking-wide">{i.title}</h3>
            <p className="text-slate-600 text-sm leading-relaxed">{i.desc}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="bg-slate-50 py-20 border-y border-ust-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-ust-navy">The Teams that Drive our Mission</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {['Technical Development', 'Visual Design', 'Market Analytics', 'Research & Applied Expertise'].map(div => (
            <div key={div} className="flat-card p-6 rounded-lg text-center font-bold text-ust-navy hover:text-ust-gold transition-colors cursor-default">
              {div}
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="flex justify-between items-end mb-10">
        <div>
          <h2 className="text-3xl font-extrabold text-ust-navy">Insights & Stories</h2>
          <p className="text-slate-500 mt-1">Latest achievements and milestones.</p>
        </div>
        <button 
          onClick={() => setActiveTab('articles')} 
          className="hidden sm:flex items-center gap-1 text-sm font-bold text-ust-gold hover:text-yellow-600 transition-colors"
        >
          View All <ArrowRight size={16} />
        </button>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {ARTICLES_DATA.map(art => (
          <div 
            key={art.id} 
            className="flat-card rounded-lg overflow-hidden cursor-pointer group flex flex-col" 
            onClick={()=>setActiveTab('articles')}
          >
            <ImagePlaceholder label={art.title} dimensions={art.imageDimensions} />
            <div className="p-6 flex flex-col flex-grow">
              <span className="text-xs font-bold text-ust-gold uppercase tracking-wider">{art.category}</span>
              <h3 className="font-bold text-lg text-ust-navy mt-2 leading-snug group-hover:text-ust-goldDark transition-colors">
                {art.title}
              </h3>
              <p className="text-sm text-slate-600 mt-3 line-clamp-2">{art.excerpt}</p>
            </div>
          </div>
        ))}
      </div>
    </section>

    <section className="bg-white pt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-ust-navy">What's Next for Technovation Society?</h2>
          <div className="w-16 h-1 bg-ust-gold mx-auto mt-4 rounded-full"></div>
        </div>
        
        <div className="bg-ust-navy rounded-2xl overflow-hidden shadow-xl flex flex-col lg:flex-row border border-slate-800">
          <div className="w-full lg:w-1/2 bg-slate-800/50">
            <ImagePlaceholder 
              label="LUX FUTURA Assembly" 
              dimensions={EVENTS_DATA[0].imageDimensions} 
              className="h-full min-h-[300px] border-0 rounded-none bg-transparent text-slate-300" 
            />
          </div>
          <div className="w-full lg:w-1/2 p-8 sm:p-12 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-800 text-ust-gold text-xs font-bold uppercase rounded border border-slate-700 w-fit mb-4">
              <Calendar size={14} /> Upcoming Event
            </div>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-4">
              {EVENTS_DATA[0].title}
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-8">
              {EVENTS_DATA[0].description} Join us as we unveil the technological roadmap and division goals for the upcoming academic year.
            </p>
            <div className="space-y-3 text-sm text-slate-400 mb-8 border-l-2 border-ust-gold pl-4">
              <p><strong className="text-white">Date:</strong> {EVENTS_DATA[0].date}</p>
              <p><strong className="text-white">Venue:</strong> {EVENTS_DATA[0].venue}</p>
            </div>
            <button 
              onClick={() => setActiveTab('events')}
              className="bg-ust-gold hover:bg-yellow-500 text-ust-navy px-6 py-3 rounded font-bold w-fit transition-colors shadow-lg"
            >
              Register Now
            </button>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-yellow-50 py-20 border-t border-yellow-100 mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto shadow-sm border border-yellow-200 text-ust-gold">
          <Users size={32} />
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-ust-navy">Ready to build the future?</h2>
        <p className="text-slate-600 text-lg">
          Whether you are a developer, designer, or strategist, there is a place for you in our ecosystem. Take the first step in your innovation journey today.
        </p>
        <div className="pt-4">
          <button 
            onClick={() => setActiveTab('events')} 
            className="bg-ust-navy text-white hover:bg-slate-800 px-8 py-3.5 rounded font-bold shadow-md transition-colors"
          >
            Become a Member
          </button>
        </div>
      </div>
    </section>

  </div>
);
