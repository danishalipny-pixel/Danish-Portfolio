import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  Server,
  Database,
  Brain,
  Wrench,
  Globe,
  Layers,
  ShoppingBag,
  Building2,
  Smartphone,
  MapPin,
  ExternalLink,
} from 'lucide-react';
import { projectsData } from '../data/projectsData';
import DevIcon from '../components/DevIcon';
import { GithubIcon } from '../components/Icons';
import { SITE_METADATA, WHATSAPP_URL } from '../data/constants';

export default function Home() {
  // Show 4-6 strongest projects (SafarX, NovaMart, QuranLens, Danfez Lift, Atmosphere, Beacon Valley)
  const selectedProjects = projectsData.slice(0, 6);

  // Six services styled with Aurora Jade & Champagne
  const services = [
    {
      num: '01',
      title: 'WEB DEVELOPMENT',
      icon: <Globe size={22} color="#B6D8C8" />,
      desc: 'Modern, accessible, and high-performance websites optimized for speed, responsive layouts, and zero Cumulative Layout Shift (CLS).',
    },
    {
      num: '02',
      title: 'FULL STACK APPLICATIONS',
      icon: <Layers size={22} color="#B6D8C8" />,
      desc: 'End-to-end bespoke web software uniting reactive client interfaces with scalable backend runtimes and ACID database reliability.',
    },
    {
      num: '03',
      title: 'E-COMMERCE SYSTEMS',
      icon: <ShoppingBag size={22} color="#B6D8C8" />,
      desc: 'High-converting online store platforms with dynamic product filtering, Stripe payment gateway integration, and atomic inventory tracking.',
    },
    {
      num: '04',
      title: 'BUSINESS MANAGEMENT SYSTEMS',
      icon: <Building2 size={22} color="#B6D8C8" />,
      desc: 'Custom enterprise management software, hospital ERPs, Point-of-Sale (POS) terminals, and operational workflow automation.',
    },
    {
      num: '05',
      title: 'AI INTEGRATION',
      icon: <Brain size={22} color="#B6D8C8" />,
      desc: 'Embedding generative Large Language Models (OpenAI API), autonomous agent execution loops, and structured prompt engineering into software.',
    },
    {
      num: '06',
      title: 'RESPONSIVE DIGITAL EXPERIENCES',
      icon: <Smartphone size={22} color="#B6D8C8" />,
      desc: 'Touch-optimized interfaces designed to render flawlessly from 360px smartphones to ultra-wide displays and packaged APKs.',
    },
  ];

  // Verified Technology Grid
  const techCategories = [
    {
      category: 'FRONTEND',
      skills: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React 19', 'Vite 8', 'Bootstrap', 'Tailwind CSS'],
    },
    {
      category: 'BACKEND',
      skills: ['Node.js (LTS)', 'Express.js', 'Python 3', 'FastAPI', 'Flask', 'PHP', 'Laravel (Foundations)'],
    },
    {
      category: 'DATABASE',
      skills: ['MySQL', 'MongoDB', 'SQLite (WAL Mode)', 'Firebase', 'Relational Schemas', 'ACID Transactions'],
    },
    {
      category: 'AI & APIS',
      skills: ['OpenAI API', 'AI Integration', 'Prompt Engineering', 'Structured JSON Schemas', 'Autonomous Tool Calling'],
    },
    {
      category: 'TOOLS & PLATFORMS',
      skills: ['Git', 'GitHub', 'Postman API Testing', 'Cursor IDE', 'VS Code', 'Chrome DevTools', 'Docker'],
    },
  ];

  return (
    <div style={{ backgroundColor: 'transparent' }}>
      {/* ====================================================================
          01 — HERO (CINEMATIC BUT MINIMAL HERO SECTION)
          ==================================================================== */}
      <section
        style={{
          minHeight: '90vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          paddingTop: '6rem',
          paddingBottom: '5rem',
          borderBottom: '1px solid rgba(182, 216, 200, 0.16)',
          position: 'relative',
        }}
      >
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '4rem',
              alignItems: 'center',
            }}
            className="hero-split-grid"
          >
            {/* Left Hero Narrative */}
            <div>
              {/* Top Small Label: MULTAN · PAKISTAN */}
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.78rem',
                  fontWeight: 800,
                  color: '#D5A66F',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  marginBottom: '1.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}
              >
                <MapPin size={14} color="#B6D8C8" />
                <span>MULTAN &middot; PAKISTAN</span>
              </div>

              {/* Main Heading:
                  I BUILD
                  DIGITAL
                  EXPERIENCES.
                  Highlight: THAT MATTER. */}
              <h1
                style={{
                  fontSize: 'clamp(2.75rem, 6.5vw, 5.25rem)',
                  fontWeight: 950,
                  color: '#F1F0E9',
                  letterSpacing: '-0.045em',
                  lineHeight: 1.02,
                  marginBottom: '1.25rem',
                  textTransform: 'uppercase',
                }}
              >
                I BUILD<br />
                DIGITAL<br />
                EXPERIENCES.<br />
                <span style={{ color: '#B6D8C8', textShadow: '0 0 35px rgba(182, 216, 200, 0.35)' }}>THAT MATTER.</span>
              </h1>

              {/* Under Heading: Full Stack Developer & AI Developer */}
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'clamp(0.95rem, 1.8vw, 1.15rem)',
                  fontWeight: 800,
                  color: '#D5A66F',
                  letterSpacing: '0.06em',
                  marginBottom: '1.25rem',
                  textTransform: 'uppercase',
                }}
              >
                Full Stack Developer &amp; AI Developer
              </div>

              {/* Description Required */}
              <p
                style={{
                  fontSize: '1.15rem',
                  color: 'rgba(241, 240, 233, 0.78)',
                  lineHeight: 1.7,
                  maxWidth: '560px',
                  marginBottom: '2rem',
                }}
              >
                I build modern web applications, intelligent digital solutions and scalable experiences that turn ideas into practical products.
              </p>

              {/* Buttons: VIEW MY WORK → & LET'S TALK → */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '1rem',
                  alignItems: 'center',
                  marginBottom: '2.5rem',
                }}
              >
                <a
                  href="#work"
                  className="vip-btn vip-btn-primary"
                  style={{ textDecoration: 'none' }}
                >
                  <span>VIEW MY WORK →</span>
                </a>

                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="vip-btn vip-btn-secondary"
                  style={{ textDecoration: 'none' }}
                >
                  <span>LET'S TALK →</span>
                </a>
              </div>

              {/* Availability Indicator Required */}
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.78rem',
                  color: 'rgba(241, 240, 233, 0.85)',
                  fontWeight: 700,
                  letterSpacing: '0.02em',
                }}
              >
                <span className="pulse-dot" />
                <span>Available for Freelance &amp; Development Opportunities</span>
              </div>
            </div>

            {/* Right Side: Sophisticated Developer Identity Composition (No photograph) */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <DevIcon size={40} isSignature={true} />
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          02 — SELECTED WORK
          ==================================================================== */}
      <section id="work" style={{ padding: '7rem 0', borderBottom: '1px solid rgba(182, 216, 200, 0.16)' }}>
        <div className="container">
          <div className="os-section-header">
            <div>
              <div className="os-section-num">01 / WORK</div>
              <h2 className="os-section-title">SELECTED WORK</h2>
              <p style={{ fontSize: '1.1rem', color: 'rgba(241, 240, 233, 0.72)', marginTop: '0.5rem', margin: '0.5rem 0 0 0' }}>
                A selection of applications and digital products I've built.
              </p>
            </div>

            <Link
              to="/work"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8rem',
                fontWeight: 800,
                color: '#D5A66F',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                transition: 'color 0.15s ease',
              }}
            >
              <span>VIEW ALL PROJECTS</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          {/* Project Cards Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
              gap: '2.5rem',
            }}
          >
            {selectedProjects.map((proj) => (
              <div key={proj.id} className="vip-project-card">
                {/* Large Real Project Screenshot */}
                <div className="vip-project-img-box" style={{ height: '260px' }}>
                  <img
                    src={proj.primaryImage}
                    alt={`${proj.title} screenshot`}
                    loading="lazy"
                    decoding="async"
                    width="600"
                    height="338"
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '1rem',
                      left: '1rem',
                      backgroundColor: 'rgba(38, 59, 57, 0.85)',
                      border: '1px solid rgba(182, 216, 200, 0.35)',
                      backdropFilter: 'blur(8px)',
                      padding: '0.3rem 0.75rem',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.7rem',
                      fontWeight: 800,
                      color: '#B6D8C8',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                    }}
                  >
                    {proj.category}
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: '2.25rem' }}>
                  {/* Project Name */}
                  <h3
                    style={{
                      fontSize: '1.45rem',
                      fontWeight: 900,
                      color: '#F1F0E9',
                      letterSpacing: '-0.02em',
                      marginBottom: '0.75rem',
                    }}
                  >
                    {proj.shortTitle || proj.title}
                  </h3>

                  {/* Short Description */}
                  <p
                    style={{
                      fontSize: '0.95rem',
                      color: 'rgba(241, 240, 233, 0.72)',
                      lineHeight: 1.65,
                      marginBottom: '1.5rem',
                      minHeight: '50px',
                    }}
                  >
                    {proj.tagline || proj.overview?.summary}
                  </p>

                  {/* Technology Tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem', marginBottom: '2rem' }}>
                    {[
                      proj.techStack?.frontendFramework,
                      proj.techStack?.backendRuntime,
                      proj.techStack?.database,
                    ]
                      .filter(Boolean)
                      .map((t, tIdx) => (
                        <span key={tIdx} className="vip-tech-chip">
                          {t}
                        </span>
                      ))}
                  </div>

                  {/* Actions: VIEW CASE STUDY → and GITHUB → */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      paddingTop: '1.25rem',
                      borderTop: '1px solid rgba(182, 216, 200, 0.12)',
                      flexWrap: 'wrap',
                      gap: '0.75rem',
                    }}
                  >
                    <Link
                      to={`/projects/${proj.id}`}
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.8rem',
                        fontWeight: 800,
                        color: '#B6D8C8',
                        textDecoration: 'none',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        transition: 'color 0.15s ease',
                      }}
                    >
                      <span>VIEW CASE STUDY →</span>
                    </Link>

                    {proj.repoUrl && (
                      <a
                        href={proj.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.78rem',
                          fontWeight: 700,
                          color: 'rgba(241, 240, 233, 0.7)',
                          textDecoration: 'none',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.4rem',
                          transition: 'color 0.15s ease',
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = '#D5A66F')}
                        onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(241, 240, 233, 0.7)')}
                      >
                        <GithubIcon size={14} color="currentColor" />
                        <span>GITHUB →</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          03 — WHAT I BUILD (SERVICES PREVIEW)
          ==================================================================== */}
      <section className="os-lazy-section" style={{ padding: '7rem 0', borderBottom: '1px solid rgba(182, 216, 200, 0.16)', backgroundColor: 'rgba(22, 31, 37, 0.55)' }}>
        <div className="container">
          <div className="os-section-header">
            <div>
              <div className="os-section-num">02 / SERVICES</div>
              <h2 className="os-section-title">WHAT I BUILD</h2>
              <p style={{ fontSize: '1.1rem', color: 'rgba(241, 240, 233, 0.72)', marginTop: '0.5rem', margin: '0.5rem 0 0 0' }}>
                Engineering specialized systems designed for performance, stability, and growth.
              </p>
            </div>

            <Link
              to="/services"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8rem',
                fontWeight: 800,
                color: '#D5A66F',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
              }}
            >
              <span>VIEW ALL SERVICES</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2rem',
            }}
          >
            {services.map((svc) => (
              <div key={svc.num} className="vip-service-card">
                <div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '1.5rem',
                    }}
                  >
                    {svc.icon}
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.78rem',
                        fontWeight: 800,
                        color: '#D5A66F',
                        letterSpacing: '0.08em',
                      }}
                    >
                      {svc.num}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontSize: '1.25rem',
                      fontWeight: 900,
                      color: '#F1F0E9',
                      letterSpacing: '-0.02em',
                      marginBottom: '0.75rem',
                    }}
                  >
                    {svc.title}
                  </h3>

                  <p style={{ fontSize: '0.95rem', color: 'rgba(241, 240, 233, 0.74)', lineHeight: 1.65, margin: 0 }}>
                    {svc.desc}
                  </p>
                </div>

                <div style={{ marginTop: '2rem' }}>
                  <Link
                    to="/services"
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      fontWeight: 800,
                      color: '#B6D8C8',
                      textDecoration: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      transition: 'color 0.15s ease',
                    }}
                  >
                    <span>LEARN MORE &rarr;</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          04 — TECHNOLOGY (VERIFIED TECHNOLOGY GRID)
          ==================================================================== */}
      <section className="os-lazy-section" style={{ padding: '7rem 0', borderBottom: '1px solid rgba(182, 216, 200, 0.16)' }}>
        <div className="container">
          <div className="os-section-header">
            <div>
              <div className="os-section-num">03 / TECH STACK</div>
              <h2 className="os-section-title">VERIFIED TECHNOLOGY</h2>
              <p style={{ fontSize: '1.1rem', color: 'rgba(241, 240, 233, 0.72)', marginTop: '0.5rem', margin: '0.5rem 0 0 0' }}>
                Tools and frameworks proven across production codebases.
              </p>
            </div>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '2.5rem',
            }}
          >
            {techCategories.map((group, idx) => (
              <div
                key={idx}
                style={{
                  padding: '2.25rem',
                  backgroundColor: 'rgba(21, 29, 34, 0.88)',
                  border: '1px solid rgba(182, 216, 200, 0.18)',
                  borderRadius: '3px',
                  boxShadow: 'var(--shadow-card)',
                  backdropFilter: 'blur(8px)',
                }}
              >
                <h3
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.78rem',
                    fontWeight: 900,
                    color: '#B6D8C8',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    marginBottom: '1.25rem',
                    paddingBottom: '0.75rem',
                    borderBottom: '1px solid rgba(182, 216, 200, 0.14)',
                  }}
                >
                  {group.category}
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {group.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.92rem',
                        fontWeight: 600,
                        color: '#F1F0E9',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.55rem',
                      }}
                    >
                      <span style={{ width: '4px', height: '4px', backgroundColor: '#D5A66F', borderRadius: '50%', boxShadow: '0 0 6px #D5A66F' }} />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          05 — ABOUT & LOCATION SUMMARY
          ==================================================================== */}
      <section className="os-lazy-section" style={{ padding: '7rem 0', borderBottom: '1px solid rgba(182, 216, 200, 0.16)', backgroundColor: 'rgba(22, 31, 37, 0.55)' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '4rem',
              alignItems: 'center',
            }}
          >
            {/* About Narrative */}
            <div>
              <div className="os-section-num">04 / ABOUT</div>
              <h2
                style={{
                  fontSize: 'clamp(2.25rem, 5vw, 3.5rem)',
                  fontWeight: 950,
                  color: '#F1F0E9',
                  letterSpacing: '-0.04em',
                  marginBottom: '1.5rem',
                }}
              >
                BEHIND THE CODE.
              </h2>

              <p
                style={{
                  fontSize: '1.15rem',
                  color: 'rgba(241, 240, 233, 0.8)',
                  lineHeight: 1.75,
                  marginBottom: '1.5rem',
                }}
              >
                I'm Danish Rashid, a Full Stack Developer &amp; AI Developer from Multan, Pakistan. I enjoy transforming ideas into practical digital products through modern web development, backend systems and AI-powered solutions.
              </p>

              <p
                style={{
                  fontSize: '1rem',
                  color: 'rgba(241, 240, 233, 0.65)',
                  lineHeight: 1.7,
                  marginBottom: '2rem',
                }}
              >
                With a formal degree in Business &amp; Information Technology (BBIT), I focus on software that solves real operational bottlenecks: from intercity transport platforms to multi-vendor e-commerce engines and deterministic agent workflows.
              </p>

              <Link
                to="/about"
                className="vip-btn vip-btn-secondary"
                style={{ textDecoration: 'none' }}
              >
                <span>READ COMPLETE BIOGRAPHY →</span>
              </Link>
            </div>

            {/* Location Box as per Section 11 */}
            <div>
              <div
                style={{
                  padding: '3rem 2.5rem',
                  backgroundColor: 'rgba(21, 29, 34, 0.95)',
                  border: '1px solid rgba(182, 216, 200, 0.3)',
                  borderRadius: '4px',
                  boxShadow: 'var(--shadow-hover)',
                  backdropFilter: 'blur(12px)',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.65rem',
                    marginBottom: '1rem',
                  }}
                >
                  <MapPin size={22} color="#B6D8C8" />
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.78rem',
                      fontWeight: 800,
                      color: '#B6D8C8',
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                    }}
                  >
                    BASED IN
                  </span>
                </div>

                <div
                  style={{
                    fontSize: '1.75rem',
                    fontWeight: 950,
                    color: '#F1F0E9',
                    letterSpacing: '-0.03em',
                    lineHeight: 1.2,
                    marginBottom: '0.75rem',
                    textTransform: 'uppercase',
                  }}
                >
                  MULTAN, PUNJAB<br />
                  PAKISTAN
                </div>

                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.8rem',
                    color: '#D5A66F',
                    letterSpacing: '0.06em',
                    fontWeight: 700,
                    marginBottom: '1.75rem',
                  }}
                >
                  30.1575° N, 71.5249° E &middot; PKT (GMT+5)
                </div>

                <div
                  style={{
                    padding: '1rem',
                    backgroundColor: 'rgba(38, 59, 57, 0.45)',
                    border: '1px solid rgba(182, 216, 200, 0.2)',
                    borderRadius: '2px',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    color: 'rgba(241, 240, 233, 0.85)',
                  }}
                >
                  Available globally for remote contracts, engineering leadership, and freelance development.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          06 — CTA SECTION (LET'S BUILD SOMETHING GREAT.)
          ==================================================================== */}
      <section className="os-lazy-section" style={{ padding: '7.5rem 0' }}>
        <div className="container">
          <div className="os-section-num" style={{ marginBottom: '1.25rem' }}>
            05 / CONTACT
          </div>

          <div style={{ maxWidth: '920px', marginBottom: '3.5rem' }}>
            <h2
              style={{
                fontSize: 'clamp(2.75rem, 6.5vw, 5rem)',
                fontWeight: 950,
                color: '#F1F0E9',
                letterSpacing: '-0.045em',
                lineHeight: 1.05,
                margin: '0 0 1.5rem 0',
                textTransform: 'uppercase',
              }}
            >
              LET'S BUILD<br />
              <span style={{ color: '#B6D8C8', textShadow: '0 0 35px rgba(182, 216, 200, 0.3)' }}>SOMETHING GREAT.</span>
            </h2>

            <p style={{ fontSize: '1.25rem', color: 'rgba(241, 240, 233, 0.78)', lineHeight: 1.7, margin: 0, maxWidth: '640px' }}>
              Have an idea, project or opportunity? Let's turn it into something real.
            </p>
          </div>

          {/* Action CTAs */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1.25rem',
              alignItems: 'center',
            }}
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="vip-btn vip-btn-accent"
              style={{ textDecoration: 'none', padding: '1.1rem 2.25rem' }}
            >
              <span>WHATSAPP ME →</span>
            </a>

            <Link
              to="/contact"
              className="vip-btn vip-btn-secondary"
              style={{ textDecoration: 'none', padding: '1.1rem 2.25rem' }}
            >
              <span>PROJECT INQUIRY FORM →</span>
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        @media (min-width: 900px) {
          .hero-split-grid {
            grid-template-columns: 1.2fr 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
