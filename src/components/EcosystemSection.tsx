import React, { useState } from 'react';
import { Layers, Cat, Coins, Users, Palette, Cpu, Globe, ArrowRight, Check } from 'lucide-react';
import { ECOSYSTEM_PILLARS } from '../constants';
import { sounds } from '../utils/audio';

export const EcosystemSection: React.FC = () => {
  const [selectedPillar, setSelectedPillar] = useState<string>(ECOSYSTEM_PILLARS[0].id);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cat':
        return Cat;
      case 'Coins':
        return Coins;
      case 'Users':
        return Users;
      case 'Palette':
        return Palette;
      case 'Cpu':
        return Cpu;
      case 'Globe':
        return Globe;
      default:
        return Layers;
    }
  };

  return (
    <section id="ecosystem" className="py-20 relative bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5" />
            <span>The TAMI Ecosystem</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white">
            Designed to Grow in{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-orange-500">
              Layers & Culture
            </span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Starting with authentic African community culture and expanding continuously into digital experiences, utility products, and global initiatives.
          </p>
        </div>

        {/* 6 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ECOSYSTEM_PILLARS.map((pillar) => {
            const Icon = getIcon(pillar.iconName);
            const isSelected = selectedPillar === pillar.id;

            return (
              <div
                key={pillar.id}
                onClick={() => {
                  sounds.playPurr();
                  setSelectedPillar(pillar.id);
                }}
                className={`relative rounded-3xl p-7 transition-all duration-300 cursor-pointer border flex flex-col justify-between ${
                  isSelected
                    ? 'bg-gradient-to-b from-slate-900 to-slate-950 border-amber-400/80 shadow-2xl shadow-amber-500/15 -translate-y-1'
                    : 'bg-slate-900/40 hover:bg-slate-900/80 border-slate-800 hover:border-slate-700'
                }`}
              >
                {/* Accent Top Bar */}
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center transition ${
                      isSelected
                        ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/30'
                        : 'bg-slate-800 text-amber-400'
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-mono uppercase px-2.5 py-1 rounded-full bg-slate-800/80 text-amber-300 font-bold border border-slate-700">
                    {pillar.tag}
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-2 mb-6">
                  <h3 className="text-xl font-extrabold text-white group-hover:text-amber-300 transition">
                    {pillar.name}
                  </h3>
                  <div className="text-xs font-semibold text-amber-400/90 font-mono">
                    {pillar.subtitle}
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed pt-1">
                    {pillar.description}
                  </p>
                </div>

                {/* Key Features List */}
                <div className="pt-4 border-t border-slate-800/80 space-y-2">
                  {pillar.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-400">
                      <div className="w-4 h-4 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5 text-emerald-400" />
                      </div>
                      <span className="truncate">{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Status indicator */}
                <div className="mt-5 pt-3 border-t border-slate-800/40 flex items-center justify-between text-xs">
                  <span className={isSelected ? 'text-amber-300 font-bold' : 'text-slate-500'}>
                    {isSelected ? 'Active Pillar' : 'Click to highlight'}
                  </span>
                  <ArrowRight className={`w-3.5 h-3.5 ${isSelected ? 'text-amber-400 translate-x-1' : 'text-slate-600'} transition-transform`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Global Community Callout Banner */}
        <div className="mt-12 p-8 rounded-3xl bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-amber-500/5 border border-amber-500/30 text-center flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-left space-y-1">
            <h4 className="text-lg font-bold text-white flex items-center gap-2">
              <span>One Community. One Ecosystem. One Journey. 🌍🐱</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
              TAMIYANOIA Cat belongs to its community. Our collective brings together creators, developers, traders, artists, Web3 enthusiasts, builders, and newcomers.
            </p>
          </div>
          <a
            href="https://x.com/TAMIYANOIA_Cat"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs sm:text-sm whitespace-nowrap shadow-lg shadow-amber-500/20 active:scale-95 transition"
          >
            Join TAMIYANOIA FAM →
          </a>
        </div>

      </div>
    </section>
  );
};
