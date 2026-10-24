import React, { useState } from 'react';
import { Copy, Check, Flame, ArrowUpRight, BookOpen, Sparkles, ExternalLink, ShieldCheck, Heart } from 'lucide-react';
import { CONTRACT_ADDRESS, OFFICIAL_LINKS, TOKENOMICS_DATA } from '../constants';
import { sounds } from '../utils/audio';
import confetti from 'canvas-confetti';

interface HeroProps {
  onOpenWhitepaper: () => void;
  onOpenMemeStudio: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenWhitepaper, onOpenMemeStudio }) => {
  const [copied, setCopied] = useState(false);
  const [catMood, setCatMood] = useState<'normal' | 'happy' | 'fierce'>('normal');
  const [clickCount, setClickCount] = useState(0);

  const copyContract = () => {
    navigator.clipboard.writeText(CONTRACT_ADDRESS);
    setCopied(true);
    sounds.playCoinChime();
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.3 },
      colors: ['#F59E0B', '#EF4444', '#10B981', '#FBBF24'],
    });
    setTimeout(() => setCopied(false), 2500);
  };

  const petHeroCat = () => {
    setClickCount((prev) => prev + 1);
    sounds.playMeow();
    setCatMood('happy');
    setTimeout(() => setCatMood('normal'), 1200);
  };

  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-14 md:pb-24">
      {/* Background African geometric tribal gradient & cosmic mesh */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Glow circles */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-amber-500/15 via-orange-500/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute -top-24 right-10 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-red-500/10 rounded-full blur-3xl"></div>
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:32px_32px] opacity-15"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-amber-500/15 to-orange-500/15 border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-semibold shadow-inner">
              <span className="flex h-2 w-2 rounded-full bg-amber-400 animate-ping"></span>
              <span>🌍 Born in Africa • Built for the World</span>
              <span className="text-amber-400/60">•</span>
              <span className="text-amber-200">BEP-20 on BNB Chain</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.1] text-white">
              TAMIYANOIA{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-orange-500">
                CAT
              </span>
              <br />
              <span className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-300">
                Fierce Firm Victory. 🐾
              </span>
            </h1>

            {/* Sub-paragraph */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              A community-driven Web3 ecosystem uniting culture, African creativity, entertainment, and decentralized participation. Building far beyond a token—an enduring cultural brand with real-world cat conservation impact.
            </p>

            {/* Verified Contract Address Box with One-Click Copy */}
            <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-900/90 border border-amber-500/30 backdrop-blur shadow-xl max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center justify-between gap-2 mb-1.5 text-xs">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Official BNB Chain Smart Contract</span>
                </span>
                <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-semibold text-[10px]">
                  0% Tax • Clean BEP-20
                </span>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-2">
                <div className="w-full sm:flex-1 bg-slate-950/80 px-3 py-2 rounded-xl border border-slate-800 font-mono text-xs text-amber-200 truncate select-all">
                  {CONTRACT_ADDRESS}
                </div>
                <button
                  onClick={copyContract}
                  className={`w-full sm:w-auto px-4 py-2 rounded-xl font-medium text-xs flex items-center justify-center gap-2 transition-all ${
                    copied
                      ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/30'
                      : 'bg-amber-500 hover:bg-amber-400 text-slate-950 hover:shadow-lg hover:shadow-amber-500/20 active:scale-95'
                  }`}
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy CA</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
              <a
                href={OFFICIAL_LINKS.pancakeSwap}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 text-slate-950 font-bold text-sm sm:text-base flex items-center gap-2 shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all"
              >
                <Flame className="w-4 h-4 text-slate-950 fill-current" />
                <span>Buy $TAMI on PancakeSwap</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href={OFFICIAL_LINKS.dexScreener}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700/80 font-medium text-sm sm:text-base flex items-center gap-2 transition-all hover:border-amber-500/40"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>DexScreener Chart</span>
                <ExternalLink className="w-4 h-4 text-slate-400" />
              </a>

              <button
                onClick={onOpenWhitepaper}
                className="px-4 py-3.5 rounded-xl bg-slate-900/60 hover:bg-slate-900 text-amber-300 border border-amber-500/20 font-medium text-sm flex items-center gap-2 transition-all hover:border-amber-400/50"
              >
                <BookOpen className="w-4 h-4 text-amber-400" />
                <span>Whitepaper</span>
              </button>

              <button
                onClick={onOpenMemeStudio}
                className="px-4 py-3.5 rounded-xl bg-purple-950/40 hover:bg-purple-900/40 text-purple-300 border border-purple-500/30 font-medium text-sm flex items-center gap-2 transition-all"
              >
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span>Meme Pad</span>
              </button>
            </div>

            {/* Quick Stats Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 max-w-xl mx-auto lg:mx-0">
              <div className="p-3 rounded-xl bg-slate-900/50 border border-slate-800 text-center">
                <div className="text-xs text-slate-400 font-medium">Total Supply</div>
                <div className="text-sm sm:text-base font-extrabold text-amber-300">1,000 Trillion</div>
                <div className="text-[10px] text-slate-500">1 Quadrillion BEP-20</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/50 border border-slate-800 text-center">
                <div className="text-xs text-slate-400 font-medium">Burned Forever</div>
                <div className="text-sm sm:text-base font-extrabold text-red-400">~500T (50%)</div>
                <div className="text-[10px] text-slate-500">Sent to 0xdead</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/50 border border-slate-800 text-center">
                <div className="text-xs text-slate-400 font-medium">Buy/Sell Tax</div>
                <div className="text-sm sm:text-base font-extrabold text-emerald-400">0% / 0%</div>
                <div className="text-[10px] text-slate-500">Zero Trading Tax</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/50 border border-slate-800 text-center">
                <div className="text-xs text-slate-400 font-medium">LP Security</div>
                <div className="text-sm sm:text-base font-extrabold text-blue-400">100% Burned</div>
                <div className="text-[10px] text-slate-500">Permanently Locked</div>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Graphic & Pet Interactive */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            <div className="relative group w-full max-w-md">
              {/* Outer Glow Halo */}
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-400 rounded-3xl blur-2xl opacity-40 group-hover:opacity-70 transition duration-500 animate-pulse"></div>
              
              {/* Card Container */}
              <div className="relative rounded-3xl bg-slate-900/90 border-2 border-amber-500/40 p-6 backdrop-blur-xl shadow-2xl overflow-hidden flex flex-col items-center">
                
                {/* Floating African Pattern Ribbon */}
                <div className="w-full flex items-center justify-between pb-3 border-b border-slate-800 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-amber-400 animate-ping"></span>
                    <span className="text-xs font-mono font-bold text-amber-300">TAMI HERO GUARDIAN</span>
                  </div>
                  <button
                    onClick={petHeroCat}
                    className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 text-xs font-semibold border border-amber-500/30 transition-transform active:scale-95"
                  >
                    <Heart className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span>Pet TAMI</span>
                  </button>
                </div>

                {/* Hero Character Image */}
                <div
                  onClick={petHeroCat}
                  className="relative cursor-pointer select-none transition-transform duration-300 hover:scale-105 active:scale-95"
                  title="Click to pet TAMI!"
                >
                  <img
                    src="/images/grumpolia.png"
                    alt="TAMI Character"
                    className="w-72 h-72 sm:w-80 sm:h-80 object-contain drop-shadow-[0_20px_35px_rgba(245,158,11,0.3)] transition-all"
                  />
                  {catMood === 'happy' && (
                    <div className="absolute top-2 right-4 px-3 py-1 bg-amber-500 text-slate-950 text-xs font-extrabold rounded-full animate-bounce shadow-lg">
                      Purrrrrr! 🐾
                    </div>
                  )}
                </div>

                {/* Caption / Interactive Counter */}
                <div className="w-full mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <span className="text-slate-300 font-semibold">TAMI Mascot</span>
                    <span>• "Fierce Firm Victory"</span>
                  </div>
                  <div className="font-mono text-amber-300 font-semibold">
                    {clickCount > 0 ? `${clickCount} pets! ❤️` : 'Click to interact'}
                  </div>
                </div>

              </div>
            </div>

            {/* African Community Pride Badge */}
            <div className="mt-4 flex items-center gap-3 px-4 py-2 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-300">
              <span className="text-lg">🌍</span>
              <span>Proudly celebrating African folklore, innovation, and global decentralization.</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
