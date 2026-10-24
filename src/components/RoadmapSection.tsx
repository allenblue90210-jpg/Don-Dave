import React from 'react';
import { MapPin, CheckCircle2, Clock, Sparkles, ArrowRight } from 'lucide-react';
import { ROADMAP_ITEMS } from '../constants';

export const RoadmapSection: React.FC = () => {
  return (
    <section id="roadmap" className="py-20 relative bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5" />
            <span>Development Roadmap (2026–2027+)</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white">
            Strategic Path to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-orange-500">
              Global Scale
            </span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            From African community roots to an international cultural powerhouse. Follow our verified execution milestones.
          </p>
        </div>

        {/* 4 Phases Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ROADMAP_ITEMS.map((item, index) => {
            const isCompleted = item.status === 'completed';
            const isInProgress = item.status === 'in-progress';

            return (
              <div
                key={item.phase}
                className={`relative rounded-3xl p-6 border flex flex-col justify-between transition-all duration-300 ${
                  isInProgress
                    ? 'bg-gradient-to-b from-slate-900 to-slate-950 border-amber-400 shadow-xl shadow-amber-500/15 -translate-y-1'
                    : isCompleted
                    ? 'bg-slate-900/60 border-emerald-500/30'
                    : 'bg-slate-900/30 border-slate-800'
                }`}
              >
                {/* Header Badge */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold text-amber-400">
                      {item.quarter}
                    </span>
                    <span
                      className={`text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-full flex items-center gap-1 ${
                        isCompleted
                          ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                          : isInProgress
                          ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 animate-pulse'
                          : 'bg-slate-800 text-slate-400'
                      }`}
                    >
                      {isCompleted && <CheckCircle2 className="w-3 h-3" />}
                      {isInProgress && <Clock className="w-3 h-3 text-amber-400" />}
                      {item.status === 'completed' ? 'Completed' : item.status === 'in-progress' ? 'Current Phase' : 'Upcoming'}
                    </span>
                  </div>

                  <h3 className="text-lg font-black text-white">
                    {item.phase}
                  </h3>
                  <div className="text-xs font-semibold text-amber-300/90 font-mono mb-2">
                    {item.title}
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                {/* Milestone Checklist */}
                <div className="space-y-2.5 pt-4 border-t border-slate-800/80">
                  {item.milestones.map((m, mIdx) => (
                    <div key={mIdx} className="flex items-start gap-2 text-xs">
                      <div className="mt-0.5 shrink-0">
                        {isCompleted ? (
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        ) : isInProgress ? (
                          <div className="w-3.5 h-3.5 rounded-full border border-amber-400 flex items-center justify-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-amber-400"></div>
                          </div>
                        ) : (
                          <div className="w-3.5 h-3.5 rounded-full border border-slate-700"></div>
                        )}
                      </div>
                      <span className={isCompleted ? 'text-slate-300 line-through/40' : isInProgress ? 'text-slate-200 font-medium' : 'text-slate-500'}>
                        {m}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Bottom Step Indicator */}
                <div className="mt-6 pt-3 border-t border-slate-800/40 text-[11px] font-mono flex items-center justify-between text-slate-500">
                  <span>Step 0{index + 1} of 04</span>
                  {isInProgress && <span className="text-amber-400 font-bold flex items-center gap-1">Active <Sparkles className="w-3 h-3" /></span>}
                </div>
              </div>
            );
          })}
        </div>

        {/* Africa to Global Expansion Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
              <span className="text-2xl">🌍</span>
            </div>
            <div>
              <h4 className="text-base font-bold text-white">
                Africa → Global Web3 Movement
              </h4>
              <p className="text-xs sm:text-sm text-slate-400">
                Join our Telegram and follow Twitter announcements as milestones are unlocked and audited live.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://x.com/TAMIYANOIA_Cat"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold transition flex items-center gap-1.5"
            >
              <span>Follow Updates</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
