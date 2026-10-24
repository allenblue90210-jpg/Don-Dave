import { RoadmapItem, EcosystemPillar, ArtItem } from './types';

export const CONTRACT_ADDRESS = '0x8bea530150675c1eC537Bde45c0480164590c898';
export const PAIR_ADDRESS = '0x0c870159A17514A65844c97fA111BA73A3eF7f9d';
export const TOKEN_NAME = 'TAMIYANOIA CAT';
export const TOKEN_SYMBOL = '$TAMIYANOIA';
export const CHAIN = 'BNB Smart Chain (BEP-20)';

export const OFFICIAL_LINKS = {
  website: 'https://www.tamiyanoiacat.fun/',
  twitter: 'https://x.com/TAMIYANOIA_Cat',
  twitterAlt: 'https://x.com/tamiyanoia_cat',
  telegram: 'https://t.me/tamiyanoiacat',
  pancakeSwap: `https://pancakeswap.finance/swap?outputCurrency=${CONTRACT_ADDRESS}`,
  dexScreener: `https://dexscreener.com/bsc/${PAIR_ADDRESS}`,
  bscScan: `https://bscscan.com/token/${CONTRACT_ADDRESS}`,
};

export const TOKENOMICS_DATA = {
  totalSupply: '1,000,000,000,000,000',
  totalSupplyShort: '1,000 Trillion (1 Quadrillion)',
  burnedSupply: '~500 Trillion',
  burnedPercent: 50,
  circulatingSupply: '~500 Trillion',
  circulatingPercent: 50,
  buyTax: '0%',
  sellTax: '0%',
  lpStatus: '100% Liquidity Burned & Permanently Locked',
  distribution: [
    { label: 'Permanently Burned (0xdead)', percentage: 50, color: '#EF4444', description: 'Burned out of circulation forever on BNB Chain' },
    { label: 'Circulating Liquidity & Community', percentage: 50, color: '#F59E0B', description: 'Locked in PancakeSwap pool & decentralized community circulation' },
  ],
};

export const ECOSYSTEM_PILLARS: EcosystemPillar[] = [
  {
    id: 'character',
    name: 'TAMIYANOIA CAT',
    subtitle: 'The Global Cultural Mascot',
    description: 'A distinctive, fierce yet endearing feline character embodying African agility, resilience, and curiosity. More than an avatar—an icon of unity and cultural pride.',
    tag: 'Identity & Lore',
    iconName: 'Cat',
    features: ['Original handcrafted comic lore', 'High-energy meme culture', 'Global African ambassador in Web3'],
    gradient: 'from-amber-500/20 via-orange-500/10 to-transparent',
  },
  {
    id: 'token',
    name: '$TAMIYANOIA Token',
    subtitle: 'Pure Utility on BNB Chain',
    description: 'Native BEP-20 community token built with 0% transaction tax, high speed, and fractional-cent gas fees on Binance Smart Chain.',
    tag: 'Decentralized Asset',
    iconName: 'Coins',
    features: ['0% Buy Tax / 0% Sell Tax', '100% LP Burned permanently', 'Deflationary community burns'],
    gradient: 'from-yellow-500/20 via-amber-500/10 to-transparent',
  },
  {
    id: 'fam',
    name: 'TAMIYANOIA FAM',
    subtitle: 'Decentralized Global Community',
    description: 'A borderless fellowship uniting African builders, traders, digital artists, creators, and international crypto enthusiasts.',
    tag: 'Community',
    iconName: 'Users',
    features: ['Community voice & governance votes', 'Weekly X Spaces & AMAs', 'Active Telegram hub & regional groups'],
    gradient: 'from-emerald-500/20 via-teal-500/10 to-transparent',
  },
  {
    id: 'creative',
    name: 'TAMIYANOIA CREATIVE',
    subtitle: 'Art, Memes & Media Studio',
    description: 'Empowering community artists and storytellers to produce viral memes, webcomics, 3D animations, and digital collectibles celebrating African heritage.',
    tag: 'Creator Economy',
    iconName: 'Palette',
    features: ['Meme bounties & creator rewards', 'Open-source sticker packs', 'Digital comic series & merchandise'],
    gradient: 'from-purple-500/20 via-pink-500/10 to-transparent',
  },
  {
    id: 'labs',
    name: 'TAMIYANOIA LABS',
    subtitle: 'Web3 Products & Protocols',
    description: 'The technological arm engineering TAMI Swap (DEX), TAMI Burrow (NFT marketplace), automated token burn trackers, and decentralized utilities.',
    tag: 'Infrastructure',
    iconName: 'Cpu',
    features: ['TAMI Swap decentralized exchange', 'TAMI Burrow NFT market', 'Smart contract analytics & tools'],
    gradient: 'from-blue-500/20 via-cyan-500/10 to-transparent',
  },
  {
    id: 'africa',
    name: 'TAMIYANOIA AFRICA',
    subtitle: 'Grassroots Education & Impact',
    description: 'Real on-the-ground blockchain education workshops across African university campuses and tech hubs, bridging talent with global Web3 opportunities.',
    tag: 'Social Impact',
    iconName: 'Globe',
    features: ['Campus Web3 developer workshops', 'Digital literacy initiatives', 'Direct outreach across African tech hubs'],
    gradient: 'from-green-500/20 via-emerald-500/10 to-transparent',
  },
];

