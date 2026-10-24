# METANOIA ($METANOIA) — The First Female Luxury Feline AI Token 👑🐾

> *"Where AI meets feline royalty."*  
> *"Community from day one. Early holders = family."*  
> **#NotJustACat #QUEEN**

A luxury black & gold single-page, fully responsive, mobile-first website for **METANOIA ($METANOIA)** on BNB Smart Chain (BEP-20). Built with semantic HTML5, embedded CSS, and vanilla JavaScript—ready for instant one-click deployment on **Vercel**, **Netlify**, or GitHub Pages.

---

## 💎 Token Specifications

| Parameter | Value |
|---|---|
| **Token Name** | METANOIA |
| **Token Ticker** | `$METANOIA` |
| **Token Standard** | BEP-20 |
| **Network** | BNB Smart Chain (BSC) |
| **Chain ID** | `56` |
| **Contract Address** | `0xA4555A9f6bEf7F42FB341504722163a2ee180F0d` |
| **Total Supply** | 50,000,000,000,000 (50 Trillion) |
| **Tax** | 0% Buy / 0% Sell |
| **Liquidity** | 90% Locked via Team Finance |
| **CEX & Marketing** | 5% |
| **Airdrops & Rewards** | 5% |
| **DEX** | PancakeSwap V3 |
| **Launch Model** | 100% Fair Launch (No presale, no team allocation) |

---

## ✨ Design & Features

1. **Luxury Art-Deco Styling:**
   - Deep obsidian black background (`#0a0a0a`)
   - Shimmering metallic gold gradients (`#d4af37` to `#f5e6a3`)
   - High-tech cyan accents (`#2dd4d4`) for AI touches
   - Google Fonts: **Cinzel** (Headings) and **Inter** (Body)
   - Subtle gold shimmer particle canvas animation in background
   - IntersectionObserver smooth scroll-reveal animations

2. **9 Core Sections:**
   - **Sticky Navbar:** Brand logo, navigation links, mobile hamburger drawer, and Buy CTA
   - **Hero:** Crowned black panther queen mascot, contract box with one-click copy, PancakeSwap & Chart buttons
   - **About:** The Queen's philosophy with 3 highlight cards (Low fees on BSC, Fast community growth, Luxury branding)
   - **Tokenomics:** Economic facts grid and animated SVG gold donut chart (90% LP, 5% CEX/Marketing, 5% Airdrops)
   - **Roadmap:** 4-Phase strategic horizons (Awakening, Crown, Pride, Legacy) — horizontal on desktop, vertical on mobile
   - **Security:** 6 verified pillars (LP Locked, Contract Verified, No Mint, No Honeypot, Multi-sig Treasury, Ownership Renounced) with individual proof links
   - **How to Buy:** 4 simple acquisition steps on BNB Smart Chain
   - **Community:** *"Early holders = family"* banner with X, Telegram, DexScreener, and BSCScan buttons
   - **Footer:** Full legal meme token disclaimer, brand info, and quick links

3. **Central `CONFIG` Object:**
   All links, contract addresses, proofs, and image paths are maintained in a single clean `CONFIG` object at the top of the `<script>` tag in `index.html`.

---

## 🚀 Deploying to Vercel or Netlify

This project is a standalone single-file site. You can drag and drop the folder directly onto:
* **Netlify Drop:** Drag and drop the root folder containing `index.html` and `assets/`.
* **Vercel:** Import your GitHub repository (`main` branch) with framework preset set to "Other".

---

## 🖼️ Replacing Placeholder Assets & Links

Open `index.html` and locate the `CONFIG` object at the top of the `<script>` tag:

```javascript
const CONFIG = {
  contractAddress: "0xA4555A9f6bEf7F42FB341504722163a2ee180F0d",
  buyUrl: "https://pancakeswap.finance/swap?outputCurrency=0xA4555A9f6bEf7F42FB341504722163a2ee180F0d",
  chartUrl: "https://dexscreener.com/bsc/0xA4555A9f6bEf7F42FB341504722163a2ee180F0d",
  socials: {
    x: "https://x.com/YourHandle",
    telegram: "https://t.me/YourPride",
    dexscreener: "https://dexscreener.com/bsc/0xA4555A9f6bEf7F42FB341504722163a2ee180F0d",
    bscscan: "https://bscscan.com/token/0xA4555A9f6bEf7F42FB341504722163a2ee180F0d"
  },
  security: {
    lpLockDurationText: "12 Months (Extendable / Renewable)",
    lpUnlockDateText: "October 24, 2027",
    lpLockedPercentText: "90% (45,000,000,000,000 $METANOIA)",
    lockExpiryDate: "2027-10-24"
  },
  proofs: {
    lpLocked: "https://www.team.finance/view-coin/...",
    contractVerified: "https://bscscan.com/token/...",
    noMint: "https://bscscan.com/token/...",
    noHoneypot: "https://bscscan.com/token/...",
    multiSig: "https://bscscan.com/address/...",
    ownershipRenounced: "https://bscscan.com/tx/..."
  },
  images: {
    hero: "assets/hero.png",
    logo: "assets/logo.png",
    lpLocked: "assets/lp-locked.png",
    contractVerified: "assets/contract-verified.png",
    noMint: "assets/no-mint.png"
  }
};
```

Simply replace `assets/hero.png`, `assets/logo.png`, `assets/lp-locked.png`, `assets/contract-verified.png`, or `assets/no-mint.png` with your preferred image files whenever you are ready.



