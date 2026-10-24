import React, { useState } from 'react';
import { BookOpen, X, Download, Printer, ShieldCheck, Check, Sparkles, ExternalLink } from 'lucide-react';
import { CONTRACT_ADDRESS, OFFICIAL_LINKS } from '../constants';

interface WhitepaperModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WhitepaperModal: React.FC<WhitepaperModalProps> = ({ isOpen, onClose }) => {
  const [activeSection, setActiveSection] = useState<'overview' | 'mission' | 'tokenomics' | 'roadmap' | 'conservation' | 'security'>('overview');

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/90 backdrop-blur-md overflow-y-auto">
      <div className="relative max-w-4xl w-full rounded-3xl bg-slate-900 border border-amber-500/40 shadow-2xl overflow-hidden flex flex-col my-6 max-h-[90vh]">
        
        {/* Top Header */}
        <div className="p-4 sm:p-6 border-b border-slate-800 bg-slate-950/80 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center border border-amber-500/30">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-black text-white">
                TAMIYANOIA CAT WHITEPAPER
              </h2>
              <p className="text-xs text-amber-400 font-mono">
                Official Summary • BNB Smart Chain (BEP-20)
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs flex items-center gap-1.5"
              title="Print Whitepaper"
            >
              <Printer className="w-4 h-4" />
              <span className="hidden sm:inline">Print</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Section Navigation Tabs */}
        <div className="flex items-center gap-1 p-2 bg-slate-950 border-b border-slate-800 overflow-x-auto shrink-0">
          {[
            { id: 'overview', label: '1. Executive Summary' },
            { id: 'mission', label: '2. Mission & Vision' },
            { id: 'tokenomics', label: '3. Tokenomics' },
            { id: 'roadmap', label: '4. Strategic Roadmap' },
            { id: 'conservation', label: '5. Cat Conservation' },
            { id: 'security', label: '6. Contract & Security' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveSection(tab.id as any)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition ${
                activeSection === tab.id
                  ? 'bg-amber-500 text-slate-950 font-bold'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm text-slate-300 leading-relaxed">
          
          {activeSection === 'overview' && (
            <div className="space-y-4">
              <h3 className="text-xl font-extrabold text-white">1. Executive Summary</h3>
              <p>
                <strong>TAMIYANOIA CAT</strong> is a decentralized, community-driven Web3 ecosystem designed to showcase African creativity, rich folklore, and digital innovation to the global cryptocurrency marketplace.
              </p>
              <p>
                While the global meme coin ecosystem has traditionally been dominated by generic Doge and Shiba derivatives from Western and Asian developers, TAMIYANOIA introduces an authentic Pan-African cultural character: the Savannah Feline, representing resilience, independence, and "Fierce Firm Victory."
              </p>
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                <div className="text-xs font-mono font-bold text-amber-400 uppercase">Core Project Pillars</div>
                <ul className="list-disc pl-5 space-y-1 text-xs text-slate-300">
                  <li><strong>Fair & Transparent Tokenomics:</strong> Zero taxes (0% buy / 0% sell), 50% supply burned forever, 100% LP burned.</li>
                  <li><strong>High-Speed Infrastructure:</strong> Deployed on BNB Smart Chain (BEP-20) for sub-second settlement and low fees.</li>
                  <li><strong>Real-World Feline Philanthropy:</strong> Transparent on-chain funding for street cat rescues and shelters.</li>
                  <li><strong>Future Protocol Utilities:</strong> TAMI Swap DEX, TAMI Burrow NFT marketplace, and community governance.</li>
                </ul>
              </div>
            </div>
          )}

          {activeSection === 'mission' && (
            <div className="space-y-4">
              <h3 className="text-xl font-extrabold text-white">2. Mission & Vision</h3>
              <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-200 font-medium">
                "To create a globally recognized African-born Web3 brand that connects communities across borders through culture, entertainment, and decentralized empowerment."
              </div>
              <h4 className="text-base font-bold text-white pt-2">Our Core Values:</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong>Radical Inclusivity:</strong> Borderless participation for builders, artists, traders, and crypto newcomers.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong>Cultural Authenticity:</strong> Highlighting Pan-African aesthetics, stories, and humor on the global stage.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong>Integrity & Open Ledger:</strong> No hidden developer taxes, no mint backdoors, permanent liquidity burn.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong>Compassion:</strong> Tangible contribution to feline welfare and animal rescue organizations.</span>
                </li>
              </ul>
            </div>
          )}

          {activeSection === 'tokenomics' && (
            <div className="space-y-4">
              <h3 className="text-xl font-extrabold text-white">3. Tokenomics (BEP-20 Architecture)</h3>
              <p>
                The $TAMIYANOIA token was deployed to prioritize fairness, deep liquidity, and complete absence of punitive friction.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800">
                  <div className="text-xs text-slate-400 font-mono">TOTAL TOKEN SUPPLY</div>
                  <div className="text-xl font-bold text-white mt-1">1,000,000,000,000,000</div>
                  <div className="text-xs text-amber-400">1 Quadrillion ($TAMIYANOIA)</div>
                </div>
                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800">
                  <div className="text-xs text-slate-400 font-mono">PERMANENT BURN</div>
                  <div className="text-xl font-bold text-red-400 mt-1">~500 Trillion (50%)</div>
                  <div className="text-xs text-slate-400">Transferred to address 0xdead</div>
                </div>
                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800">
                  <div className="text-xs text-slate-400 font-mono">BUY / SELL TAX</div>
                  <div className="text-xl font-bold text-emerald-400 mt-1">0% / 0%</div>
                  <div className="text-xs text-slate-400">Zero deductions on trade volume</div>
                </div>
                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800">
                  <div className="text-xs text-slate-400 font-mono">LIQUIDITY STATUS</div>
                  <div className="text-xl font-bold text-blue-400 mt-1">100% Burned</div>
                  <div className="text-xs text-slate-400">PancakeSwap V2 LP permanently locked</div>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'roadmap' && (
            <div className="space-y-4">
              <h3 className="text-xl font-extrabold text-white">4. Multi-Phase Roadmap</h3>
              <p>
                A methodical, 4-phase trajectory ensuring stability, community expansion, protocol utility, and tier-1 exchange integrations:
              </p>
              <div className="space-y-3">
                <div className="p-3.5 rounded-xl bg-slate-950 border border-emerald-500/30">
                  <span className="text-xs font-mono font-bold text-emerald-400 uppercase">Q4 2026: PHASE 01 — THE FOUNDATION (CTO PHASE)</span>
                  <p className="text-xs text-slate-300 mt-1">
                    Official website • Aggressive marketing • 70+ holders • Firescreener listing • Tiwicat Protocol listing • Ecosystem portal launch.
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950 border border-amber-500/30">
                  <span className="text-xs font-mono font-bold text-amber-400 uppercase">Q1 2027: PHASE 02 — GROWTH & ACCELERATION (CURRENT)</span>
                  <p className="text-xs text-slate-300 mt-1">
                    Token burn events (15%) • 500+ Holders • 1,000+ Telegram members • DexScreener Update • Community Dashboard.
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                  <span className="text-xs font-mono font-bold text-slate-400 uppercase">Q2 2027: PHASE 03 — ECOSYSTEM EXPANSION</span>
                  <p className="text-xs text-slate-400 mt-1">
                    Launch TAMI Swap (DEX) • First CEX listing • 5,000+ holders & 5,000+ Telegram members • Official TAMI merch.
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                  <span className="text-xs font-mono font-bold text-slate-400 uppercase">Q3 2027+: PHASE 04 — GLOBAL UTILITY & DAO</span>
                  <p className="text-xs text-slate-400 mt-1">
                    TAMI Burrow (NFT marketplace) • WinacoinDao ecosystem member • Emptycoin booster • +1 CEX listing • 10,000+ global holders • Wildlife conservation partnerships.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'conservation' && (
            <div className="space-y-4">
              <h3 className="text-xl font-extrabold text-white">5. TAMI Conservation & Community Welfare</h3>
              <p>
                A core commitment of the TAMIYANOIA project is providing tangible animal welfare support:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs text-slate-300">
                <li><strong>Rescue & Rehabilitation:</strong> Partnering with local veterinary clinics to treat abandoned and injured cats.</li>
                <li><strong>Shelter Nutrition:</strong> Bulk food supplies and medical vaccines provided to community cat shelters.</li>
                <li><strong>Global Awareness Campaigns:</strong> Coordinated events spotlighting animal protection, especially around International Cat Day.</li>
                <li><strong>Co-branded NFT Collections:</strong> Future artistic drops with 100% of mint proceeds dedicated to shelter expansions.</li>
                <li><strong>Open Book Transparency:</strong> Every expenditure and donation verifiable via publicly published on-chain transaction hashes.</li>
              </ul>
            </div>
          )}

          {activeSection === 'security' && (
            <div className="space-y-4">
              <h3 className="text-xl font-extrabold text-white">6. Smart Contract & Security Verification</h3>
              <p>
                Security is paramount. The $TAMIYANOIA smart contract follows open standards on BNB Chain.
              </p>
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2 font-mono text-xs">
                <div><strong>Contract Address:</strong> {CONTRACT_ADDRESS}</div>
                <div><strong>Blockchain:</strong> Binance Smart Chain (BNB Chain)</div>
                <div><strong>Standard:</strong> BEP-20</div>
                <div><strong>Decimals:</strong> 18</div>
                <div><strong>Liquidity Pool:</strong> PancakeSwap V2 (WBNB / TAMIYANOIA)</div>
                <div><strong>LP Status:</strong> 100% Permanently Burned</div>
              </div>
              <div className="flex items-center gap-3 pt-2">
                <a
                  href={OFFICIAL_LINKS.bscScan}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center gap-1.5"
                >
                  <span>Verify Contract on BscScan</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="p-4 sm:p-6 border-t border-slate-800 bg-slate-950/80 flex items-center justify-between shrink-0">
          <span className="text-[11px] text-slate-400">
            © 2026 TAMIYANOIA CAT. All rights reserved.
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs"
          >
            Close Whitepaper
          </button>
        </div>

      </div>
    </div>
  );
};
