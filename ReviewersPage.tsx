
import React from 'react';
import { Youtube, Download, ArrowRight, BookOpen } from 'lucide-react';
import { REVIEWERS, DRIVE_LINK } from './constants';

export default function ReviewersPage() {
  return (
    <div className="space-y-12">
      <div className="bg-teal-400 border-2 border-zinc-900 p-8 md:p-12 shadow-[8px_8px_0_0_#18181b] text-center relative overflow-hidden group">
        <div className="relative z-10">
          <h3 className="text-4xl md:text-5xl font-black text-zinc-900 uppercase mb-4 tracking-tighter">Reviewer Documents</h3>
          <p className="text-zinc-900 font-bold text-lg mb-8 max-w-2xl mx-auto">Access our curated collection of review materials, mock exams, and study guides for free.</p>
          <a href={DRIVE_LINK} target="_blank" className="brutal-btn px-8 py-4 bg-zinc-900 text-white hover:bg-white hover:text-zinc-900 text-lg">
            <Download size={24} className="mr-3" /> Access Google Drive
          </a>
        </div>
        
        {/* Decorative */}
        <div className="absolute top-1/2 left-10 -translate-y-1/2 opacity-20 pointer-events-none hidden md:block"><BookOpen size={120} /></div>
        <div className="absolute top-1/2 right-10 -translate-y-1/2 opacity-20 pointer-events-none hidden md:block"><BookOpen size={120} /></div>
      </div>

      <div>
        <div className="flex items-center gap-4 mb-8 border-b-2 border-zinc-200 pb-4">
          <Youtube size={32} className="text-red-600" /> 
          <h3 className="font-black text-3xl text-zinc-900 uppercase tracking-tighter">Recommended Channels</h3>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {REVIEWERS.map((r, i) => (
            <div key={i} className="brutal-card p-6 flex flex-col justify-between hover:bg-zinc-50 group">
              <div>
                <h4 className="font-black text-2xl text-zinc-900 mb-2">{r.channel}</h4>
                <p className="text-zinc-600 font-medium text-sm border-l-4 border-zinc-200 pl-4">{r.about}</p>
              </div>
              <a 
                href={r.url} 
                target="_blank" 
                className="mt-6 inline-flex items-center text-sm font-black text-white bg-red-600 px-4 py-2 border-2 border-zinc-900 shadow-[2px_2px_0_0_#18181b] hover:translate-y-1 hover:shadow-none transition-all uppercase tracking-wide w-fit"
              >
                Watch Videos <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
