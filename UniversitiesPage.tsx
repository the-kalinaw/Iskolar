
import React from 'react';
import { MapPin, Search, Filter, Sparkles, CreditCard } from 'lucide-react';
import { UserProfile } from './types';
import { UNIVERSITIES, COURSE_CATEGORIES } from './constants';

export default function UniversitiesPage({ profile, setProfile, setDetailItem }: { profile: UserProfile, setProfile: (p:any)=>void, setDetailItem: (d:any)=>void }) {
  const [query, setQuery] = React.useState('');
  
  const filteredUnis = UNIVERSITIES.filter(u => {
    // Show if university matches ANY of the user's preferred tracks
    const matchCategory = profile.preferredCourses.length === 0 || 
                         u.categories.some(cat => profile.preferredCourses.includes(cat));
    
    const matchQuery = query.trim() === '' || 
                       u.name.toLowerCase().includes(query.toLowerCase()) || 
                       u.categories.join(' ').toLowerCase().includes(query.toLowerCase());
                       
    return matchCategory && matchQuery;
  });

  const privateUnis = filteredUnis.filter(u => u.type === 'Private');
  const stateUnis = filteredUnis.filter(u => u.type === 'State' || u.type === 'Government');

  const toggleTrack = (cat: any) => {
    const next = profile.preferredCourses.includes(cat)
      ? profile.preferredCourses.filter(c => c !== cat)
      : [...profile.preferredCourses, cat];
    setProfile({ ...profile, preferredCourses: next });
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-2 border-b-2 border-zinc-200 pb-2">
            <Filter size={20} className="text-zinc-400" />
            <span className="text-xs font-black uppercase tracking-widest text-zinc-400">Filter by Interests</span>
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {COURSE_CATEGORIES.map(cat => (
          <button
            key={cat}
            onClick={() => toggleTrack(cat)}
            className={`px-4 py-2 border-2 text-xs font-black uppercase tracking-wider whitespace-nowrap transition-all shadow-sm
              ${profile.preferredCourses.includes(cat) 
                ? 'bg-zinc-900 border-zinc-900 text-white transform -translate-y-1' 
                : 'bg-white border-zinc-200 text-zinc-500 hover:border-zinc-900'}`}
          >
            {cat}
          </button>
        ))}
        </div>
        
        <div className="relative">
           <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={20} />
           <input 
             value={query} 
             onChange={e=>setQuery(e.target.value)} 
             placeholder="I-search ang pangalan ng school o kurso..." 
             className="brutal-input pl-12 py-4 text-lg bg-white shadow-sm transition-shadow" 
           />
           {query && (
             <button 
               onClick={()=>setQuery('')} 
               className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold underline text-zinc-500 hover:text-red-500"
             >
               CLEAR
             </button>
           )}
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Private Column */}
        <div className="space-y-6">
          <div className="flex items-center gap-4 mb-6">
            <h3 className="font-black text-3xl text-zinc-900 uppercase tracking-tighter">Private Schools</h3>
            <div className="h-0.5 flex-grow bg-zinc-900"></div>
          </div>
          
          <div className="grid gap-4">
            {privateUnis.map((u, i) => (
              <div 
                key={i} 
                onClick={() => setDetailItem({ kind: 'university', data: u })} 
                className="brutal-card p-6 cursor-pointer hover:bg-zinc-50 group flex flex-col h-full"
              >
                <div className="flex justify-between items-start mb-4">
                  <h4 className="font-black text-xl text-zinc-900 leading-tight group-hover:underline decoration-teal-400 decoration-2">{u.name}</h4>
                  <div className="flex flex-col items-end gap-1 flex-shrink-0">
                    {u.offersScholarship && (
                      <span className="text-[8px] font-black bg-teal-400 text-zinc-900 px-1.5 py-0.5 uppercase border border-zinc-900">
                        Scholarship Available
                      </span>
                    )}
                    {u.applicationFee && (
                      <span className="text-[8px] font-black bg-yellow-300 text-zinc-900 px-1.5 py-0.5 uppercase border border-zinc-900">
                        {u.applicationFee}
                      </span>
                    )}
                  </div>
                </div>
                <div className="mt-auto pt-4 border-t border-zinc-100 flex items-center gap-2 text-[10px] font-bold text-zinc-400 uppercase">
                  <MapPin size={12} /> {u.address || 'Metro Manila / Laguna'}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* State Column */}
        <div className="space-y-6">
          <div className="flex items-center gap-4 mb-6">
            <h3 className="font-black text-3xl text-teal-600 uppercase tracking-tighter">State & Government</h3>
            <div className="h-0.5 flex-grow bg-teal-600"></div>
          </div>

          <div className="grid gap-4">
            {stateUnis.map((u, i) => (
              <div 
                key={i} 
                onClick={() => setDetailItem({ kind: 'university', data: u })} 
                className="brutal-card p-6 cursor-pointer hover:bg-teal-50 group flex flex-col h-full border-teal-900"
              >
                <div className="flex justify-between items-start mb-4">
                  <h4 className="font-black text-xl text-zinc-900 leading-tight group-hover:underline decoration-teal-400 decoration-2">{u.name}</h4>
                  <span className="text-[8px] font-black px-1.5 py-0.5 bg-teal-200 text-zinc-900 uppercase border border-teal-900">{u.type}</span>
                </div>
                <div className="mt-auto pt-4 border-t border-zinc-100 flex items-center gap-2 text-[10px] font-bold text-zinc-400 uppercase">
                  <MapPin size={12} /> {u.address || 'Metro Manila / Laguna'}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
