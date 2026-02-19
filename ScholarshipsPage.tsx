
import React from 'react';
import { ExternalLink, Tag, Search, Filter } from 'lucide-react';
import { SCHOLARSHIPS } from './constants';

export default function ScholarshipsPage({ setDetailItem }: { setDetailItem: (d:any)=>void }) {
  const [query, setQuery] = React.useState('');
  const [levelFilter, setLevelFilter] = React.useState<'All' | 'SHS/JHS' | 'College'>('All');
  
  const [showAllGov, setShowAllGov] = React.useState(false);
  const [showAllPrivate, setShowAllPrivate] = React.useState(false);

  const filteredSchols = SCHOLARSHIPS.filter(s => {
    const matchQuery = s.title.toLowerCase().includes(query.toLowerCase()) || 
                       s.tags.some(t => t.toLowerCase().includes(query.toLowerCase()));
    const matchLevel = levelFilter === 'All' || s.level === levelFilter || s.level === 'Both';
    return matchQuery && matchLevel;
  });

  const sections = [
    { title: 'GOVERNMENT GRANTS', type: 'Government', showAll: showAllGov, setShowAll: setShowAllGov, accent: 'bg-teal-400' },
    { title: 'PRIVATE SCHOLARSHIPS', type: 'Private', showAll: showAllPrivate, setShowAll: setShowAllPrivate, accent: 'bg-yellow-300' }
  ];

  return (
    <div className="space-y-12">
      {/* Search & Filter Bar */}
      <div className="flex flex-col md:flex-row gap-6">
        <div className="relative flex-grow">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={20} />
          <input 
            value={query} 
            onChange={e=>setQuery(e.target.value)} 
            placeholder="Maghanap ng scholarship (e.g. DOST, STEM, Merit)..." 
            className="brutal-input pl-12" 
          />
        </div>
        <div className="flex gap-2">
          {['All', 'SHS/JHS', 'College'].map((level) => (
            <button
              key={level}
              onClick={() => setLevelFilter(level as any)}
              className={`px-6 py-2 border-[3px] font-black uppercase tracking-widest text-xs shadow-[3px_3px_0_0_#18181b] transition-all
                ${levelFilter === level ? 'bg-zinc-900 text-white border-zinc-900' : 'bg-white text-zinc-400 border-zinc-200 hover:border-zinc-900'}`}
            >
              {level}
            </button>
          ))}
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {sections.map((section) => {
          const list = filteredSchols.filter(s => s.provider === section.type);
          const visible = section.showAll ? list : list.slice(0, 6);
          
          return (
            <div key={section.type} className="space-y-8">
              <div className="flex items-center gap-4 border-b-[3px] border-zinc-900 pb-4">
                 <div className={`w-6 h-10 ${section.accent} border-2 border-zinc-900`}></div>
                 <h3 className="text-3xl font-black uppercase tracking-tighter text-zinc-900">{section.title}</h3>
                 <span className="font-mono text-xs font-bold text-zinc-400 ml-auto">count: {list.length}</span>
              </div>
              
              {list.length === 0 ? (
                <div className="p-10 border-2 border-dashed border-zinc-200 text-center font-black uppercase text-zinc-400">
                  Walang nakitang resulta.
                </div>
              ) : (
                <div className="grid gap-5">
                  {visible.map((s, i) => (
                    <div 
                      key={i} 
                      onClick={() => setDetailItem({ kind: 'scholarship', data: s })} 
                      className="brutal-card p-6 cursor-pointer group flex flex-col justify-between"
                    >
                      <div className="space-y-4">
                        <div className="flex justify-between items-start">
                          <h4 className="font-black text-xl text-zinc-900 leading-tight uppercase group-hover:text-teal-600 transition-colors">{s.title}</h4>
                          <ExternalLink size={18} className="text-zinc-300 group-hover:text-zinc-900 flex-shrink-0" />
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {s.tags.map(t => (
                            <span key={t} className="text-[10px] font-black text-zinc-500 border-2 border-zinc-100 px-2 py-0.5 uppercase tracking-tighter">
                               {t}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="mt-8 flex justify-between items-center pt-4 border-t-2 border-zinc-50">
                        <span className="text-[10px] font-black uppercase tracking-widest text-zinc-300">Level: <span className="text-zinc-900">{s.level}</span></span>
                        <div className="text-[10px] font-black uppercase tracking-widest text-teal-600 group-hover:translate-x-1 transition-transform">Details →</div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {list.length > 6 && (
                <button 
                  onClick={() => section.setShowAll(!section.showAll)} 
                  className="w-full py-5 text-xs font-black uppercase tracking-[0.2em] border-[3px] border-zinc-900 shadow-[4px_4px_0_0_#18181b] hover:bg-zinc-50 transition-all"
                >
                  {section.showAll ? 'Collapse List' : `See all ${list.length} opportunities`}
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
