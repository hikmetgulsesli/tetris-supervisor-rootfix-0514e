// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Main Menu
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Circle } from "lucide-react";


export type MainMenuActionId = "start-game-1" | "resume-2" | "high-scores-3" | "settings-4" | "controls-5";

export interface MainMenuProps {
  actions?: Partial<Record<MainMenuActionId, () => void>>;
}

export function MainMenu({ actions }: MainMenuProps) {
  return (
    <>
      {/* Background Grid & Decorative Elements */}
      <div className="absolute inset-0 z-0 tetris-grid-bg">
      {/* Abstract Tetromino shapes embedded in the grid */}
      <div className="ghost-block w-[128px] h-[32px] top-[20%] left-[10%] transform -rotate-90"></div>
      <div className="ghost-block w-[64px] h-[64px] bottom-[15%] right-[15%] border-[rgba(255,180,171,0.1)] bg-[rgba(255,180,171,0.02)]"></div>
      <div className="ghost-block w-[96px] h-[32px] top-[10%] right-[20%] border-[rgba(241,160,43,0.1)] bg-[rgba(241,160,43,0.02)]">
      <div className="absolute top-[32px] left-[32px] w-[32px] h-[32px] border-r-2 border-b-2 border-[rgba(241,160,43,0.1)] bg-[rgba(241,160,43,0.02)]"></div>
      </div>
      {/* Subtle central well vignette */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-background/50 to-background"></div>
      </div>
      {/* Main Content Container */}
      <main className="z-10 flex flex-col items-center justify-center w-full max-w-md px-margin space-y-16">
      {/* Brand Title */}
      <div className="text-center relative">
      <h1 className="font-display-lg text-display-lg md:text-[64px] md:leading-[72px] text-primary uppercase tracking-[0.2em] neon-text-glow m-0">
                      TETRIS<br />NEON
                  </h1>
      <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-primary neon-glow-primary"></div>
      </div>
      {/* Menu Navigation */}
      <nav aria-label="Main Menu" className="flex flex-col w-full space-y-unit">
      {/* Start Game */}
      <button className="menu-button w-full h-[64px] bg-surface-variant border border-on-background text-on-background font-headline-sm text-headline-sm uppercase tracking-widest flex items-center justify-center group focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded" type="button" data-action-id="start-game-1" onClick={actions?.["start-game-1"]}>
      <span className="group-hover:text-primary transition-colors duration-200">Start Game</span>
      </button>
      {/* Resume (Disabled State) */}
      <button aria-disabled={true} className="w-full h-[64px] bg-surface-container border border-outline-variant text-outline-variant font-headline-sm text-headline-sm uppercase tracking-widest flex items-center justify-center cursor-not-allowed rounded opacity-60" disabled={true} title="No active session" type="button" data-action-id="resume-2" onClick={actions?.["resume-2"]}>
                      Resume
                      <Circle  style={{fontVariationSettings: "'FILL' 0"}} className="ml-2 text-[20px]" aria-hidden={true} focusable="false" />
      </button>
      {/* High Scores */}
      <button className="menu-button w-full h-[64px] bg-surface-variant border border-on-background text-on-background font-headline-sm text-headline-sm uppercase tracking-widest flex items-center justify-center group focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded mt-4" type="button" data-action-id="high-scores-3" onClick={actions?.["high-scores-3"]}>
      <span className="group-hover:text-primary transition-colors duration-200">High Scores</span>
      </button>
      {/* Settings */}
      <button className="menu-button w-full h-[64px] bg-surface-variant border border-on-background text-on-background font-headline-sm text-headline-sm uppercase tracking-widest flex items-center justify-center group focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded mt-4" type="button" data-action-id="settings-4" onClick={actions?.["settings-4"]}>
      <span className="group-hover:text-primary transition-colors duration-200">Settings</span>
      </button>
      {/* Controls */}
      <button className="menu-button w-full h-[64px] bg-surface-variant border border-on-background text-on-background font-headline-sm text-headline-sm uppercase tracking-widest flex items-center justify-center group focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded mt-4" type="button" data-action-id="controls-5" onClick={actions?.["controls-5"]}>
      <span className="group-hover:text-primary transition-colors duration-200">Controls</span>
      </button>
      </nav>
      {/* Version/Footer Info */}
      <div className="absolute bottom-margin font-label-mono text-label-mono text-outline uppercase tracking-widest">
                  v 2.0.4.1
              </div>
      </main>
    </>
  );
}
