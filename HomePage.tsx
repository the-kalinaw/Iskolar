
import React from 'react';
import { ArrowRight, MapPin, Target, Sparkles, BookOpen, GraduationCap } from 'lucide-react';
import { UserProfile } from './types';
import { ACTION_TEMPLATES, UNIVERSITIES, SCHOLARSHIPS } from './constants';

export default function HomePage({ profile, setView, setDetailItem }: { profile: UserProfile, setView: (v:any)=>void, setDetailItem: (d:any)=>void }) {
  const selectedTracks = profile.preferredCourses || [];
  
  const tailoredUnis = UNIVERSITIES.filter(u => 
    selectedTracks.length === 0 || u.categories.some(cat => selectedTracks.includes(cat))
  ).slice(0, 4);

  const tailoredSchols = SCHOLARSHIPS.slice(0, 4);
  const [showFullPlan, setShowFullPlan] = React.useState(false);

  const generateActionPlan = (p: UserProfile) => {
    const plan: string[] = [];
    plan.push(...ACTION_TEMPLATES.default);
    
    if (p.gradesIndicator === '95-100' || p.gradesIndicator === '90-94') {
      plan.unshift(...ACTION_TEMPLATES.high_achiever);
    }
    
    if (p.examReady === false) {
      plan.unshift(...ACTION_TEMPLATES.exam_not_ready);
    }
    
    if (p.gradesIndicator === 'Below 80') {
      plan.unshift(...ACTION_TEMPLATES.low_grade);
    }
    
    return Array.from(new Set(plan)).slice(0, 8);
  };

  const actionPlan = generateActionPlan(profile);

  return (
    <div className="space-y-12">
      {/* Hero */}
      <div className="bg-teal-400 border-2 border-zinc-900 p-8 shadow-[8px_8px_0_0_#18181b] relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
          <div className="space-y-4 max-w-2xl">
            <h3 className="text-4xl md:text-5xl font-black text-zinc-900 uppercase tracking-tighter leading-none">
              Hello, <span className="text-white inline-block transform -rotate-2 bg-zinc-900 px-2">Iskolar ng Calamba</span>
            </h3>
            <div className="flex flex-wrap gap-2 mt-4">
              {selectedTracks.map(t => (
                <span key={t} className="bg-white border-2 border-zinc-900 px-3 py-1 text-xs font-black uppercase shadow-[2px_2px_0_0_#18181b]">{t}</span>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-3 mt-6">
              <button onClick={() => setView('universities')} className="brutal-btn px-6 py-3 bg-white hover:bg-zinc-900 hover:text-white">
                Universities
              </button>
              <button onClick={() => setView('scholarships')} className="brutal-btn px-6 py-3 bg-white hover:bg-zinc-900 hover:text-white">
                Scholarships
              </button>
            </div>
          </div>
          
          <div className="bg-white border-2 border-zinc-900 p-4 shadow-[4px_4px_0_0_rgba(0,0,0,0.2)] rotate-2 hidden md:block min-w-[200px]">
             <div className="flex items-center gap-2 text-xs font-mono font-bold text-zinc-500 mb-2">
               <MapPin size={12} /> {profile.location || 'Location Not Set'}
             </div>
             <div className="flex items-center gap-2 text-xs font-mono font-bold text-zinc-500">
               <GraduationCap size={12} /> GWA: {profile.gradesIndicator || 'N/A'}
             </div>
          </div>
        </div>
        <div className="absolute -right-10 -bottom-10 opacity-10 rotate-12 pointer-events-none">
            <Sparkles size={200} />
        </div>
      </div>

      <div className="grid md:grid-cols-12 gap-8">
        {/* Action Plan */}
        <div className="md:col-span-8 space-y-8">
          <div className="brutal-card p-0 overflow-hidden">
             <div className="bg-zinc-900 text-white p-4 flex justify-between items-center">
               <h4 className="font-black uppercase tracking-wider flex items-center gap-2 text-sm">
                 <BookOpen size={18} className="text-teal-400" /> Ang Iyong Scholarship Roadmap
               </h4>
               <span className="text-[10px] font-mono bg-zinc-800 px-2 py-1 rounded text-zinc-400">PERSONALIZED</span>
             </div>
             <div className="p-6 md:p-8 bg-white">
                <ol className="space-y-4">
                  {(showFullPlan ? actionPlan : actionPlan.slice(0,4)).map((a, i) => (
                    <li key={i} className="flex gap-4 items-start group">
                      <div className="w-8 h-8 flex items-center justify-center bg-zinc-100 border-2 border-zinc-200 font-black text-zinc-400 group-hover:bg-teal-400 group-hover:text-zinc-900 group-hover:border-zinc-900 transition-all flex-shrink-0">
                        {i + 1}
                      </div>
                      <p className="text-lg font-bold text-zinc-800 pt-0.5">{a}</p>
                    </li>
                  ))}
                </ol>
                <button 
                  onClick={() => setShowFullPlan(!showFullPlan)} 
                  className="mt-8 w-full py-3 text-xs font-black uppercase tracking-widest text-zinc-400 hover:text-zinc-900 border-2 border-dashed border-zinc-200 hover:border-zinc-900 transition-all"
                >
                  {showFullPlan ? 'Itago ang roadmap' : 'Ipakita ang lahat'}
                </button>
             </div>
          </div>

          <div>
             <div className="flex justify-between items-end mb-4 border-b-2 border-zinc-200 pb-2">
                <h4 className="font-black text-2xl uppercase">Top Universities para sa iyo</h4>
                <button onClick={() => setView('universities')} className="text-xs font-bold underline hover:text-teal-600">VIEW ALL</button>
             </div>
             <div className="grid sm:grid-cols-2 gap-4">
               {tailoredUnis.map((u, i) => (
                 <div 
                   key={i} 
                   onClick={() => setDetailItem({ kind: 'university', data: u })} 
                   className="brutal-card p-5 cursor-pointer hover:bg-teal-50 group"
                 >
                   <div className="flex justify-between items-start mb-2">
                     <div className="font-black text-lg leading-tight group-hover:underline">{u.name}</div>
                     <ArrowRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                   </div>
                   <div className="flex flex-wrap gap-2">
                     {u.categories.slice(0,2).map(c => (
                       <span key={c} className="text-[9px] font-black bg-zinc-100 border border-zinc-200 px-1.5 py-0.5 uppercase">{c}</span>
                     ))}
                   </div>
                 </div>
               ))}
             </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="md:col-span-4 space-y-8">
           <div className="bg-zinc-900 p-6 border-2 border-zinc-900 shadow-[8px_8px_0_0_#2dd4bf] text-white">
              <h4 className="font-black text-xl uppercase mb-4 text-teal-400">Quick Tools</h4>
              <div className="space-y-3">
                <button onClick={() => setView('process')} className="w-full text-left p-3 border-2 border-zinc-700 hover:bg-white hover:text-zinc-900 transition-all font-bold text-xs uppercase flex justify-between items-center group">
                  Step-by-Step Guide <ArrowRight size={14} />
                </button>
                <button onClick={() => setView('reviewers')} className="w-full text-left p-3 border-2 border-zinc-700 hover:bg-white hover:text-zinc-900 transition-all font-bold text-xs uppercase flex justify-between items-center group">
                  Study Materials <ArrowRight size={14} />
                </button>
              </div>
           </div>

           <div>
             <div className="flex justify-between items-end mb-4 border-b-2 border-zinc-200 pb-2">
                <h4 className="font-black text-xl uppercase">Scholarships</h4>
             </div>
             <div className="space-y-3">
               {tailoredSchols.map((s, i) => (
                 <div 
                   key={i} 
                   onClick={() => setDetailItem({ kind: 'scholarship', data: s })} 
                   className="bg-white border-2 border-zinc-200 hover:border-zinc-900 p-4 cursor-pointer transition-all group relative overflow-hidden"
                 >
                   <div className="font-black text-sm group-hover:translate-x-1 transition-transform">{s.title}</div>
                   <div className="text-[10px] text-zinc-500 mt-1 uppercase font-bold">{s.provider}</div>
                 </div>
               ))}
             </div>
           </div>
        </div>
      </div>
    </div>
  );
}
