import React from 'react';
import { Image as ImageIcon } from 'lucide-react';

interface Props { label: string; dimensions: string; aspectRatio?: string; className?: string; }

export const ImagePlaceholder: React.FC<Props> = ({ label, dimensions, aspectRatio = 'aspect-video', className = '' }) => (
  <div className={`w-full ${aspectRatio} ${className} bg-slate-100 border border-slate-200 rounded-lg flex flex-col items-center justify-center p-4 text-center text-slate-500`}>
    <ImageIcon size={32} className="mb-2 text-slate-400" />
    <p className="text-sm font-semibold text-slate-700">{label}</p>
    <span className="text-xs font-mono mt-1 bg-white px-2 py-1 rounded border border-slate-200">{dimensions}</span>
  </div>
);
