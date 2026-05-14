// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Game Over
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Circle } from "lucide-react";


export type GameOverActionId = "play-again-1" | "main-menu-2";

export interface GameOverProps {
  actions?: Partial<Record<GameOverActionId, () => void>>;
}

export function GameOver({ actions }: GameOverProps) {
  return (
    <>
      {/* Background: Dimmed Locked-in Board State */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none flex justify-center items-center">
      <div className="w-[320px] h-[640px] bg-surface-container-highest border border-outline-variant bg-grid-pattern relative">
      {/* Simulated stacked blocks at the bottom */}
      <div className="absolute bottom-0 w-full h-32 bg-secondary-container opacity-50"></div>
      <div className="absolute bottom-32 left-0 w-1/2 h-16 bg-tertiary-container opacity-50"></div>
      <div className="absolute bottom-16 right-0 w-1/3 h-24 bg-primary-container opacity-50"></div>
      </div>
      </div>
      {/* Main Content Canvas - Game Over Overlay */}
      <main className="flex-grow flex items-center justify-center relative z-10 px-6">
      <div className="bg-surface/90 backdrop-blur-md border border-outline-variant p-8 md:p-12 w-full max-w-md flex flex-col items-center shadow-2xl relative">
      {/* Game Over Title */}
      <h1 className="font-display-lg text-display-lg text-error mb-8 tracking-widest neon-glow-error text-center uppercase">
                      GAME OVER
                  </h1>
      {/* High Score Indicator */}
      <div className="bg-primary/10 border border-primary px-4 py-1 mb-6 flex items-center gap-2">
      <Circle  style={{fontVariationSettings: "'FILL' 1"}} className="text-primary" aria-hidden={true} focusable="false" />
      <span className="font-label-mono text-label-mono text-primary uppercase">New High Score!</span>
      </div>
      {/* Stats Panel */}
      <div className="w-full bg-surface-container-high border border-outline-variant p-6 flex flex-col gap-6 mb-8">
      {/* Final Score */}
      <div className="flex flex-col items-center">
      <span className="font-label-mono text-label-mono text-on-surface-variant uppercase mb-1">Final Score</span>
      <span className="font-stat-value text-stat-value text-on-background text-4xl">145,820</span>
      </div>
      <div className="h-px w-full bg-outline-variant/50"></div>
      {/* Secondary Stats */}
      <div className="flex justify-between w-full">
      <div className="flex flex-col items-center w-1/2 border-r border-outline-variant/50">
      <span className="font-label-mono text-label-mono text-on-surface-variant uppercase mb-1">Level</span>
      <span className="font-stat-value text-stat-value text-on-background">15</span>
      </div>
      <div className="flex flex-col items-center w-1/2">
      <span className="font-label-mono text-label-mono text-on-surface-variant uppercase mb-1">Lines</span>
      <span className="font-stat-value text-stat-value text-on-background">142</span>
      </div>
      </div>
      </div>
      {/* Action Buttons */}
      <div className="w-full flex flex-col gap-4">
      <button className="w-full bg-surface-variant border border-on-background font-headline-sm text-headline-sm text-on-background py-4 hover:border-primary hover:text-primary transition-colors duration-200 neon-glow-primary flex justify-center items-center gap-2 group" type="button" data-action-id="play-again-1" onClick={actions?.["play-again-1"]}>
      <Circle className="group-hover:text-primary" aria-hidden={true} focusable="false" />
                          Play Again
                      </button>
      <button className="w-full bg-surface border border-outline-variant font-headline-sm text-headline-sm text-on-surface-variant py-4 hover:bg-surface-variant transition-colors duration-200" type="button" data-action-id="main-menu-2" onClick={actions?.["main-menu-2"]}>
                          Main Menu
                      </button>
      </div>
      </div>
      </main>
    </>
  );
}
