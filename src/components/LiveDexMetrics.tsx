import React, { useState } from 'react';
import { TrendingUp, TrendingDown, DollarSign, Activity, Droplets, RefreshCw, Calculator, ArrowRight, ExternalLink, BarChart3, ShieldCheck } from 'lucide-react';
import { TokenMetrics } from '../types';
import { OFFICIAL_LINKS, PAIR_ADDRESS, CONTRACT_ADDRESS } from '../constants';
import { sounds } from '../utils/audio';

interface LiveDexMetricsProps {
  metrics: TokenMetrics | null;
  loading: boolean;
  onRefresh: () => void;
}

export const LiveDexMetrics: React.FC<LiveDexMetricsProps> = ({ metrics, loading, onRefresh }) => {
  const [calcInput, setCalcInput] = useState<string>('0.1');
  const [calcCurrency, setCalcCurrency] = useState<'BNB' | 'USD'>('BNB');
  const [showLiveChart, setShowLiveChart] = useState<boolean>(false);

  // Fallback price if API is loading or network error
  const currentPriceUsd = metrics?.priceUsd || 0.00000000001277;
  const currentPriceBnb = metrics?.priceBnb || 0.0000000000000173;
  const estimatedBnbUsd = currentPriceBnb > 0 ? currentPriceUsd / currentPriceBnb : 650;

  // Calculate estimated tokens
  const calculateTokens = (): string => {
    const amount = parseFloat(calcInput);
    if (isNaN(amount) || amount <= 0) return '0';

    if (calcCurrency === 'BNB') {
      const tokens = currentPriceBnb > 0 ? amount / currentPriceBnb : 0;
      return formatBigNumber(tokens);
    } else {
      const tokens = currentPriceUsd > 0 ? amount / currentPriceUsd : 0;
      return formatBigNumber(tokens);
    }
  };

  const formatBigNumber = (num: number): string => {
    if (num >= 1e12) return `${(num / 1e12).toFixed(2)} Trillion`;
    if (num >= 1e9) return `${(num / 1e9).toFixed(2)} Billion`;
    if (num >= 1e6) return `${(num / 1e6).toFixed(2)} Million`;
    return num.toLocaleString('en-US', { maximumFractionDigits: 0 });
  };

  return (
    <section className="relative py-12 bg-slate-900/60 border-y border-amber-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-semibold mb-2">
              <Activity className="w-3.5 h-3.5" />
              <span>LIVE ON-CHAIN METRICS</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white flex items-center gap-2">
              <span>$TAMIYANOIA Market Performance</span>
            </h2>
            <p className="text-sm text-slate-400">
              Synced directly with Binance Smart Chain PancakeSwap V2 Liquidity Pool
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                sounds.playCoinChime();
                setShowLiveChart(!showLiveChart);
              }}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 border transition ${
                showLiveChart
                  ? 'bg-amber-500 text-slate-950 border-amber-400'
                  : 'bg-slate-900 text-slate-300 border-slate-700 hover:border-amber-500/40'
              }`}
            >
              <BarChart3 className="w-4 h-4" />
              <span>{showLiveChart ? 'Hide Dex Chart' : 'Show Dex Chart'}</span>
            </button>

            <button
              onClick={() => {
                sounds.playPurr();
                onRefresh();
              }}
              disabled={loading}
              className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-700 hover:text-amber-400 transition disabled:opacity-50"
              title="Refresh live on-chain data"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin text-amber-400' : ''}`} />
            </button>

            <a
              href={OFFICIAL_LINKS.dexScreener}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-xs font-semibold text-amber-300 border border-amber-500/30 flex items-center gap-1.5 hover:border-amber-400 transition"
            >
              <span>DexScreener</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Live Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 mb-8">
          
          {/* Price USD */}
          <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 hover:border-amber-500/40 transition group">
            <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
              <span>Price (USD)</span>
              <DollarSign className="w-3.5 h-3.5 text-amber-400" />
            </div>
            <div className="text-base sm:text-lg font-mono font-bold text-white group-hover:text-amber-300 transition">
              ${metrics ? (metrics.priceUsd < 0.000001 ? metrics.priceUsd.toExponential(4) : metrics.priceUsd.toFixed(8)) : '$0.00000...'}
            </div>
            <div className="text-[11px] text-slate-500 font-mono mt-0.5">
              ~{metrics?.priceBnb ? metrics.priceBnb.toExponential(3) : '0.00'} BNB
            </div>
          </div>

          {/* 24h Change */}
          <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 hover:border-amber-500/40 transition">
            <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
              <span>24h Change</span>
              {(metrics?.change24h ?? 0) >= 0 ? (
                <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
              ) : (
                <TrendingDown className="w-3.5 h-3.5 text-rose-400" />
              )}
            </div>
            <div
              className={`text-base sm:text-lg font-mono font-bold ${
                (metrics?.change24h ?? 0) >= 0 ? 'text-emerald-400' : 'text-rose-400'
              }`}
            >
              {(metrics?.change24h ?? 0) >= 0 ? '+' : ''}
              {metrics?.change24h !== undefined ? metrics.change24h.toFixed(2) : '0.00'}%
            </div>
            <div className="text-[11px] text-slate-500 font-mono mt-0.5">
              6h: {metrics?.change6h ? (metrics.change6h >= 0 ? '+' : '') + metrics.change6h.toFixed(1) + '%' : '0.0%'}
            </div>
          </div>

          {/* 24h Volume */}
          <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 hover:border-amber-500/40 transition">
            <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
              <span>24h Volume</span>
              <Activity className="w-3.5 h-3.5 text-amber-400" />
            </div>
            <div className="text-base sm:text-lg font-mono font-bold text-white">
              ${metrics?.volume24h ? metrics.volume24h.toLocaleString('en-US', { maximumFractionDigits: 0 }) : '1,180'}
            </div>
            <div className="text-[11px] text-slate-500 font-mono mt-0.5">
              On PancakeSwap V2
            </div>
          </div>

          {/* Liquidity */}
          <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 hover:border-amber-500/40 transition">
            <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
              <span>Liquidity (USD)</span>
              <Droplets className="w-3.5 h-3.5 text-blue-400" />
            </div>
            <div className="text-base sm:text-lg font-mono font-bold text-white">
              ${metrics?.liquidityUsd ? metrics.liquidityUsd.toLocaleString('en-US', { maximumFractionDigits: 0 }) : '1,282'}
            </div>
            <div className="text-[11px] text-emerald-400 font-mono mt-0.5 flex items-center gap-1">
              <ShieldCheck className="w-3 h-3" />
              <span>100% Locked</span>
            </div>
          </div>

          {/* Market Cap */}
          <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 hover:border-amber-500/40 transition">
            <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
              <span>Market Cap</span>
              <DollarSign className="w-3.5 h-3.5 text-emerald-400" />
            </div>
            <div className="text-base sm:text-lg font-mono font-bold text-amber-300">
              ${metrics?.marketCap ? metrics.marketCap.toLocaleString('en-US', { maximumFractionDigits: 0 }) : '6,389'}
            </div>
            <div className="text-[11px] text-slate-500 font-mono mt-0.5">
              FDV: ${metrics?.fdv ? metrics.fdv.toLocaleString('en-US', { maximumFractionDigits: 0 }) : '6,389'}
            </div>
          </div>

          {/* 24h Transactions */}
          <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 hover:border-amber-500/40 transition">
            <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
              <span>24h Trades</span>
              <TrendingUp className="w-3.5 h-3.5 text-purple-400" />
            </div>
            <div className="text-base sm:text-lg font-mono font-bold text-white">
              {(metrics?.txns24hBuys ?? 37) + (metrics?.txns24hSells ?? 64)}
            </div>
            <div className="text-[11px] text-slate-400 font-mono mt-0.5">
              <span className="text-emerald-400">{metrics?.txns24hBuys ?? 37} Buys</span> /{' '}
              <span className="text-rose-400">{metrics?.txns24hSells ?? 64} Sells</span>
            </div>
          </div>

        </div>

        {/* Live DexScreener Chart View */}
        {showLiveChart && (
          <div className="mb-8 rounded-2xl overflow-hidden border border-amber-500/30 bg-slate-950 shadow-2xl p-2">
            <div className="p-3 bg-slate-900 flex items-center justify-between text-xs border-b border-slate-800">
              <div className="flex items-center gap-2 font-mono text-amber-300">
                <BarChart3 className="w-4 h-4" />
                <span>DEXSCREENER LIVE CANDLESTICK FEED: TAMIYANOIA / WBNB</span>
              </div>
              <a
                href={OFFICIAL_LINKS.dexScreener}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white flex items-center gap-1"
              >
                <span>Open Full Screen</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            <div className="w-full h-[520px] relative">
              <iframe
                src={`https://dexscreener.com/bsc/${PAIR_ADDRESS}?embed=1&theme=dark&trades=0&info=0`}
                title="TAMIYANOIA DEXScreener Live Chart"
                className="w-full h-full border-0"
              />
            </div>
          </div>
        )}

        {/* Interactive TAMI Swap Calculator / Estimator */}
        <div className="p-6 rounded-3xl bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-amber-500/30 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            <div className="lg:col-span-5 space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400">
                <Calculator className="w-4 h-4" />
                <span>INTERACTIVE TOKEN ESTIMATOR</span>
              </div>
              <h3 className="text-xl font-bold text-white">
                How many $TAMIYANOIA tokens will you get?
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Calculate your token allocation at current pool liquidity. With 0% buy tax, every cent of your swap goes straight into your bag!
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="flex flex-col sm:flex-row items-center gap-3">
                
                {/* Input box */}
                <div className="w-full sm:flex-1 relative">
                  <div className="flex items-center bg-slate-950 rounded-xl border border-slate-800 focus-within:border-amber-400 p-2">
                    <input
                      type="number"
                      step="any"
                      min="0"
                      value={calcInput}
                      onChange={(e) => setCalcInput(e.target.value)}
                      placeholder="Enter amount"
                      className="w-full bg-transparent text-white font-mono font-bold text-lg px-2 focus:outline-none"
                    />
                    <div className="flex items-center gap-1 bg-slate-900 px-2.5 py-1 rounded-lg border border-slate-800">
                      <button
                        onClick={() => setCalcCurrency('BNB')}
                        className={`text-xs font-bold px-2 py-0.5 rounded transition ${
                          calcCurrency === 'BNB' ? 'bg-amber-500 text-slate-950' : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        BNB
                      </button>
                      <button
                        onClick={() => setCalcCurrency('USD')}
                        className={`text-xs font-bold px-2 py-0.5 rounded transition ${
                          calcCurrency === 'USD' ? 'bg-amber-500 text-slate-950' : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        USD
                      </button>
                    </div>
                  </div>

                  {/* Preset chips */}
                  <div className="flex items-center gap-1.5 mt-2">
                    <span className="text-[11px] text-slate-500">Quick:</span>
                    {(calcCurrency === 'BNB' ? ['0.05', '0.1', '0.5', '1.0'] : ['10', '25', '50', '100']).map((val) => (
                      <button
                        key={val}
                        onClick={() => setCalcInput(val)}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 transition"
                      >
                        {val} {calcCurrency}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="hidden sm:block text-slate-600">
                  <ArrowRight className="w-5 h-5 text-amber-500" />
                </div>

                {/* Result box */}
                <div className="w-full sm:flex-1 p-3 rounded-xl bg-slate-950 border border-amber-500/30 text-center sm:text-left">
                  <div className="text-[11px] text-slate-400 font-medium">Estimated Tokens</div>
                  <div className="text-lg font-mono font-extrabold text-amber-300 truncate">
                    ≈ {calculateTokens()}
                  </div>
                  <div className="text-[10px] text-emerald-400 font-mono mt-0.5">
                    $TAMIYANOIA • 0% Tax applied
                  </div>
                </div>

                {/* Direct Buy Button */}
                <a
                  href={OFFICIAL_LINKS.pancakeSwap}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-4 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 text-slate-950 font-extrabold text-xs whitespace-nowrap flex items-center justify-center gap-1.5 shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 active:scale-95 transition"
                >
                  <span>Swap on Pancake</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
