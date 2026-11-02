import React from 'react';

/**
 * DevIcon — Aurora Obsidian Developer Brand Mark
 * Signature symbol: </> inside a deep forest jade container with champagne and aurora accents.
 * When isSignature=true: Displays the complete futuristic developer identity composition
 * with animated floating code fragments and luxury architectural accents. Strictly no photograph.
 */
export default function DevIcon({ size = 32, isSignature = false, className = '' }) {
  if (isSignature) {
    return (
      <div
        className={`signature-composition ${className}`}
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '440px',
          padding: '2.5rem',
          userSelect: 'none',
        }}
      >
        {/* Subtle Floating Code Fragment 1: Top-Left */}
        <div
          className="code-fragment-1"
          style={{
            position: 'absolute',
            top: '0px',
            left: '10px',
            padding: '0.55rem 0.95rem',
            backgroundColor: '#151D22',
            border: '1px solid rgba(182, 216, 200, 0.3)',
            boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.8), 0 0 15px rgba(182, 216, 200, 0.08)',
            borderRadius: '3px',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.72rem',
            color: 'rgba(241, 240, 233, 0.8)',
            zIndex: 2,
            backdropFilter: 'blur(8px)',
          }}
        >
          <span style={{ color: '#B6D8C8', fontWeight: 700 }}>import</span> &#123; <span style={{ color: '#F1F0E9' }}>AgenticAI</span> &#125; <span style={{ color: '#B6D8C8', fontWeight: 700 }}>from</span> <span style={{ color: '#D5A66F' }}>'intelligence'</span>;
        </div>

        {/* Subtle Floating Code Fragment 2: Bottom-Right */}
        <div
          className="code-fragment-2"
          style={{
            position: 'absolute',
            bottom: '10px',
            right: '0px',
            padding: '0.55rem 0.95rem',
            backgroundColor: '#151D22',
            border: '1px solid rgba(213, 166, 111, 0.35)',
            boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.8), 0 0 15px rgba(213, 166, 111, 0.08)',
            borderRadius: '3px',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.72rem',
            color: 'rgba(241, 240, 233, 0.8)',
            zIndex: 2,
            backdropFilter: 'blur(8px)',
          }}
        >
          <span style={{ color: '#D5A66F', fontWeight: 700 }}>const</span> <span style={{ color: '#F1F0E9' }}>architect</span> = <span style={{ color: '#B6D8C8', fontWeight: 700 }}>async</span> () =&gt; &#123; <span style={{ color: 'rgba(241, 240, 233, 0.45)' }}>// production</span> &#125;;
        </div>

        {/* Main Identity Box */}
        <div
          style={{
            backgroundColor: 'rgba(21, 29, 34, 0.92)',
            border: '1px solid rgba(182, 216, 200, 0.25)',
            borderRadius: '4px',
            padding: '3.5rem 2.5rem',
            boxShadow: '0 25px 60px -10px rgba(0, 0, 0, 0.9), 0 0 35px -5px rgba(182, 216, 200, 0.12)',
            textAlign: 'center',
            position: 'relative',
            backdropFilter: 'blur(12px)',
          }}
        >
          {/* Subtle Corner Crosshairs: Champagne Copper */}
          <span style={{ position: 'absolute', top: '-6px', left: '-6px', fontFamily: 'var(--font-mono)', fontSize: '12px', color: '#D5A66F', fontWeight: 900 }}>+</span>
          <span style={{ position: 'absolute', top: '-6px', right: '-6px', fontFamily: 'var(--font-mono)', fontSize: '12px', color: '#D5A66F', fontWeight: 900 }}>+</span>
          <span style={{ position: 'absolute', bottom: '-6px', left: '-6px', fontFamily: 'var(--font-mono)', fontSize: '12px', color: '#D5A66F', fontWeight: 900 }}>+</span>
          <span style={{ position: 'absolute', bottom: '-6px', right: '-6px', fontFamily: 'var(--font-mono)', fontSize: '12px', color: '#D5A66F', fontWeight: 900 }}>+</span>

          {/* Primary Symbol: </> in Deep Forest Jade container */}
          <div
            style={{
              width: '68px',
              height: '68px',
              margin: '0 auto 1.75rem auto',
              backgroundColor: '#263B39',
              border: '1px solid rgba(182, 216, 200, 0.4)',
              borderRadius: '6px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 6px 20px rgba(0, 0, 0, 0.5), 0 0 20px rgba(182, 216, 200, 0.25)',
            }}
          >
            <svg
              width="36"
              height="36"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 8L3 12L7 16"
                stroke="#F1F0E9"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17 8L21 12L17 16"
                stroke="#F1F0E9"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <line
                x1="14"
                y1="5"
                x2="10"
                y2="19"
                stroke="#B6D8C8"
                strokeWidth="2.4"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Display Name */}
          <h2
            style={{
              fontSize: '1.85rem',
              fontWeight: 950,
              color: '#F1F0E9',
              letterSpacing: '-0.03em',
              marginBottom: '0.4rem',
              textTransform: 'uppercase',
            }}
          >
            DANISH RASHID
          </h2>

          {/* Subtitle: FULL STACK DEVELOPER */}
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.85rem',
              fontWeight: 800,
              color: '#B6D8C8',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              marginBottom: '1.5rem',
            }}
          >
            FULL STACK DEVELOPER
          </div>

          {/* Location & Year Metadata */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.45rem 1rem',
              backgroundColor: 'rgba(38, 59, 57, 0.55)',
              border: '1px solid rgba(182, 216, 200, 0.2)',
              borderRadius: '2px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              color: 'rgba(241, 240, 233, 0.75)',
              letterSpacing: '0.08em',
            }}
          >
            <span>MULTAN &middot; PAKISTAN</span>
            <span style={{ color: '#D5A66F' }}>&middot;</span>
            <span style={{ color: '#D5A66F', fontWeight: 800 }}>EST. 2026</span>
          </div>
        </div>
      </div>
    );
  }

  // Standard Brand Mark </> inside deep forest jade container
  return (
    <div
      style={{
        width: `${size}px`,
        height: `${size}px`,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#263B39',
        border: '1px solid rgba(182, 216, 200, 0.35)',
        borderRadius: '4px',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.4), 0 0 12px rgba(182, 216, 200, 0.15)',
        flexShrink: 0,
      }}
    >
      <svg
        width={Math.round(size * 0.65)}
        height={Math.round(size * 0.65)}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7 8L3 12L7 16"
          stroke="#F1F0E9"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17 8L21 12L17 16"
          stroke="#F1F0E9"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <line
          x1="14"
          y1="5"
          x2="10"
          y2="19"
          stroke="#B6D8C8"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
