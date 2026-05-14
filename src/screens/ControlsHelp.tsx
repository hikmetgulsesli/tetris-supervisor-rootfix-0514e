// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Controls Help
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { ArrowDown, ArrowLeft, ArrowRight, ArrowUp, Circle, Info } from "lucide-react";


export type ControlsHelpActionId = "button-1-1" | "back-to-menu-2";

export interface ControlsHelpProps {
  actions?: Partial<Record<ControlsHelpActionId, () => void>>;
}

export function ControlsHelp({ actions }: ControlsHelpProps) {
  return (
    <>
      {/* Top Navigation (Suppressed Bottom Nav for this linear/task-focused page) */}
      <header className="fixed top-0 w-full z-50 flex justify-between items-center px-6 py-4 bg-background border-b border-outline-variant">
      <div className="flex items-center gap-4">
      <button aria-label="Back" className="text-on-surface-variant hover:text-primary transition-colors flex items-center justify-center p-2 rounded-full hover:bg-surface-variant" type="button" data-action-id="button-1-1" onClick={actions?.["button-1-1"]}>
      <ArrowLeft aria-hidden={true} focusable="false" />
      </button>
      <h1 className="font-display-lg text-display-lg text-primary uppercase tracking-widest neon-glow">TETRIS NEON</h1>
      </div>
      <div className="hidden md:flex items-center gap-4 text-on-surface-variant">
      <span className="font-headline-sm text-headline-sm text-primary font-bold">Help &amp; Controls</span>
      </div>
      </header>
      {/* Main Content Canvas */}
      <main className="flex-grow pt-[88px] px-margin pb-margin flex flex-col items-center justify-start relative w-full max-w-6xl mx-auto z-10">
      {/* Grid Background Pattern for Theme */}
      <div className="absolute inset-0 pointer-events-none opacity-10" style={{backgroundImage: "linear-gradient(#1E293B 1px, transparent 1px), linear-gradient(90deg, #1E293B 1px, transparent 1px)", backgroundSize: "32px 32px", zIndex: "-1"}}></div>
      <div className="w-full flex flex-col lg:flex-row gap-gutter mt-8">
      {/* Left Column: Controls */}
      <div className="flex-1 flex flex-col gap-gutter">
      <div className="bg-surface border border-outline-variant rounded-lg p-panel-padding neon-box-glow">
      <h2 className="font-label-mono text-label-mono text-on-surface-variant mb-6 uppercase tracking-wider border-b border-outline-variant pb-2">Keyboard Mapping</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Movement Keys */}
      <div className="space-y-4">
      <h3 className="font-headline-sm text-headline-sm text-primary">Movement</h3>
      <div className="flex items-center gap-4">
      <div className="flex flex-col items-center gap-1">
      <div className="w-12 h-12 key-btn rounded flex items-center justify-center text-on-background font-stat-value text-stat-value">
      <ArrowUp aria-hidden={true} focusable="false" />
      </div>
      </div>
      <div className="flex-1">
      <p className="font-label-mono text-label-mono text-primary">Rotate Clockwise</p>
      <p className="text-on-surface-variant text-sm">Spins the active piece.</p>
      </div>
      </div>
      <div className="flex items-center gap-4">
      <div className="flex gap-1">
      <div className="w-12 h-12 key-btn rounded flex items-center justify-center text-on-background font-stat-value text-stat-value">
      <ArrowLeft aria-hidden={true} focusable="false" />
      </div>
      <div className="w-12 h-12 key-btn rounded flex items-center justify-center text-on-background font-stat-value text-stat-value">
      <ArrowDown aria-hidden={true} focusable="false" />
      </div>
      <div className="w-12 h-12 key-btn rounded flex items-center justify-center text-on-background font-stat-value text-stat-value">
      <ArrowRight aria-hidden={true} focusable="false" />
      </div>
      </div>
      <div className="flex-1">
      <p className="font-label-mono text-label-mono text-primary">Move / Soft Drop</p>
      <p className="text-on-surface-variant text-sm">Left/Right arrows move. Down arrow accelerates fall.</p>
      </div>
      </div>
      </div>
      {/* Action Keys */}
      <div className="space-y-4">
      <h3 className="font-headline-sm text-headline-sm text-primary">Actions</h3>
      <div className="flex items-center gap-4">
      <div className="h-12 w-32 key-btn rounded flex items-center justify-center text-on-background font-stat-value text-stat-value px-4">
                                          SPACE
                                      </div>
      <div className="flex-1">
      <p className="font-label-mono text-label-mono text-primary">Hard Drop</p>
      <p className="text-on-surface-variant text-sm">Instantly locks piece at the bottom.</p>
      </div>
      </div>
      <div className="flex items-center gap-4">
      <div className="w-12 h-12 key-btn rounded flex items-center justify-center text-on-background font-stat-value text-stat-value">
                                          C
                                      </div>
      <div className="flex-1">
      <p className="font-label-mono text-label-mono text-primary">Hold Piece</p>
      <p className="text-on-surface-variant text-sm">Swap current piece with held piece.</p>
      </div>
      </div>
      <div className="flex items-center gap-4">
      <div className="w-12 h-12 key-btn rounded flex items-center justify-center text-on-background font-stat-value text-stat-value">
                                          P
                                      </div>
      <div className="flex-1">
      <p className="font-label-mono text-label-mono text-primary">Pause Game</p>
      </div>
      </div>
      </div>
      </div>
      </div>
      {/* Visual Diagram Area (Placeholder for actual diagram image) */}
      <div className="bg-surface border border-outline-variant rounded-lg p-panel-padding h-64 relative overflow-hidden flex items-center justify-center">
      <img alt="A high-contrast top-down view of a mechanical keyboard illuminated by bright blue neon backlighting against a dark grey desk surface. The lighting creates a stark, tech-focused mood reminiscent of competitive gaming setups. Specific keys like the arrows and spacebar are subtly highlighted by the light's reflection, fitting a modern e-sports aesthetic." className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-luminosity" data-alt="A high-contrast top-down view of a mechanical keyboard illuminated by bright blue neon backlighting against a dark grey desk surface. The lighting creates a stark, tech-focused mood reminiscent of competitive gaming setups. Specific keys like the arrows and spacebar are subtly highlighted by the light's reflection, fitting a modern e-sports aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQwGIpc9Z6kn3DVC6QA-P7FHsRkLOL12BA8O6lEQOm2ndEbiPiOL3HhZK2tlBxGCVqdua1A-LnORkD3JNH5wpQW3VysM8YV2BbLYy5RmX_HaLJIHIaLlIgYZxwvWcd8EIidVNmWasbMIWgCgaZ6eb8dbSV1XPxuZuj0e5t8faukY76jG84_b-HSkrwBkTu_OO89p0yKewklXmQNP4DzD3YHbuvnqkNk7YhDWdZbEHfI4Ba7_S9NsymBM84MsBUCCU-LMF_r6ERQsE" />
      <div className="relative z-10 text-center">
      <Circle  style={{fontSize: "64px"}} className="text-display-lg text-primary mb-2 opacity-80" aria-hidden={true} focusable="false" />
      <p className="font-label-mono text-label-mono text-on-surface-variant tracking-widest uppercase">Diagram</p>
      </div>
      </div>
      </div>
      {/* Right Column: Rules & Scoring */}
      <div className="w-full lg:w-1/3 flex flex-col gap-gutter">
      <div className="bg-surface border border-outline-variant rounded-lg p-panel-padding">
      <h2 className="font-label-mono text-label-mono text-on-surface-variant mb-6 uppercase tracking-wider border-b border-outline-variant pb-2 flex items-center gap-2">
      <Info className="text-primary" aria-hidden={true} focusable="false" />
                              Rules of Play
                          </h2>
      <div className="space-y-4">
      <p className="text-on-background">Maneuver the falling Tetrominoes (blocks) to form complete horizontal lines without any gaps.</p>
      <p className="text-on-background">When a line is completed, it clears from the board, and the blocks above fall down.</p>
      <p className="text-on-background border-l-2 border-primary pl-4 text-primary bg-primary/10 py-2">The game ends when the stack of blocks reaches the top of the playfield (Top Out).</p>
      </div>
      </div>
      <div className="bg-surface border border-outline-variant rounded-lg p-panel-padding flex-1">
      <h2 className="font-label-mono text-label-mono text-on-surface-variant mb-6 uppercase tracking-wider border-b border-outline-variant pb-2 flex items-center gap-2">
      <Circle className="text-primary" aria-hidden={true} focusable="false" />
                              Scoring System
                          </h2>
      <ul className="space-y-4">
      <li className="flex justify-between items-center border-b border-outline-variant/30 pb-2">
      <span className="text-on-background">Single Line</span>
      <span className="font-stat-value text-stat-value text-primary">100</span>
      </li>
      <li className="flex justify-between items-center border-b border-outline-variant/30 pb-2">
      <span className="text-on-background">Double Line</span>
      <span className="font-stat-value text-stat-value text-primary">300</span>
      </li>
      <li className="flex justify-between items-center border-b border-outline-variant/30 pb-2">
      <span className="text-on-background">Triple Line</span>
      <span className="font-stat-value text-stat-value text-primary">500</span>
      </li>
      <li className="flex justify-between items-center bg-primary/5 p-2 rounded">
      <span className="text-primary font-bold">TETRIS (4 Lines)</span>
      <span className="font-stat-value text-stat-value text-tertiary font-bold neon-glow">800</span>
      </li>
      </ul>
      <div className="mt-6 pt-4 border-t border-outline-variant text-sm text-on-surface-variant">
                              * Scores are multiplied by your current Level.
                          </div>
      </div>
      </div>
      </div>
      <div className="mt-12 mb-8">
      <button className="bg-[#334155] border border-[#F8FAFC] text-on-background font-headline-sm text-headline-sm px-8 py-4 rounded hover:border-[#38BDF8] hover:shadow-[0_0_15px_rgba(56,189,248,0.5)] hover:text-primary transition-colors duration-200 flex items-center gap-3 group" type="button" data-action-id="back-to-menu-2" onClick={actions?.["back-to-menu-2"]}>
      <ArrowLeft className="group-hover:-translate-x-1 transition-transform" aria-hidden={true} focusable="false" />
                      Back to Menu
                  </button>
      </div>
      </main>
    </>
  );
}
