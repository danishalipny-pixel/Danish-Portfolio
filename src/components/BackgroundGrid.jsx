import React from 'react';

/**
 * BackgroundGrid — Aurora Obsidian Foundation
 * Deep Midnight Obsidian (#10151A) with fine jade hairlines
 * and subtle ambient aura in Aurora Jade (#B6D8C8) and Champagne (#D5A66F).
 */
export default function BackgroundGrid() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 0,
        backgroundColor: '#10151A',
        backgroundImage: `
          radial-gradient(circle at 20% 12%, rgba(182, 216, 200, 0.07) 0%, transparent 45%),
          radial-gradient(circle at 85% 60%, rgba(213, 166, 111, 0.05) 0%, transparent 40%),
          radial-gradient(circle at 50% 95%, rgba(38, 59, 57, 0.35) 0%, transparent 55%),
          linear-gradient(to right, rgba(182, 216, 200, 0.035) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(182, 216, 200, 0.035) 1px, transparent 1px)
        `,
        backgroundSize: '100% 100%, 100% 100%, 100% 100%, 72px 72px, 72px 72px',
      }}
    />
  );
}
