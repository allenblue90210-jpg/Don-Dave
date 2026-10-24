import React, { useState, useRef, useEffect } from 'react';
import { Palette, Sparkles, Download, X, Maximize2, RefreshCw, Type, Image as ImageIcon } from 'lucide-react';
import { ARTWORK_GALLERY } from '../constants';
import { ArtItem } from '../types';
import { sounds } from '../utils/audio';

interface ArtGallerySectionProps {
  onOpenMemeStudio?: () => void;
}

export const ArtGallerySection: React.FC<ArtGallerySectionProps> = () => {
  const [filter, setFilter] = useState<'All' | 'Character' | 'Story' | 'Meme'>('All');
  const [selectedArt, setSelectedArt] = useState<ArtItem | null>(null);
  
  // Meme Studio state
  const [isMemeStudioOpen, setIsMemeStudioOpen] = useState(false);
  const [memeImage, setMemeImage] = useState<string>('/images/grumpolia.png');
  const [topText, setTopText] = useState<string>('WHEN THEY SAID WEB3 WAS DEAD');
  const [bottomText, setBottomText] = useState<string>('TAMI FAM KEPT BUILDING');
  const [fontSize, setFontSize] = useState<number>(36);
  const [textColor, setTextColor] = useState<string>('#FFFFFF');
  const [selectedSticker, setSelectedSticker] = useState<string | null>('crown');

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const filteredItems = filter === 'All'
    ? ARTWORK_GALLERY
    : ARTWORK_GALLERY.filter((item) => item.category === filter);

  // Redraw meme canvas whenever parameters change
  useEffect(() => {
    if (!isMemeStudioOpen) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = memeImage;

    img.onload = () => {
      // Set canvas size
      canvas.width = 600;
      canvas.height = 600;

      // Draw background image
      ctx.fillStyle = '#090d16';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Fit image aspect
      const scale = Math.min(canvas.width / img.width, canvas.height / img.height);
      const x = (canvas.width / 2) - (img.width / 2) * scale;
      const y = (canvas.height / 2) - (img.height / 2) * scale;
      ctx.drawImage(img, x, y, img.width * scale, img.height * scale);

      // Sticker overlay if selected
      if (selectedSticker === 'crown') {
        ctx.font = '64px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('👑', 300, 160);
      } else if (selectedSticker === 'sunglasses') {
        ctx.font = '64px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('🕶️', 300, 240);
      } else if (selectedSticker === 'diamond') {
        ctx.font = '60px sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText('💎🙌', 80, 520);
      } else if (selectedSticker === 'fire') {
        ctx.font = '64px sans-serif';
        ctx.textAlign = 'right';
        ctx.fillText('🔥🚀', 520, 520);
      }

      // Draw Watermark
      ctx.font = 'bold 14px monospace';
      ctx.fillStyle = '#f59e0b';
      ctx.textAlign = 'right';
      ctx.fillText('$TAMIYANOIA • tamiyanoiacat.fun', canvas.width - 20, canvas.height - 15);

      // Setup Meme Text styling (Impact style)
      ctx.fillStyle = textColor;
      ctx.strokeStyle = '#000000';
      ctx.lineWidth = 6;
      ctx.lineJoin = 'round';
      ctx.textAlign = 'center';
      ctx.font = `900 ${fontSize}px sans-serif`;

      // Top Text
      if (topText.trim()) {
        const lines = wrapText(ctx, topText.toUpperCase(), 540);
        lines.forEach((line, index) => {
          const textY = 60 + (index * (fontSize + 8));
          ctx.strokeText(line, 300, textY);
          ctx.fillText(line, 300, textY);
        });
      }

      // Bottom Text
      if (bottomText.trim()) {
        const lines = wrapText(ctx, bottomText.toUpperCase(), 540);
        lines.forEach((line, index) => {
          const textY = (canvas.height - 40) - ((lines.length - 1 - index) * (fontSize + 8));
          ctx.strokeText(line, 300, textY);
          ctx.fillText(line, 300, textY);
        });
      }
    };
  }, [isMemeStudioOpen, memeImage, topText, bottomText, fontSize, textColor, selectedSticker]);

  // Simple text wrapper for canvas
  const wrapText = (ctx: CanvasRenderingContext2D, text: string, maxWidth: number): string[] => {
    const words = text.split(' ');
    const lines: string[] = [];
    let currentLine = words[0] || '';

    for (let i = 1; i < words.length; i++) {
      const word = words[i];
      const width = ctx.measureText(currentLine + ' ' + word).width;
      if (width < maxWidth) {
        currentLine += ' ' + word;
      } else {
        lines.push(currentLine);
        currentLine = word;
      }
    }
    lines.push(currentLine);
    return lines;
  };

  const downloadMeme = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    sounds.playCoinChime();
    const link = document.createElement('a');
    link.download = `tamiyanoia-meme-${Date.now()}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  };

  return (
    <section id="gallery" className="py-20 relative bg-slate-900/60 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-bold uppercase tracking-wider mb-2">
              <Palette className="w-3.5 h-3.5" />
              <span>Official Art & Creative Studio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white">
              TAMIYANOIA{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-amber-400">
                Art Gallery
              </span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base max-w-2xl mt-2">
              Explore authentic character concepts, folklore scenes, and community comic assets. Create and download custom viral memes to share across X and Telegram!
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => {
                sounds.playMeow();
                setIsMemeStudioOpen(true);
              }}
              className="px-5 py-3 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-purple-600/25 active:scale-95 transition"
            >
              <Sparkles className="w-4 h-4" />
              <span>Open Meme Generator</span>
            </button>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2">
          {(['All', 'Character', 'Story', 'Meme'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => {
                sounds.playPurr();
                setFilter(cat);
              }}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition ${
                filter === cat
                  ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {cat === 'All' ? 'All Artwork' : `${cat} Art`}
            </button>
          ))}
        </div>

        {/* Artworks Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedArt(item)}
              className="group relative rounded-3xl overflow-hidden bg-slate-950 border border-slate-800 hover:border-amber-400/60 transition-all duration-300 cursor-pointer flex flex-col justify-between hover:-translate-y-1 shadow-lg"
            >
              {/* Image Container */}
              <div className="relative aspect-square w-full overflow-hidden bg-slate-900 flex items-center justify-center p-4">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="text-xs font-semibold text-amber-300 flex items-center gap-1.5">
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>View Artwork</span>
                  </span>
                </div>
              </div>

              {/* Text Meta */}
              <div className="p-4 border-t border-slate-800/80 space-y-1">
                <div className="flex items-center justify-between text-[10px] font-mono">
                  <span className="text-amber-400 font-bold uppercase">{item.category}</span>
                  <span className="text-slate-500">Official Asset</span>
                </div>
                <h4 className="font-extrabold text-sm text-white group-hover:text-amber-300 transition truncate">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-400 truncate">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedArt && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md">
            <div className="relative max-w-3xl w-full rounded-3xl bg-slate-900 border border-amber-500/40 p-6 shadow-2xl overflow-hidden flex flex-col items-center">
              <button
                onClick={() => setSelectedArt(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-full max-h-[60vh] flex items-center justify-center p-4 bg-slate-950 rounded-2xl border border-slate-800 mb-4">
                <img
                  src={selectedArt.src}
                  alt={selectedArt.title}
                  className="max-h-[50vh] max-w-full object-contain"
                />
              </div>

              <div className="w-full space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-black text-white">{selectedArt.title}</h3>
                    <p className="text-xs text-amber-400 font-mono">{selectedArt.subtitle}</p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-300 font-mono text-xs border border-amber-500/30">
                    {selectedArt.category}
                  </span>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed pt-1">
                  {selectedArt.caption}
                </p>
                <div className="flex items-center gap-3 pt-3">
                  <button
                    onClick={() => {
                      setMemeImage(selectedArt.src);
                      setSelectedArt(null);
                      setIsMemeStudioOpen(true);
                    }}
                    className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold flex items-center gap-2"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Remix in Meme Studio</span>
                  </button>
                  <a
                    href={selectedArt.src}
                    download={`${selectedArt.id}.png`}
                    className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold flex items-center gap-2"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download Image</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAMI Meme Studio Modal */}
        {isMemeStudioOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md overflow-y-auto">
            <div className="relative max-w-4xl w-full rounded-3xl bg-slate-900 border border-purple-500/40 p-6 sm:p-8 shadow-2xl my-8">
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-purple-400" />
                  <h3 className="text-lg sm:text-xl font-black text-white">TAMI Meme & Sticker Studio</h3>
                </div>
                <button
                  onClick={() => setIsMemeStudioOpen(false)}
                  className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                
                {/* Left: Canvas Preview */}
                <div className="md:col-span-7 flex flex-col items-center">
                  <div className="w-full max-w-[420px] rounded-2xl overflow-hidden border-2 border-slate-800 bg-slate-950 shadow-inner">
                    <canvas ref={canvasRef} className="w-full h-auto block" />
                  </div>
                  <div className="w-full max-w-[420px] flex items-center justify-between mt-3 text-xs text-slate-400 font-mono">
                    <span>Output: 600x600 PNG</span>
                    <button
                      onClick={downloadMeme}
                      className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold flex items-center gap-2 shadow-md active:scale-95 transition"
                    >
                      <Download className="w-4 h-4" />
                      <span>Download Meme</span>
                    </button>
                  </div>
                </div>

                {/* Right: Controls */}
                <div className="md:col-span-5 space-y-4">
                  
                  {/* Select Base Graphic */}
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1.5 flex items-center gap-1.5">
                      <ImageIcon className="w-3.5 h-3.5 text-amber-400" />
                      <span>Choose TAMI Base Artwork:</span>
                    </label>
                    <div className="grid grid-cols-4 gap-2 max-h-32 overflow-y-auto p-1 bg-slate-950 rounded-xl border border-slate-800">
                      {ARTWORK_GALLERY.map((art) => (
                        <button
                          key={art.id}
                          onClick={() => setMemeImage(art.src)}
                          className={`aspect-square rounded-lg overflow-hidden border-2 p-1 transition ${
                            memeImage === art.src ? 'border-amber-400 bg-slate-800' : 'border-transparent hover:border-slate-700'
                          }`}
                        >
                          <img src={art.src} alt={art.title} className="w-full h-full object-contain" />
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Top Text */}
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1 flex items-center gap-1.5">
                      <Type className="w-3.5 h-3.5 text-purple-400" />
                      <span>Top Caption:</span>
                    </label>
                    <input
                      type="text"
                      value={topText}
                      onChange={(e) => setTopText(e.target.value)}
                      placeholder="e.g. WHEN $TAMI HEARS THE NEWS"
                      className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs font-mono uppercase focus:outline-none focus:border-purple-400"
                    />
                  </div>

                  {/* Bottom Text */}
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1 flex items-center gap-1.5">
                      <Type className="w-3.5 h-3.5 text-pink-400" />
                      <span>Bottom Caption:</span>
                    </label>
                    <input
                      type="text"
                      value={bottomText}
                      onChange={(e) => setBottomText(e.target.value)}
                      placeholder="e.g. WE ARE GOING TO THE MOON"
                      className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs font-mono uppercase focus:outline-none focus:border-purple-400"
                    />
                  </div>

                  {/* Stickers */}
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">
                      Add Overlay Badge / Sticker:
                    </label>
                    <div className="flex items-center gap-2">
                      {[
                        { id: null, label: 'None' },
                        { id: 'crown', label: '👑 Crown' },
                        { id: 'sunglasses', label: '🕶️ Shades' },
                        { id: 'diamond', label: '💎 Diamond' },
                        { id: 'fire', label: '🔥 Rocket' },
                      ].map((st) => (
                        <button
                          key={st.label}
                          onClick={() => setSelectedSticker(st.id)}
                          className={`px-2.5 py-1.5 rounded-lg text-xs font-bold border transition ${
                            selectedSticker === st.id
                              ? 'bg-purple-600 text-white border-purple-400'
                              : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-white'
                          }`}
                        >
                          {st.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Font Size & Color */}
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-400 mb-1">
                        Font Size ({fontSize}px)
                      </label>
                      <input
                        type="range"
                        min="20"
                        max="52"
                        value={fontSize}
                        onChange={(e) => setFontSize(Number(e.target.value))}
                        className="w-full accent-purple-500 cursor-pointer"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-slate-400 mb-1">
                        Text Color
                      </label>
                      <div className="flex items-center gap-2">
                        {['#FFFFFF', '#F59E0B', '#10B981', '#EC4899'].map((c) => (
                          <button
                            key={c}
                            onClick={() => setTextColor(c)}
                            style={{ backgroundColor: c }}
                            className={`w-6 h-6 rounded-full border-2 transition ${
                              textColor === c ? 'border-white scale-110' : 'border-transparent'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Quick Preset Ideas */}
                  <div className="pt-2 border-t border-slate-800">
                    <span className="text-[11px] text-slate-500 block mb-1">Quick Meme Presets:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {[
                        { top: 'ME WATCHING BNB CHAIN', bottom: 'AFTER BUYING $TAMI' },
                        { top: 'SAVANNAH TO THE MOON', bottom: 'FIERCE FIRM VICTORY' },
                        { top: 'FROM AFRICA', bottom: 'TO THE ENTIRE WORLD' },
                      ].map((preset, idx) => (
                        <button
                          key={idx}
                          onClick={() => {
                            setTopText(preset.top);
                            setBottomText(preset.bottom);
                          }}
                          className="text-[10px] px-2 py-1 rounded bg-slate-950 text-slate-300 border border-slate-800 hover:border-purple-400 transition"
                        >
                          Preset {idx + 1}
                        </button>
                      ))}
                    </div>
                  </div>

                </div>

              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
