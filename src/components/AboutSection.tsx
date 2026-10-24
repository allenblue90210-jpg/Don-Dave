import React, { useState } from 'react';
import { Compass, Globe, Sparkles, Shield, Heart, CheckCircle2, ChevronRight } from 'lucide-react';
import { sounds } from '../utils/audio';

export const AboutSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'origin' | 'cat' | 'tech' | 'impact'>('origin');

  const tabs = [
    { id: 'origin', label: 'African Heritage', icon: Globe },
    { id: 'cat', label: 'The Cat Symbolism', icon: Sparkles },
    { id: 'tech', label: 'Decentralized Tech', icon: Shield },
    { id: 'impact', label: 'Cat Conservation', icon: Heart },
  ] as const;

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Decorative gradient light */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5" />
            <span>The TAMI Origin Story</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white">
            What is{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-orange-500">
              TAMIYANOIA Cat?
            </span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            TAMIYANOIA Cat is a community-focused Web3 ecosystem created to bring people together around digital culture, entertainment, blockchain technology, and decentralized participation.
          </p>
        </div>

        {/* Interactive Tab Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  sounds.playPurr();
                  setActiveTab(tab.id);
                }}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all ${
                  isActive
                    ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-slate-950 shadow-lg shadow-amber-500/25 scale-105'
                    : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-slate-950' : 'text-amber-400'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Content Box with Side-by-Side Art & Narrative */}
        <div className="rounded-3xl bg-slate-900/80 border border-amber-500/30 p-6 sm:p-10 backdrop-blur-xl shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Visual Graphic */}
            <div className="lg:col-span-5 relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition duration-300"></div>
              <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 aspect-4/3 flex items-center justify-center p-4">
                <img
                  src={
                    activeTab === 'origin'
                      ? '/images/afr1.png'
                      : activeTab === 'cat'
                      ? '/images/afr2.png'
                      : activeTab === 'tech'
                      ? '/images/bnb.png'
                      : '/images/afr5.png'
                  }
                  alt="TAMI Story Illustration"
                  className="w-full h-full object-contain rounded-xl transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Tab Narrative */}
            <div className="lg:col-span-7 space-y-5">
              
              {activeTab === 'origin' && (
                <div className="space-y-4">
                  <span className="text-xs font-bold font-mono text-amber-400 tracking-wider uppercase">
                    Rooted in Africa • Embraced Worldwide
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                    "From Africa to the World" 🌍🐾
                  </h3>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    TAMIYANOIA Cat was conceived to celebrate the extraordinary vibrancy, humor, artistic talent, and resilient communal culture of the African continent on the global Web3 canvas.
                  </p>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Historically, African youth and digital creators have been avid consumers of global internet trends. TAMI flips the script: an African-born meme icon, powered by community energy, taking center stage alongside global crypto legends.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>Uniting developers, artists, and traders across 54+ countries</span>
                    </div>
                    <div className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>Grassroots community chapters & campus meetups</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'cat' && (
                <div className="space-y-4">
                  <span className="text-xs font-bold font-mono text-amber-400 tracking-wider uppercase">
                    Fierce Firm Victory
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                    The Spirit of the Savannah Feline 🐾
                  </h3>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    Why the Cat? Across countless African traditions, cats represent unmatched agility, acute vision in the dark, stealth, and legendary resilience ("nine lives").
                  </p>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    In the wild swings of cryptocurrency markets, only communities with grit, discipline, and unshakable loyalty thrive. TAMI embodies "Fierce Firm Victory"—navigating market cycles with humor, wisdom, and unstoppable forward momentum.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>Distinctive hand-crafted character artwork</span>
                    </div>
                    <div className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>Symbol of unity, agility, and communal prosperity</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'tech' && (
                <div className="space-y-4">
                  <span className="text-xs font-bold font-mono text-amber-400 tracking-wider uppercase">
                    Zero Tax • High Speed • Clean BEP-20
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                    Built Transparently on BNB Chain ⚡
                  </h3>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    The $TAMIYANOIA token is engineered on Binance Smart Chain for high throughput, instant transaction finality, and negligible fees.
                  </p>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    With 0% buy tax and 0% sell tax, traders keep 100% of their trades. 100% of the initial liquidity pool has been burned to 0xdead, ensuring no rug-pulls and complete on-chain security.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                      <span>Verified Contract on BscScan</span>
                    </div>
                    <div className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                      <span>100% Permanent Liquidity Burn</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'impact' && (
                <div className="space-y-4">
                  <span className="text-xs font-bold font-mono text-amber-400 tracking-wider uppercase">
                    Purpose Beyond Speculation
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                    Cat Conservation & Animal Welfare 🐱❤️
                  </h3>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    Web3 is most powerful when it impacts the physical world. TAMI allocates community initiative funding to real-world feline rescue shelters and rehabilitation centers.
                  </p>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    From rescuing injured street cats in underserved urban centers to providing nutritional support and vaccines, TAMI demonstrates how crypto communities can create tangible, compassionate change.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                      <span>Transparent on-chain donation tracking</span>
                    </div>
                    <div className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                      <span>Global awareness on International Cat Day</span>
                    </div>
                  </div>
                </div>
              )}

              <div className="pt-2 flex items-center gap-3">
                <a
                  href="#ecosystem"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-amber-400 hover:text-amber-300 transition"
                >
                  <span>Explore the 6 Ecosystem Pillars</span>
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
