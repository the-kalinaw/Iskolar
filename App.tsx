
import React, { useState, useEffect } from 'react';
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
  Gift
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
  ONBOARDING_QUESTIONS
} from './constants';

import HomePage from './HomePage';
import UniversitiesPage from './UniversitiesPage';
import ScholarshipsPage from './ScholarshipsPage';
import ReviewersPage from './ReviewersPage';
import AboutPage from './AboutPage';

// Iskolar Logo
const IskolarLogo = ({ size = 32, className = "" }: { size?: number, className?: string }) => (
  <div className={`font-black tracking-tighter flex items-center gap-2 ${className}`} style={{ fontSize: size }}>
    <div className="bg-teal-400 w-[0.8em] h-[0.8em] border-2 border-zinc-900 shadow-[2px_2px_0_0_rgba(24,24,27,1)]"></div>
    <span className="text-zinc-900">ISKOLAR</span>
  </div>
);

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>('onboarding');
  const [profile, setProfile] = useState<UserProfile>({
    preferredCourses: [],
  });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('iskolar_profile');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setProfile(parsed);
        if (view === 'onboarding') setView('home');
      } catch (e) {
        console.error("Failed to parse profile", e);
      }
    }
  }, []);

  const saveProfile = (p: UserProfile) => {
    setProfile(p);
    localStorage.setItem('iskolar_profile', JSON.stringify(p));
    setView('home');
  };

  const resetProfile = () => {
    localStorage.removeItem('iskolar_profile');
    setProfile({ preferredCourses: [] });
    setView('onboarding');
  };

  // --- Components ---

  const Layout: React.FC<React.PropsWithChildren<{}>> = ({ children }) => (
    <div className="min-h-screen flex flex-col font-inter bg-zinc-50/50">
      {/* Header */}
      <header className="bg-white border-b-2 border-zinc-900 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div 
              className="group cursor-pointer flex items-center gap-3 transition-transform active:scale-95" 
              onClick={() => setView('home')}
            >
              <IskolarLogo size={28} />
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-4">
              {[
                { id: 'home', label: 'HOME' },
                { id: 'universities', label: 'UNIVERSITIES' },
                { id: 'scholarships', label: 'SCHOLARSHIPS' },
                { id: 'process', label: 'PROSESO' },
                { id: 'reviewers', label: 'REVIEWERS' },
                { id: 'about', label: 'ABOUT' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setView(item.id as ViewState)}
                  className={`text-xs font-black tracking-widest px-4 py-2 border-2 transition-all
                    ${view === item.id 
                      ? 'bg-teal-400 border-zinc-900 text-zinc-900 shadow-[2px_2px_0_0_rgba(24,24,27,1)] translate-x-[-2px] translate-y-[-2px]' 
                      : 'bg-transparent border-transparent text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 hover:border-zinc-200'}`}
                >
                  {item.label}
                </button>
              ))}
              <div className="h-8 w-0.5 bg-zinc-200 mx-2"></div>
              <button 
                onClick={resetProfile} 
                className="text-xs text-zinc-400 hover:text-red-500 flex items-center gap-1 px-3 py-2 font-bold border-2 border-transparent hover:border-red-100 hover:bg-red-50 transition-colors"
              >
                <RefreshCw size={14} /> RESET
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button className="md:hidden brutal-btn p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white border-b-2 border-zinc-900 overflow-hidden shadow-2xl z-40 fixed w-full top-20 left-0"
          >
            <div className="p-4 space-y-2 bg-zinc-50">
              {['home', 'universities', 'scholarships', 'process', 'reviewers', 'about'].map((item) => (
                <button
                  key={item}
                  onClick={() => { setView(item as ViewState); setIsMobileMenuOpen(false); }}
                  className={`block w-full text-left px-6 py-4 border-2 font-black uppercase tracking-wider shadow-sm
                    ${view === item 
                      ? 'bg-teal-400 border-zinc-900 text-zinc-900' 
                      : 'bg-white border-zinc-200 text-zinc-500'}`}
                >
                  {item.toUpperCase()}
                </button>
              ))}
              <button onClick={resetProfile} className="w-full text-center py-4 text-xs font-bold text-red-500 border-2 border-dashed border-red-200 mt-4 bg-red-50">
                RESET PROFILE
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content Area */}
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Breadcrumb / Title Bar */}
          <div className="mb-12 pb-6 border-b-2 border-zinc-200">
             <h2 className="text-4xl md:text-5xl font-black text-zinc-900 uppercase tracking-tighter flex flex-col md:flex-row md:items-center gap-4">
               <span className="bg-zinc-900 text-white px-4 py-1 transform -rotate-1 inline-block text-center w-fit">
                 {view === 'home' && 'DASHBOARD'}
                 {view === 'universities' && 'UNIVERSITIES'}
                 {view === 'scholarships' && 'SCHOLARSHIPS'}
                 {view === 'process' && 'PROSESO'}
                 {view === 'reviewers' && 'REVIEWERS'}
                 {view === 'about' && 'ABOUT US'}
               </span>
             </h2>
             <p className="text-lg text-zinc-500 font-medium mt-4 font-mono">
               {view === 'home' && `// Custom Roadmap for Aspiring Scholars`}
               {view === 'universities' && '// Listahan ng Kinikilalang Institusyon'}
               {view === 'scholarships' && '// Mga Programang Tulong Pinansyal'}
               {view === 'process' && '// Pangkalahatang Gabay at mga Requirements'}
               {view === 'reviewers' && '// Mga Materyales sa Pagrereview'}
               {view === 'about' && '// Ang Grupo Sa Likod ng Iskolar'}
             </p>
          </div>

          <div className="min-h-[60vh]">
            {children}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t-2 border-zinc-900 mt-auto">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col gap-2">
            <IskolarLogo size={32} />
            <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Scholarship Website Manual and Guide</span>
          </div>
          <div className="text-center md:text-right">
            <p className="text-sm font-black text-zinc-900">CARANAY • ENRIQUEZ • GONZALES • MANRIQUE</p>
            <p className="text-xs text-zinc-500 mt-1 font-mono">Life Project 12C • Student Initiative 2026</p>
          </div>
        </div>
      </footer>
    </div>
  );

  const [detailItem, setDetailItem] = useState<{ kind: 'university'|'scholarship', data: any } | null>(null);

  const DetailModal: React.FC<{item: { kind: 'university'|'scholarship', data: any }}>= ({ item }) => {
    if (!item) return null as any;
    const close = () => setDetailItem(null);
    const { kind, data } = item;
    
    // Normalize lists based on kind
    const requirements = data.requirements || [];
    const benefits = data.benefits || [];
    const steps = data.steps || APPLICATION_STEPS.slice(0, 5); // Default to generic for unis if no specific steps
    const tags = data.tags || [];
    const eligibility = data.eligibility || [];

    return (
      <AnimatePresence>
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            className="absolute inset-0 bg-zinc-900/80 backdrop-blur-sm" 
            onClick={close}
          />
          <motion.div 
            initial={{ scale: 0.9, opacity: 0, y: 20 }} 
            animate={{ scale: 1, opacity: 1, y: 0 }} 
            exit={{ scale: 0.95, opacity: 0, y: 20 }} 
            className="bg-white border-2 border-zinc-900 w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-[16px_16px_0_0_#2dd4bf] relative z-10 flex flex-col"
          >
            {/* Modal Header */}
            <div className="bg-zinc-100 border-b-2 border-zinc-900 p-4 flex justify-between items-center sticky top-0 z-20">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400 border border-zinc-900"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400 border border-zinc-900"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400 border border-zinc-900"></div>
                </div>
                <div className="h-6 w-[2px] bg-zinc-300 mx-1"></div>
                <span className="font-mono text-xs font-bold text-zinc-500 uppercase tracking-wider">{kind} details</span>
              </div>
              <button onClick={close} className="hover:bg-red-500 hover:text-white border-2 border-transparent hover:border-zinc-900 transition-colors p-1"><X size={20} /></button>
            </div>

            <div className="p-8">
              <div className="mb-8">
                <h3 className="font-black text-4xl text-zinc-900 uppercase leading-none mb-2">{data.name || data.title}</h3>
                {data.address && <p className="text-sm font-bold text-zinc-500 flex items-center gap-1 mb-3"><CheckCircle2 size={14} className="text-teal-500" /> {data.address}</p>}
                
                <div className="flex flex-wrap gap-2 mt-4">
                   {data.categories && data.categories.map((cat:string)=>(
                     <span key={cat} className="text-[10px] font-black px-3 py-1 bg-zinc-900 text-white uppercase tracking-widest">{cat}</span>
                   ))}
                   {data.type && (
                     <span className="text-[10px] font-bold px-3 py-1 border-2 border-zinc-900 bg-yellow-200 uppercase tracking-widest">{data.type}</span>
                   )}
                   {data.offersScholarship && (
                      <span className="text-[10px] font-black px-3 py-1 bg-teal-400 text-zinc-900 border-2 border-zinc-900 uppercase tracking-widest flex items-center gap-1">
                        <Sparkles size={12} /> Offers Internal Scholarship
                      </span>
                   )}
                   {data.applicationFee && (
                      <span className="text-[10px] font-black px-3 py-1 bg-yellow-300 text-zinc-900 border-2 border-zinc-900 uppercase tracking-widest flex items-center gap-1">
                        <CreditCard size={12} /> App Fee: {data.applicationFee}
                      </span>
                   )}
                </div>
              </div>

              {/* Dynamic Content based on Kind */}
              {kind === 'scholarship' ? (
                <div className="space-y-8">
                  {/* 1. Eligibility (Tags or Detailed List) */}
                  <div className="brutal-card p-6 bg-zinc-50">
                    <h4 className="font-black text-zinc-900 uppercase mb-4 flex items-center gap-2">
                       <Target size={20} className="text-teal-600" /> Eligibility Criteria
                    </h4>
                    {eligibility.length > 0 ? (
                      <ul className="space-y-2">
                         {eligibility.map((e: string, i: number) => (
                           <li key={i} className="flex gap-3 text-sm font-medium text-zinc-700 items-start">
                              <div className="w-1.5 h-1.5 bg-zinc-900 mt-1.5 flex-shrink-0 rounded-full"></div>
                              {e}
                           </li>
                         ))}
                      </ul>
                    ) : (
                      <div className="flex flex-wrap gap-2">
                         {tags.map((t: string) => (
                           <span key={t} className="text-xs font-bold px-3 py-2 bg-white border-2 border-zinc-900 uppercase tracking-wide">
                              {t}
                           </span>
                         ))}
                      </div>
                    )}
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    {/* 2. Benefits */}
                    <div>
                      <h4 className="font-black text-zinc-900 uppercase mb-4 flex items-center gap-2">
                        <Gift size={20} className="text-yellow-500" /> Benefits
                      </h4>
                      {benefits.length === 0 ? <p className="text-zinc-500 italic text-sm">See official site for details.</p> : (
                        <ul className="space-y-3">
                          {benefits.map((s:string, i:number)=>(
                            <li key={i} className="flex gap-3 text-sm font-medium text-zinc-700 items-start">
                              <CheckCircle2 size={16} className="text-yellow-500 mt-0.5 flex-shrink-0" />
                              {s}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>

                    {/* 3. Requirements */}
                    <div>
                      <h4 className="font-black text-zinc-900 uppercase mb-4 flex items-center gap-2">
                        <span className="bg-zinc-900 text-white w-5 h-5 flex items-center justify-center text-xs">!</span> Requirements
                      </h4>
                      {requirements.length === 0 ? <p className="text-zinc-500 italic text-sm">No specific documents listed.</p> : (
                        <ul className="space-y-3">
                          {requirements.map((s:string, i:number)=>(
                            <li key={i} className="flex gap-3 text-sm font-medium text-zinc-700 items-start">
                              <div className="w-1.5 h-1.5 bg-zinc-900 mt-1.5 flex-shrink-0 rounded-full"></div>
                              {s}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>

                  {/* 4. Steps */}
                  <div className="pt-6 border-t-2 border-zinc-100">
                    <h4 className="font-black text-zinc-900 uppercase mb-4 flex items-center gap-2">
                      <span className="bg-teal-400 text-zinc-900 border border-zinc-900 w-5 h-5 flex items-center justify-center text-xs shadow-[2px_2px_0_0_#18181b]">→</span> Application Process
                    </h4>
                    <ol className="list-decimal list-inside text-sm font-medium text-zinc-600 space-y-2 mb-6">
                      {steps.map((s: string, i:number)=>(<li key={i} className="pl-1 marker:font-black marker:text-zinc-900">{s}</li>))}
                    </ol>
                    {data.link && (
                      <a 
                        href={data.link} 
                        target="_blank" 
                        className="brutal-btn w-full py-4 text-sm flex items-center gap-2 hover:bg-teal-400"
                      >
                        Start Application on Official Website <ArrowRight size={16} />
                      </a>
                    )}
                  </div>
                </div>
              ) : (
                /* University Layout */
                <div className="grid md:grid-cols-2 gap-8 pt-8 border-t-2 border-zinc-100">
                  <div>
                    <h4 className="font-black text-zinc-900 uppercase mb-4 flex items-center gap-2">
                      <span className="bg-zinc-900 text-white w-6 h-6 flex items-center justify-center text-xs">1</span> Requirements
                    </h4>
                    {requirements.length === 0 ? <p className="text-zinc-500 italic">No specific requirements listed.</p> : (
                      <ul className="space-y-3">
                        {requirements.map((s:string, i:number)=>(
                          <li key={i} className="flex gap-3 text-sm font-medium text-zinc-700 items-start">
                            <div className="w-1.5 h-1.5 bg-teal-500 mt-1.5 flex-shrink-0"></div>
                            {s}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  
                  <div className="bg-zinc-50 p-6 border-2 border-zinc-200">
                    <h4 className="font-black text-zinc-900 uppercase mb-4 flex items-center gap-2">
                      <span className="bg-zinc-900 text-white w-6 h-6 flex items-center justify-center text-xs">2</span> Next Steps
                    </h4>
                    <ol className="list-decimal list-inside text-sm font-medium text-zinc-600 space-y-2 mb-6">
                      {steps.map((s: string, i:number)=>(<li key={i}>{s}</li>))}
                    </ol>
                    {data.link && (
                      <a 
                        href={data.link} 
                        target="_blank" 
                        className="brutal-btn w-full py-3 text-sm flex items-center gap-2 hover:bg-teal-400"
                      >
                        Visit Official Website <ArrowRight size={16} />
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </AnimatePresence>
    );
  };

  const OnboardingFlow: React.FC = () => {
    const [step, setStep] = useState(-1); // Start with video step
    const [draft, setDraft] = useState<UserProfile>({ preferredCourses: [] });

    const questions = ONBOARDING_QUESTIONS;

    const applyAnswer = (field: string, value: any, multiple: boolean = false) => {
      if (multiple) {
        const current = (draft as any)[field] || [];
        const next = current.includes(value)
          ? current.filter((v: any) => v !== value)
          : [...current, value];
        setDraft({ ...draft, [field]: next });
      } else {
        setDraft({ ...draft, [field]: value });
      }
    };

    const next = () => {
      if (step === -1) {
        // Moving from video to first question
        setStep(0);
      } else if (step === 0 && (!draft.preferredCourses || draft.preferredCourses.length === 0)) {
        applyAnswer('preferredCourses', ['General']); // Default to General
        setStep(s => Math.min(s + 1, questions.length));
      } else {
        setStep(s => Math.min(s + 1, questions.length));
      }
    };
    
    const prev = () => {
      if (step === 0) {
        setStep(-1); // Go back to video
      } else {
        setStep(s => Math.max(s - 1, 0));
      }
    };

    // Video step
    if (step === -1) {
      return (
        <div className="min-h-screen flex items-center justify-center p-6 bg-zinc-50 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] relative overflow-hidden">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-full max-w-3xl bg-white border-2 border-zinc-900 shadow-[12px_12px_0_0_#18181b] relative z-10 p-8 md:p-12"
          >
            <div className="flex justify-between items-start mb-8 border-b-2 border-zinc-100 pb-4">
              <div>
                <h1 className="text-3xl font-black text-zinc-900 tracking-tighter">Welcome to Iskolar</h1>
                <p className="text-xs text-zinc-400 font-bold uppercase tracking-widest mt-1">Getting Started</p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-2xl font-black text-zinc-900 mb-6 uppercase">Watch Our Introduction Video</h2>
                <iframe 
                  src="https://drive.google.com/file/d/125dXcg5cJEDOWMumb5iBHvKZ-0yjUGlP/preview"
                  width="100%" 
                  height="400" 
                  allow="autoplay"
                  className="border-2 border-zinc-900 shadow-[4px_4px_0_0_rgba(0,0,0,0.2)]"
                ></iframe>
                <p className="text-zinc-600 font-medium mt-6 text-center">Learn about Iskolar and how we can help you find the right scholarship and university path.</p>
              </div>

              <div className="flex gap-4 justify-center pt-6 border-t-2 border-zinc-100">
                <button 
                  onClick={() => setStep(0)} 
                  className="brutal-btn px-8 py-3 text-sm"
                >
                  Skip Video
                </button>
                <button onClick={next} className="brutal-btn primary px-8 py-3 text-sm">
                  Finished Watching <ArrowRight size={16} className="ml-2" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      );
    }

    const finish = () => {
      const normalized: UserProfile = {
        ...draft,
        examReady: (draft as any).examReady === 'Yes',
      } as UserProfile;
      saveProfile(normalized);
    };

    if (step >= questions.length) {
      return (
        <div className="min-h-screen flex items-center justify-center p-6 bg-zinc-50 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px]">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-full max-w-xl bg-white border-2 border-zinc-900 shadow-[8px_8px_0_0_#18181b] p-8 md:p-12 text-center"
          >
            <div className="w-16 h-16 bg-teal-400 border-2 border-zinc-900 mx-auto mb-6 flex items-center justify-center shadow-[4px_4px_0_0_#18181b]">
              <CheckCircle2 size={32} className="text-zinc-900" />
            </div>
            <h2 className="text-4xl font-black mb-4 uppercase tracking-tight">Handa na tayo!</h2>
            <p className="text-zinc-600 mb-8 text-lg font-medium">Na-customise na namin ang portal ayon sa iyong track.</p>
            <div className="flex gap-4 justify-center">
              <button onClick={prev} className="brutal-btn px-6 py-3 text-sm">Back</button>
              <button onClick={finish} className="brutal-btn primary px-8 py-3 text-lg">Enter Dashboard</button>
            </div>
          </motion.div>
        </div>
      );
    }

    const q = questions[step];

    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-zinc-50 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] relative overflow-hidden">
        <motion.div 
          key={step}
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -20, opacity: 0 }}
          className="w-full max-w-3xl bg-white border-2 border-zinc-900 shadow-[12px_12px_0_0_#18181b] relative z-10 p-8 md:p-12"
        >
          <div className="flex justify-between items-start mb-8 border-b-2 border-zinc-100 pb-4">
            <div>
              <h1 className="text-3xl font-black text-zinc-900 tracking-tighter">STUDENT SETUP</h1>
              <p className="text-xs text-zinc-400 font-bold uppercase tracking-widest mt-1">Hakbang {step + 1} ng {questions.length}</p>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <label className="block text-xl font-black text-zinc-900 mb-6 leading-tight">{q.label}</label>
              <div className={`grid gap-3 ${q.id === 'preferredCourses' ? 'grid-cols-2 md:grid-cols-3' : 'grid-cols-1 md:grid-cols-2'}`}>
                {q.options.map((opt: any) => {
                  const currentValues = (draft as any)[q.field];
                  const isSelected = q.multiple 
                    ? currentValues?.includes(opt)
                    : currentValues === opt;
                    
                  return (
                    <button
                      key={opt}
                      onClick={() => applyAnswer(q.field, opt, q.multiple)}
                      className={`p-3 text-left border-2 transition-all relative overflow-hidden
                        ${isSelected 
                          ? 'bg-zinc-900 border-zinc-900 text-white shadow-[3px_3px_0_0_#2dd4bf]' 
                          : 'bg-white border-zinc-200 text-zinc-600 hover:border-zinc-900'}`}
                    >
                      <div className="relative z-10 flex items-center justify-between">
                        <span className="font-bold text-xs uppercase tracking-wide">{opt}</span>
                        {isSelected && <CheckCircle2 size={14} className="text-teal-400" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="flex justify-between pt-6 border-t-2 border-zinc-100">
              <button 
                onClick={prev} 
                disabled={step === 0} 
                className="brutal-btn px-6 py-3 text-sm disabled:opacity-0"
              >
                Back
              </button>
              <button onClick={next} className="brutal-btn primary px-8 py-3 text-sm">
                Ipagpatuloy <ArrowRight size={16} className="ml-2" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    );
  };

  const Process = () => (
    <div className="max-w-5xl mx-auto space-y-16">
      {/* 1. General Qualifications */}
      <section>
        <div className="brutal-card p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10"><CheckCircle2 size={120} /></div>
          <h3 className="font-black text-3xl text-zinc-900 uppercase mb-8 flex items-center gap-4 relative z-10">
             <div className="bg-teal-400 w-12 h-12 flex items-center justify-center border-2 border-zinc-900 text-zinc-900 shadow-[4px_4px_0_0_#18181b]">
               <span className="font-bold text-2xl">1</span>
             </div>
             General Qualifications
          </h3>
          <div className="grid sm:grid-cols-2 gap-6 relative z-10">
              {GENERAL_QUALIFICATIONS.map((req: string, i: number) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-zinc-900 flex-shrink-0 mt-1"></div>
                  <p className="font-bold text-zinc-800 text-lg leading-snug">{req}</p>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* 2. Requirements Guide */}
      <section>
         <h3 className="font-black text-3xl text-zinc-900 uppercase mb-8 flex items-center gap-4">
             <div className="bg-white w-12 h-12 flex items-center justify-center border-2 border-zinc-900 text-zinc-900 shadow-[4px_4px_0_0_#18181b]">
               <span className="font-bold text-2xl">2</span>
             </div>
             Saan kukunin ang requirements?
         </h3>
        <div className="grid md:grid-cols-3 gap-6">
            {Object.values(REQUIREMENTS_GUIDE).map((guide, i) => (
                <div key={i} className="brutal-card flex flex-col h-full">
                    <div className="bg-zinc-900 p-4 border-b-2 border-zinc-900">
                      <h4 className="font-black uppercase text-white tracking-wider text-center">{guide.title}</h4>
                    </div>
                    <div className="p-6 flex-grow bg-white">
                        <ul className="space-y-4">
                            {guide.steps.map((step, idx) => (
                                <li key={idx} className="text-sm text-zinc-700 font-bold flex gap-3">
                                    <span className="text-teal-500 font-black">{idx+1}.</span>
                                    {step}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
      </section>

      {/* 3. Application Process */}
      <section>
        <div className="bg-teal-100 border-2 border-zinc-900 p-8 md:p-12 shadow-[8px_8px_0_0_#18181b]">
          <h3 className="font-black text-3xl text-zinc-900 uppercase mb-8 flex items-center gap-4">
             <div className="bg-zinc-900 w-12 h-12 flex items-center justify-center text-white border-2 border-zinc-900 shadow-[4px_4px_0_0_rgba(255,255,255,0.5)]">
               <span className="font-bold text-2xl">3</span>
             </div>
             Step-by-Step Guide
          </h3>
          <div className="space-y-2">
              {APPLICATION_STEPS.map((step, i) => (
                  <div key={i} className="flex items-center gap-6 bg-white border-2 border-zinc-900 p-4 transition-transform hover:translate-x-2">
                      <div className="font-black text-4xl text-zinc-200 w-16 text-right font-mono">{i+1 < 10 ? `0${i+1}` : i+1}</div>
                      <p className="text-lg font-bold text-zinc-900">{step}</p>
                  </div>
              ))}
          </div>
        </div>
      </section>
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
        >
          {view === 'home' && <HomePage profile={profile} setView={setView} setDetailItem={setDetailItem} />}
          {view === 'universities' && <UniversitiesPage profile={profile} setProfile={setProfile} setDetailItem={setDetailItem} />}
          {view === 'scholarships' && <ScholarshipsPage setDetailItem={setDetailItem} />}
          {view === 'process' && <Process />}
          {view === 'reviewers' && <ReviewersPage />}
          {view === 'about' && <AboutPage />}
        </motion.div>
      </AnimatePresence>
      <DetailModal item={detailItem as any} />
    </Layout>
  );
};

export default App;
