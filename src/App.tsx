/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useCallback } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { LiveDexMetrics } from './components/LiveDexMetrics';
import { AboutSection } from './components/AboutSection';
import { EcosystemSection } from './components/EcosystemSection';
import { TokenomicsSection } from './components/TokenomicsSection';
import { RoadmapSection } from './components/RoadmapSection';
import { ArtGallerySection } from './components/ArtGallerySection';
import { ConservationSection } from './components/ConservationSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { WhitepaperModal } from './components/WhitepaperModal';
import { PetTheCat } from './components/PetTheCat';
import { TokenMetrics } from './types';
import { CONTRACT_ADDRESS, PAIR_ADDRESS } from './constants';

export default function App() {
  const [metrics, setMetrics] = useState<TokenMetrics | null>(null);
  const [loadingMetrics, setLoadingMetrics] = useState<boolean>(false);
  const [isWhitepaperOpen, setIsWhitepaperOpen] = useState<boolean>(false);

  // Fetch live market data from DexScreener API
  const fetchMetrics = useCallback(async () => {
    setLoadingMetrics(true);
    try {
      const res = await fetch(`https://api.dexscreener.com/latest/dex/tokens/${CONTRACT_ADDRESS}`);
      if (!res.ok) throw new Error('Network error');
      const data = await res.json();
      const pair = data.pairs?.[0];

      if (pair) {
        setMetrics({
          priceUsd: parseFloat(pair.priceUsd) || 0.00000000001277,
          priceBnb: parseFloat(pair.priceNative) || 0.0000000000000173,
          change24h: pair.priceChange?.h24 || 27.76,
          change6h: pair.priceChange?.h6 || -15.75,
          change1h: pair.priceChange?.h1 || -0.87,
          volume24h: pair.volume?.h24 || 1184.73,
          liquidityUsd: pair.liquidity?.usd || 1282.64,
          marketCap: pair.marketCap || 6389,
          fdv: pair.fdv || 6389,
          pairAddress: pair.pairAddress || PAIR_ADDRESS,
          txns24hBuys: pair.txns?.h24?.buys || 37,
          txns24hSells: pair.txns?.h24?.sells || 64,
        });
      }
    } catch {
      // Fallback baseline metrics if client is rate-limited or offline
      setMetrics((prev) => prev || {
        priceUsd: 0.00000000001277,
        priceBnb: 0.0000000000000173,
        change24h: 27.76,
        change6h: -15.75,
        change1h: -0.87,
        volume24h: 1184.73,
        liquidityUsd: 1282.64,
        marketCap: 6389,
        fdv: 6389,
        pairAddress: PAIR_ADDRESS,
        txns24hBuys: 37,
        txns24hSells: 64,
      });
    } finally {
      setLoadingMetrics(false);
    }
  }, []);

  useEffect(() => {
    fetchMetrics();
    // Poll every 30 seconds for live trading price updates
    const interval = setInterval(fetchMetrics, 30000);
    return () => clearInterval(interval);
  }, [fetchMetrics]);

  const scrollToMemeStudio = () => {
    const galleryEl = document.getElementById('gallery');
    if (galleryEl) {
      galleryEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-amber-500 selection:text-black">
      {/* Navigation */}
      <Navbar
        metrics={metrics}
        onOpenWhitepaper={() => setIsWhitepaperOpen(true)}
        onOpenMemeStudio={scrollToMemeStudio}
      />

      {/* Main Content */}
      <main className="flex-1">
        <Hero
          onOpenWhitepaper={() => setIsWhitepaperOpen(true)}
          onOpenMemeStudio={scrollToMemeStudio}
        />

        <LiveDexMetrics
          metrics={metrics}
          loading={loadingMetrics}
          onRefresh={fetchMetrics}
        />

        <AboutSection />

        <EcosystemSection />

        <TokenomicsSection />

        <RoadmapSection />

        <ArtGallerySection
          onOpenMemeStudio={scrollToMemeStudio}
        />

        <ConservationSection />

        <FaqSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenWhitepaper={() => setIsWhitepaperOpen(true)}
        onOpenMemeStudio={scrollToMemeStudio}
      />

      {/* Interactive Floating Companion Pet */}
      <PetTheCat />

      {/* Whitepaper Interactive Modal */}
      <WhitepaperModal
        isOpen={isWhitepaperOpen}
        onClose={() => setIsWhitepaperOpen(false)}
      />
    </div>
  );
}
