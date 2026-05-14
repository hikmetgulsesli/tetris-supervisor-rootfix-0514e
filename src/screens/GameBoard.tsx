// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Game Board
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Circle, MousePointerClick, Settings, User } from "lucide-react";


export type GameBoardActionId = "button-1-1" | "button-2-2" | "button-3-3";

export interface GameBoardProps {
  actions?: Partial<Record<GameBoardActionId, () => void>>;
}

export function GameBoard({ actions }: GameBoardProps) {
  return (
    <>
      {/* TopAppBar */}
      <header className="fixed top-0 w-full z-50 flex justify-between items-center px-6 py-4 bg-background border-b border-outline-variant hidden md:flex">
      <div className="font-display-lg text-display-lg text-primary uppercase tracking-widest">TETRIS NEON</div>
      <div className="flex items-center space-x-4">
      <button className="text-on-surface-variant hover:text-primary transition-colors scale-95 duration-100 flex items-center justify-center p-2 rounded-full hover:bg-surface-variant" type="button" data-action-id="button-1-1" onClick={actions?.["button-1-1"]}>
      <Settings  style={{fontVariationSettings: "'FILL' 0"}} aria-hidden={true} focusable="false" />
      </button>
      <button className="text-on-surface-variant hover:text-primary transition-colors scale-95 duration-100 flex items-center justify-center p-2 rounded-full hover:bg-surface-variant" type="button" data-action-id="button-2-2" onClick={actions?.["button-2-2"]}>
      <Circle  style={{fontVariationSettings: "'FILL' 0"}} aria-hidden={true} focusable="false" />
      </button>
      <button className="text-on-surface-variant hover:text-primary transition-colors scale-95 duration-100 flex items-center justify-center p-2 rounded-full hover:bg-surface-variant" type="button" data-action-id="button-3-3" onClick={actions?.["button-3-3"]}>
      <Circle  style={{fontVariationSettings: "'FILL' 0"}} aria-hidden={true} focusable="false" />
      </button>
      </div>
      </header>
      {/* Main Game Area */}
      <main className="flex-grow flex items-center justify-center pt-24 pb-24 md:pb-8 px-4 relative">
      <div className="flex flex-col md:flex-row items-start justify-center gap-gutter w-full max-w-[1200px]">
      {/* Left HUD: Hold */}
      <div className="hidden md:flex flex-col gap-gutter w-48">
      <div className="bg-surface border border-outline-variant rounded-lg p-panel-padding shadow-lg">
      <h2 className="font-label-mono text-label-mono text-on-surface-variant uppercase mb-4 text-center">Hold</h2>
      <div className="w-[128px] h-[128px] mx-auto bg-surface-container flex items-center justify-center rounded playfield-grid">
      {/* T Tetromino (Hold) */}
      <div className="grid grid-cols-3 gap-[1px]">
      <div className="w-8 h-8"></div>
      <div className="w-8 h-8 bg-secondary tetromino"></div>
      <div className="w-8 h-8"></div>
      <div className="w-8 h-8 bg-secondary tetromino"></div>
      <div className="w-8 h-8 bg-secondary tetromino"></div>
      <div className="w-8 h-8 bg-secondary tetromino"></div>
      </div>
      </div>
      </div>
      </div>
      {/* Center: Playfield */}
      <div className="flex flex-col items-center">
      {/* Mobile Status (Top) */}
      <div className="md:hidden flex w-full justify-between items-end mb-4 px-2">
      <div>
      <span className="font-label-mono text-label-mono text-on-surface-variant uppercase block">Score</span>
      <span className="font-stat-value text-stat-value text-primary-container">045,210</span>
      </div>
      <div className="text-right">
      <span className="font-label-mono text-label-mono text-success uppercase block flex items-center gap-1 justify-end">
      <span className="w-2 h-2 rounded-full bg-success animate-pulse"></span>
                                  Active
                              </span>
      <span className="font-stat-value text-stat-value text-on-background">Lv 12</span>
      </div>
      </div>
      {/* Game Grid Container */}
      <div className="bg-surface-dim border-2 border-outline-variant p-[2px] rounded-sm shadow-2xl relative">
      {/* 10x20 Grid */}
      <div className="w-[320px] h-[640px] relative overflow-hidden bg-background playfield-grid" style={{boxShadow: "inset 0 0 40px rgba(0,0,0,0.8)"}}>
      {/* Falling Piece (Cyan I) */}
      <div className="absolute top-[96px] left-[96px] flex flex-col gap-[1px]">
      <div className="w-8 h-8 bg-[#06b6d4] tetromino-glow-cyan z-10"></div>
      <div className="w-8 h-8 bg-[#06b6d4] tetromino-glow-cyan z-10"></div>
      <div className="w-8 h-8 bg-[#06b6d4] tetromino-glow-cyan z-10"></div>
      <div className="w-8 h-8 bg-[#06b6d4] tetromino-glow-cyan z-10"></div>
      </div>
      {/* Ghost Piece */}
      <div className="absolute bottom-[32px] left-[96px] flex flex-col gap-[1px] opacity-30">
      <div className="w-8 h-8 tetromino-ghost"></div>
      <div className="w-8 h-8 tetromino-ghost"></div>
      <div className="w-8 h-8 tetromino-ghost"></div>
      <div className="w-8 h-8 tetromino-ghost"></div>
      </div>
      {/* Stacked Pieces (Bottom) */}
      <div className="absolute bottom-0 w-full flex gap-[1px]">
      {/* Row 1 (Bottom) */}
      <div className="absolute bottom-0 left-0 flex gap-[1px]">
      <div className="w-8 h-8 bg-[#ef4444] tetromino"></div>
      <div className="w-8 h-8 bg-[#ef4444] tetromino"></div>
      <div className="w-8 h-8 bg-[#eab308] tetromino"></div>
      <div className="w-8 h-8 bg-[#eab308] tetromino"></div>
      <div className="w-8 h-8"></div>
      <div className="w-8 h-8 bg-[#22c55e] tetromino"></div>
      <div className="w-8 h-8 bg-[#22c55e] tetromino"></div>
      <div className="w-8 h-8 bg-[#3b82f6] tetromino"></div>
      <div className="w-8 h-8 bg-[#3b82f6] tetromino"></div>
      <div className="w-8 h-8 bg-[#3b82f6] tetromino"></div>
      </div>
      {/* Row 2 */}
      <div className="absolute bottom-[32px] left-0 flex gap-[1px]">
      <div className="w-8 h-8 bg-[#ef4444] tetromino"></div>
      <div className="w-8 h-8 bg-[#ef4444] tetromino"></div>
      <div className="w-8 h-8 bg-[#eab308] tetromino"></div>
      <div className="w-8 h-8 bg-[#eab308] tetromino"></div>
      <div className="w-8 h-8"></div>
      <div className="w-8 h-8"></div>
      <div className="w-8 h-8 bg-[#22c55e] tetromino"></div>
      <div className="w-8 h-8 bg-[#22c55e] tetromino"></div>
      <div className="w-8 h-8"></div>
      <div className="w-8 h-8"></div>
      </div>
      </div>
      </div>
      </div>
      {/* Mobile Controls Reference (Bottom) */}
      <div className="mt-8 flex justify-center gap-4 md:hidden text-on-surface-variant font-label-mono text-label-mono">
      <div className="flex items-center gap-2">
      <Circle aria-hidden={true} focusable="false" /> Move
                          </div>
      <div className="flex items-center gap-2">
      <MousePointerClick aria-hidden={true} focusable="false" /> Rotate
                          </div>
      <div className="flex items-center gap-2">
      <Circle aria-hidden={true} focusable="false" /> Drop
                          </div>
      </div>
      </div>
      {/* Right HUD: Next, Score, Level */}
      <div className="hidden md:flex flex-col gap-gutter w-64">
      {/* Status */}
      <div className="bg-surface border border-outline-variant rounded-lg p-panel-padding shadow-lg flex items-center justify-between">
      <span className="font-label-mono text-label-mono text-on-surface-variant uppercase">Status</span>
      <span className="font-label-mono text-label-mono text-[#22c55e] uppercase flex items-center gap-2">
      <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse"></span>
                              Active
                          </span>
      </div>
      {/* Next */}
      <div className="bg-surface border border-outline-variant rounded-lg p-panel-padding shadow-lg">
      <h2 className="font-label-mono text-label-mono text-on-surface-variant uppercase mb-4 text-center">Next</h2>
      <div className="w-[128px] h-[128px] mx-auto bg-surface-container flex items-center justify-center rounded playfield-grid mb-4">
      {/* O Tetromino */}
      <div className="grid grid-cols-2 gap-[1px]">
      <div className="w-8 h-8 bg-[#eab308] tetromino-glow-yellow"></div>
      <div className="w-8 h-8 bg-[#eab308] tetromino-glow-yellow"></div>
      <div className="w-8 h-8 bg-[#eab308] tetromino-glow-yellow"></div>
      <div className="w-8 h-8 bg-[#eab308] tetromino-glow-yellow"></div>
      </div>
      </div>
      {/* Small lookaheads */}
      <div className="flex justify-center gap-2">
      <div className="w-12 h-12 bg-surface-container flex items-center justify-center rounded border border-outline-variant">
      {/* S piece tiny */}
      <div className="w-6 h-4 bg-[#22c55e] opacity-70"></div>
      </div>
      <div className="w-12 h-12 bg-surface-container flex items-center justify-center rounded border border-outline-variant">
      {/* L piece tiny */}
      <div className="w-4 h-6 bg-[#f97316] opacity-70"></div>
      </div>
      </div>
      </div>
      {/* Stats */}
      <div className="bg-surface border border-outline-variant rounded-lg p-panel-padding shadow-lg flex flex-col gap-4">
      <div>
      <span className="font-label-mono text-label-mono text-on-surface-variant uppercase block mb-1">Score</span>
      <div className="font-stat-value text-stat-value text-primary-container tracking-wider">045,210</div>
      </div>
      <div className="h-px w-full bg-outline-variant"></div>
      <div>
      <span className="font-label-mono text-label-mono text-on-surface-variant uppercase block mb-1">Level</span>
      <div className="font-stat-value text-stat-value text-on-background">12</div>
      {/* Level Progress */}
      <div className="mt-2 flex gap-1 h-2">
      <div className="flex-1 bg-[#22c55e]"></div>
      <div className="flex-1 bg-[#22c55e]"></div>
      <div className="flex-1 bg-[#22c55e]"></div>
      <div className="flex-1 bg-[#22c55e]"></div>
      <div className="flex-1 bg-surface-container"></div>
      <div className="flex-1 bg-surface-container"></div>
      </div>
      </div>
      <div className="h-px w-full bg-outline-variant"></div>
      <div>
      <span className="font-label-mono text-label-mono text-on-surface-variant uppercase block mb-1">Lines</span>
      <div className="font-stat-value text-stat-value text-on-background">114</div>
      </div>
      </div>
      {/* Keyboard Controls Hint */}
      <div className="bg-surface border border-outline-variant rounded-lg p-4 shadow-lg text-center font-label-mono text-label-mono text-on-surface-variant">
      <div className="flex justify-center items-center gap-2 mb-2">
      <span className="border border-outline-variant rounded px-2 py-1 bg-surface-container">↑</span> Rotate
                          </div>
      <div className="flex justify-center items-center gap-2">
      <span className="border border-outline-variant rounded px-2 py-1 bg-surface-container">←</span>
      <span className="border border-outline-variant rounded px-2 py-1 bg-surface-container">↓</span>
      <span className="border border-outline-variant rounded px-2 py-1 bg-surface-container">→</span>
                              Move
                          </div>
      <div className="mt-2 text-xs opacity-70">SPACE to Hard Drop</div>
      </div>
      </div>
      </div>
      </main>
      {/* BottomNavBar (Mobile Only) */}
      <nav className="fixed bottom-0 w-full z-50 flex justify-around items-center h-20 px-4 pb-safe bg-surface border-t border-outline-variant md:hidden">
      <a className="flex flex-col items-center justify-center text-primary bg-secondary-container rounded-xl p-2 scale-90 transition-transform duration-150" href="#">
      <Circle className="mb-1 text-[24px]" aria-hidden={true} focusable="false" />
      <span className="font-label-mono text-label-mono text-[10px] uppercase">Play</span>
      </a>
      <a className="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:bg-surface-variant transition-colors rounded-xl" href="#">
      <Circle className="mb-1 text-[24px]" aria-hidden={true} focusable="false" />
      <span className="font-label-mono text-label-mono text-[10px] uppercase">Rank</span>
      </a>
      <a className="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:bg-surface-variant transition-colors rounded-xl" href="#">
      <Settings className="mb-1 text-[24px]" aria-hidden={true} focusable="false" />
      <span className="font-label-mono text-label-mono text-[10px] uppercase">Config</span>
      </a>
      <a className="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:bg-surface-variant transition-colors rounded-xl" href="#">
      <User className="mb-1 text-[24px]" aria-hidden={true} focusable="false" />
      <span className="font-label-mono text-label-mono text-[10px] uppercase">Profile</span>
      </a>
      </nav>
    </>
  );
}
