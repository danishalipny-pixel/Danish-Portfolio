import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  Terminal,
  ShieldCheck,
  Cpu,
  Layers,
  Sparkles,
} from 'lucide-react';
import { projectsData } from '../data/projectsData';
import { GithubIcon } from '../components/Icons';
import { WHATSAPP_URL } from '../data/constants';

function ProjectMedia({ project, index }) {
  const [imgError, setImgError] = useState(false);
  const hasImage = Boolean(project.primaryImage) && !imgError;

  return (
    <Link
      to={`/projects/${project.id}`}
      className="vip-showcase-media"
      style={{ display: 'block', textDecoration: 'none' }}
      aria-label={`View ${project.shortTitle || project.title} case study`}
    >
      {/* Sleek Browser Window Chrome */}
      <div className="vip-browser-header">
        <div className="vip-browser-dots">
          <span className="vip-browser-dot" style={{ backgroundColor: '#B6D8C8' }} />
          <span className="vip-browser-dot" style={{ backgroundColor: '#D5A66F' }} />
          <span className="vip-browser-dot" style={{ backgroundColor: 'rgba(241, 240, 233, 0.4)' }} />
        </div>
        <div className="vip-browser-url">
          danish://systems/{project.id}
        </div>
        <div className="vip-browser-badge">
          {project.category}
        </div>
      </div>

      {/* Screenshot Frame with Zoom on Hover */}
      <div className="vip-showcase-img-wrap">
        {hasImage ? (
          <img
            src={project.primaryImage}
            alt={`${project.shortTitle || project.title} production screenshot`}
            loading={index < 2 ? 'eager' : 'lazy'}
            decoding="async"
            width="800"
            height="500"
            onError={() => setImgError(true)}
          />
        ) : (
          /* Architectural Blueprint Fallback */
          <div
            style={{
              width: '100%',
              height: '100%',
              minHeight: '360px',
              backgroundColor: '#151D22',
              backgroundImage:
                'radial-gradient(circle at 50% 50%, rgba(38, 59, 57, 0.7) 0%, rgba(16, 21, 26, 0.95) 100%), linear-gradient(rgba(182, 216, 200, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(182, 216, 200, 0.05) 1px, transparent 1px)',
              backgroundSize: '100% 100%, 28px 28px, 28px 28px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '2.5rem',
              textAlign: 'center',
            }}
          >
            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '4px',
                backgroundColor: 'rgba(38, 59, 57, 0.8)',
                border: '1px solid #B6D8C8',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.25rem',
                boxShadow: '0 0 25px rgba(182, 216, 200, 0.25)',
              }}
            >
              <Cpu size={32} color="#B6D8C8" />
            </div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.85rem',
                fontWeight: 800,
                color: '#D5A66F',
                letterSpacing: '0.12em',
                marginBottom: '0.5rem',
                textTransform: 'uppercase',
              }}
            >
              ARCHITECTURAL SPECIFICATION
            </div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '1.1rem',
                fontWeight: 900,
                color: '#F1F0E9',
                letterSpacing: '-0.02em',
                maxWidth: '420px',
                lineHeight: 1.4,
              }}
            >
              {project.shortTitle || project.title}
            </div>
            <div
              style={{
                marginTop: '1.25rem',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                color: 'rgba(182, 216, 200, 0.85)',
                display: 'flex',
                gap: '1rem',
              }}
            >
              <span>STATUS: PRODUCTION</span>
              <span>•</span>
              <span>VERIFIED REPOSITORY</span>
            </div>
          </div>
        )}
      </div>
    </Link>
  );
}

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Full Stack', 'Enterprise Systems', 'AI & LLM', 'Frontend'];

  const filteredProjects = projectsData.filter((p) => {
    if (selectedCategory === 'All') return true;
    return p.category === selectedCategory;
  });

  return (
    <div style={{ backgroundColor: 'transparent', paddingBottom: '7rem', paddingTop: '5.5rem' }}>
      {/* Header Banner */}
      <section
        style={{
          paddingTop: '4.5rem',
          paddingBottom: '4rem',
          borderBottom: '1px solid rgba(182, 216, 200, 0.16)',
          backgroundColor: 'rgba(22, 31, 37, 0.55)',
        }}
      >
        <div className="container">
          <div style={{ maxWidth: '920px' }}>
            <div className="os-section-num" style={{ marginBottom: '1rem' }}>
              01 / ARCHIVES &amp; PORTFOLIO
            </div>
            <h1
              style={{
                fontSize: 'clamp(2.75rem, 6.5vw, 4.75rem)',
                fontWeight: 950,
                color: '#F1F0E9',
                letterSpacing: '-0.04em',
                marginBottom: '1.25rem',
                lineHeight: 1.05,
              }}
            >
              VIP PROJECT SHOWCASE.
            </h1>
            <p style={{ fontSize: '1.2rem', color: 'rgba(241, 240, 233, 0.82)', lineHeight: 1.7, margin: 0 }}>
              An editorial showcase of full-stack platforms, enterprise architectures, and intelligent systems engineered from genuine GitHub repositories. Each project features an architectural breakdown and production case study.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs & Alternating Showcase */}
      <section style={{ padding: '4.5rem 0' }}>
        <div className="container">
          {/* Category Filter Tabs */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.65rem',
              marginBottom: '4.5rem',
              paddingBottom: '1.5rem',
              borderBottom: '1px solid rgba(182, 216, 200, 0.14)',
            }}
          >
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  style={{
                    padding: '0.6rem 1.35rem',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    border: isSelected ? '1px solid #B6D8C8' : '1px solid rgba(182, 216, 200, 0.2)',
                    backgroundColor: isSelected ? '#B6D8C8' : 'rgba(38, 59, 57, 0.45)',
                    color: isSelected ? '#10151A' : 'rgba(241, 240, 233, 0.8)',
                    transition: 'all 0.15s ease',
                    fontFamily: 'var(--font-mono)',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    borderRadius: '2px',
                    boxShadow: isSelected ? '0 0 15px rgba(182, 216, 200, 0.25)' : 'none',
                  }}
                >
                  {cat}
                  <span
                    style={{
                      marginLeft: '0.45rem',
                      opacity: 0.8,
                      fontSize: '0.7rem',
                    }}
                  >
                    (
                    {cat === 'All'
                      ? projectsData.length
                      : projectsData.filter((p) => p.category === cat).length}
                    )
                  </span>
                </button>
              );
            })}
          </div>

          {/* Alternating VIP Showcase List */}
          <div className="vip-showcase-container">
            {filteredProjects.map((proj, idx) => {
              // Alternating composition: even is media-left/text-right, odd is text-left/media-right
              const isReverse = idx % 2 === 1;
              const seqFormatted = String(idx + 1).padStart(2, '0');
              const totalFormatted = String(filteredProjects.length).padStart(2, '0');

              // Gather 3 key feature highlights
              const highlightFeatures = (proj.keyFeatures || []).slice(0, 4);

              // Gather 3-4 primary technologies
              const primaryTech = [
                proj.techStack?.frontendFramework,
                proj.techStack?.backendRuntime,
                proj.techStack?.backendFramework,
                proj.techStack?.database,
                proj.techStack?.payments,
              ].filter(Boolean);

              return (
                <React.Fragment key={proj.id}>
                  <article
                    className={`vip-showcase-item ${isReverse ? 'reverse' : ''}`}
                    aria-label={`Project: ${proj.shortTitle || proj.title}`}
                  >
                    {/* Media / Browser Frame */}
                    <ProjectMedia project={proj} index={idx} />

                    {/* Editorial Dossier */}
                    <div className="vip-showcase-dossier">
                      {/* Project Sequence & Category Tag */}
                      <div className="vip-showcase-seq">
                        <span>{seqFormatted} / {totalFormatted}</span>
                        <span style={{ color: 'rgba(241, 240, 233, 0.4)' }}>•</span>
                        <span style={{ color: '#B6D8C8' }}>{proj.category}</span>
                      </div>

                      {/* Project Name */}
                      <h2 className="vip-showcase-title">
                        <Link
                          to={`/projects/${proj.id}`}
                          style={{
                            color: 'inherit',
                            textDecoration: 'none',
                            transition: 'color 0.2s ease',
                          }}
                          onMouseEnter={(e) => (e.currentTarget.style.color = '#B6D8C8')}
                          onMouseLeave={(e) => (e.currentTarget.style.color = '#F1F0E9')}
                        >
                          {proj.shortTitle || proj.title}
                        </Link>
                      </h2>

                      {/* Tagline / Overview */}
                      <p className="vip-showcase-tagline">
                        {proj.tagline || proj.overview?.summary}
                      </p>

                      {/* Key Features Matrix */}
                      {highlightFeatures.length > 0 && (
                        <div className="vip-showcase-features">
                          {highlightFeatures.map((feat, fIdx) => (
                            <div key={fIdx} className="vip-feature-item">
                              <Sparkles size={14} color="#D5A66F" />
                              <span>{feat.title}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Technology Stack Chips */}
                      {primaryTech.length > 0 && (
                        <div className="vip-showcase-tech">
                          {primaryTech.map((tech, tIdx) => (
                            <span key={tIdx} className="vip-tech-chip">
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Action Buttons */}
                      <div className="vip-showcase-actions">
                        {/* Primary View Complete Project Button */}
                        <Link
                          to={`/projects/${proj.id}`}
                          className="vip-btn vip-btn-primary"
                          style={{
                            padding: '0.75rem 1.6rem',
                            fontSize: '0.85rem',
                            fontWeight: 800,
                            letterSpacing: '0.04em',
                            textDecoration: 'none',
                          }}
                        >
                          <span>VIEW CASE STUDY</span>
                          <ArrowRight size={16} />
                        </Link>

                        {/* GitHub Repository Link */}
                        {proj.repoUrl && (
                          <a
                            href={proj.repoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="vip-btn vip-btn-secondary"
                            style={{
                              padding: '0.75rem 1.35rem',
                              fontSize: '0.82rem',
                              fontWeight: 700,
                              letterSpacing: '0.04em',
                              textDecoration: 'none',
                            }}
                          >
                            <GithubIcon size={15} color="currentColor" />
                            <span>GITHUB CODE</span>
                          </a>
                        )}

                        {/* Live Demo Link (when genuinely available) */}
                        {proj.liveDemoUrl && (
                          <a
                            href={proj.liveDemoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="vip-btn vip-btn-accent"
                            style={{
                              padding: '0.75rem 1.35rem',
                              fontSize: '0.82rem',
                              fontWeight: 800,
                              letterSpacing: '0.04em',
                              textDecoration: 'none',
                            }}
                          >
                            <span>LIVE DEMO</span>
                            <ExternalLink size={15} />
                          </a>
                        )}
                      </div>
                    </div>
                  </article>

                  {/* Elegant Separator between projects (except after last project) */}
                  {idx < filteredProjects.length - 1 && (
                    <div className="vip-showcase-divider" aria-hidden="true">
                      <div className="vip-showcase-divider-node">
                        ✦ {proj.shortTitle || proj.title} // ARCHITECTURE
                      </div>
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>

          {/* Bottom Conversion / Consultation CTA */}
          <div
            style={{
              marginTop: '6.5rem',
              padding: '3.5rem 3rem',
              backgroundColor: '#151D22',
              border: '1px solid rgba(182, 216, 200, 0.25)',
              borderRadius: '4px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 20px 50px -15px rgba(0, 0, 0, 0.8)',
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                fontWeight: 800,
                color: '#D5A66F',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                marginBottom: '1rem',
              }}
            >
              BESPOKE ARCHITECTURAL COMMISSION
            </div>
            <h2
              style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 950,
                color: '#F1F0E9',
                letterSpacing: '-0.03em',
                marginBottom: '1rem',
                maxWidth: '720px',
                lineHeight: 1.15,
              }}
            >
              HAVE A CUSTOM SOFTWARE CHALLENGE TO SOLVE?
            </h2>
            <p
              style={{
                fontSize: '1.1rem',
                color: 'rgba(241, 240, 233, 0.78)',
                maxWidth: '650px',
                marginBottom: '2.5rem',
                lineHeight: 1.7,
              }}
            >
              Whether you require full-stack web applications, custom API ecosystems, or intelligent AI workflow automation, I deliver production-ready software built for scale.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem', justifyContent: 'center' }}>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="vip-btn vip-btn-accent"
                style={{
                  padding: '0.9rem 2.2rem',
                  fontSize: '0.9rem',
                  fontWeight: 800,
                  letterSpacing: '0.04em',
                  textDecoration: 'none',
                }}
              >
                <span>DISCUSS VIA WHATSAPP (+92 310 2419596)</span>
                <ArrowRight size={16} />
              </a>
              <Link
                to="/contact"
                className="vip-btn vip-btn-secondary"
                style={{
                  padding: '0.9rem 2rem',
                  fontSize: '0.9rem',
                  fontWeight: 700,
                  letterSpacing: '0.04em',
                  textDecoration: 'none',
                }}
              >
                <span>COMMISSION INQUIRY FORM →</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
