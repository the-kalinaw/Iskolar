
import React, { useState, useMemo } from 'react';
import { Search, BookOpen, Tag, Info, HelpCircle } from 'lucide-react';
import { DICTIONARY_TERMS } from './constants';
import { motion } from 'framer-motion';

export default function DictionaryPage() {
  const [query, setQuery] = useState('');

  const groupedTerms = useMemo(() => {
    const filtered = DICTIONARY_TERMS.filter(t => 
      t.term.toLowerCase().includes(query.toLowerCase()) || 
      t.definition.toLowerCase().includes(query.toLowerCase()) ||
      t.tag?.toLowerCase().includes(query.toLowerCase())
    ).sort((a, b) => a.term.localeCompare(b.term));

    const groups: Record<string, typeof filtered> = {};
    filtered.forEach(term => {
      const firstLetter = term.term[0].toUpperCase();
      if (!groups[firstLetter]) groups[firstLetter] = [];
      groups[firstLetter].push(term);
    });
    return groups;
  }, [query]);

  return (
    <div className="space-y-16">
      <div className="bg-yellow-300 border-[4px] border-zinc-900 p-12 md:p-20 shadow-[6px_6px_0_0_#18181b] relative overflow-hidden">
        <div className="relative z-10 space-y-6">
          <h3 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-zinc-900">Glosaryo</h3>
          <p className="text-xl font-bold text-zinc-800 max-w-2xl leading-snug">
            Ang iyong gabay sa mga technical terms at dokumentong kailangan para sa kolehiyo.
          </p>
        </div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-5 pointer-events-none">
          <BookOpen size={400} />
        </div>
      </div>

      <div className="sticky top-24 z-30 max-w-2xl">
        <div className="relative shadow-[4px_4px_0_0_#18181b]">
          <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-zinc-400" size={24} />
          <input 
            type="text" 
            placeholder="I-search ang term (hal. GWA, PSA, Form 137)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="brutal-input pl-16 py-6 text-xl bg-white"
          />
        </div>
      </div>

      <div className="space-y-24">
        {Object.keys(groupedTerms).length > 0 ? (
          Object.entries(groupedTerms).map(([letter, terms]) => (
            <div key={letter} className="space-y-8">
              <div className="flex items-center gap-4">
                <span className="text-6xl font-black text-teal-400 opacity-30">{letter}</span>
                <div className="h-[4px] flex-grow bg-zinc-100"></div>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {terms.map((item, i) => (
                  <motion.div 
                    key={item.term}
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                    className="brutal-card p-8 bg-white hover:bg-zinc-50 flex flex-col justify-between group border-l-[12px] border-l-teal-400"
                  >
                    <div className="space-y-6">
                      <div className="flex justify-between items-start">
                        <h4 className="text-3xl font-black uppercase tracking-tight text-zinc-900 group-hover:text-teal-600 transition-colors">{item.term}</h4>
                        {item.tag && (
                          <span className="bg-zinc-900 text-white text-[9px] px-3 py-1 font-black uppercase tracking-widest">
                            {item.tag}
                          </span>
                        )}
                      </div>
                      <p className="text-md font-bold text-zinc-500 leading-snug">
                        {item.definition}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))
        ) : (
          <div className="py-40 text-center border-[4px] border-dashed border-zinc-200">
             <p className="font-black text-zinc-300 text-2xl uppercase tracking-[0.2em]">Walang nakitang term na "{query}"</p>
          </div>
        )}
      </div>

      <div className="bg-zinc-900 text-white p-12 border-[4px] border-zinc-900 shadow-[6px_6px_0_0_#2dd4bf]">
         <div className="flex items-center gap-6 mb-8">
            <HelpCircle size={40} className="text-teal-400" />
            <h4 className="font-black text-3xl uppercase tracking-tighter">Tip para sa iyo:</h4>
         </div>
         <p className="text-lg font-bold text-zinc-400 leading-relaxed max-w-3xl">
            Lahat ng terms dito ay makikita mo rin sa buong website bilang <span className="text-teal-400 border-b-2 border-dotted border-teal-400 px-1">dotted text</span>. I-hover lang ang mouse mo para sa mabilis na definition!
         </p>
      </div>
    </div>
  );
}
