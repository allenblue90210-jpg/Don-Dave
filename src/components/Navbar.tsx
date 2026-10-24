import React, { useState } from 'react';
import { ExternalLink, Copy, Check, Menu, X, BookOpen, Flame, ArrowUpRight } from 'lucide-react';
import { CONTRACT_ADDRESS, OFFICIAL_LINKS } from '../constants';
import { TokenMetrics } from '../types';
import { sounds } from '../utils/audio';
import confetti from 'canvas-confetti';

interface NavbarProps {
  metrics: TokenMetrics | null;
  onOpenWhitepaper: () => void;
  onOpenMemeStudio: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ metrics, onOpenWhitepaper, onOpenMemeStudio }) => {
  const [copied, setCopied] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const copyContract = () => {
    navigator.clipboard.writeText(CONTRACT_ADDRESS);
    setCopied(true);
    sounds.playCoinChime();
    confetti({
      particleCount: 25,
      spread: 40,
      origin: { y: 0.1 },
      colors: ['#F59E0B', '#EF4444', '#10B981'],
    });
    setTimeout(() => setCopied(false), 2500);
  };

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Ecosystem', href: '#ecosystem' },
    { label: 'Tokenomics', href: '#tokenomics' },
    { label: 'Roadmap', href: '#roadmap' },
    { label: 'Gallery & Memes', href: '#gallery' },
    { label: 'Conservation', href: '#conservation' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-slate-950/80 border-b border-amber-500/20 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Logo & Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full blur opacity-70 group-hover:opacity-100 transition duration-300"></div>
              <img
                src="/images/favicon.png"
                alt="TAMIYANOIA CAT"
                className="relative w-11 h-11 rounded-full border-2 border-amber-400/80 object-cover transform group-hover:scale-105 transition duration-200"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg sm:text-xl tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-orange-500">
                TAMIYANOIA
              </span>
              <span className="text-[10px] text-amber-200/70 font-semibold uppercase tracking-widest flex items-center gap-1">
                From Africa to the World 🌍🐱
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-amber-400 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-amber-400 after:transition-all"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={onOpenWhitepaper}
              className="flex items-center gap-1.5 text-amber-400 hover:text-amber-300 transition-colors"
            >
              <BookOpen className="w-4 h-4" />
              <span>Whitepaper</span>
            </button>
          </nav>

          {/* Right Action buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Live Price Tag */}
            {metrics && (
              <a
                href={OFFICIAL_LINKS.dexScreener}
                target="_blank"
                rel="noopener noreferrer"
                title="View on DexScreener"
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-900 border border-slate-700/80 text-xs text-slate-300 hover:border-amber-500/50 transition-colors"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="font-mono text-slate-200 font-bold">
                  ${metrics.priceUsd < 0.000001 ? metrics.priceUsd.toExponential(3) : metrics.priceUsd.toFixed(6)}
                </span>
                <span
                  className={`text-[11px] font-semibold ${
                    metrics.change24h >= 0 ? 'text-emerald-400' : 'text-rose-400'
                  }`}
                >
                  {metrics.change24h >= 0 ? '+' : ''}
                  {metrics.change24h.toFixed(1)}%
                </span>
              </a>
            )}

            {/* Quick Contract Copy */}
            <button
              onClick={copyContract}
              title="Copy verified contract address"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/90 border border-amber-500/30 hover:border-amber-400 text-xs font-mono text-amber-300 transition-all hover:bg-slate-800"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-amber-400" />}
              <span>{copied ? 'Copied CA!' : '0x8bea...c898'}</span>
            </button>

            {/* Buy $TAMI CTA */}
            <a
              href={OFFICIAL_LINKS.pancakeSwap}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-xs font-bold rounded-lg group bg-gradient-to-br from-amber-400 via-orange-500 to-amber-600 group-hover:from-amber-400 group-hover:to-orange-500 hover:text-white text-slate-950 shadow-md shadow-amber-500/20 active:scale-95 transition-transform"
            >
              <span className="relative px-3.5 py-1.5 transition-all ease-in duration-75 bg-amber-400 group-hover:bg-opacity-0 rounded-[7px] text-slate-950 group-hover:text-white flex items-center gap-1.5">
                <Flame className="w-3.5 h-3.5 fill-current text-orange-600 group-hover:text-amber-300" />
                <span>Buy $TAMI</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </a>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={copyContract}
              className="p-2 rounded-lg bg-slate-900 border border-amber-500/30 text-amber-300 text-xs"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-900 text-slate-200 hover:text-white hover:bg-slate-800 border border-slate-800"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950/95 border-b border-amber-500/20 px-4 pt-3 pb-6 space-y-3 backdrop-blur-2xl">
          {metrics && (
            <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-xs font-mono">
              <span className="text-slate-400">Live $TAMI Price:</span>
              <span className="text-amber-300 font-bold">
                ${metrics.priceUsd < 0.000001 ? metrics.priceUsd.toExponential(3) : metrics.priceUsd.toFixed(6)}
              </span>
              <span className={metrics.change24h >= 0 ? 'text-emerald-400' : 'text-rose-400'}>
                {metrics.change24h >= 0 ? '+' : ''}{metrics.change24h.toFixed(1)}%
              </span>
            </div>
          )}

          <div className="grid grid-cols-2 gap-2 text-sm">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-slate-900 text-slate-300 hover:text-amber-400 transition"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-800/80 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenWhitepaper();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-amber-300 font-medium text-sm border border-amber-500/20"
            >
              <BookOpen className="w-4 h-4" />
              <span>Read Whitepaper</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenMemeStudio();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-purple-900/30 hover:bg-purple-900/50 text-purple-200 font-medium text-sm border border-purple-500/30"
            >
              <span>Create TAMI Memes</span>
            </button>

            <a
              href={OFFICIAL_LINKS.pancakeSwap}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-gradient-to-r from-amber-500 to-orange-600 text-slate-950 font-bold text-sm shadow-lg shadow-amber-500/20"
            >
              <span>Buy $TAMI on PancakeSwap</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
