import React from 'react';
import { EVENTS_DATA } from '../data/events';
import { ImagePlaceholder } from '../components/ImagePlaceholder';

export const EventsPage: React.FC = () => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
    <h1 className="text-4xl font-extrabold text-ust-navy mb-10 border-b pb-6">Events & Assemblies</h1>
    <div className="space-y-8">
      {EVENTS_DATA.map(event => (
        <div key={event.id} className="flat-card rounded-lg overflow-hidden p-6 md:p-8 flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-1/3 shrink-0">
            <ImagePlaceholder label={event.title} dimensions={event.imageDimensions} />
          </div>
          <div className="flex-grow space-y-4">
            <span className="text-xs font-bold text-ust-gold uppercase bg-yellow-50 px-2 py-1 rounded border border-yellow-100">{event.category}</span>
            <h2 className="text-2xl font-bold text-ust-navy">{event.title}</h2>
            <p className="text-slate-600 text-sm">{event.description}</p>
            <div className="bg-slate-50 p-4 rounded border text-sm text-slate-700 space-y-1">
              <p><strong>Date:</strong> {event.date}</p>
              <p><strong>Time:</strong> {event.time}</p>
              <p><strong>Venue:</strong> {event.venue}</p>
            </div>
            <button className="bg-ust-navy text-white px-6 py-2 rounded font-semibold text-sm hover:bg-slate-800 transition">Register Now</button>
          </div>
        </div>
      ))}
    </div>
  </div>
);
