
import React from 'react';
import { ExternalLink, Tag } from 'lucide-react';
import { SCHOLARSHIPS } from './constants';

export default function ScholarshipsPage({ setDetailItem }: { setDetailItem: (d:any)=>void }) {
  const [showAllGov, setShowAllGov] = React.useState(false);
  const [showAllPrivate, setShowAllPrivate] = React.useState(false);

  const sections = [
    { title: 'GOVERNMENT FUNDED', type: 'Government', showAll: showAllGov, setShowAll: setShowAllGov, color: 'text-teal-600', borderColor: 'border-teal-600' },
    { title: 'PRIVATE SECTOR', type: 'Private', showAll: showAllPrivate, setShowAll: setShowAllPrivate, color: 'text-zinc-900', borderColor: 'border-zinc-900' }
  ];

  return (
    <div className="grid md:grid-cols-2 gap-12">
      {sections.map((section) => {
        const list = SCHOLARSHIPS.filter(s => s.provider === section.type);
        const visible = section.showAll ? list : list.slice(0,6);
        
        return (
          <div key={section.type} className="space-y-6">
            <div className={`border-b-4 ${section.borderColor} pb-2`}>
               <h3 className={`text-3xl font-black uppercase tracking-tighter ${section.color}`}>{section.title}</h3>
            </div>
            
            <div className="grid gap-4">
              {visible.map((s, i) => (
                <div 
                  key={i} 
                  onClick={() => setDetailItem({ kind: 'scholarship', data: s })} 
                  className="brutal-card p-6 cursor-pointer hover:bg-zinc-50 group transition-all"
                >
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <h4 className="font-black text-lg text-zinc-900 leading-tight group-hover:text-teal-600 transition-colors">{s.title}</h4>
                      <p className="text-xs font-bold text-zinc-400 mt-1 uppercase tracking-wider">{s.level}</p>
                    </div>
                    {s.link && <ExternalLink size={18} className="text-zinc-300 group-hover:text-teal-500 transition-colors flex-shrink-0" />}
                  </div>
                  
                  <div className="mt-4 flex flex-wrap gap-2">
                    {s.tags.map(t => (
                      <span key={t} className="inline-flex items-center gap-1 text-[10px] font-bold text-zinc-600 border border-zinc-200 bg-zinc-50 px-2 py-1 uppercase">
                         <Tag size={10} /> {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {list.length > 6 && (
              <button 
                onClick={() => section.setShowAll(!section.showAll)} 
                className="w-full py-4 text-sm font-black uppercase tracking-widest border-2 border-dashed border-zinc-300 hover:border-zinc-900 hover:bg-white transition-colors"
              >
                {section.showAll ? 'Show less' : `Show all ${list.length} scholarships`}
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
}
