
import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  CheckCircle2,
  RefreshCw,
  Menu,
  X,
  Send,
  GraduationCap,
  Sparkles,
  CreditCard,
  Target,
  Gift,
  FileText,
  Building2,
  Info,
  MapPin,
  Book,
  Search,
  HelpCircle
} from 'lucide-react';
import { 
  ViewState, 
  UserProfile,
  CourseCategory
} from './types';
import { 
  GENERAL_QUALIFICATIONS,
  REQUIREMENTS_GUIDE,
  APPLICATION_STEPS,
  ONBOARDING_QUESTIONS,
  DICTIONARY_TERMS
} from './constants';

import HomePage from './HomePage';
import UniversitiesPage from './UniversitiesPage';
import ScholarshipsPage from './ScholarshipsPage';
import ReviewersPage from './ReviewersPage';
import AboutPage from './AboutPage';
import DictionaryPage from './DictionaryPage';

const IskolarLogo = ({ size = 32, className = "" }: { size?: number, className?: string }) => (
  <div className={`font-black tracking-tighter flex items-center gap-2 ${className}`} style={{ fontSize: size }}>
    <div className="bg-teal-400 w-[0.9em] h-[0.9em] border-[3px] border-zinc-900 shadow-[3px_3px_0_0_rgba(24,24,27,1)]"></div>
    <span className="text-zinc-900 uppercase">Iskolar</span>
  </div>
);

// Enhanced Tooltip with better positioning logic
const Tooltip: React.FC<{ term: string, definition: string, children: React.ReactNode }> = ({ term, definition, children }) => {
  const [show, setShow] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div 
      ref={containerRef}
      className="relative inline-block" 
      onMouseEnter={() => setShow(true)} 
      onMouseLeave={() => setShow(false)}
    >
      <span className="cursor-help border-b-2 border-dotted border-teal-500 font-bold hover:text-teal-600 transition-colors">
        {children}
      </span>
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0, y: 5, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 5, scale: 0.95 }}
            className="absolute bottom-full left-2 -translate-x-1/20 mb-3 w-64 z-[200] pointer-events-none"
          >
            <div className="bg-yellow-300 border-[3px] border-zinc-900 p-4 shadow-[6px_6px_0_0_#18181b]">
              <div className="flex items-center gap-2 mb-2 border-b-2 border-zinc-900/10 pb-1">
                <HelpCircle size={14} className="text-zinc-900" />
                <p className="text-[10px] font-black uppercase tracking-widest text-zinc-900">{term}</p>
              </div>
              <p className="text-xs font-bold text-zinc-800 leading-snug">{definition}</p>
            </div>
            {/* Arrow */}
            <div className="w-3 h-3 bg-yellow-300 border-r-[3px] border-b-[3px] border-zinc-900 rotate-45 absolute -bottom-1.5 left-2 -translate-x-1/20"></div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Optimized single-pass Glossary parser
