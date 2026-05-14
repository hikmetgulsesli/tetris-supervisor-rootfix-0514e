// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Pause Overlay
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Circle, Play, RefreshCw } from "lucide-react";


export type PauseOverlayActionId = "resume-1" | "restart-2" | "exit-to-menu-3";

export interface PauseOverlayProps {
  actions?: Partial<Record<PauseOverlayActionId, () => void>>;
}

export function PauseOverlay({ actions }: PauseOverlayProps) {
  return (
    <>
      {/* Mock Gameplay Background (Dimmed) */}
      <div className="absolute inset-0 flex items-center justify-center p-4 blur-[2px] opacity-60">
      {/* Main Playfield */}
      <div className="w-[320px] h-[640px] bg-surface-container-lowest border-2 border-outline-variant relative grid-pattern flex-shrink-0">
      {/* Placed Blocks Mockup */}
      <div className="absolute bottom-0 left-[32px] w-[96px] h-[32px] bg-secondary block-bevel"></div>
      <div className="absolute bottom-0 left-[160px] w-[64px] h-[64px] bg-tertiary block-bevel"></div>
      <div className="absolute bottom-[32px] left-[64px] w-[64px] h-[32px] bg-primary block-bevel"></div>
      <div className="absolute bottom-[32px] left-[128px] w-[32px] h-[96px] bg-error block-bevel"></div>
      {/* Falling Piece */}
      <div className="absolute top-[256px] left-[128px] w-[96px] h-[32px] bg-primary block-bevel shadow-[0_0_20px_#8ed5ff]"></div>
      {/* Ghost Piece */}
      <div className="absolute bottom-[96px] left-[128px] w-[96px] h-[32px] border-2 border-primary/40 bg-transparent"></div>
      </div>
      </div>
      {/* Pause Overlay Canvas */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-md z-40 flex items-center justify-center p-6">
      {/* Pause Modal (Glassmorphism/Bento) */}
      <div className="bg-surface/90 border border-outline-variant rounded-xl p-8 max-w-[400px] w-full flex flex-col gap-10 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
      {/* Header */}
      <div className="text-center">
      <h1 className="font-display-lg text-display-lg text-primary tracking-widest uppercase neon-text-glow">Paused</h1>
      <div className="h-1 w-24 bg-primary mx-auto mt-4 rounded-full shadow-[0_0_10px_#8ed5ff]"></div>
      </div>
      {/* Stats Reminder Panel */}
      <div className="grid grid-cols-2 gap-4">
      <div className="bg-surface-container border border-outline-variant rounded-lg p-4 flex flex-col items-center justify-center">
      <span className="font-label-mono text-label-mono text-on-surface-variant uppercase tracking-widest">Score</span>
      <span className="font-stat-value text-stat-value text-on-background mt-1">042,500</span>
      </div>
      <div className="bg-surface-container border border-outline-variant rounded-lg p-4 flex flex-col items-center justify-center">
      <span className="font-label-mono text-label-mono text-on-surface-variant uppercase tracking-widest">Level</span>
      <span className="font-stat-value text-stat-value text-primary mt-1">12</span>
      </div>
      </div>
      {/* Action Buttons */}
      <div className="flex flex-col gap-4">
      {/* Primary Action */}
      <button className="w-full py-4 px-6 bg-surface-container-high border-2 border-on-background rounded-lg flex items-center justify-center gap-3 transition-colors duration-200 group neon-box-glow" type="button" data-action-id="resume-1" onClick={actions?.["resume-1"]}>
      <Play className="text-[28px] text-on-background group-hover:text-primary transition-colors" aria-hidden={true} focusable="false" />
      <span className="font-headline-sm text-headline-sm text-on-background group-hover:text-primary uppercase tracking-wider transition-colors">Resume</span>
      </button>
      {/* Secondary Actions */}
      <button className="w-full py-3 px-6 bg-surface border border-outline-variant rounded-lg flex items-center justify-center gap-3 transition-colors duration-200 group secondary-box-glow" type="button" data-action-id="restart-2" onClick={actions?.["restart-2"]}>
      <RefreshCw className="text-[24px] text-on-surface-variant group-hover:text-secondary transition-colors" aria-hidden={true} focusable="false" />
      <span className="font-headline-sm text-[18px] leading-[24px] font-semibold text-on-surface-variant group-hover:text-secondary uppercase tracking-wider transition-colors">Restart</span>
      </button>
      <button className="w-full py-3 px-6 bg-surface border border-outline-variant rounded-lg flex items-center justify-center gap-3 transition-colors duration-200 group error-box-glow" type="button" data-action-id="exit-to-menu-3" onClick={actions?.["exit-to-menu-3"]}>
      <Circle className="text-[24px] text-on-surface-variant group-hover:text-error transition-colors" aria-hidden={true} focusable="false" />
      <span className="font-headline-sm text-[18px] leading-[24px] font-semibold text-on-surface-variant group-hover:text-error uppercase tracking-wider transition-colors">Exit to Menu</span>
      </button>
      </div>
      </div>
      </div>
    </>
  );
}
