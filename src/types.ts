export interface TokenMetrics {
  priceUsd: number;
  priceBnb: number;
  change24h: number;
  change6h: number;
  change1h: number;
  volume24h: number;
  liquidityUsd: number;
  marketCap: number;
  fdv: number;
  pairAddress: string;
  txns24hBuys: number;
  txns24hSells: number;
}

export interface RoadmapItem {
  quarter: string;
  phase: string;
  title: string;
  status: 'completed' | 'in-progress' | 'upcoming';
  description: string;
  milestones: string[];
}

export interface EcosystemPillar {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  tag: string;
  iconName: string;
  features: string[];
  gradient: string;
}

export interface ArtItem {
  id: string;
  title: string;
  subtitle: string;
  src: string;
  category: 'Character' | 'Meme' | 'Story' | 'Banner';
  caption: string;
}
