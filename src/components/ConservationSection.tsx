import React, { useState } from 'react';
import { Heart, ShieldCheck, Sparkles, HeartHandshake, CheckCircle2, Gift, Send } from 'lucide-react';
import { CONSERVATION_INITIATIVES, CONTRACT_ADDRESS } from '../constants';
import { sounds } from '../utils/audio';
import confetti from 'canvas-confetti';

export const ConservationSection: React.FC = () => {
  const [treatsSent, setTreatsSent] = useState<number>(142);
  const [justSent, setJustSent] = useState<boolean>(false);

  const sendVirtualTreat = () => {
    sounds.playMeow();
    sounds.playPurr();
    setTreatsSent((prev) => prev + 1);
    setJustSent(true);
    confetti({
      particleCount: 35,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#EC4899', '#F43F5E', '#F59E0B', '#10B981'],
    });
    setTimeout(() => setJustSent(false), 2000);
  };

  return (
    <section id="conservation" className="py-20 relative bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-bold uppercase tracking-wider">
            <Heart className="w-3.5 h-3.5 fill-rose-400 text-rose-400" />
            <span>Feline Welfare & Conservation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white">
            Real Impact for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-pink-400 to-amber-400">
              Real Cats in Need
            </span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Crypto is at its best when it creates kindness in the physical world. TAMI allocates ecosystem resources and community initiative proceeds directly to animal shelters and cat rescues.
          </p>
        </div>

        {/* 4 Conservation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {CONSERVATION_INITIATIVES.map((init, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800 hover:border-rose-500/40 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-rose-500/10 text-rose-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {idx === 0 && <HeartHandshake className="w-6 h-6" />}
                  {idx === 1 && <ShieldCheck className="w-6 h-6" />}
                  {idx === 2 && <Sparkles className="w-6 h-6" />}
                  {idx === 3 && <CheckCircle2 className="w-6 h-6" />}
                </div>
                <div className="text-[10px] font-mono text-rose-300 font-bold uppercase tracking-wider">
                  {init.stat}
                </div>
                <h3 className="text-lg font-extrabold text-white mt-1 mb-2">
                  {init.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {init.desc}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500">
                <span>Verified Impact</span>
                <span className="text-rose-400 font-semibold">TAMI Mission</span>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Virtual Treat & Conservation Pledge Box */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-rose-950/40 via-slate-900 to-amber-950/40 border border-rose-500/30 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center md:text-left max-w-xl">
            <div className="flex items-center justify-center md:justify-start gap-2 text-rose-400 text-xs font-mono font-bold">
              <Gift className="w-4 h-4" />
              <span>COMMUNITY FELINE SOLIDARITY</span>
            </div>
            <h3 className="text-2xl font-black text-white">
              Send a Virtual Cat Treat & Support Shelters! 🐾🐟
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Every click sends love, signals community support for local shelter rescues in Africa, and brings us closer to funding our next bulk food supply delivery.
            </p>
            <div className="flex items-center justify-center md:justify-start gap-3 pt-1 text-xs text-slate-400 font-mono">
              <span className="text-rose-300 font-bold">{treatsSent} Virtual Treats Sent Today</span>
              <span>•</span>
              <span className="text-emerald-400">Open Ledger Transparency</span>
            </div>
          </div>

          <div className="flex flex-col items-center gap-3 w-full md:w-auto">
            <button
              onClick={sendVirtualTreat}
              className={`w-full sm:w-auto px-6 py-4 rounded-2xl font-black text-sm flex items-center justify-center gap-2.5 shadow-xl transition-all active:scale-95 ${
                justSent
                  ? 'bg-emerald-500 text-slate-950 shadow-emerald-500/30'
                  : 'bg-gradient-to-r from-rose-500 via-pink-500 to-amber-500 hover:from-rose-400 hover:to-amber-400 text-white shadow-rose-500/25 hover:shadow-rose-500/40'
              }`}
            >
              <Send className="w-4 h-4" />
              <span>{justSent ? 'Purrrrr! Sent with Love! ❤️' : 'Send Virtual Treat (Purr!)'}</span>
            </button>
            <span className="text-[10px] text-slate-500 font-mono text-center">
              Multi-sig Charity Wallet: 0x8bea...c898
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
