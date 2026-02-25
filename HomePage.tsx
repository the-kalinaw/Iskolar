
import React, { useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  MapPin, 
  Target, 
  Sparkles, 
  BookOpen, 
  GraduationCap, 
  ChevronRight, 
  CheckSquare, 
  HelpCircle,
  FileText,
  Search
} from 'lucide-react';
import { UserProfile, ViewState } from './types';
import { ACTION_TEMPLATES, UNIVERSITIES, SCHOLARSHIPS } from './constants';
import { GlossaryText } from './App';

export default function HomePage({ profile, setView, setDetailItem }: { profile: UserProfile, setView: (v: ViewState) => void, setDetailItem: (d: any) => void }) {
  const selectedTracks = profile.preferredCourses || [];
  const userName = profile.name ? profile.name.split(' ')[0] : 'Iskolar'; // Get first name only for friendliness
  
  const tailoredUnis = useMemo(() => UNIVERSITIES.filter(u => 
    selectedTracks.length === 0 || u.categories.some(cat => selectedTracks.includes(cat))
  ).slice(0, 4), [selectedTracks]);

  // Logic to determine the "Phase" of the student
  const actionPlan = useMemo(() => {
    const plan: string[] = [...ACTION_TEMPLATES.default];
    if (profile.gradesIndicator === '95-100' || profile.gradesIndicator === '90-94') plan.unshift(...ACTION_TEMPLATES.high_achiever);
    if (profile.examReady === false) plan.unshift(...ACTION_TEMPLATES.exam_not_ready);
    if (profile.gradesIndicator === 'Below 80') plan.unshift(...ACTION_TEMPLATES.low_grade);
    return Array.from(new Set(plan)).slice(0, 5); // Limit to 5 items to avoid overwhelm
  }, [profile]);

  return (
    <div className="max-w-5xl mx-auto space-y-16 pb-24">
      
      {/* 1. Welcoming Hero: Softened & Reassuring */}
      <section className="px-6 md:px-0 pt-8 md:pt-12 text-center md:text-left">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <div className="inline-block bg-yellow-100 border-2 border-zinc-900 px-4 py-1 rounded-full shadow-[4px_4px_0_0_rgba(24,24,27,0.1)]">
            <span className="text-xs font-bold uppercase tracking-widest text-zinc-800">
              Grade 11/12 Student Portal
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-zinc-900 leading-[0.9]">
            Kamusta, <span className="text-teal-500">{userName}</span>? <br />
            <span className="text-zinc-400">Huwag mag-panic.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-zinc-600 max-w-2xl leading-relaxed font-medium">
            Hindi mo alam kung saan magsisimula? Okay lang 'yan. 
            Nandito kami para gabayan ka sa paghahanap ng college at scholarship.
            Isa-isa lang.
          </p>
        </motion.div>
      </section>

      {/* 2. The "Three Pillars" - Clear Categorization of Actions */}
      <section className="px-4 md:px-0">
        <div className="flex items-center gap-3 mb-8">
          <div className="h-px bg-zinc-300 flex-1"></div>
          <span className="text-xs font-black uppercase tracking-widest text-zinc-400">Start Here</span>
          <div className="h-px bg-zinc-300 flex-1"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Pillar 1: LEARN */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white border-[3px] border-zinc-900 p-6 shadow-[6px_6px_0_0_#a1a1aa] rounded-xl flex flex-col justify-between h-full"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full border-2 border-zinc-900 flex items-center justify-center">
                <BookOpen className="text-blue-600" size={24} />
              </div>
              <div>
                <h3 className="font-black text-xl uppercase tracking-tight">1. Alamin</h3>
                <p className="text-sm text-zinc-500 font-medium mt-2 leading-relaxed">
                  Bago ang lahat, intindihin muna natin ang mga terms at proseso. Ano ang GWA? Ano ang Form 137?
                </p>
              </div>
            </div>
            <div className="mt-6 space-y-2">
              <button onClick={() => setView('dictionary')} className="w-full text-left px-4 py-3 bg-zinc-50 hover:bg-blue-50 border-2 border-zinc-200 hover:border-blue-500 rounded-lg text-xs font-bold uppercase transition-colors flex items-center justify-between group">
                Dictionary <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
              <button onClick={() => setView('process')} className="w-full text-left px-4 py-3 bg-zinc-50 hover:bg-blue-50 border-2 border-zinc-200 hover:border-blue-500 rounded-lg text-xs font-bold uppercase transition-colors flex items-center justify-between group">
                Step-by-Step Process <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            </div>
          </motion.div>

          {/* Pillar 2: PREPARE */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white border-[3px] border-zinc-900 p-6 shadow-[6px_6px_0_0_#a1a1aa] rounded-xl flex flex-col justify-between h-full"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 bg-yellow-100 rounded-full border-2 border-zinc-900 flex items-center justify-center">
                <FileText className="text-yellow-600" size={24} />
              </div>
              <div>
                <h3 className="font-black text-xl uppercase tracking-tight">2. Maghanda</h3>
                <p className="text-sm text-zinc-500 font-medium mt-2 leading-relaxed">
                  Ipunin ang mga requirements at mag-review para sa entrance exams.
                </p>
              </div>
            </div>
            <div className="mt-6 space-y-2">
              <button onClick={() => setView('reviewers')} className="w-full text-left px-4 py-3 bg-zinc-50 hover:bg-yellow-50 border-2 border-zinc-200 hover:border-yellow-500 rounded-lg text-xs font-bold uppercase transition-colors flex items-center justify-between group">
                Free Reviewers <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
              <div className="px-4 py-3 bg-zinc-50 border-2 border-zinc-200 rounded-lg text-xs font-bold text-zinc-400 uppercase cursor-not-allowed">
                Document Checklist (Soon)
              </div>
            </div>
          </motion.div>

          {/* Pillar 3: APPLY */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white border-[3px] border-zinc-900 p-6 shadow-[6px_6px_0_0_#a1a1aa] rounded-xl flex flex-col justify-between h-full"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 bg-teal-100 rounded-full border-2 border-zinc-900 flex items-center justify-center">
                <Search className="text-teal-600" size={24} />
              </div>
              <div>
                <h3 className="font-black text-xl uppercase tracking-tight">3. Maghanap</h3>
                <p className="text-sm text-zinc-500 font-medium mt-2 leading-relaxed">
                  Tignan ang mga schools at scholarships na bagay sa iyong track at grades.
                </p>
              </div>
            </div>
            <div className="mt-6 space-y-2">
              <button onClick={() => setView('universities')} className="w-full text-left px-4 py-3 bg-zinc-50 hover:bg-teal-50 border-2 border-zinc-200 hover:border-teal-500 rounded-lg text-xs font-bold uppercase transition-colors flex items-center justify-between group">
                Browse Schools <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
              <button onClick={() => setView('scholarships')} className="w-full text-left px-4 py-3 bg-zinc-50 hover:bg-teal-50 border-2 border-zinc-200 hover:border-teal-500 rounded-lg text-xs font-bold uppercase transition-colors flex items-center justify-between group">
                Find Scholarships <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Personalized Roadmap - Simplified */}
      <section className="px-4 md:px-0">
        <div className="bg-zinc-900 text-white rounded-2xl p-6 md:p-10 shadow-[8px_8px_0_0_#2dd4bf] border-2 border-zinc-900 relative overflow-hidden">
          {/* Decorative background element */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-zinc-800 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50"></div>

          <div className="relative z-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
              <div>
                <h4 className="font-black text-2xl md:text-3xl uppercase tracking-tight text-teal-400">
                  Your Next Steps
                </h4>
                <p className="text-zinc-400 text-sm md:text-base mt-1">
                  Base sa profile mo ({profile.gradesIndicator} GWA, {profile.location}), heto ang pwede mong gawin:
                </p>
              </div>
              <div className="bg-zinc-800 px-4 py-2 rounded-lg border border-zinc-700">
                <span className="text-xs font-mono text-zinc-300">
                  {actionPlan.length} Pending Actions
                </span>
              </div>
            </div>

            <div className="space-y-3">
              {actionPlan.map((task, i) => (
                <motion.div 
                  initial={{ opacity: 0, x: -10 }} 
                  animate={{ opacity: 1, x: 0 }} 
                  transition={{ delay: i * 0.1 }}
                  key={i} 
                  className="flex gap-4 p-4 bg-zinc-800/50 border border-zinc-700 rounded-xl hover:bg-zinc-800 transition-colors items-start"
                >
                  <div className="w-6 h-6 rounded-full bg-teal-500/20 text-teal-400 flex items-center justify-center flex-shrink-0 mt-0.5 border border-teal-500/50">
                    <span className="text-xs font-bold">{i + 1}</span>
                  </div>
                  <div className="text-sm md:text-base font-medium text-zinc-200 leading-snug">
                    <GlossaryText text={task} />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Quick Recommendations */}
      <section className="px-4 md:px-0 space-y-6">
        <div className="flex items-center justify-between">
          <h4 className="font-black text-2xl uppercase tracking-tight text-zinc-800">
            Recommended Schools
          </h4>
          <button onClick={() => setView('universities')} className="text-xs font-bold uppercase tracking-widest text-teal-600 hover:text-teal-700 hover:underline">
            View All
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {tailoredUnis.map((u, i) => (
            <div 
              key={i} 
              onClick={() => setDetailItem({ kind: 'university', data: u })}
              className="group bg-white border-2 border-zinc-200 hover:border-teal-500 p-5 rounded-xl cursor-pointer transition-all hover:shadow-md flex flex-col justify-between h-full"
            >
              <div>
                <div className="flex flex-wrap gap-1 mb-3">
                  {u.categories.slice(0, 1).map(c => (
                    <span key={c} className="text-[9px] font-bold uppercase tracking-wider px-2 py-1 bg-zinc-100 text-zinc-600 rounded-md">
                      {c}
                    </span>
                  ))}
                </div>
                <h5 className="font-bold text-lg leading-tight text-zinc-800 group-hover:text-teal-600 transition-colors">
                  {u.name}
                </h5>
              </div>
              <div className="mt-4 pt-4 border-t border-zinc-100 flex items-center justify-between text-zinc-400 group-hover:text-teal-500">
                <span className="text-[10px] font-bold uppercase tracking-widest">View Details</span>
                <ArrowRight size={14} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. FAQ Section */}
      <section className="px-4 md:px-0 space-y-8">
        <div className="flex items-center gap-3 mb-8">
          <div className="h-px bg-zinc-300 flex-1"></div>
          <span className="text-xs font-black uppercase tracking-widest text-zinc-400">Frequently Asked Questions</span>
          <div className="h-px bg-zinc-300 flex-1"></div>
        </div>

        <div className="grid gap-4 max-w-3xl mx-auto">
          {FAQS.map((faq, i) => (
            <FAQItem key={i} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </section>

    </div>
  );
}

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="bg-white border-2 border-zinc-200 rounded-xl overflow-hidden transition-all hover:border-zinc-900">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 text-left flex justify-between items-center gap-4 bg-white hover:bg-zinc-50 transition-colors"
      >
        <span className="font-bold text-zinc-800 text-lg leading-tight">{question}</span>
        <div className={`flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <ChevronRight size={20} className="text-zinc-400" />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="px-6 pb-6 pt-0 text-zinc-600 leading-relaxed border-t border-zinc-100 mt-2">
              <div className="pt-4">
                {answer}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQS = [
  {
    question: "Pwede po bang mag-apply sa scholarship kapag nakapag-apply na sa iba?",
    answer: "Maaari kang mag-apply sa maraming scholarship (halimbawa: CHED at DOST) habang naghihintay ng resulta dahil nasa application process pa lamang ito. Halimbawa, maaari kang mag-apply sa DOST at CHED; ngunit kung ikaw ay makapasa sa parehong scholarship, isa lamang ang maaari mong tanggapin. Karaniwang hindi pinapayagan ang “double scholarship” o ang pagtanggap ng dalawang tulong-pinansyal nang sabay. Kailangan mong pumili ng isa kung pareho kang matatanggap."
  },
  {
    question: "Paano maging exempted sa application fee sa college?",
    answer: "Maaaring makakuha ng exemption sa college application fee sa pamamagitan ng pagpapakita ng patunay ng pinansyal na pangangailangan (tulad ng DSWD certification, ITR, o Certificate of Indigency), pagiging kabilang sa top 10% ng graduating class, o pag-apply sa mga unibersidad na nag-aalok ng libreng entrance exam para sa mga kwalipikadong mag-aaral."
  },
  {
    question: "Paano malalaman kung nakapasa?",
    answer: "Malalaman ang resulta ng aplikasyon sa mga unibersidad at scholarship sa pamamagitan ng opisyal na email, website ng unibersidad o ahensya, o application portal. Karaniwan silang nagpapadala ng “Notice of Admission” o “Notice of Award” sa mga nakapasa, kaya siguraduhing regular na tingnan ang inbox at spam folder ng ginamit na email address. Maaari ring makipag-ugnayan sa kanilang website, Facebook page, opisyal na email, o tawagan ang unibersidad o ahensya upang makumpirma ang resulta."
  },
  {
    question: "Kailangan pa po ba magpa-medical kapag nag-apply? Libre po ba ito o may bayad?",
    answer: "May ilang paaralan na nagre-require ng medical examination. Ang iba ay nag-aalok ng libreng medical, ngunit kadalasan ay may bayad ito at ang aplikante ang sasagot ng gastos. Karaniwang nag-aanunsyo ang mga paaralan sa kanilang opisyal na Facebook page o website kung may libreng medical examination."
  },
  {
    question: "Pwede pa rin po ba mag-apply sa mga scholarship at unibersidad sa hinaharap kapag hindi ako nakapag-apply noong Grade 12 (GAP Year)?",
    answer: "Oo, maaari ka pa ring mag-apply hangga’t hindi ka pa nakakapag-enroll o nakakatanggap ng scholarship mula sa naturang unibersidad o ahensya. Depende ito sa patakaran ng bawat institusyon."
  },
  {
    question: "Mayroon po bang dagdag na requirements o steps kapag nag-GAP Year?",
    answer: "Karaniwang pareho lamang ang mga requirements para sa mga nag-GAP Year. Gayunpaman, maaaring may karagdagang dokumento o paliwanag na hinihingi ang ilang unibersidad. Kadalasan, kinakailangan din na hindi ka pa nakapag-enroll o tumanggap ng scholarship sa parehong institusyon noon."
  },
  {
    question: "Paano po gumagana ang “recon” kapag hindi nakapasa?",
    answer: "Karaniwang nag-aanunsyo ang mga unibersidad kung paano isinasagawa ang reconsideration process. Madalas, kinakailangan ang pagsulat ng email sa unibersidad na naglalaman ng iyong kahilingan, dahilan, at ilang kinakailangang dokumento, kasama ang kursong nais mong kunin. Sa ilang pagkakataon, maaari rin itong gawin onsite para sa mas mabilis na proseso. Karaniwang binibigyang-prayoridad ang mga aplikanteng lokal o nakabase pa rin sa kanilang entrance exam score."
  }
];
