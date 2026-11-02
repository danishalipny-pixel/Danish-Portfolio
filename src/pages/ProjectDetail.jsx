import React, { useState, useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Code2,
  Server,
  Database,
  Layers,
  CheckCircle,
  AlertCircle,
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  UserCheck,
  Cpu,
} from 'lucide-react';
import { projectsData } from '../data/projectsData';
import { GithubIcon } from '../components/Icons';
import DevIcon from '../components/DevIcon';

export default function ProjectDetail() {
  const { id } = useParams();

  // Resolve project by ID or alias
  const currentIndex = projectsData.findIndex(
    (p) =>
      p.id === id ||
      (id === 'jtransport' && p.id === 'j-transport') ||
      (id === 'j-transport' && p.id === 'jtransport')
  );

  if (currentIndex === -1) {
    return <Navigate to="/work" replace />;
  }

  const project = projectsData[currentIndex];
  const prevProject = currentIndex > 0 ? projectsData[currentIndex - 1] : null;
  const nextProject = currentIndex < projectsData.length - 1 ? projectsData[currentIndex + 1] : null;
  const projectNumber = String(currentIndex + 1).padStart(2, '0');

  // Collect all genuine gallery images
  const galleryImages = [
    project.primaryImage,
    ...(project.additionalImages || []),
  ].filter(Boolean);

  // Lightbox state
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const handlePrevImage = () => {
    setLightboxIndex((prev) => (prev > 0 ? prev - 1 : galleryImages.length - 1));
  };

  const handleNextImage = () => {
    setLightboxIndex((prev) => (prev < galleryImages.length - 1 ? prev + 1 : 0));
  };

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowLeft') handlePrevImage();
      if (e.key === 'ArrowRight') handleNextImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, galleryImages.length]);

  return (
    <div style={{ backgroundColor: 'transparent', paddingBottom: '7rem', paddingTop: '5.5rem' }}>
      {/* ====================================================================
          TOP NAVIGATION BAR: BACK TO WORK
          ==================================================================== */}
      <section
        style={{
          paddingTop: '2.5rem',
          paddingBottom: '1.5rem',
          borderBottom: '1px solid rgba(182, 216, 200, 0.16)',
        }}
      >
        <div className="container">
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1rem',
            }}
          >
            <Link
              to="/work"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8rem',
                fontWeight: 800,
                color: '#B6D8C8',
                textTransform: 'uppercase',
                textDecoration: 'none',
                letterSpacing: '0.06em',
                transition: 'color 0.15s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#D5A66F')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#B6D8C8')}
            >
              <ArrowLeft size={16} />
              <span>← BACK TO WORK</span>
            </Link>

            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                fontWeight: 700,
                color: '#D5A66F',
                letterSpacing: '0.08em',
              }}
            >
              PROJECT {projectNumber} // {String(projectsData.length).padStart(2, '0')}
            </span>
          </div>
        </div>
      </section>

      {/* ====================================================================
          HEADER: PROJECT // PROJECT NAME
          ==================================================================== */}
      <section
        style={{
          paddingTop: '4.5rem',
          paddingBottom: '4.5rem',
          backgroundColor: 'rgba(22, 31, 37, 0.55)',
          borderBottom: '1px solid rgba(182, 216, 200, 0.16)',
        }}
      >
        <div className="container">
          <div style={{ maxWidth: '960px' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.85rem',
                marginBottom: '1.25rem',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.78rem',
                  fontWeight: 800,
                  backgroundColor: '#263B39',
                  color: '#B6D8C8',
                  border: '1px solid rgba(182, 216, 200, 0.3)',
                  padding: '0.35rem 0.85rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  borderRadius: '2px',
                }}
              >
                PROJECT
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.85rem',
                  fontWeight: 800,
                  color: '#D5A66F',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                }}
              >
                {project.category}
              </span>
            </div>

            {/* Project Name */}
            <h1
              style={{
                fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                fontWeight: 950,
                color: '#F1F0E9',
                letterSpacing: '-0.04em',
                lineHeight: 1.05,
                marginBottom: '1.25rem',
              }}
            >
              {project.shortTitle || project.title}
            </h1>

            {/* Sub-heading */}
            <p
              style={{
                fontSize: '1.2rem',
                color: 'rgba(241, 240, 233, 0.75)',
                lineHeight: 1.6,
                marginBottom: '2rem',
              }}
            >
              {project.tagline || (project.overview && project.overview.purpose)}
            </p>

            {/* Actions: GitHub & Live Demo */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="vip-btn vip-btn-secondary"
                  style={{ textDecoration: 'none' }}
                >
                  <GithubIcon size={16} color="currentColor" />
                  <span>GITHUB REPOSITORY</span>
                  <ExternalLink size={13} style={{ opacity: 0.6 }} />
                </a>
              )}

              {project.liveDemoUrl ? (
                <a
                  href={project.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="vip-btn vip-btn-accent"
                  style={{ textDecoration: 'none' }}
                >
                  <ExternalLink size={15} />
                  <span>LIVE DEMO</span>
                </a>
              ) : (
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    color: '#D5A66F',
                    backgroundColor: 'rgba(38, 59, 57, 0.45)',
                    border: '1px solid rgba(182, 216, 200, 0.2)',
                    padding: '0.8rem 1.25rem',
                    borderRadius: '2px',
                  }}
                >
                  DEPLOYMENT // SOURCE AUDITED
                </span>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          FULL-WIDTH REAL PROJECT SCREENSHOT
          ==================================================================== */}
      <section style={{ borderBottom: '1px solid rgba(182, 216, 200, 0.16)', backgroundColor: 'rgba(21, 29, 34, 0.7)' }}>
        <div className="container" style={{ padding: '3.5rem 1.5rem' }}>
          {project.primaryImage ? (
            <div
              className="vip-project-card"
              style={{
                cursor: 'pointer',
                position: 'relative',
              }}
              onClick={() => setLightboxIndex(0)}
              title="Click to view full-resolution lightbox"
            >
              <img
                src={project.primaryImage}
                alt={`${project.shortTitle} primary screenshot`}
                loading="eager"
                fetchPriority="high"
                decoding="async"
                style={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: '620px',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: '12px',
                  right: '12px',
                  backgroundColor: 'rgba(16, 21, 26, 0.92)',
                  border: '1px solid rgba(182, 216, 200, 0.35)',
                  color: '#B6D8C8',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  padding: '0.45rem 0.85rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  borderRadius: '2px',
                }}
              >
                <Maximize2 size={13} />
                <span>EXPAND LIGHTBOX</span>
              </div>
            </div>
          ) : (
            <div
              style={{
                padding: '4.5rem 2rem',
                backgroundColor: 'rgba(21, 29, 34, 0.85)',
                border: '1px solid rgba(182, 216, 200, 0.2)',
                textAlign: 'center',
              }}
            >
              <DevIcon size={56} />
              <h3 style={{ fontSize: '1.5rem', fontWeight: 900, marginTop: '1.25rem', marginBottom: '0.5rem', color: '#F1F0E9' }}>
                {project.shortTitle} SYSTEM SCHEMATIC
              </h3>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: '#B6D8C8', margin: 0 }}>
                VERIFIED SOURCE SPECIFICATIONS AUDITED FROM REPOSITORY
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ====================================================================
          MAIN CASE STUDY CONTENT
          ==================================================================== */}
      <section style={{ padding: '5.5rem 0' }}>
        <div className="container">
          <div style={{ maxWidth: '960px', margin: '0 auto' }}>

            {/* OVERVIEW */}
            <div style={{ marginBottom: '5rem' }}>
              <div className="os-section-num">01 // OVERVIEW</div>
              <h2
                style={{
                  fontSize: '2.25rem',
                  fontWeight: 950,
                  color: '#F1F0E9',
                  letterSpacing: '-0.035em',
                  marginBottom: '1.5rem',
                  paddingBottom: '0.75rem',
                  borderBottom: '2px solid rgba(182, 216, 200, 0.2)',
                }}
              >
                OVERVIEW
              </h2>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.75rem' }}>
                <div style={{ padding: '2.25rem', backgroundColor: 'rgba(21, 29, 34, 0.85)', border: '1px solid rgba(182, 216, 200, 0.16)', borderRadius: '4px', boxShadow: 'var(--shadow-card)' }}>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 900, color: '#F1F0E9', marginBottom: '0.75rem' }}>
                    PROJECT PURPOSE &amp; SCOPE
                  </h3>
                  <p style={{ fontSize: '1rem', color: 'rgba(241, 240, 233, 0.78)', lineHeight: 1.75, margin: 0 }}>
                    {project.overview.summary}
                  </p>
                </div>

                <div style={{ padding: '2.25rem', backgroundColor: 'rgba(21, 29, 34, 0.85)', border: '1px solid rgba(182, 216, 200, 0.16)', borderRadius: '4px', boxShadow: 'var(--shadow-card)' }}>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 900, color: '#F1F0E9', marginBottom: '0.75rem' }}>
                    TARGET AUDIENCE &amp; OPERATIONAL GOAL
                  </h3>
                  <p style={{ fontSize: '1rem', color: 'rgba(241, 240, 233, 0.78)', lineHeight: 1.75, margin: 0 }}>
                    {project.overview.purpose}
                  </p>
                </div>
              </div>
            </div>

            {/* THE CHALLENGE (PROBLEM) & THE SOLUTION */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '2rem',
                marginBottom: '5rem',
              }}
            >
              {/* The Challenge */}
              <div
                style={{
                  padding: '2.5rem',
                  backgroundColor: 'rgba(38, 59, 57, 0.35)',
                  border: '1px solid rgba(213, 166, 111, 0.35)',
                  borderRadius: '4px',
                  boxShadow: 'var(--shadow-card)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                  <AlertCircle size={20} color="#D5A66F" />
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 900, color: '#D5A66F', margin: 0 }}>
                    THE CHALLENGE
                  </h3>
                </div>
                <p style={{ fontSize: '0.95rem', color: 'rgba(241, 240, 233, 0.82)', lineHeight: 1.75, margin: 0 }}>
                  {project.theProblem}
                </p>
              </div>

              {/* The Solution */}
              <div
                style={{
                  padding: '2.5rem',
                  backgroundColor: 'rgba(38, 59, 57, 0.65)',
                  border: '1px solid rgba(182, 216, 200, 0.35)',
                  borderRadius: '4px',
                  boxShadow: 'var(--shadow-card)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                  <CheckCircle size={20} color="#B6D8C8" />
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 900, color: '#B6D8C8', margin: 0 }}>
                    THE SOLUTION
                  </h3>
                </div>
                <p style={{ fontSize: '0.95rem', color: 'rgba(241, 240, 233, 0.82)', lineHeight: 1.75, margin: 0 }}>
                  {project.theSolution}
                </p>
              </div>
            </div>

            {/* USER EXPERIENCE & MY ROLE */}
            <div style={{ marginBottom: '5rem' }}>
              <div className="os-section-num">02 // RESPONSIBILITY</div>
              <h2
                style={{
                  fontSize: '2.25rem',
                  fontWeight: 950,
                  color: '#F1F0E9',
                  letterSpacing: '-0.035em',
                  marginBottom: '1.5rem',
                  paddingBottom: '0.75rem',
                  borderBottom: '2px solid rgba(182, 216, 200, 0.2)',
                }}
              >
                USER EXPERIENCE &amp; MY ROLE
              </h2>

              <div
                style={{
                  padding: '2.5rem',
                  backgroundColor: 'rgba(21, 29, 34, 0.9)',
                  border: '1px solid rgba(182, 216, 200, 0.18)',
                  borderLeft: '5px solid #B6D8C8',
                  boxShadow: 'var(--shadow-hover)',
                  borderRadius: '4px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <UserCheck size={20} color="#B6D8C8" />
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      fontWeight: 800,
                      color: '#B6D8C8',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                    }}
                  >
                    ENGINEERING CONTRIBUTION &middot; DANISH RASHID
                  </span>
                </div>
                <p style={{ fontSize: '1.1rem', color: '#F1F0E9', fontWeight: 700, lineHeight: 1.7, margin: 0 }}>
                  {project.myRole}
                </p>
              </div>
            </div>

            {/* KEY FEATURES */}
            <div style={{ marginBottom: '5rem' }}>
              <div className="os-section-num">03 // CAPABILITIES</div>
              <h2
                style={{
                  fontSize: '2.25rem',
                  fontWeight: 950,
                  color: '#F1F0E9',
                  letterSpacing: '-0.035em',
                  marginBottom: '1.75rem',
                  paddingBottom: '0.75rem',
                  borderBottom: '2px solid rgba(182, 216, 200, 0.2)',
                }}
              >
                KEY FEATURES
              </h2>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: '1.75rem',
                }}
              >
                {project.keyFeatures.map((feat, idx) => {
                  const featNumber = String(idx + 1).padStart(2, '0');
                  return (
                    <div
                      key={idx}
                      style={{
                        padding: '2rem',
                        border: '1px solid rgba(182, 216, 200, 0.16)',
                        backgroundColor: 'rgba(21, 29, 34, 0.85)',
                        borderRadius: '3px',
                        boxShadow: 'var(--shadow-card)',
                      }}
                    >
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.75rem',
                          fontWeight: 800,
                          color: '#D5A66F',
                          display: 'block',
                          marginBottom: '0.5rem',
                        }}
                      >
                        {featNumber} — FEATURE
                      </span>
                      <strong style={{ fontSize: '1.15rem', color: '#F1F0E9', display: 'block', marginBottom: '0.65rem' }}>
                        {feat.title}
                      </strong>
                      <p style={{ fontSize: '0.92rem', color: 'rgba(241, 240, 233, 0.72)', lineHeight: 1.65, margin: 0 }}>
                        {feat.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* ARCHITECTURE & WORKFLOW */}
            <div style={{ marginBottom: '5rem' }}>
              <div className="os-section-num">04 // ARCHITECTURE</div>
              <h2
                style={{
                  fontSize: '2.25rem',
                  fontWeight: 950,
                  color: '#F1F0E9',
                  letterSpacing: '-0.035em',
                  marginBottom: '1.75rem',
                  paddingBottom: '0.75rem',
                  borderBottom: '2px solid rgba(182, 216, 200, 0.2)',
                }}
              >
                ARCHITECTURE &amp; DATA PIPELINE
              </h2>

              {/* Topology Pipeline Flow */}
              <div
                style={{
                  padding: '2.5rem',
                  backgroundColor: 'rgba(21, 29, 34, 0.95)',
                  border: '1px solid rgba(182, 216, 200, 0.25)',
                  borderRadius: '4px',
                  boxShadow: 'var(--shadow-hover)',
                  marginBottom: '2.5rem',
                  position: 'relative',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    fontWeight: 800,
                    color: '#B6D8C8',
                    marginBottom: '1.5rem',
                    letterSpacing: '0.12em',
                  }}
                >
                  SYSTEM TOPOLOGY &amp; DATA FLOW BLUEPRINT
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
                  {/* Layer 1: Frontend */}
                  <div
                    style={{
                      width: '100%',
                      padding: '1.25rem 1.75rem',
                      backgroundColor: 'rgba(38, 59, 57, 0.55)',
                      border: '1px solid rgba(182, 216, 200, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      flexWrap: 'wrap',
                      gap: '0.5rem',
                      borderRadius: '2px',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <Code2 size={18} color="#B6D8C8" />
                      <strong style={{ fontSize: '0.95rem', color: '#F1F0E9' }}>FRONTEND INTERFACE</strong>
                    </div>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: '#D5A66F' }}>
                      {project.techStack.frontendFramework || project.techStack.frontend || 'React / Client UI'}
                    </span>
                  </div>

                  {/* Flow Arrow */}
                  <div style={{ color: '#D5A66F', fontWeight: 800, fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>
                    &darr; [ RESTful API &amp; JSON TRANSPORT ]
                  </div>

                  {/* Layer 2: API & Backend */}
                  <div
                    style={{
                      width: '100%',
                      padding: '1.25rem 1.75rem',
                      backgroundColor: 'rgba(38, 59, 57, 0.55)',
                      border: '1px solid rgba(182, 216, 200, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      flexWrap: 'wrap',
                      gap: '0.5rem',
                      borderRadius: '2px',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <Server size={18} color="#B6D8C8" />
                      <strong style={{ fontSize: '0.95rem', color: '#F1F0E9' }}>API / BACKEND RUNTIME</strong>
                    </div>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: '#D5A66F' }}>
                      {project.techStack.backendFramework || project.techStack.backendRuntime || 'Node.js / Express / Python'}
                    </span>
                  </div>

                  {/* Flow Arrow */}
                  <div style={{ color: '#D5A66F', fontWeight: 800, fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>
                    &darr; [ BUSINESS LOGIC &amp; RBAC SECURITY ]
                  </div>

                  {/* Layer 3: Business Logic */}
                  <div
                    style={{
                      width: '100%',
                      padding: '1.25rem 1.75rem',
                      backgroundColor: 'rgba(38, 59, 57, 0.55)',
                      border: '1px solid rgba(182, 216, 200, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      flexWrap: 'wrap',
                      gap: '0.5rem',
                      borderRadius: '2px',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <Layers size={18} color="#B6D8C8" />
                      <strong style={{ fontSize: '0.95rem', color: '#F1F0E9' }}>BUSINESS LOGIC &amp; INTEGRATIONS</strong>
                    </div>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: '#D5A66F' }}>
                      {project.techStack.security || project.techStack.payments || project.techStack.aiIntegrations || 'Controllers & Middleware'}
                    </span>
                  </div>

                  {/* Flow Arrow */}
                  <div style={{ color: '#D5A66F', fontWeight: 800, fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>
                    &darr; [ TRANSACTIONAL ACID PERSISTENCE ]
                  </div>

                  {/* Layer 4: Database */}
                  <div
                    style={{
                      width: '100%',
                      padding: '1.25rem 1.75rem',
                      backgroundColor: 'rgba(38, 59, 57, 0.55)',
                      border: '1px solid rgba(182, 216, 200, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      flexWrap: 'wrap',
                      gap: '0.5rem',
                      borderRadius: '2px',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <Database size={18} color="#B6D8C8" />
                      <strong style={{ fontSize: '0.95rem', color: '#F1F0E9' }}>DATABASE LAYER</strong>
                    </div>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: '#D5A66F' }}>
                      {project.techStack.database || project.database || 'MongoDB / SQLite'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Development Highlights */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: '1.75rem',
                }}
              >
                <div style={{ padding: '2rem', border: '1px solid rgba(182, 216, 200, 0.16)', backgroundColor: 'rgba(21, 29, 34, 0.85)', borderRadius: '3px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                    <Code2 size={20} color="#B6D8C8" />
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 900, color: '#F1F0E9', margin: 0 }}>
                      FRONTEND ARCHITECTURE
                    </h3>
                  </div>
                  <p style={{ fontSize: '0.92rem', color: 'rgba(241, 240, 233, 0.72)', lineHeight: 1.65, margin: 0 }}>
                    {project.frontendArchitecture}
                  </p>
                </div>

                <div style={{ padding: '2rem', border: '1px solid rgba(182, 216, 200, 0.16)', backgroundColor: 'rgba(21, 29, 34, 0.85)', borderRadius: '3px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                    <Server size={20} color="#B6D8C8" />
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 900, color: '#F1F0E9', margin: 0 }}>
                      BACKEND ARCHITECTURE
                    </h3>
                  </div>
                  <p style={{ fontSize: '0.92rem', color: 'rgba(241, 240, 233, 0.72)', lineHeight: 1.65, margin: 0 }}>
                    {project.backendArchitecture}
                  </p>
                </div>
              </div>
            </div>

            {/* TECHNOLOGY STACK & PROGRAMMING LANGUAGES */}
            <div style={{ marginBottom: '5rem' }}>
              <div className="os-section-num">05 // METRICS</div>
              <h2
                style={{
                  fontSize: '2.25rem',
                  fontWeight: 950,
                  color: '#F1F0E9',
                  letterSpacing: '-0.035em',
                  marginBottom: '1.5rem',
                  paddingBottom: '0.75rem',
                  borderBottom: '2px solid rgba(182, 216, 200, 0.2)',
                }}
              >
                TECHNOLOGY STACK
              </h2>

              {/* Programming Languages Breakdown */}
              <div style={{ marginBottom: '2.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 800, color: 'rgba(241, 240, 233, 0.7)' }}>
                    PROGRAMMING LANGUAGES // REPOSITORY VERIFICATION
                  </span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 800, color: '#B6D8C8' }}>
                    VERIFIED
                  </span>
                </div>

                <div
                  style={{
                    height: '8px',
                    overflow: 'hidden',
                    display: 'flex',
                    backgroundColor: 'rgba(38, 59, 57, 0.5)',
                    marginBottom: '1.25rem',
                    borderRadius: '2px',
                  }}
                >
                  {project.languages.map((l, lIdx) => {
                    const colors = ['#B6D8C8', '#D5A66F', '#10B981', '#38BDF8', '#F472B6'];
                    return (
                      <div
                        key={lIdx}
                        style={{
                          width: `${l.percentage}%`,
                          backgroundColor: colors[lIdx % colors.length],
                        }}
                        title={`${l.name}: ${l.percentage}%`}
                      />
                    );
                  })}
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                  {project.languages.map((l, lIdx) => {
                    const colors = ['#B6D8C8', '#D5A66F', '#10B981', '#38BDF8', '#F472B6'];
                    return (
                      <div
                        key={lIdx}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          padding: '0.45rem 0.85rem',
                          backgroundColor: 'rgba(38, 59, 57, 0.45)',
                          border: '1px solid rgba(182, 216, 200, 0.18)',
                          fontSize: '0.85rem',
                          borderRadius: '2px',
                        }}
                      >
                        <span style={{ width: '8px', height: '8px', backgroundColor: colors[lIdx % colors.length], borderRadius: '50%' }} />
                        <strong style={{ color: '#F1F0E9' }}>{l.name}</strong>
                        <span style={{ color: '#D5A66F' }}>{l.percentage}%</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Stack Table */}
              <div style={{ border: '1px solid rgba(182, 216, 200, 0.18)', borderRadius: '4px', overflow: 'hidden', marginBottom: '2rem' }}>
                {Object.entries(project.techStack).map(([layer, tech], idx) => (
                  <div
                    key={layer}
                    style={{
                      display: 'flex',
                      padding: '1.1rem 1.5rem',
                      backgroundColor: idx % 2 === 0 ? 'rgba(21, 29, 34, 0.85)' : 'rgba(38, 59, 57, 0.35)',
                      borderBottom:
                        idx === Object.keys(project.techStack).length - 1
                          ? 'none'
                          : '1px solid rgba(182, 216, 200, 0.12)',
                      fontSize: '0.9rem',
                      flexWrap: 'wrap',
                      gap: '0.5rem',
                    }}
                  >
                    <span
                      style={{
                        width: '240px',
                        fontWeight: 800,
                        color: '#B6D8C8',
                        textTransform: 'uppercase',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.75rem',
                        flexShrink: 0,
                      }}
                    >
                      {layer.replace(/([A-Z])/g, ' $1')}
                    </span>
                    <span style={{ color: '#F1F0E9', fontWeight: 700 }}>{tech}</span>
                  </div>
                ))}
              </div>

              {/* APIs & Integrations */}
              <div style={{ padding: '2rem', backgroundColor: 'rgba(21, 29, 34, 0.85)', border: '1px solid rgba(182, 216, 200, 0.18)', borderRadius: '4px' }}>
                <h4 style={{ fontSize: '1rem', fontWeight: 900, color: '#B6D8C8', marginBottom: '0.5rem' }}>
                  APIs &amp; INTEGRATIONS
                </h4>
                <p style={{ fontSize: '0.95rem', color: 'rgba(241, 240, 233, 0.75)', lineHeight: 1.65, margin: 0 }}>
                  {project.apisAndIntegrations}
                </p>
              </div>
            </div>

            {/* SCREENSHOTS GALLERY */}
            {galleryImages.length > 0 && (
              <div style={{ marginBottom: '5rem' }}>
                <div className="os-section-num">06 // VISUALS</div>
                <h2
                  style={{
                    fontSize: '2.25rem',
                    fontWeight: 950,
                    color: '#F1F0E9',
                    letterSpacing: '-0.035em',
                    marginBottom: '1.75rem',
                    paddingBottom: '0.75rem',
                    borderBottom: '2px solid rgba(182, 216, 200, 0.2)',
                  }}
                >
                  PROJECT SCREENSHOTS
                </h2>

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                    gap: '1.75rem',
                  }}
                >
                  {galleryImages.map((imgSrc, imgIdx) => {
                    const screenNumber = String(imgIdx + 1).padStart(2, '0');
                    return (
                      <div
                        key={imgIdx}
                        onClick={() => setLightboxIndex(imgIdx)}
                        className="vip-project-card"
                        style={{ cursor: 'pointer' }}
                      >
                        <div style={{ height: '180px', overflow: 'hidden', backgroundColor: '#10151A' }}>
                          <img
                            src={imgSrc}
                            alt={`Screen ${screenNumber}`}
                            loading="lazy"
                            decoding="async"
                            style={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover',
                              display: 'block',
                            }}
                          />
                        </div>
                        <div
                          style={{
                            padding: '0.85rem 1rem',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            borderTop: '1px solid rgba(182, 216, 200, 0.16)',
                            backgroundColor: 'rgba(21, 29, 34, 0.9)',
                          }}
                        >
                          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 800, color: '#B6D8C8' }}>
                            {screenNumber} &mdash; CAPTURE
                          </span>
                          <Maximize2 size={13} color="#D5A66F" />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* GITHUB REPOSITORY & DEMO CALLOUT */}
            <div
              style={{
                padding: '3rem',
                backgroundColor: 'rgba(38, 59, 57, 0.65)',
                border: '1px solid rgba(182, 216, 200, 0.35)',
                borderRadius: '4px',
                boxShadow: 'var(--shadow-hover)',
                marginBottom: '5rem',
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '1.5rem',
              }}
            >
              <div>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 900, color: '#F1F0E9', marginBottom: '0.35rem' }}>
                  READY TO INSPECT THE CODEBASE?
                </h3>
                <p style={{ fontSize: '0.92rem', color: 'rgba(241, 240, 233, 0.8)', margin: 0 }}>
                  Explore the full repository commits, architecture files, and documentation on GitHub.
                </p>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="vip-btn vip-btn-primary"
                    style={{ textDecoration: 'none' }}
                  >
                    <GithubIcon size={16} color="currentColor" />
                    <span>GITHUB REPOSITORY →</span>
                  </a>
                )}

                {project.liveDemoUrl && (
                  <a
                    href={project.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="vip-btn vip-btn-accent"
                    style={{ textDecoration: 'none' }}
                  >
                    <ExternalLink size={15} />
                    <span>LIVE DEMO →</span>
                  </a>
                )}
              </div>
            </div>

            {/* PREVIOUS / NEXT CONTINUOUS NAVIGATION */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '2rem',
                paddingTop: '3rem',
                borderTop: '2px solid rgba(182, 216, 200, 0.25)',
              }}
            >
              {prevProject ? (
                <Link
                  to={`/projects/${prevProject.id}`}
                  style={{
                    display: 'inline-flex',
                    flexDirection: 'column',
                    textDecoration: 'none',
                    transition: 'transform 0.15s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateX(-3px)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'none')}
                >
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 800, color: '#D5A66F' }}>
                    ← PREVIOUS PROJECT
                  </span>
                  <span style={{ fontSize: '1.35rem', fontWeight: 950, color: '#F1F0E9', marginTop: '0.25rem' }}>
                    {prevProject.shortTitle || prevProject.title}
                  </span>
                </Link>
              ) : (
                <div />
              )}

              {nextProject ? (
                <Link
                  to={`/projects/${nextProject.id}`}
                  style={{
                    display: 'inline-flex',
                    flexDirection: 'column',
                    alignItems: 'flex-end',
                    textDecoration: 'none',
                    transition: 'transform 0.15s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateX(3px)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'none')}
                >
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 800, color: '#D5A66F' }}>
                    NEXT PROJECT →
                  </span>
                  <span style={{ fontSize: '1.35rem', fontWeight: 950, color: '#F1F0E9', marginTop: '0.25rem' }}>
                    {nextProject.shortTitle || nextProject.title}
                  </span>
                </Link>
              ) : (
                <div />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          FULLSCREEN LIGHTBOX MODAL
          ==================================================================== */}
      {lightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(16, 21, 26, 0.96)',
            backdropFilter: 'blur(16px)',
            zIndex: 999999,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '1.5rem',
          }}
          onClick={() => setLightboxIndex(null)}
        >
          {/* Top Bar */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              maxWidth: '1200px',
              margin: '0 auto',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.82rem',
                fontWeight: 700,
                color: '#B6D8C8',
              }}
            >
              {project.shortTitle || project.title} // SCREEN {String(lightboxIndex + 1).padStart(2, '0')} OF {String(galleryImages.length).padStart(2, '0')}
            </span>

            <button
              onClick={() => setLightboxIndex(null)}
              style={{
                background: 'rgba(38, 59, 57, 0.6)',
                border: '1px solid rgba(182, 216, 200, 0.35)',
                color: '#F1F0E9',
                cursor: 'pointer',
                padding: '0.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '3px',
              }}
              title="Close [Escape]"
            >
              <X size={20} />
            </button>
          </div>

          {/* Center Image */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              maxWidth: '1200px',
              width: '100%',
              margin: '0 auto',
              maxHeight: '75vh',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {galleryImages.length > 1 && (
              <button
                onClick={handlePrevImage}
                style={{
                  position: 'absolute',
                  left: '10px',
                  zIndex: 2,
                  background: 'rgba(21, 29, 34, 0.85)',
                  border: '1px solid rgba(182, 216, 200, 0.35)',
                  color: '#B6D8C8',
                  padding: '0.75rem',
                  cursor: 'pointer',
                  borderRadius: '3px',
                }}
                title="Previous [Arrow Left]"
              >
                <ChevronLeft size={24} />
              </button>
            )}

            <img
              src={galleryImages[lightboxIndex]}
              alt={`Fullscreen screen ${lightboxIndex + 1}`}
              style={{
                maxWidth: '100%',
                maxHeight: '75vh',
                objectFit: 'contain',
                boxShadow: '0 25px 60px rgba(0, 0, 0, 0.9), 0 0 35px rgba(182, 216, 200, 0.1)',
                borderRadius: '2px',
              }}
            />

            {galleryImages.length > 1 && (
              <button
                onClick={handleNextImage}
                style={{
                  position: 'absolute',
                  right: '10px',
                  zIndex: 2,
                  background: 'rgba(21, 29, 34, 0.85)',
                  border: '1px solid rgba(182, 216, 200, 0.35)',
                  color: '#B6D8C8',
                  padding: '0.75rem',
                  cursor: 'pointer',
                  borderRadius: '3px',
                }}
                title="Next [Arrow Right]"
              >
                <ChevronRight size={24} />
              </button>
            )}
          </div>

          {/* Thumbnail Strip */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '0.75rem',
              overflowX: 'auto',
              padding: '0.75rem 0',
              maxWidth: '1200px',
              width: '100%',
              margin: '0 auto',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {galleryImages.map((thumbSrc, tIdx) => (
              <div
                key={tIdx}
                onClick={() => setLightboxIndex(tIdx)}
                style={{
                  width: '64px',
                  height: '44px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  border: tIdx === lightboxIndex ? '2px solid #B6D8C8' : '1px solid rgba(182, 216, 200, 0.25)',
                  opacity: tIdx === lightboxIndex ? 1 : 0.5,
                  transition: 'all 0.15s ease',
                  borderRadius: '2px',
                }}
              >
                <img
                  src={thumbSrc}
                  alt={`Thumbnail ${tIdx + 1}`}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
