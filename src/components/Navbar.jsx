import React, { useState, useEffect, useRef, useCallback } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import DevIcon from './DevIcon';
import { WHATSAPP_URL } from '../data/constants';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const progressBarRef = useRef(null);
  const isScrolledRef = useRef(false);
  const location = useLocation();

  // High-performance scroll tracking using requestAnimationFrame and direct DOM transform
  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          const docElem = document.documentElement;
          const totalHeight = docElem.scrollHeight - window.innerHeight;

          // GPU-accelerated scroll progress bar without triggering React re-renders
          if (progressBarRef.current && totalHeight > 0) {
            const ratio = Math.min(1, Math.max(0, scrollY / totalHeight));
            progressBarRef.current.style.transform = `scaleX(${ratio})`;
          }

          // State update only on threshold boundary change
          const scrolled = scrollY > 20;
          if (scrolled !== isScrolledRef.current) {
            isScrolledRef.current = scrolled;
            setIsScrolled(scrolled);
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Preload route chunks on hover for instant perceived responsiveness
  const preloadRoute = useCallback((path) => {
    switch (path) {
      case '/work':
      case '/projects':
        import('../pages/Projects');
        break;
      case '/about':
        import('../pages/About');
        break;
      case '/services':
        import('../pages/Services');
        break;
      case '/contact':
        import('../pages/Contact');
        break;
      default:
        break;
    }
  }, []);

  const navLinks = [
    { label: 'HOME', path: '/' },
    { label: 'ABOUT', path: '/about' },
    { label: 'WORK', path: '/work' },
    { label: 'SERVICES', path: '/services' },
    { label: 'CONTACT', path: '/contact' },
  ];

  return (
    <>
      {/* Precision Scroll Indicator: Aurora Jade to Champagne Gradient */}
      <div
        ref={progressBarRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '2px',
          background: 'linear-gradient(to right, #B6D8C8, #D5A66F)',
          zIndex: 100000,
          transform: 'scaleX(0)',
          transformOrigin: 'left',
          pointerEvents: 'none',
          willChange: 'transform',
          boxShadow: '0 0 8px rgba(182, 216, 200, 0.6)',
        }}
      />

      {/* Sticky Navigation Bar */}
      <header
        className={`vip-nav-container ${isScrolled ? 'vip-nav-scrolled' : ''}`}
        style={{
          padding: isScrolled ? '0.75rem 0' : '1.15rem 0',
          borderBottom: '1px solid rgba(182, 216, 200, 0.16)',
        }}
      >
        <div className="container">
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            {/* Left Brand: </> DANISH RASHID */}
            <Link
              to="/"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                textDecoration: 'none',
              }}
            >
              <DevIcon size={32} />
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span
                  style={{
                    fontSize: '0.92rem',
                    fontWeight: 900,
                    color: '#F1F0E9',
                    letterSpacing: '-0.02em',
                    fontFamily: 'var(--font-sans)',
                    textTransform: 'uppercase',
                    lineHeight: 1.1,
                  }}
                >
                  DANISH RASHID
                </span>
                <span
                  style={{
                    fontSize: '0.62rem',
                    fontWeight: 800,
                    color: '#B6D8C8',
                    letterSpacing: '0.12em',
                    fontFamily: 'var(--font-mono)',
                    textTransform: 'uppercase',
                    lineHeight: 1,
                    marginTop: '2px',
                  }}
                  className="desktop-only-sub"
                >
                  FULL STACK DEVELOPER &amp; AI DEVELOPER
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav
              style={{
                display: 'none',
                alignItems: 'center',
                gap: '2.25rem',
              }}
              className="desktop-links"
            >
              {navLinks.map((link) => {
                const isActive =
                  link.path === '/'
                    ? location.pathname === '/'
                    : location.pathname.startsWith(link.path) ||
                      (link.path === '/work' && location.pathname.startsWith('/projects'));

                return (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    onMouseEnter={() => preloadRoute(link.path)}
                    onFocus={() => preloadRoute(link.path)}
                    style={{
                      fontSize: '0.78rem',
                      fontWeight: isActive ? 800 : 600,
                      letterSpacing: '0.08em',
                      color: isActive ? '#B6D8C8' : 'rgba(241, 240, 233, 0.72)',
                      fontFamily: 'var(--font-mono)',
                      textDecoration: 'none',
                      transition: 'color 0.15s ease',
                      position: 'relative',
                      padding: '0.35rem 0',
                    }}
                  >
                    {link.label}
                    {isActive && (
                      <span
                        style={{
                          position: 'absolute',
                          bottom: '-4px',
                          left: 0,
                          right: 0,
                          height: '2px',
                          backgroundColor: '#B6D8C8',
                          boxShadow: '0 0 8px rgba(182, 216, 200, 0.7)',
                          borderRadius: '1px',
                        }}
                      />
                    )}
                  </NavLink>
                );
              })}
            </nav>

            {/* Right Action: LET'S TALK → */}
            <div
              style={{
                display: 'none',
                alignItems: 'center',
              }}
              className="desktop-cta"
            >
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="vip-btn vip-btn-primary"
                style={{
                  padding: '0.6rem 1.35rem',
                  fontSize: '0.75rem',
                  textDecoration: 'none',
                }}
              >
                <span>LET'S TALK →</span>
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'rgba(38, 59, 57, 0.4)',
                border: '1px solid rgba(182, 216, 200, 0.25)',
                color: '#F1F0E9',
                padding: '0.5rem',
                cursor: 'pointer',
                borderRadius: '3px',
              }}
              className="mobile-toggle-btn"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Slide Drawer */}
        {mobileMenuOpen && (
          <div
            style={{
              backgroundColor: '#151D22',
              borderTop: '1px solid rgba(182, 216, 200, 0.16)',
              padding: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              boxShadow: '0 15px 35px rgba(0, 0, 0, 0.8)',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {navLinks.map((link) => {
                const isActive =
                  link.path === '/'
                    ? location.pathname === '/'
                    : location.pathname.startsWith(link.path) ||
                      (link.path === '/work' && location.pathname.startsWith('/projects'));

                return (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.85rem',
                      fontWeight: isActive ? 800 : 600,
                      color: isActive ? '#B6D8C8' : 'rgba(241, 240, 233, 0.8)',
                      textDecoration: 'none',
                      padding: '0.65rem 0.75rem',
                      backgroundColor: isActive ? 'rgba(38, 59, 57, 0.5)' : 'transparent',
                      borderLeft: isActive ? '3px solid #B6D8C8' : '3px solid transparent',
                      letterSpacing: '0.06em',
                    }}
                  >
                    {link.label}
                  </NavLink>
                );
              })}
            </div>

            <div style={{ paddingTop: '1rem', borderTop: '1px solid rgba(182, 216, 200, 0.16)' }}>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="vip-btn vip-btn-primary"
                style={{
                  width: '100%',
                  textAlign: 'center',
                  textDecoration: 'none',
                  padding: '0.85rem',
                  fontSize: '0.8rem',
                }}
              >
                LET'S TALK →
              </a>
            </div>
          </div>
        )}
      </header>

      <style>{`
        @media (min-width: 820px) {
          .desktop-links { display: flex !important; }
          .desktop-cta { display: flex !important; }
          .mobile-toggle-btn { display: none !important; }
          .desktop-only-sub { display: block !important; }
        }
        @media (max-width: 819px) {
          .desktop-only-sub { display: none !important; }
        }
      `}</style>
    </>
  );
}
