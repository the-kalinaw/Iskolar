
/// <reference types="vite/client" />
import React, { useState, useEffect } from 'react';
import { Mail, Send, CheckCircle2, User, Code, Heart, RefreshCw, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const TEAM_MEMBERS = [
  { name: "Syacinth Ehra C. Caranay", email: "sccaranay25@xsn.edu.ph", role: "Group Member" },
  { name: "Anne Raven O. Enriquez", email: "aroenriquez25@xsn.edu.ph", role: "Group Member" },
  { name: "Kristine Grace S. Manrique", email: "kgsmanrique25@xsn.edu.ph", role: "Group Member" },
  { name: "Michaela G. Gonzales", email: "mggonzales25@xsn.edu.ph", role: "Group Member" }
];

const DEVELOPER = { name: "Andrei Jefferson G. Arre", email: "andreijeffersonarre@gmail.com", role: "Website Co-Developer" };

export default function AboutPage() {
  const [formState, setFormState] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({ message: '', email: '' });
  const [errorMessage, setErrorMessage] = useState('');

  // Initialize EmailJS on component mount
  useEffect(() => {
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    if (publicKey) {
      emailjs.init(publicKey);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.message.trim()) return;

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // Check if EmailJS is configured
    if (!serviceId || !templateId || !publicKey) {
      setFormState('error');
      setErrorMessage('Email service is not configured. Please contact the administrator.');
      return;
    }

    setFormState('sending');
    setErrorMessage('');

    try {
      await emailjs.send(serviceId, templateId, {
        to_email: recipientEmails,
        user_email: formData.email || 'no-reply@iskolar.com',
        message: formData.message,
        subject: 'New Iskolar Contact Form Submission'
      });

      setFormState('success');
      setFormData({ message: '', email: '' });
    } catch (error) {
      setFormState('error');
      setErrorMessage('Failed to send message. Please try again or email us directly.');
      console.error('EmailJS error:', error);
    }
  };

  const recipientEmails = TEAM_MEMBERS.map(m => m.email).join(',');

  return (
    <div className="space-y-12">
      {/* Intro Section */}
      <div className="bg-zinc-900 text-white p-8 md:p-12 border-2 border-zinc-900 shadow-[8px_8px_0_0_#2dd4bf] relative overflow-hidden">
        <div className="relative z-10">
          <h3 className="text-4xl md:text-5xl font-black uppercase mb-4 tracking-tighter">Ang Iskolar Group</h3>
          <p className="text-lg font-bold text-zinc-400 max-w-2xl">
            Ang proyektong ito ay isang student initiative ng mga mag-aaral ng 12C - Pangkat 1 mula sa Xavier School Nuvali bilang bahagi ng kanilang Life Project, na naglalayong tumulong na gawing mas accessible ng lahat ang dekalidad na edukasyon sa pamamagitan ng pagsasama-sama at pagbibigay ng malinaw na gabay sa aplikasyon para sa mga scholarship.
          </p>
        </div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-10">
          <Heart size={300} />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Team List */}
        <div className="space-y-8">
           <div className="flex items-center gap-4 mb-2 border-b-2 border-zinc-200 pb-4">
              <User size={24} className="text-teal-600" />
              <h3 className="font-black text-2xl text-zinc-900 uppercase tracking-tighter">Mga miyembro ng proyekto</h3>
           </div>
           
           <div className="grid gap-4">
             {TEAM_MEMBERS.map((member, i) => (
               <div key={i} className="brutal-card p-4 hover:bg-zinc-50 group flex items-center gap-4">
                 <div className="w-10 h-10 bg-teal-400 border-2 border-zinc-900 flex items-center justify-center font-black text-zinc-900 shadow-[2px_2px_0_0_#18181b]">
                    {member.name.charAt(0)}
                 </div>
                 <div>
                   <h4 className="font-black text-sm uppercase">{member.name}</h4>
                   <a href={`mailto:${member.email}`} className="text-xs font-mono text-zinc-500 hover:text-teal-600 hover:underline">{member.email}</a>
                 </div>
               </div>
             ))}
           </div>

           <div className="flex items-center gap-4 mt-8 mb-2 border-b-2 border-zinc-200 pb-4">
              <Code size={24} className="text-purple-600" />
              <h3 className="font-black text-2xl text-zinc-900 uppercase tracking-tighter">Development</h3>
           </div>

           <div className="brutal-card p-4 hover:bg-purple-50 group flex items-center gap-4 border-purple-900">
             <div className="w-10 h-10 bg-purple-400 border-2 border-purple-900 flex items-center justify-center font-black text-white shadow-[2px_2px_0_0_#18181b]">
                {DEVELOPER.name.charAt(0)}
             </div>
             <div>
               <h4 className="font-black text-sm uppercase">{DEVELOPER.name}</h4>
               <p className="text-xs font-bold text-purple-600 uppercase mb-0.5">{DEVELOPER.role}</p>
               <a href={`mailto:${DEVELOPER.email}`} className="text-xs font-mono text-zinc-500 hover:text-purple-600 hover:underline">{DEVELOPER.email}</a>
             </div>
           </div>
        </div>

        {/* Contact Form */}
        <div>
           <div className="brutal-card p-8 bg-zinc-50 border-zinc-900 h-full relative">
             <div className="absolute top-0 left-0 bg-teal-400 text-zinc-900 px-4 py-1 border-b-2 border-r-2 border-zinc-900 font-black text-xs uppercase">
               Makipag-ugnayan
             </div>
             
             <h3 className="font-black text-3xl text-zinc-900 uppercase tracking-tighter mt-4 mb-6">Padalhan kami ng mensahe</h3>
             <p className="text-sm font-bold text-zinc-500 mb-8">
                May mga tanong o mungkahi? Direktang magpadala sa amin ng mensahe.
             </p>

             {formState === 'success' ? (
               <div className="bg-green-100 border-2 border-green-600 p-8 text-center animate-in fade-in zoom-in duration-300">
                 <div className="w-16 h-16 bg-green-500 border-2 border-green-800 rounded-full flex items-center justify-center mx-auto mb-4 text-white shadow-[4px_4px_0_0_rgba(20,83,45,1)]">
                   <CheckCircle2 size={32} />
                 </div>
                 <h4 className="font-black text-xl text-green-800 uppercase mb-2">Naipadala na ang iyong mensahe!</h4>
                 <p className="text-sm font-medium text-green-700 mb-6">Maraming salamat. Magbibigay kami ng update sa iyo sa lalong madaling panahon.</p>
                 <button 
                   onClick={() => setFormState('idle')} 
                   className="text-xs font-black uppercase underline hover:text-green-900"
                 >
                   magpadala ulit ng mensahe
                 </button>
               </div>
             ) : formState === 'error' ? (
               <div className="bg-red-100 border-2 border-red-600 p-8 text-center animate-in fade-in zoom-in duration-300">
                 <div className="w-16 h-16 bg-red-500 border-2 border-red-800 rounded-full flex items-center justify-center mx-auto mb-4 text-white shadow-[4px_4px_0_0_rgba(127,29,29,1)]">
                   <AlertCircle size={32} />
                 </div>
                 <h4 className="font-black text-xl text-red-800 uppercase mb-2">Error</h4>
                 <p className="text-sm font-medium text-red-700 mb-6">{errorMessage}</p>
                 <button 
                   onClick={() => setFormState('idle')} 
                   className="text-xs font-black uppercase underline hover:text-red-900"
                 >
                   Try again
                 </button>
               </div>
             ) : (
               <form onSubmit={handleSubmit} className="space-y-6">
                 <div>
                   <label className="block text-xs font-black uppercase text-zinc-900 mb-2">Iyong Mensahe <span className="text-red-500">*</span></label>
                   <textarea 
                     required
                     rows={5}
                     value={formData.message}
                     onChange={(e) => setFormData({...formData, message: e.target.value})}
                     placeholder="Type your questions or feedback here..."
                     className="brutal-input resize-none"
                   ></textarea>
                 </div>

                 <div>
                   <label className="block text-xs font-black uppercase text-zinc-900 mb-2">Email Address <span className="text-zinc-400 font-medium normal-case">(Optional - for us to reply)</span></label>
                   <input 
                     type="email"
                     value={formData.email}
                     onChange={(e) => setFormData({...formData, email: e.target.value})}
                     placeholder="juandelacruz@example.com"
                     className="brutal-input"
                   />
                 </div>

                 <div className="pt-2">
                    <button 
                      type="submit" 
                      disabled={formState === 'sending'}
                      className="brutal-btn primary w-full py-4 text-sm group relative disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {formState === 'sending' ? (
                        <span className="flex items-center gap-2">
                          <RefreshCw className="animate-spin" size={16} /> Ipinapadala...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          Ipadala ang Mensahe <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                        </span>
                      )}
                    </button>
                 </div>
                 
                 <div className="text-center pt-4">
                    <p className="text-[10px] font-bold text-zinc-400 uppercase">
                      O DIREKTA KAMING I-EMAIL
                    </p>
                    <a 
                      href={`mailto:${recipientEmails}?subject=Iskolar Inquiry&body=${encodeURIComponent(formData.message)}`}
                      className="mt-2 inline-flex items-center gap-1 text-xs font-black text-zinc-900 hover:text-teal-600 underline"
                    >
                      <Mail size={12} /> Open Email
                    </a>
                 </div>
               </form>
             )}
           </div>
        </div>
      </div>
    </div>
  );
}
