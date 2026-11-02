import React from 'react';
import { Link } from 'react-router-dom';
import {
  Code2,
  Server,
  Database,
  Brain,
  Layers,
  MapPin,
  ArrowRight,
  Briefcase,
  GraduationCap,
  CheckCircle2,
  Compass,
  Cpu,
  Workflow,
} from 'lucide-react';
import DevIcon from '../components/DevIcon';
import { SITE_METADATA, WHATSAPP_URL } from '../data/constants';

export default function About() {
  const whatIDo = [
    {
      title: 'Full Stack Web Architecture',
      desc: 'Developing responsive web platforms with React 19, modern JavaScript, and Node.js/Express backend APIs designed for high throughput and layout stability.',
    },
    {
      title: 'AI & Large Language Model Systems',
      desc: 'Implementing structured OpenAI API pipelines, autonomous agent tool calling, deterministic prompt engineering, and conversational reasoning loops.',
    },
    {
      title: 'Database Architecture & Reliability',
      desc: 'Designing normalized relational schemas (SQLite/MySQL), NoSQL document models (MongoDB), and atomic transactions that protect data integrity.',
    },
    {
      title: 'Business & Management Platforms',
      desc: 'Architecting hospital management systems, school ERPs, Point-of-Sale terminals, and operations platforms with strict Role-Based Access Control (RBAC).',
    },
  ];

  const howIWork = [
    {
      step: '01',
      title: 'Architectural Blueprinting',
      detail: 'Every project begins with a clear system diagram, database schema design, and API endpoint specification before writing production code.',
    },
    {
      step: '02',
      title: 'Deterministic Implementation',
      detail: 'Writing clean, modular, and maintainable code adhering to DRY principles, semantic standards, and strict TypeScript/JavaScript best practices.',
    },
    {
      step: '03',
      title: 'Rigorous Verification',
      detail: 'Auditing routes for performance, testing API edge cases with Postman collections, and guaranteeing zero Cumulative Layout Shift (CLS).',
    },
    {
      step: '04',
      title: 'Turnkey Delivery & Deployment',
      detail: 'Deploying optimized builds with automated SPA fallbacks, HTTPS certificate configurations, and comprehensive technical documentation.',
    },
  ];

  const journey = [
    {
      period: '2024 — PRESENT',
      role: 'Frontend Developer',
      company: 'FentixTech',
      location: 'Lahore, Pakistan',
      type: 'PROFESSIONAL EXPERIENCE',
      desc: 'Engineered production-grade frontend interfaces, reactive component structures, and modular CSS with strict cross-browser layout stability.',
      highlights: [
        'Built modular CSS and semantic HTML5 architectures with strict mobile responsiveness.',
        'Guaranteed zero Cumulative Layout Shift (CLS) across high-traffic customer portals.',
        'Collaborated on component-driven user flows, form validation, and performance audits.',
      ],
    },
    {
      period: '2023 — 2024',
      role: 'Web Development Intern',
      company: 'Kod Avenger',
      location: 'Pakistan',
      type: 'PROFESSIONAL EXPERIENCE',
      desc: 'Hands-on immersion in collaborative engineering sprints, Git branching, REST API consumption, and application debugging.',
      highlights: [
        'Assisted in implementing frontend features and binding client state to backend endpoints.',
        'Participated in code reviews, bug fixes, and performance profiling.',
        'Strengthened foundational best practices in full-stack architecture and team Git workflows.',
      ],
    },
    {
      period: 'ACADEMIC DEGREE',
      role: 'Bachelor of Business & Information Technology (BBIT)',
      company: 'Virtual University',
      location: 'Pakistan',
      type: 'FORMAL EDUCATION',
      desc: 'Comprehensive degree bridging software engineering, database management, computer networks, and enterprise information systems.',
      highlights: [
        'Relational database design, SQL query optimization, concurrency control, and ACID compliance.',
        'Enterprise system analysis, software engineering life cycles, and IT infrastructure.',
      ],
    },
    {
      period: 'SPECIALIZATION',
      role: 'Full Stack & Agentic AI Certification',
      company: 'PNY Trainings',
      location: 'Lahore, Pakistan',
      type: 'PROFESSIONAL CERTIFICATION',
      desc: 'Intensive hands-on technical curriculum focused on building production web applications with the MERN stack and developing autonomous AI agent loops.',
      highlights: [
        'Advanced MERN stack development (MongoDB, Express, React, Node.js).',
        'Agentic AI Specialization: Autonomous tools, prompt pipelines, and multi-turn conversational agents.',
      ],
    },
  ];

  return (
    <div style={{ backgroundColor: 'transparent', paddingBottom: '7rem', paddingTop: '5.5rem' }}>
      {/* ====================================================================
          HEADER: BEHIND THE CODE.
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
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '4rem',
              alignItems: 'center',
            }}
          >
            {/* Left Narrative */}
            <div>
              <div className="os-section-num" style={{ marginBottom: '1rem' }}>
                01 / BIOGRAPHY
              </div>

              {/* Required Heading: BEHIND THE CODE. */}
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
                BEHIND THE CODE.
              </h1>

              {/* Required Introduction */}
              <p
                style={{
                  fontSize: '1.25rem',
                  color: '#B6D8C8',
                  lineHeight: 1.7,
                  marginBottom: '1.5rem',
                  fontWeight: 700,
                }}
              >
                I'm Danish Rashid, a Full Stack Developer &amp; AI Developer from Multan, Pakistan.
              </p>

              <p
                style={{
                  fontSize: '1.1rem',
                  color: 'rgba(241, 240, 233, 0.78)',
                  lineHeight: 1.75,
                  marginBottom: '2rem',
                }}
              >
                I enjoy transforming ideas into practical digital products through modern web development, backend systems and AI-powered solutions.
              </p>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="vip-btn vip-btn-primary"
                  style={{ textDecoration: 'none' }}
                >
                  <span>LET'S TALK →</span>
                </a>
                <Link
                  to="/work"
                  className="vip-btn vip-btn-secondary"
                  style={{ textDecoration: 'none' }}
                >
                  <span>VIEW MY WORK →</span>
                </Link>
              </div>
            </div>

            {/* Right Brand Mark Composition (NO photograph) */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <DevIcon size={38} isSignature={true} />
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          WHO I AM & LOCATION (SECTION 11)
          ==================================================================== */}
      <section style={{ padding: '6rem 0', borderBottom: '1px solid rgba(182, 216, 200, 0.16)' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '4rem',
              alignItems: 'center',
            }}
          >
            <div>
              <div className="os-section-num">02 / IDENTITY</div>
              <h2
                style={{
                  fontSize: '2.5rem',
                  fontWeight: 950,
                  color: '#F1F0E9',
                  letterSpacing: '-0.035em',
                  marginBottom: '1.5rem',
                }}
              >
                WHO I AM
              </h2>

              <p style={{ fontSize: '1.05rem', color: 'rgba(241, 240, 233, 0.78)', lineHeight: 1.75, marginBottom: '1.25rem' }}>
                I am a software developer with a formal degree in Business &amp; Information Technology (BBIT) from Virtual University. This academic foundation bridges technical computer science—data structures, network protocols, relational database management—with real commercial business logic.
              </p>

              <p style={{ fontSize: '1.05rem', color: 'rgba(241, 240, 233, 0.78)', lineHeight: 1.75, margin: 0 }}>
                Whether designing passenger and driver verification workflows with strict CNIC document isolation or integrating OpenAI API reasoning models into interactive web apps, my goal is always software that solves practical operational challenges reliably.
              </p>
            </div>

            {/* Required Section 11: LOCATION DISPLAY */}
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
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1rem' }}>
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
                    fontSize: '1.85rem',
                    fontWeight: 950,
                    color: '#F1F0E9',
                    letterSpacing: '-0.03em',
                    lineHeight: 1.15,
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
                    fontSize: '0.82rem',
                    color: '#D5A66F',
                    letterSpacing: '0.06em',
                    fontWeight: 700,
                    marginBottom: '1.75rem',
                  }}
                >
                  30.1575° N, 71.5249° E &middot; GMT+5 (PKT)
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
                    lineHeight: 1.5,
                  }}
                >
                  Collaborating seamlessly across time zones with clients, software teams, and startups worldwide.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          WHAT I DO
          ==================================================================== */}
      <section style={{ padding: '6rem 0', borderBottom: '1px solid rgba(182, 216, 200, 0.16)', backgroundColor: 'rgba(22, 31, 37, 0.55)' }}>
        <div className="container">
          <div className="os-section-header">
            <div>
              <div className="os-section-num">03 / CAPABILITIES</div>
              <h2 className="os-section-title">WHAT I DO</h2>
              <p style={{ fontSize: '1.1rem', color: 'rgba(241, 240, 233, 0.72)', marginTop: '0.5rem', margin: '0.5rem 0 0 0' }}>
                Core engineering specializations backed by verified production experience.
              </p>
            </div>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '2rem',
            }}
          >
            {whatIDo.map((item, idx) => (
              <div
                key={idx}
                style={{
                  padding: '2.5rem',
                  backgroundColor: 'rgba(21, 29, 34, 0.88)',
                  border: '1px solid rgba(182, 216, 200, 0.16)',
                  borderRadius: '3px',
                  boxShadow: 'var(--shadow-card)',
                }}
              >
                <h3
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 900,
                    color: '#F1F0E9',
                    letterSpacing: '-0.02em',
                    marginBottom: '0.85rem',
                  }}
                >
                  {item.title}
                </h3>
                <p style={{ fontSize: '0.95rem', color: 'rgba(241, 240, 233, 0.72)', lineHeight: 1.65, margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          HOW I WORK
          ==================================================================== */}
      <section style={{ padding: '6rem 0', borderBottom: '1px solid rgba(182, 216, 200, 0.16)' }}>
        <div className="container">
          <div className="os-section-header">
            <div>
              <div className="os-section-num">04 / METHODOLOGY</div>
              <h2 className="os-section-title">HOW I WORK</h2>
              <p style={{ fontSize: '1.1rem', color: 'rgba(241, 240, 233, 0.72)', marginTop: '0.5rem', margin: '0.5rem 0 0 0' }}>
                Disciplined engineering principles applied to every technical engagement.
              </p>
            </div>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '2rem',
            }}
          >
            {howIWork.map((step) => (
              <div
                key={step.step}
                style={{
                  padding: '2.5rem',
                  backgroundColor: 'rgba(38, 59, 57, 0.4)',
                  border: '1px solid rgba(182, 216, 200, 0.18)',
                  borderRadius: '3px',
                  boxShadow: 'var(--shadow-soft)',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    fontWeight: 900,
                    color: '#D5A66F',
                    letterSpacing: '0.12em',
                    marginBottom: '1rem',
                  }}
                >
                  STEP // {step.step}
                </div>

                <h3
                  style={{
                    fontSize: '1.2rem',
                    fontWeight: 900,
                    color: '#F1F0E9',
                    marginBottom: '0.75rem',
                  }}
                >
                  {step.title}
                </h3>

                <p style={{ fontSize: '0.92rem', color: 'rgba(241, 240, 233, 0.75)', lineHeight: 1.65, margin: 0 }}>
                  {step.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          MY JOURNEY (EXPERIENCE & EDUCATION TIMELINE)
          ==================================================================== */}
      <section style={{ padding: '6rem 0' }}>
        <div className="container">
          <div className="os-section-header">
            <div>
              <div className="os-section-num">05 / TIMELINE</div>
              <h2 className="os-section-title">MY JOURNEY</h2>
              <p style={{ fontSize: '1.1rem', color: 'rgba(241, 240, 233, 0.72)', marginTop: '0.5rem', margin: '0.5rem 0 0 0' }}>
                Verified professional engagements and academic qualifications.
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {journey.map((item, idx) => (
              <div
                key={idx}
                style={{
                  padding: '2.5rem',
                  backgroundColor: 'rgba(21, 29, 34, 0.88)',
                  border: '1px solid rgba(182, 216, 200, 0.18)',
                  borderRadius: '4px',
                  boxShadow: 'var(--shadow-card)',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '1rem',
                    marginBottom: '1rem',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.78rem',
                      fontWeight: 800,
                      color: '#B6D8C8',
                      letterSpacing: '0.1em',
                    }}
                  >
                    {item.period} &middot; {item.type}
                  </span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#D5A66F' }}>
                    {item.location}
                  </span>
                </div>

                <h3
                  style={{
                    fontSize: '1.5rem',
                    fontWeight: 900,
                    letterSpacing: '-0.02em',
                    color: '#F1F0E9',
                    marginBottom: '0.25rem',
                  }}
                >
                  {item.role}
                </h3>

                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.9rem',
                    fontWeight: 700,
                    color: '#D5A66F',
                    marginBottom: '1.25rem',
                  }}
                >
                  {item.company}
                </div>

                <p style={{ fontSize: '0.98rem', color: 'rgba(241, 240, 233, 0.75)', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                  {item.desc}
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                  {item.highlights.map((h, hIdx) => (
                    <div key={hIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                      <span style={{ color: '#B6D8C8', fontWeight: 900, lineHeight: 1.4 }}>&rarr;</span>
                      <span style={{ fontSize: '0.9rem', color: 'rgba(241, 240, 233, 0.85)', lineHeight: 1.5 }}>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
