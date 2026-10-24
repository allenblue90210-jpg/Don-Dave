import React, { useState } from 'react';
import { Heart, Sparkles, X, ChevronUp, Trophy } from 'lucide-react';
import { sounds } from '../utils/audio';

export const PetTheCat: React.FC = () => {
  const [petCount, setPetCount] = useState<number>(0);
  const [isMinimized, setIsMinimized] = useState<boolean>(true);
  const [particles, setParticles] = useState<{ id: number; x: number; y: number }[]>([]);

  const handlePet = (e: React.MouseEvent) => {
    sounds.playMeow();
    setPetCount((prev) => prev + 1);

    // Add floating heart particle
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const newParticle = {
      id: Date.now() + Math.random(),
      x: e.clientX - rect.left - 10,
      y: e.clientY - rect.top - 20,
    };
    setParticles((prev) => [...prev, newParticle]);
    setTimeout(() => {
      setParticles((prev) => prev.filter((p) => p.id !== newParticle.id));
    }, 1000);
  };

  const getRank = () => {
    if (petCount >= 50) return { title: 'TAMI Legend 👑', color: 'text-amber-300' };
    if (petCount >= 25) return { title: 'Fierce Guardian 🐾', color: 'text-orange-400' };
    if (petCount >= 10) return { title: 'Savannah Scout 🦁', color: 'text-yellow-400' };
    if (petCount >= 1) return { title: 'Friend of TAMI ❤️', color: 'text-emerald-400' };
    return { title: 'New Visitor', color: 'text-slate-400' };
  };

  const rank = getRank();

  return (
    <div className="fixed bottom-5 right-5 z-40 select-none">
      {isMinimized ? (
        <button
          onClick={() => {
            sounds.playPurr();
            setIsMinimized(false);
          }}
          className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-slate-900/90 border-2 border-amber-500/40 hover:border-amber-400 text-amber-300 font-bold text-xs shadow-xl shadow-amber-500/10 backdrop-blur hover:scale-105 active:scale-95 transition-all group"
        >
          <img
            src="/images/favicon.png"
            alt="TAMI"
            className="w-6 h-6 rounded-full border border-amber-400 group-hover:rotate-12 transition-transform"
          />
          <span>Pet TAMI</span>
          <span className="px-1.5 py-0.5 rounded-full bg-amber-500/20 text-[10px] text-amber-300">
            {petCount}
          </span>
          <ChevronUp className="w-3.5 h-3.5 text-slate-400" />
        </button>
      ) : (
        <div className="w-72 rounded-3xl bg-slate-900 border-2 border-amber-500/40 p-4 shadow-2xl backdrop-blur-xl relative overflow-hidden">
          {/* Top Bar */}
          <div className="flex items-center justify-between pb-2 border-b border-slate-800 mb-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span>
              <span className="text-xs font-bold text-white font-mono">TAMI PET CLUB</span>
            </div>
            <button
              onClick={() => setIsMinimized(true)}
              className="p-1 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Interactive Cat Avatar */}
          <div
            onClick={handlePet}
            className="relative cursor-pointer flex flex-col items-center justify-center p-3 rounded-2xl bg-slate-950 border border-slate-800 hover:border-amber-400/50 transition active:scale-95 group"
          >
            <img
              src="/images/favicon.png"
              alt="Pet TAMI"
              className="w-20 h-20 rounded-full border-2 border-amber-400 object-cover shadow-lg group-hover:scale-110 transition-transform duration-200"
            />
            <span className="text-[11px] font-bold text-amber-300 mt-2 flex items-center gap-1">
              <span>Click to Pet Meow!</span>
              <Heart className="w-3 h-3 fill-rose-500 text-rose-500" />
            </span>

            {/* Floating Particles */}
            {particles.map((p) => (
              <span
                key={p.id}
                style={{ left: `${p.x}px`, top: `${p.y}px` }}
                className="absolute text-lg pointer-events-none animate-bounce font-bold text-rose-400"
              >
                🐾❤️
              </span>
            ))}
          </div>

          {/* Score & Rank */}
          <div className="mt-3 pt-2 border-t border-slate-800/80 flex items-center justify-between text-xs">
            <div className="flex items-center gap-1 text-slate-400">
              <Trophy className="w-3.5 h-3.5 text-amber-400" />
              <span>Rank:</span>
              <span className={`font-bold ${rank.color}`}>{rank.title}</span>
            </div>
            <div className="font-mono text-amber-300 font-extrabold">
              {petCount} pets
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