export const ROADMAP_ITEMS: RoadmapItem[] = [
  {
    quarter: 'Q4 2026',
    phase: 'PHASE 01',
    title: 'CTO & The Foundation',
    status: 'completed',
    description: 'Establishment of the community takeover, brand revitalization, and core infrastructure launch.',
    milestones: [
      'Official website & ecosystem revamp',
      'Aggressive global community marketing campaigns',
      'Initial 70+ holders milestone reached',
      'Firescreener and Tiwicat Protocol listing',
      'Smart contract audit verification on BNB Chain',
      'Launch of social channels & international X spaces',
    ],
  },
  {
    quarter: 'Q1 2027',
    phase: 'PHASE 02',
    title: 'Growth & Acceleration',
    status: 'in-progress',
    description: 'Scaling community footprint, aggressive token burning, and enhanced liquidity analytics.',
    milestones: [
      'Token burn events (15% additional burns planned)',
      'Milestone target: 500+ on-chain holders',
      'Grow Telegram community to 1,000+ verified members',
      'DexScreener profile update & fast-track verification',
      'Launch of TAMI Community Dashboard & reward portal',
      'First cat welfare shelter donation in East Africa',
    ],
  },
  {
    quarter: 'Q2 2027',
    phase: 'PHASE 03',
    title: 'Ecosystem Expansion',
    status: 'upcoming',
    description: 'Rolling out decentralized finance infrastructure and tier-2 centralized exchange listings.',
    milestones: [
      'Launch TAMI Swap (Zero-slippage decentralized exchange)',
      'First centralized exchange (CEX) listing',
      'Target milestone: 5,000+ active holders',
      '5,000+ active Telegram members across regional hubs',
      'Release of TAMI official merchandise & streetwear line',
      'Initiate multi-chain bridge exploratory research',
    ],
  },
  {
    quarter: 'Q3 2027+',
    phase: 'PHASE 04',
    title: 'Global Utility & DAO',
    status: 'upcoming',
    description: 'Global cultural brand recognition, full NFT marketplace integration, and wildlife conservation.',
    milestones: [
      'Launch TAMI Burrow (African Web3 NFT marketplace)',
      'Integration with WinacoinDao ecosystem & governance',
      'Listing on Emptycoin booster platform',
      'Tier-1 Centralized Exchange listing negotiations',
      'Target: 10,000+ holders and 10,000+ global Telegram community',
      'Formalized global wildlife & cat conservation foundation partnerships',
    ],
  },
];

