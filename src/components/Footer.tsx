import React, { useState } from 'react';
import { Copy, Check, Flame, ExternalLink, Heart } from 'lucide-react';
import { CONTRACT_ADDRESS, OFFICIAL_LINKS } from '../constants';
import { sounds } from '../utils/audio';

interface FooterProps {
  onOpenWhitepaper: () => void;
  onOpenMemeStudio: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenWhitepaper, onOpenMemeStudio }) => {
  const [copied, setCopied] = useState(false);

  const copyContract = () => {
    navigator.clipboard.writeText(CONTRACT_ADDRESS);
    setCopied(true);
    sounds.playCoinChime();
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="bg-slate-950 border-t border-amber-500/20 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/images/favicon.png"
                alt="TAMI Logo"
                className="w-12 h-12 rounded-full border border-amber-400"
              />
              <div>
                <span className="font-extrabold text-xl text-white">TAMIYANOIA CAT</span>
                <p className="text-xs text-amber-400 font-mono">From Africa to the World. 🌍🐱</p>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              A community-driven Web3 ecosystem built around African culture, creativity, entertainment, and decentralized participation. Powered by Binance Smart Chain (BEP-20).
            </p>

            <div className="flex items-center gap-2 pt-2">
              <button
                onClick={copyContract}
                className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-amber-300 flex items-center gap-2 hover:border-amber-500/50 transition"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied Contract!' : '0x8bea...c898'}</span>
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#about" className="hover:text-amber-400 transition">About TAMI</a></li>
              <li><a href="#ecosystem" className="hover:text-amber-400 transition">Ecosystem Pillars</a></li>
              <li><a href="#tokenomics" className="hover:text-amber-400 transition">Tokenomics (0% Tax)</a></li>
              <li><a href="#roadmap" className="hover:text-amber-400 transition">2026-2027 Roadmap</a></li>
              <li><a href="#gallery" className="hover:text-amber-400 transition">Art & Meme Studio</a></li>
              <li><a href="#conservation" className="hover:text-amber-400 transition">Cat Conservation</a></li>
            </ul>
          </div>

          {/* Ecosystem Resources */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider">
              Resources
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button onClick={onOpenWhitepaper} className="hover:text-amber-400 transition text-left">
                  Whitepaper Summary
                </button>
              </li>
              <li>
                <button onClick={onOpenMemeStudio} className="hover:text-amber-400 transition text-left">
                  Meme & Sticker Studio
                </button>
              </li>
              <li>
                <a href={OFFICIAL_LINKS.bscScan} target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition flex items-center gap-1">
                  <span>BscScan Contract</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a href={OFFICIAL_LINKS.dexScreener} target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition flex items-center gap-1">
                  <span>DexScreener Chart</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a href={OFFICIAL_LINKS.pancakeSwap} target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition flex items-center gap-1">
                  <span>PancakeSwap Pool</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Social Channels */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider">
              Join TAMI FAM
            </h4>
            <div className="flex flex-wrap gap-2">
              <a
                href={OFFICIAL_LINKS.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 hover:border-amber-400/50 transition flex items-center gap-2 text-xs font-semibold"
              >
                <img src="/images/x.png" alt="X / Twitter" className="w-4 h-4 object-contain" />
                <span>@TAMIYANOIA_Cat</span>
              </a>

              <a
                href={OFFICIAL_LINKS.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 hover:border-amber-400/50 transition flex items-center gap-2 text-xs font-semibold"
              >
                <img src="/images/telegram.png" alt="Telegram" className="w-4 h-4 object-contain" />
                <span>Telegram Hub</span>
              </a>
            </div>

            <div className="pt-2">
              <a
                href={OFFICIAL_LINKS.pancakeSwap}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 text-slate-950 font-extrabold text-xs shadow-lg shadow-amber-500/20 active:scale-95 transition"
              >
                <Flame className="w-4 h-4" />
                <span>Buy $TAMI on PancakeSwap</span>
              </a>
            </div>
          </div>

        </div>

        {/* Disclaimer & Copyright */}
        <div className="pt-8 space-y-4">
          <p className="text-[11px] text-slate-500 leading-relaxed max-w-4xl">
            <strong>Disclaimer:</strong> TAMIYANOIA Cat is a community-driven culture and technology project. Nothing on this website should be interpreted as financial advice, an investment offer, or a promise of financial returns. Digital assets can be volatile and may involve significant risk. Always conduct your own research (DYOR).
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 pt-2 border-t border-slate-900">
            <div>
              © 2026 TAMIYANOIA CAT. All rights reserved. "From Africa to the World." 🌍🐾
            </div>
            <div className="flex items-center gap-1 text-slate-400">
              <span>Made with</span>
              <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
              <span>for the TAMI FAM worldwide</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};
