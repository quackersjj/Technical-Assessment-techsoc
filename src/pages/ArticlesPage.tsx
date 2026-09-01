import React from 'react';
import { ARTICLES_DATA } from '../data/articles';
import { ImagePlaceholder } from '../components/ImagePlaceholder';

export const ArticlesPage: React.FC = () => {
  const featuredArticle = ARTICLES_DATA[0];
  const gridArticles = ARTICLES_DATA.slice(1);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
      <div className="mb-12 border-b border-slate-200 pb-6">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-ust-navy tracking-tight">Articles & Publications</h1>
        <p className="text-slate-500 mt-3 text-lg">Official news, student spotlights, and organizational milestones.</p>
      </div>
      
      <div className="mb-16 flat-card rounded-xl overflow-hidden flex flex-col lg:flex-row hover:shadow-lg transition-shadow cursor-pointer">
        <div className="w-full lg:w-2/3">
          <ImagePlaceholder 
            label={featuredArticle.title} 
            dimensions={featuredArticle.imageDimensions} 
            className="h-full min-h-[350px] border-0 rounded-none bg-slate-100" 
          />
        </div>
        <div className="w-full lg:w-1/3 p-8 md:p-10 flex flex-col justify-center bg-white border-l border-slate-100">
          <span className="text-xs font-black text-ust-goldDark uppercase tracking-widest mb-4 inline-block">
            {featuredArticle.category}
          </span>
          <h2 className="text-3xl font-extrabold text-ust-navy mb-4 leading-tight">
            {featuredArticle.title}
          </h2>
          <p className="text-slate-600 mb-6 leading-relaxed flex-grow">
            {featuredArticle.excerpt}
          </p>
          <div className="flex items-center justify-between mt-auto border-t border-slate-100 pt-4">
            <span className="text-sm font-semibold text-slate-500">{featuredArticle.date}</span>
            <span className="text-sm font-bold text-ust-navy hover:text-ust-gold transition-colors">Read Article &rarr;</span>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {gridArticles.map(art => (
          <div key={art.id} className="flat-card rounded-lg overflow-hidden flex flex-col group cursor-pointer">
            <ImagePlaceholder 
              label={art.title} 
              dimensions={art.imageDimensions} 
              className="border-b border-slate-100 rounded-b-none" 
            />
            <div className="p-6 flex flex-col flex-grow bg-white">
              <div className="flex justify-between items-center mb-4">
                <span className="text-[10px] font-bold text-ust-goldDark uppercase tracking-wider bg-yellow-50 px-2 py-1 rounded">
                  {art.category}
                </span>
                <span className="text-xs font-semibold text-slate-400">{art.date}</span>
              </div>
              <h3 className="font-bold text-xl text-ust-navy mb-3 group-hover:text-ust-goldDark transition-colors leading-snug">
                {art.title}
              </h3>
              <p className="text-sm text-slate-600 flex-grow leading-relaxed">{art.excerpt}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