export const ARTWORK_GALLERY: ArtItem[] = [
  {
    id: 'art-grumpolia',
    title: 'TAMI in Full Splendor',
    subtitle: 'The Fierce Firm Victory',
    src: '/images/grumpolia.png',
    category: 'Character',
    caption: 'The original character design representing resilience, grit, and the playful fierce spirit of TAMI.',
  },
  {
    id: 'art-afr1',
    title: 'Savannah Moonlit Watch',
    subtitle: 'African Heritage Edition 01',
    src: '/images/afr1.png',
    category: 'Story',
    caption: 'Watching over the vibrant African savannah, ready to leap onto the international stage.',
  },
  {
    id: 'art-afr2',
    title: 'Golden Paws of Abundance',
    subtitle: 'African Heritage Edition 02',
    src: '/images/afr2.png',
    category: 'Character',
    caption: 'Symbol of wealth, prosperity, and communal abundance shared across borders.',
  },
  {
    id: 'art-afr3',
    title: 'The Cyber-Cat Leap',
    subtitle: 'Web3 Digital Vanguard',
    src: '/images/afr3.png',
    category: 'Story',
    caption: 'Bridging timeless folklore with blockchain algorithms and decentralized freedom.',
  },
  {
    id: 'art-afr5',
    title: 'Crown of the Wild',
    subtitle: 'Royal Clan Heritage',
    src: '/images/afr5.png',
    category: 'Character',
    caption: 'Wearing the ceremonial beads and patterns of authentic Pan-African creativity.',
  },
  {
    id: 'art-afr6',
    title: 'The Great Gathering',
    subtitle: 'TAMI FAM Worldwide',
    src: '/images/afr6.png',
    category: 'Story',
    caption: 'Where creators, builders, and community unite in song, code, and celebration.',
  },
  {
    id: 'art-afr7',
    title: 'Cosmic Safari',
    subtitle: 'Beyond the Earthly Bounds',
    src: '/images/afr7.png',
    category: 'Story',
    caption: 'Taking African Web3 culture directly to the stars and the digital frontier.',
  },
  {
    id: 'art-fd',
    title: 'Fierce Determination',
    subtitle: 'Warrior Spirit',
    src: '/images/fd.png',
    category: 'Meme',
    caption: 'When the market dips but TAMI FAM keeps building without flinching.',
  },
  {
    id: 'art-ff',
    title: 'Firm Foundations',
    subtitle: 'True Decentralization',
    src: '/images/ff.png',
    category: 'Meme',
    caption: 'Rooted deep in the soil, unshakeable and independent.',
  },
  {
    id: 'art-t',
    title: 'TAMI Banner Graphic',
    subtitle: 'Official Emblem',
    src: '/images/t.png',
    category: 'Banner',
    caption: 'The verified symbol of the community-led $TAMIYANOIA ecosystem.',
  },
];

export const CONSERVATION_INITIATIVES = [
  {
    title: 'Rescue & Rehabilitation',
    desc: 'Funding local animal rescue teams and veterinary care for abandoned and injured street cats.',
    icon: 'HeartHandshake',
    stat: '100% Transparent',
  },
  {
    title: 'Shelter Nutrition & Care',
    desc: 'Supplying bulk nutritious food, clean bedding, and medical vaccinations to grassroot shelters.',
    icon: 'ShieldCheck',
    stat: 'Direct Aid',
  },
  {
    title: 'International Cat Day',
    desc: 'Annual community campaigns, creator auctions, and live awareness spaces spotlighting wildlife protection.',
    icon: 'Sparkles',
    stat: 'Global Campaign',
  },
  {
    title: 'On-Chain Charity Wallet',
    desc: 'Publicly verifiable BNB Chain multisig wallet dedicated exclusively to animal welfare causes.',
    icon: 'CheckCircle2',
    stat: 'On-Chain Proof',
  },
];

export const FAQ_ITEMS = [
  {
    question: 'What is TAMIYANOIA CAT ($TAMIYANOIA)?',
    answer: 'TAMIYANOIA CAT is a community-driven Web3 ecosystem born in Africa and built for the entire world. It combines digital culture, character lore, decentralized finance, and real-world charitable animal conservation. $TAMIYANOIA is its native utility token on Binance Smart Chain (BEP-20).',
  },
  {
    question: 'What is the official token contract address?',
    answer: `The official smart contract address on BNB Chain is: ${CONTRACT_ADDRESS}. Always verify the address on BscScan or official channels before interacting. It is a clean BEP-20 token with 0% buy tax and 0% sell tax.`,
  },
  {
    question: 'Why is TAMIYANOIA built on BNB Smart Chain?',
    answer: 'BNB Smart Chain offers industry-leading throughput, sub-second settlement times, and fractional-cent transaction fees. This ensures that community members anywhere in the world—especially across emerging markets in Africa—can trade and interact without being priced out by high gas fees.',
  },
  {
    question: 'Is TAMIYANOIA only meant for Africa?',
    answer: 'No. While TAMIYANOIA proudly takes inspiration from African roots, art, and community spirit, it is open and built for crypto enthusiasts, builders, and meme lovers worldwide. Our motto is: "From Africa to the World. 🌍🐱".',
  },
  {
    question: 'How does the Cat Conservation initiative work?',
    answer: 'The project allocates a portion of ecosystem community activities, special NFT drops, and community donations to verifiable animal welfare organizations that rehabilitate abandoned felines and provide veterinary care.',
  },
  {
    question: 'How do I buy $TAMIYANOIA?',
    answer: 'You can buy $TAMIYANOIA directly on PancakeSwap using BNB. Connect a Web3 wallet (such as MetaMask, Trust Wallet, or Binance Web3 Wallet), paste the verified contract address (0x8bea530150675c1eC537Bde45c0480164590c898), and swap with standard 0.5% slippage since there is 0% tax!',
  },
];
