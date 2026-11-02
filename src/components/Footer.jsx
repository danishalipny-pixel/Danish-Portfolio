import React from 'react';
import { Link } from 'react-router-dom';
import DevIcon from './DevIcon';
import { GithubIcon, LinkedinIcon } from './Icons';
import { SITE_METADATA, WHATSAPP_URL } from '../data/constants';

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: '#10151A',
        borderTop: '1px solid rgba(182, 216, 200, 0.16)',
        padding: '5rem 0 3.5rem 0',
        marginTop: 'auto',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div className="container">
        {/* Top Footer Section */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '3rem',
            paddingBottom: '3.5rem',
            borderBottom: '1px solid rgba(182, 216, 200, 0.12)',
          }}
        >
          {/* Brand Info */}
          <div>
            <div style={{ display: 'inline-block', marginBottom: '1.25rem' }}>
              <DevIcon size={34} />
            </div>

            <h3
              style={{
                fontSize: '1.35rem',
                fontWeight: 950,
                color: '#F1F0E9',
                letterSpacing: '-0.03em',
                marginBottom: '0.35rem',
                textTransform: 'uppercase',
              }}
            >
              DANISH RASHID
            </h3>

            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8rem',
                fontWeight: 800,
                color: '#B6D8C8',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom: '0.5rem',
              }}
            >
              FULL STACK DEVELOPER &amp; AI DEVELOPER
            </div>

            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                color: '#D5A66F',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                fontWeight: 700,
              }}
            >
              MULTAN &middot; PAKISTAN
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                fontWeight: 800,
                color: '#B6D8C8',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                marginBottom: '1.25rem',
              }}
            >
              NAVIGATION
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {[
                { label: 'HOME', to: '/' },
                { label: 'ABOUT', to: '/about' },
                { label: 'WORK', to: '/work' },
                { label: 'SERVICES', to: '/services' },
                { label: 'CONTACT', to: '/contact' },
              ].map((item, idx) => (
                <Link
                  key={idx}
                  to={item.to}
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.82rem',
                    color: 'rgba(241, 240, 233, 0.72)',
                    textDecoration: 'none',
                    letterSpacing: '0.04em',
                    transition: 'color 0.15s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#B6D8C8')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(241, 240, 233, 0.72)')}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Social Profiles & WhatsApp */}
          <div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                fontWeight: 800,
                color: '#B6D8C8',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                marginBottom: '1.25rem',
              }}
            >
              CONNECT
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              <a
                href={SITE_METADATA.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.82rem',
                  color: 'rgba(241, 240, 233, 0.72)',
                  textDecoration: 'none',
                  transition: 'color 0.15s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#B6D8C8')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(241, 240, 233, 0.72)')}
              >
                <GithubIcon size={15} color="currentColor" />
                <span>GITHUB</span>
              </a>

              <a
                href={SITE_METADATA.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.82rem',
                  color: 'rgba(241, 240, 233, 0.72)',
                  textDecoration: 'none',
                  transition: 'color 0.15s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#B6D8C8')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(241, 240, 233, 0.72)')}
              >
                <LinkedinIcon size={15} color="currentColor" />
                <span>LINKEDIN</span>
              </a>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.82rem',
                  color: '#D5A66F',
                  fontWeight: 800,
                  textDecoration: 'none',
                  transition: 'color 0.15s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#B6D8C8')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#D5A66F')}
              >
                <span>WHATSAPP (+92 310 2419596) &rarr;</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Line & Copyright */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: '2rem',
            gap: '1rem',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            color: 'rgba(241, 240, 233, 0.5)',
          }}
        >
          <div>
            &copy; {new Date().getFullYear()} DANISH RASHID &middot; ALL RIGHTS RESERVED
          </div>

          <div style={{ color: '#D5A66F', fontWeight: 800, letterSpacing: '0.1em' }}>
            BUILT WITH PURPOSE.
          </div>
        </div>
      </div>
    </footer>
  );
}
