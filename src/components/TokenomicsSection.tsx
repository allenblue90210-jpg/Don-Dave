import React, { useState } from 'react';
import { PieChart, Flame, Droplets, ShieldCheck, Copy, Check, ExternalLink, Zap } from 'lucide-react';
import { CONTRACT_ADDRESS, TOKENOMICS_DATA, OFFICIAL_LINKS } from '../constants';
import { sounds } from '../utils/audio';
import confetti from 'canvas-confetti';

export const TokenomicsSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyContract = () => {
    navigator.clipboard.writeText(CONTRACT_ADDRESS);
    setCopied(true);
    sounds.playCoinChime();
    confetti({
      particleCount: 40,
      spread: 50,
      origin: { y: 0.6 },
      colors: ['#F59E0B', '#EF4444', '#10B981'],
    });
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="tokenomics" className="py-20 relative bg-slate-900/40 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <PieChart className="w-3.5 h-3.5" />
            <span>BEP-20 Tokenomics</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white">
            Built for Long-Term{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-orange-500">
              Community Development
            </span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Clean, fair, and uncompromised token structure on Binance Smart Chain. 0% taxes, 100% burned liquidity, and transparent supply allocation.
          </p>
        </div>

        {/* 4 Big Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          
          <div className="p-6 rounded-3xl bg-slate-950/80 border border-slate-800 hover:border-amber-500/40 transition">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-4">
              <Zap className="w-6 h-6" />
            </div>
            <div className="text-xs text-slate-400 font-mono">TOTAL SUPPLY</div>
            <div className="text-2xl font-black text-white mt-1">1,000T</div>
            <div className="text-xs text-slate-400 mt-1">1,000,000,000,000,000</div>
            <div className="text-[11px] text-amber-300/80 font-mono mt-2">1 Quadrillion BEP-20 Tokens</div>
          </div>

          <div className="p-6 rounded-3xl bg-slate-950/80 border border-slate-800 hover:border-red-500/40 transition">
            <div className="w-12 h-12 rounded-2xl bg-red-500/10 text-red-400 flex items-center justify-center mb-4">
              <Flame className="w-6 h-6" />
            </div>
            <div className="text-xs text-slate-400 font-mono">BURNED PERMANENTLY</div>
            <div className="text-2xl font-black text-red-400 mt-1">~500T (50%)</div>
            <div className="text-xs text-slate-400 mt-1">Sent to 0xdead on-chain</div>
            <div className="text-[11px] text-red-300/80 font-mono mt-2">Deflationary Supply Cut</div>
          </div>

          <div className="p-6 rounded-3xl bg-slate-950/80 border border-slate-800 hover:border-emerald-500/40 transition">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-4">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div className="text-xs text-slate-400 font-mono">TRADING TAX</div>
            <div className="text-2xl font-black text-emerald-400 mt-1">0% / 0%</div>
            <div className="text-xs text-slate-400 mt-1">Zero Buy / Zero Sell Tax</div>
            <div className="text-[11px] text-emerald-300/80 font-mono mt-2">No Hidden Fees or Deductions</div>
          </div>

          <div className="p-6 rounded-3xl bg-slate-950/80 border border-slate-800 hover:border-blue-500/40 transition">
            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-4">
              <Droplets className="w-6 h-6" />
            </div>
            <div className="text-xs text-slate-400 font-mono">LIQUIDITY STATUS</div>
            <div className="text-2xl font-black text-blue-400 mt-1">100% Burned</div>
            <div className="text-xs text-slate-400 mt-1">LP Tokens Sent to Dead Address</div>
            <div className="text-[11px] text-blue-300/80 font-mono mt-2">Zero Rug Risk Guarantee</div>
          </div>

        </div>

        {/* Visual Allocation Breakdown Bar */}
        <div className="p-8 rounded-3xl bg-slate-950 border border-amber-500/30 mb-12">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-xl font-bold text-white">Supply Allocation Breakdown</h3>
              <p className="text-xs text-slate-400">Total 100% supply accounted for transparently</p>
            </div>
            <div className="flex items-center gap-4 text-xs font-mono">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500"></span>
                <span className="text-slate-300">Burned (50%)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-amber-400"></span>
                <span className="text-slate-300">Circulating (50%)</span>
              </div>
            </div>
          </div>

          {/* Progress bar */}
          <div className="h-6 w-full rounded-full bg-slate-900 overflow-hidden flex p-1 border border-slate-800">
            <div
              className="h-full bg-gradient-to-r from-red-600 to-red-500 rounded-l-full relative group transition-all"
              style={{ width: '50%' }}
              title="50% Permanently Burned"
            >
              <span className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-white uppercase tracking-wider">
                50% Burned 🔥
              </span>
            </div>
            <div
              className="h-full bg-gradient-to-r from-amber-500 to-yellow-400 rounded-r-full relative group transition-all"
              style={{ width: '50%' }}
              title="50% Circulating Liquidity"
            >
              <span className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-slate-950 uppercase tracking-wider">
                50% Circulating 🐾
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 pt-6 border-t border-slate-800/80">
            <div className="p-4 rounded-2xl bg-slate-900/50 border border-slate-800/80">
              <div className="flex items-center justify-between">
                <span className="font-bold text-sm text-red-400 flex items-center gap-2">
                  <Flame className="w-4 h-4" />
                  <span>500 Trillion Burned</span>
                </span>
                <span className="text-xs font-mono text-slate-400">50%</span>
              </div>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Removed from circulation permanently to create natural scarcity and protect token holders from inflation.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/50 border border-slate-800/80">
              <div className="flex items-center justify-between">
                <span className="font-bold text-sm text-amber-300 flex items-center gap-2">
                  <Droplets className="w-4 h-4" />
                  <span>500 Trillion Circulating</span>
                </span>
                <span className="text-xs font-mono text-slate-400">50%</span>
              </div>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Active in PancakeSwap decentralized liquidity pool and in the hands of community members across the globe.
              </p>
            </div>
          </div>
        </div>

        {/* Contract Verification Bar */}
        <div className="p-6 rounded-3xl bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-amber-500/5 border border-amber-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <div className="text-xs font-mono text-amber-400 uppercase tracking-wider font-bold">
              VERIFIED BNB CHAIN CONTRACT
            </div>
            <div className="font-mono text-sm sm:text-base text-white font-bold break-all">
              {CONTRACT_ADDRESS}
            </div>
          </div>
          <div className="flex items-center gap-3 w-full md:w-auto">
            <button
              onClick={copyContract}
              className={`flex-1 md:flex-none px-4 py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition ${
                copied ? 'bg-emerald-600 text-white' : 'bg-slate-900 hover:bg-slate-800 text-amber-300 border border-amber-500/30'
              }`}
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'Copied CA' : 'Copy CA'}</span>
            </button>
            <a
              href={OFFICIAL_LINKS.bscScan}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 md:flex-none px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 transition active:scale-95"
            >
              <span>View on BscScan</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