export const GlossaryText: React.FC<{ text: string }> = ({ text }) => {
  const parsedContent = useMemo(() => {
    if (!text) return text;
    
    // Create a map for quick lookup
    const termMap = new Map(DICTIONARY_TERMS.map(t => [t.term.toLowerCase(), t]));
    
    // Create combined regex: \b(Term1|Term2|...)\b
    const escapedTerms = DICTIONARY_TERMS.map(t => t.term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
    const combinedRegex = new RegExp(`\\b(${escapedTerms.join('|')})\\b`, 'gi');
    
    const parts = text.split(combinedRegex);
    return parts.map((part, i) => {
      const lowerPart = part.toLowerCase();
      const match = termMap.get(lowerPart);
      if (match) {
        return <Tooltip key={i} term={match.term} definition={match.definition}>{part}</Tooltip>;
      }
      return part;
    });
  }, [text]);

  return <>{parsedContent}</>;
};

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>('onboarding');
  const [profile, setProfile] = useState<UserProfile>({ preferredCourses: [] });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('iskolar_profile');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setProfile(parsed);
        if (view === 'onboarding') setView('home');
      } catch (e) { console.error(e); }
    }
  }, []);

  const saveProfile = (p: UserProfile) => {
    setProfile(p);
    localStorage.setItem('iskolar_profile', JSON.stringify(p));
    setView('home');
  };

  const resetProfile = () => {
    if (confirm("Reset profile? This will clear your current roadmap.")) {
      localStorage.removeItem('iskolar_profile');
      setProfile({ preferredCourses: [] });
      setView('onboarding');
    }
  };

  const [detailItem, setDetailItem] = useState<{ kind: 'university'|'scholarship', data: any } | null>(null);

  const DetailModal: React.FC<{item: { kind: 'university'|'scholarship', data: any }}>= ({ item }) => {
    if (!item) return null as any;
    const { kind, data } = item;
    const requirements = data.requirements || [];
    const steps = data.steps || APPLICATION_STEPS.slice(0, 5);
    const isUni = kind === 'university';

    return (
      <AnimatePresence>
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} 
            className="absolute inset-0 bg-zinc-900/90 backdrop-blur-sm" 
            onClick={() => setDetailItem(null)}
          />
          <motion.div 
            initial={{ scale: 0.95, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.95, opacity: 0, y: 20 }} 
            className="bg-zinc-50 w-full max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl relative z-10 rounded-2xl flex flex-col"
          >
            {/* Header */}
            <div className={`p-6 md:p-8 flex justify-between items-start sticky top-0 z-30 border-b border-zinc-200 ${isUni ? 'bg-white' : 'bg-white'}`}>
              <div className="pr-8">
                <div className="flex gap-2 mb-3">
                  {isUni ? (
                    <span className={`text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded border ${data.type === 'Private' ? 'bg-zinc-100 border-zinc-200 text-zinc-600' : 'bg-teal-100 border-teal-200 text-teal-700'}`}>
                      {data.type} School
                    </span>
                  ) : (
                    <span className={`text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded border ${data.provider === 'Government' ? 'bg-teal-100 border-teal-200 text-teal-700' : 'bg-yellow-100 border-yellow-200 text-yellow-700'}`}>
                      {data.provider} Funded
                    </span>
                  )}
                  {data.offersScholarship && (
                    <span className="text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded bg-yellow-100 border border-yellow-200 text-yellow-700 flex items-center gap-1">
                      <Sparkles size={10} /> Scholarship Available
                    </span>
                  )}
                </div>
                <h3 className="font-black text-2xl md:text-4xl text-zinc-900 uppercase tracking-tighter leading-[0.9]">
                  {data.name || data.title}
                </h3>
                {data.address && (
                  <p className="text-zinc-500 font-bold text-sm mt-2 flex items-center gap-1">
                    <MapPin size={14} /> {data.address}
                  </p>
                )}
              </div>
              <button onClick={() => setDetailItem(null)} className="bg-zinc-100 hover:bg-zinc-200 p-2 rounded-full transition-colors text-zinc-500 hover:text-zinc-900">
                <X size={24} />
              </button>
            </div>

            {/* Content */}
            <div className="overflow-y-auto p-6 md:p-8 space-y-10 bg-zinc-50">
               
               {/* Quick Stats / Tags */}
               <div className="flex flex-wrap gap-2">
                 {(data.categories || data.tags || []).map((tag: string) => (
                   <span key={tag} className="px-3 py-1 bg-white border border-zinc-200 rounded-full text-xs font-bold text-zinc-600 shadow-sm">
                     {tag}
                   </span>
                 ))}
                 {data.applicationFee && (
                   <span className="px-3 py-1 bg-blue-50 border border-blue-100 rounded-full text-xs font-bold text-blue-600 shadow-sm flex items-center gap-1">
                     <CreditCard size={12} /> Fee: {data.applicationFee}
                   </span>
                 )}
               </div>

               <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                  {/* Requirements Column */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center">
                        <FileText size={20} />
                      </div>
                      <h4 className="text-xl font-black uppercase text-zinc-900 tracking-tight">Requirements</h4>
                    </div>
                    
                    <div className="bg-white rounded-xl border border-zinc-200 p-1 shadow-sm">
                      <ul className="divide-y divide-zinc-100">
                        {requirements.map((r:string, i:number) => (
                          <li key={i} className="flex gap-4 p-4 items-start hover:bg-zinc-50 transition-colors rounded-lg">
                            <div className="mt-0.5 text-teal-500 flex-shrink-0">
                              <CheckCircle2 size={18} />
                            </div>
                            <div className="text-sm font-medium text-zinc-700 leading-snug">
                              <GlossaryText text={r} />
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Process / Steps Column */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-yellow-100 text-yellow-600 flex items-center justify-center">
                        <Target size={20} />
                      </div>
                      <h4 className="text-xl font-black uppercase text-zinc-900 tracking-tight">Application Steps</h4>
                    </div>

                    <div className="space-y-3">
                      {steps.map((s:string, i:number) => (
                        <div key={i} className="flex gap-4 p-4 bg-white border border-zinc-200 rounded-xl shadow-sm items-start">
                          <span className="font-mono text-xs font-bold text-zinc-400 mt-1">{(i+1).toString().padStart(2, '0')}</span>
                          <div className="text-sm font-bold text-zinc-700 leading-snug">
                            <GlossaryText text={s} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
               </div>

               {/* Benefits Section for Scholarships */}
               {data.benefits && (
                 <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-xl p-6 md:p-8 text-white shadow-lg">
                    <div className="flex items-center gap-3 mb-6">
                      <Gift size={24} className="text-yellow-400" />
                      <h4 className="text-xl font-black uppercase tracking-tight">Benefits & Privileges</h4>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      {data.benefits.map((b:string, i:number) => (
                        <div key={i} className="flex gap-3 items-center bg-white/10 p-3 rounded-lg border border-white/5">
                          <div className="w-1.5 h-1.5 rounded-full bg-yellow-400 flex-shrink-0"></div>
                          <span className="text-sm font-medium text-zinc-100">{b}</span>
                        </div>
                      ))}
                    </div>
                 </div>
               )}
            </div>

            {/* Footer Actions */}
            <div className="p-6 border-t border-zinc-200 bg-white flex flex-col md:flex-row gap-4 justify-end items-center sticky bottom-0 z-30">
               <p className="text-xs font-medium text-zinc-400 hidden md:block mr-auto">
                 Always verify details with the official website.
               </p>
               {data.link && (
                 <a href={data.link} target="_blank" className="w-full md:w-auto bg-zinc-900 text-white px-8 py-4 rounded-xl font-bold uppercase tracking-wide hover:bg-zinc-800 transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-1">
                    Visit Official Website <ArrowRight size={18} />
                 </a>
               )}
            </div>
          </motion.div>
        </div>
      </AnimatePresence>
    );
  };

  const OnboardingFlow: React.FC = () => {
    const [step, setStep] = useState(-1);
    const [draft, setDraft] = useState<UserProfile>({ preferredCourses: [] });

    const next = () => {
      if (step === -1) setStep(0);
      else setStep(s => Math.min(s + 1, ONBOARDING_QUESTIONS.length));
    };

    if (step === -1) {
      return (
        <div className="min-h-screen flex items-center justify-center p-6 bg-zinc-900">
          <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="w-full max-w-7xl bg-white border-[4px] border-zinc-900 shadow-[15px_15px_0_0_#2dd4bf] p-8 md:p-16">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2 space-y-8">
                <IskolarLogo size={48} />
                <h1 className="text-6xl font-black text-zinc-900 uppercase leading-[0.85] tracking-tighter">
                  Handa ka na bang maging <span className="bg-teal-400">iskolar?</span>
                </h1>
                <p className="text-xl font-bold text-zinc-500 leading-snug">Ang aming platform ay magbibigay sa iyo ng personal na gabay para sa iyong pangarap na kurso.</p>
                <button onClick={next} className="brutal-btn primary px-12 py-6 text-xl group">
                  TAYO NA! <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
              <div className="md:w-1/2 w-full">
                <div className="aspect-video bg-zinc-100 border-[4px] border-zinc-900 overflow-hidden shadow-[8px_8px_0_0_#18181b]">
                   <iframe 
                    src="https://drive.google.com/file/d/1xc_VlCYtp1t-L8KuylP_SH9OOOeX9fHV/preview"
                    width="100%" height="100%"
                    className="w-full h-full"
                  ></iframe>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      );
    }

    if (step >= ONBOARDING_QUESTIONS.length) {
      return (
        <div className="min-h-screen flex items-center justify-center p-6 bg-teal-400">
          <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="w-full max-w-xl bg-white border-[4px] border-zinc-900 shadow-[12px_12px_0_0_#18181b] p-16 text-center">
            <div className="w-24 h-24 bg-teal-400 border-[4px] border-zinc-900 mx-auto mb-10 flex items-center justify-center shadow-[6px_6px_0_0_#18181b] animate-bounce">
              <CheckCircle2 size={48} className="text-zinc-900" />
            </div>
            <h2 className="text-5xl font-black mb-6 uppercase tracking-tighter">Maligayang Pagdating!</h2>
            <p className="text-zinc-600 mb-12 text-xl font-bold">Handa na ang iyong dashboard, <span className="text-teal-600 underline capitalize">{draft.name || 'Iskolar'}</span>.</p>
            <button onClick={() => saveProfile(draft)} className="brutal-btn primary w-full py-6 text-2xl group">
              PASUKIN ANG DASHBOARD <Sparkles size={28} className="ml-3" />
            </button>
          </motion.div>
        </div>
      );
    }

    const q = ONBOARDING_QUESTIONS[step] as any;
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-zinc-50">
        <motion.div key={step} initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="w-full max-w-2xl bg-white border-[4px] border-zinc-900 shadow-[12px_12px_0_0_#18181b] p-12 md:p-16">
          <div className="mb-12 border-b-[4px] border-zinc-100 pb-6 flex justify-between items-end">
            <h3 className="text-2xl font-black uppercase tracking-tighter">Hakbang {step + 1} / {ONBOARDING_QUESTIONS.length}</h3>
          </div>
          <div className="space-y-12">
            <label className="block text-3xl md:text-4xl font-black text-zinc-900 leading-[1]">{q.label}</label>
            {q.isText ? (
              <input 
                type="text" autoFocus placeholder="Hal. Juan Dela Cruz"
                value={draft.name || ''}
                onChange={(e) => setDraft({ ...draft, name: e.target.value })}
                onKeyDown={(e) => e.key === 'Enter' && next()}
                className="brutal-input text-3xl py-8 placeholder:text-zinc-200"
              />
            ) : (
              <div className="grid gap-4">
                {q.options?.map((opt: any) => {
                  const isSelected = q.multiple ? draft.preferredCourses.includes(opt) : (draft as any)[q.field] === opt;
                  return (
                    <button key={opt} onClick={() => {
                      if (q.multiple) {
                        const nextArr = draft.preferredCourses.includes(opt) ? draft.preferredCourses.filter(v => v !== opt) : [...draft.preferredCourses, opt];
                        setDraft({ ...draft, preferredCourses: nextArr });
                      } else { setDraft({ ...draft, [q.field]: opt }); next(); }
                    }}
                    className={`p-6 text-left border-[3px] font-black uppercase tracking-widest text-sm transition-all
                      ${isSelected ? 'bg-zinc-900 border-zinc-900 text-white shadow-[6px_6px_0_0_#2dd4bf] -translate-y-1' : 'bg-white border-zinc-200 text-zinc-400 hover:border-zinc-900'}`}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>
            )}
            <div className="flex justify-between pt-12 border-t-[4px] border-zinc-100">
              <button onClick={() => setStep(s => s - 1)} className="text-xs font-black uppercase text-zinc-400 hover:text-zinc-900">Bumalik</button>
              {q.multiple && <button onClick={next} className="brutal-btn primary px-12 py-4 text-sm">Sunod</button>}
            </div>
          </div>
        </motion.div>
      </div>
    );
  };

  const Layout: React.FC<React.PropsWithChildren<{}>> = ({ children }) => (
    <div className="min-h-screen flex flex-col bg-zinc-50 font-sans text-zinc-900">
      <header className="bg-white border-b-2 border-zinc-200 sticky top-0 z-50 px-4 md:px-8 shadow-sm">
        <div className="max-w-5xl mx-auto flex justify-between items-center h-16 md:h-20">
          <div className="cursor-pointer hover:opacity-80 transition-opacity" onClick={() => setView('home')}>
            <IskolarLogo size={24} />
          </div>
          
          <nav className="hidden md:flex items-center gap-2">
            {[
              { id: 'home', label: 'Dashboard' },
              { id: 'universities', label: 'Schools' },
              { id: 'scholarships', label: 'Scholarships' },
              { id: 'process', label: 'Process' },
              { id: 'reviewers', label: 'Reviewers' },
              { id: 'dictionary', label: 'Dictionary' },
              { id: 'about', label: 'About Us' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setView(item.id as ViewState)}
                className={`text-xs font-bold uppercase tracking-wider px-3 py-2 rounded-lg transition-all
                  ${view === item.id 
                    ? 'bg-teal-50 text-teal-700 border border-teal-200' 
                    : 'text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100'}`}
              >
                {item.label}
              </button>
            ))}
            <div className="w-px h-6 bg-zinc-200 mx-2"></div>
            <button onClick={resetProfile} className="p-2 text-zinc-400 hover:text-red-500 transition-colors" title="Reset Profile">
              <RefreshCw size={16} />
            </button>
          </nav>

          <button className="md:hidden p-2 text-zinc-600 hover:bg-zinc-100 rounded-md" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-zinc-200 fixed top-16 left-0 w-full z-40 overflow-hidden shadow-lg"
          >
            <div className="p-4 space-y-1">
              {['home', 'universities', 'scholarships', 'process', 'reviewers', 'dictionary', 'about'].map((item) => (
                <button
                  key={item}
                  onClick={() => { setView(item as ViewState); setIsMobileMenuOpen(false); }}
                  className={`block w-full text-left px-4 py-3 font-bold uppercase text-sm rounded-lg transition-colors
                    ${view === item ? 'bg-teal-50 text-teal-700' : 'text-zinc-600 hover:bg-zinc-50'}`}
                >
                  {item}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-grow w-full px-4 md:px-8 py-8 md:py-12">
        {children}
      </main>

      <footer className="bg-white border-t border-zinc-200 py-12 px-4 md:px-8 mt-auto">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <div className="space-y-2">
            <div className="flex items-center justify-center md:justify-start gap-2 opacity-50 grayscale hover:grayscale-0 transition-all">
              <IskolarLogo size={20} />
            </div>
            <p className="text-zinc-400 text-sm max-w-xs mx-auto md:mx-0">
              Helping Calamba students navigate their future.
            </p>
          </div>
          <div className="text-zinc-400 text-xs font-mono uppercase tracking-widest">
            <p>Life Project 12C • Group 1</p>
            <p>Xavier School Nuvali</p>
          </div>
        </div>
      </footer>
    </div>
  );

  if (view === 'onboarding') return <OnboardingFlow />;

  return (
    <Layout>
      <AnimatePresence mode="wait">
        <motion.div 
          key={view} 
          initial={{ opacity: 0, y: 10 }} 
          animate={{ opacity: 1, y: 0 }} 
          exit={{ opacity: 0, y: -10 }} 
          transition={{ duration: 0.2 }}
          className="max-w-5xl mx-auto w-full"
        >
          {view === 'home' && <HomePage profile={profile} setView={setView} setDetailItem={setDetailItem} />}
          {view === 'universities' && <UniversitiesPage profile={profile} setProfile={setProfile} setDetailItem={setDetailItem} />}
          {view === 'scholarships' && <ScholarshipsPage setDetailItem={setDetailItem} />}
          {view === 'process' && (
            <div className="space-y-16">
               <div className="mb-8">
                 <h2 className="text-4xl md:text-5xl font-black text-zinc-900 uppercase tracking-tighter">Proseso</h2>
                 <p className="text-zinc-500 font-mono text-sm mt-2">// Pangkalahatang Gabay at mga Requirements</p>
               </div>

               {/* 1. General Qualifications */}
               <div className="bg-white border-[3px] border-zinc-900 p-8 shadow-[8px_8px_0_0_#18181b] rounded-xl">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 bg-teal-400 border-2 border-zinc-900 flex items-center justify-center font-black text-2xl shadow-[4px_4px_0_0_#18181b]">1</div>
                    <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight">General Qualifications</h3>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    {GENERAL_QUALIFICATIONS.map((qual, i) => (
                      <div key={i} className="flex gap-4 items-start">
                        <div className="w-4 h-4 bg-zinc-900 mt-1.5 flex-shrink-0"></div>
                        <div className="font-bold text-zinc-700 leading-snug"><GlossaryText text={qual} /></div>
                      </div>
                    ))}
                  </div>
               </div>

               {/* 2. Where to get Requirements */}
               <div className="space-y-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white border-2 border-zinc-900 flex items-center justify-center font-black text-2xl shadow-[4px_4px_0_0_#18181b]">2</div>
                    <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight">Saan kukunin ang requirements?</h3>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    {/* Barangay */}
                    <div className="bg-white p-6 rounded-xl border-2 border-zinc-900 shadow-[6px_6px_0_0_#18181b]">
                      <h4 className="font-black text-xl uppercase mb-4 text-zinc-900 border-b-2 border-zinc-100 pb-2">Barangay Indigency</h4>
                      <ol className="space-y-3 text-sm font-bold text-zinc-500 list-decimal list-inside">
                        {REQUIREMENTS_GUIDE.barangay.steps.map((step, i) => (
                          <li key={i} className="leading-relaxed"><span className="text-zinc-700">{step}</span></li>
                        ))}
                      </ol>
                    </div>

                    {/* PSA (SM) */}
                    <div className="bg-white p-6 rounded-xl border-2 border-zinc-900 shadow-[6px_6px_0_0_#18181b]">
                      <h4 className="font-black text-xl uppercase mb-4 text-zinc-900 border-b-2 border-zinc-100 pb-2">PSA (SM Calamba)</h4>
                      <ol className="space-y-3 text-sm font-bold text-zinc-500 list-decimal list-inside">
                        {REQUIREMENTS_GUIDE.Calamba.steps.map((step, i) => (
                          <li key={i} className="leading-relaxed"><span className="text-zinc-700">{step}</span></li>
                        ))}
                      </ol>
                    </div>

                    {/* PSA (City Hall) */}
                    <div className="bg-white p-6 rounded-xl border-2 border-zinc-900 shadow-[6px_6px_0_0_#18181b]">
                      <h4 className="font-black text-xl uppercase mb-4 text-zinc-900 border-b-2 border-zinc-100 pb-2">PSA (City Hall)</h4>
                      <ol className="space-y-3 text-sm font-bold text-zinc-500 list-decimal list-inside">
                        {REQUIREMENTS_GUIDE.cityHall.steps.map((step, i) => (
                          <li key={i} className="leading-relaxed"><span className="text-zinc-700">{step}</span></li>
                        ))}
                      </ol>
                    </div>

                    {/* School */}
                    <div className="bg-white p-6 rounded-xl border-2 border-zinc-900 shadow-[6px_6px_0_0_#18181b]">
                      <h4 className="font-black text-xl uppercase mb-4 text-zinc-900 border-b-2 border-zinc-100 pb-2">Paaralan (School Records)</h4>
                      <ol className="space-y-3 text-sm font-bold text-zinc-500 list-decimal list-inside">
                        {REQUIREMENTS_GUIDE.school.steps.map((step, i) => (
                          <li key={i} className="leading-relaxed"><span className="text-zinc-700">{step}</span></li>
                        ))}
                      </ol>
                    </div>
                  </div>
               </div>

               {/* 3. Step by Step */}
               <div className="space-y-6">
                 <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-zinc-900 text-white border-2 border-zinc-900 flex items-center justify-center font-black text-2xl shadow-[4px_4px_0_0_#2dd4bf]">3</div>
                    <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight">Step-by-Step Guide</h3>
                 </div>
                 <div className="bg-teal-50 border-2 border-teal-200 rounded-xl p-2 md:p-4">
                   {APPLICATION_STEPS.map((step, i) => (
                     <div key={i} className="flex gap-4 p-4 md:p-5 border-b border-teal-200 last:border-0 items-center hover:bg-white transition-colors rounded-lg">
                        <span className="text-3xl font-black text-teal-200 flex-shrink-0 w-12 text-center">{(i + 1).toString().padStart(2, '0')}</span>
                        <div className="text-base md:text-lg font-bold text-zinc-800 leading-snug">
                          <GlossaryText text={step} />
                        </div>
                     </div>
                   ))}
                 </div>
               </div>
            </div>
          )}
          {view === 'reviewers' && <ReviewersPage />}
          {view === 'dictionary' && <DictionaryPage />}
          {view === 'about' && <AboutPage />}
        </motion.div>
      </AnimatePresence>
      <DetailModal item={detailItem as any} />
    </Layout>
  );
};

export default App;
