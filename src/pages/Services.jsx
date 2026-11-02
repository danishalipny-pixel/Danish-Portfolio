import React from 'react';
import { Link } from 'react-router-dom';
import {
  Globe,
  Layers,
  ShoppingBag,
  Building2,
  Brain,
  Smartphone,
  ArrowRight,
  ArrowUpRight,
} from 'lucide-react';
import { WHATSAPP_URL } from '../data/constants';

export default function Services() {
  const services = [
    {
      number: '01',
      title: 'WEB DEVELOPMENT',
      icon: <Globe size={24} color="#B6D8C8" />,
      description:
        'Crafting modern, accessible, and high-performance websites optimized for speed, responsive layouts, search visibility, and zero Cumulative Layout Shift (CLS).',
      deliverables: [
        'Semantic HTML5 & modern modular CSS3 architecture',
        'Zero Cumulative Layout Shift (CLS) layout stability',
        'Cross-browser and mobile-first responsive layout',
        'Lighthouse performance and accessibility optimization',
      ],
      tech: 'REACT 19 · VITE 8 · MODERN JAVASCRIPT · TAILWIND CSS',
    },
    {
      number: '02',
      title: 'FULL STACK APPLICATIONS',
      icon: <Layers size={24} color="#B6D8C8" />,
      description:
        'End-to-end bespoke web software platforms uniting reactive frontend user interfaces with scalable server runtimes and ACID database reliability.',
      deliverables: [
        'Component-driven frontend with React state management',
        'Secure RESTful APIs with input sanitization and rate limits',
        'JWT token authentication & Role-Based Access Control (RBAC)',
        'ACID relational schemas and NoSQL document models',
      ],
      tech: 'REACT · NODE.JS · EXPRESS · PYTHON · MONGODB · SQLITE',
    },
    {
      number: '03',
      title: 'E-COMMERCE SYSTEMS',
      icon: <ShoppingBag size={24} color="#B6D8C8" />,
      description:
        'Single-store and multi-vendor retail platforms with instant catalog search, merchant management, inventory tracking, and automated checkout.',
      deliverables: [
        'Product catalog search, category filters & zoom galleries',
        'Stripe payment gateway integration & automated webhook listeners',
        'Slide-over cart drawers, checkout & atomic inventory decrement',
        'Independent merchant dashboards & admin governance',
      ],
      tech: 'REACT · NODE.JS · STRIPE API · CLOUDINARY · MONGODB',
    },
    {
      number: '04',
      title: 'BUSINESS MANAGEMENT SYSTEMS',
      icon: <Building2 size={24} color="#B6D8C8" />,
      description:
        'Custom enterprise operations software designed to eliminate operational friction, automate accounting ledgers, and streamline internal company workflows.',
      deliverables: [
        'Hospital clinical platforms (EMR, pharmacy, billing, beds)',
        'High-speed Point-of-Sale (POS) terminals with barcode lookups',
        'School management ERPs (student records, fee vouchers, GPA)',
        'Data table exports, printable receipts, and audit ledgers',
      ],
      tech: 'FASTAPI · NODE.JS · SQLITE (WAL) · REACT · MONGODB',
    },
    {
      number: '05',
      title: 'AI INTEGRATION',
      icon: <Brain size={24} color="#B6D8C8" />,
      description:
        'Embedding generative Large Language Models and autonomous agent loops into practical everyday business tools and web platforms.',
      deliverables: [
        'OpenAI API integration (GPT-4o / GPT-3.5) with prompt pipelines',
        'Structured JSON schema enforcement for deterministic parsing',
        'Autonomous multi-turn reasoning loops and tool execution',
        'Context-grounded conversational assistants & tutors',
      ],
      tech: 'OPENAI API · PYTHON 3 · FLASK · PROMPT PIPELINES · JSON SCHEMAS',
    },
    {
      number: '06',
      title: 'RESPONSIVE DIGITAL EXPERIENCES',
      icon: <Smartphone size={24} color="#B6D8C8" />,
      description:
        'Building touch-first responsive interfaces and compiling web platforms into standalone native Android release packages.',
      deliverables: [
        'Tested across 360px smartphones to ultra-wide displays',
        'Touch-optimized navigation bars & safe-area insets',
        'Progressive Web App (PWA) manifest & offline caching',
        'Capacitor packaging into standalone native Android release APKs',
      ],
      tech: 'CAPACITOR · ANDROID SDK · GRADLE · RESPONSIVE CSS · PWA',
    },
  ];

  return (
    <div style={{ backgroundColor: 'transparent', paddingBottom: '7rem', paddingTop: '5.5rem' }}>
      {/* ====================================================================
          HEADER: WHAT I BUILD.
          ==================================================================== */}
      <section
        style={{
          paddingTop: '4.5rem',
          paddingBottom: '4rem',
          backgroundColor: 'rgba(22, 31, 37, 0.55)',
          borderBottom: '1px solid rgba(182, 216, 200, 0.16)',
        }}
      >
        <div className="container">
          <div style={{ maxWidth: '880px' }}>
            <div className="os-section-num" style={{ marginBottom: '1rem' }}>
              01 / SERVICES
            </div>
            <h1
              style={{
                fontSize: 'clamp(2.75rem, 6.5vw, 4.75rem)',
                fontWeight: 950,
                color: '#F1F0E9',
                letterSpacing: '-0.04em',
                marginBottom: '1rem',
                lineHeight: 1.05,
              }}
            >
              WHAT I BUILD.
            </h1>
            <p style={{ fontSize: '1.2rem', color: 'rgba(241, 240, 233, 0.75)', lineHeight: 1.7, margin: 0 }}>
              Six specialized engineering disciplines designed for founders, companies, and software teams requiring robust architecture and verifiable execution.
            </p>
          </div>
        </div>
      </section>

      {/* ====================================================================
          SIX SERVICE SECTIONS
          ==================================================================== */}
      <section style={{ padding: '5.5rem 0' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
              gap: '2.5rem',
            }}
          >
            {services.map((svc) => (
              <div key={svc.number} className="vip-service-card">
                <div>
                  {/* Top Bar: Icon & Number */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '1.5rem',
                      paddingBottom: '1rem',
                      borderBottom: '1px solid rgba(182, 216, 200, 0.14)',
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
                      {svc.number}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    style={{
                      fontSize: '1.4rem',
                      fontWeight: 950,
                      color: '#F1F0E9',
                      letterSpacing: '-0.02em',
                      marginBottom: '1rem',
                      lineHeight: 1.2,
                    }}
                  >
                    {svc.title}
                  </h3>

                  {/* Description */}
                  <p
                    style={{
                      fontSize: '0.98rem',
                      color: 'rgba(241, 240, 233, 0.72)',
                      lineHeight: 1.65,
                      marginBottom: '1.75rem',
                    }}
                  >
                    {svc.description}
                  </p>

                  {/* Deliverables */}
                  <div style={{ marginBottom: '1.75rem' }}>
                    <div
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.7rem',
                        fontWeight: 800,
                        color: '#B6D8C8',
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        marginBottom: '0.75rem',
                      }}
                    >
                      TECHNICAL SPECIFICATIONS
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
                      {svc.deliverables.map((item, dIdx) => (
                        <div key={dIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                          <span style={{ color: '#D5A66F', fontWeight: 900, lineHeight: 1.4 }}>&rarr;</span>
                          <span style={{ fontSize: '0.88rem', color: 'rgba(241, 240, 233, 0.82)', lineHeight: 1.5 }}>
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  {/* Tech stack badge */}
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      color: '#D5A66F',
                      marginBottom: '1.5rem',
                      letterSpacing: '0.06em',
                    }}
                  >
                    {svc.tech}
                  </div>

                  {/* CTA Action */}
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="vip-btn vip-btn-secondary"
                    style={{
                      width: '100%',
                      textAlign: 'center',
                      textDecoration: 'none',
                    }}
                  >
                    <span>LET'S TALK ABOUT THIS →</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Discovery Card */}
          <div
            style={{
              marginTop: '5rem',
              padding: '3.5rem',
              textAlign: 'center',
              backgroundColor: 'rgba(38, 59, 57, 0.65)',
              border: '1px solid rgba(182, 216, 200, 0.35)',
              borderRadius: '4px',
              boxShadow: 'var(--shadow-hover)',
            }}
          >
            <h2
              style={{
                fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
                fontWeight: 950,
                color: '#F1F0E9',
                letterSpacing: '-0.035em',
                marginBottom: '1rem',
              }}
            >
              HAVE A BESPOKE SYSTEM REQUIREMENT?
            </h2>
            <p
              style={{
                fontSize: '1.1rem',
                color: 'rgba(241, 240, 233, 0.8)',
                maxWidth: '640px',
                margin: '0 auto 2.25rem auto',
                lineHeight: 1.65,
              }}
            >
              If your application involves hybrid API architectures, multi-tenant databases, or custom AI agent loops, let's discuss your specification.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="vip-btn vip-btn-primary"
                style={{ textDecoration: 'none' }}
              >
                <span>LET'S TALK ON WHATSAPP →</span>
              </a>
              <Link
                to="/contact"
                className="vip-btn vip-btn-secondary"
                style={{ textDecoration: 'none' }}
              >
                <span>SEND PROJECT BRIEF →</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
