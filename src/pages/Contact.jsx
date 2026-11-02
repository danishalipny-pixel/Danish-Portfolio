import React, { useState } from 'react';
import {
  Mail,
  Copy,
  Check,
  MapPin,
  ArrowRight,
  Send,
  MessageSquare,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/Icons';
import { SITE_METADATA, WHATSAPP_URL } from '../data/constants';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Full Stack Applications',
    message: '',
  });
  const [statusMessage, setStatusMessage] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(SITE_METADATA.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatusMessage('Please complete all required fields.');
      return;
    }

    const subject = encodeURIComponent(`Project Commission: ${formData.service} — from ${formData.name}`);
    const body = encodeURIComponent(
      `Hello Danish,\n\nMy name is ${formData.name} (${formData.email}).\nI am contacting you regarding: ${formData.service}.\n\nProject Scope & Requirements:\n${formData.message}\n\nBest regards,\n${formData.name}`
    );

    const mailtoUrl = `mailto:${SITE_METADATA.email}?subject=${subject}&body=${body}`;
    window.location.href = mailtoUrl;

    setStatusMessage('Opening your mail client...');
    setTimeout(() => setStatusMessage(''), 5000);
  };

  return (
    <div style={{ backgroundColor: 'transparent', paddingBottom: '7rem', paddingTop: '5.5rem' }}>
      {/* ====================================================================
          HEADER: LET'S BUILD SOMETHING GREAT.
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
          <div style={{ maxWidth: '960px' }}>
            <div className="os-section-num" style={{ marginBottom: '1rem' }}>
              01 / CONTACT
            </div>

            <h1
              style={{
                fontSize: 'clamp(2.75rem, 7vw, 5.25rem)',
                fontWeight: 950,
                color: '#F1F0E9',
                letterSpacing: '-0.045em',
                lineHeight: 1.05,
                margin: '0 0 1.25rem 0',
                textTransform: 'uppercase',
              }}
            >
              LET'S BUILD<br />
              <span style={{ color: '#B6D8C8', textShadow: '0 0 35px rgba(182, 216, 200, 0.35)' }}>SOMETHING GREAT.</span>
            </h1>

            <p style={{ fontSize: '1.25rem', color: 'rgba(241, 240, 233, 0.78)', lineHeight: 1.7, margin: 0, maxWidth: '640px' }}>
              Have an idea, project or opportunity?<br />
              Let's turn it into something real.
            </p>
          </div>
        </div>
      </section>

      {/* ====================================================================
          CONTACT DETAILS & FORM GRID
          ==================================================================== */}
      <section style={{ padding: '5.5rem 0' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
              gap: '3.5rem',
            }}
          >
            {/* Contact Details Column */}
            <div>
              <div
                style={{
                  padding: '3rem',
                  backgroundColor: 'rgba(21, 29, 34, 0.95)',
                  border: '1px solid rgba(182, 216, 200, 0.25)',
                  borderRadius: '4px',
                  boxShadow: 'var(--shadow-hover)',
                  marginBottom: '2.5rem',
                  backdropFilter: 'blur(12px)',
                }}
              >
                {/* Heading: CONTACT DETAILS */}
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
                  CONTACT DETAILS
                </div>

                <div
                  style={{
                    fontSize: '1.75rem',
                    fontWeight: 950,
                    color: '#F1F0E9',
                    letterSpacing: '-0.03em',
                    marginBottom: '0.35rem',
                  }}
                >
                  Danish Rashid
                </div>

                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.85rem',
                    color: '#D5A66F',
                    letterSpacing: '0.06em',
                    fontWeight: 700,
                    marginBottom: '2rem',
                  }}
                >
                  Multan, Punjab, Pakistan
                </div>

                {/* WhatsApp Section */}
                <div style={{ marginBottom: '2.25rem', paddingBottom: '2rem', borderBottom: '1px solid rgba(182, 216, 200, 0.14)' }}>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      fontWeight: 800,
                      color: 'rgba(241, 240, 233, 0.65)',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      marginBottom: '0.5rem',
                    }}
                  >
                    WHATSAPP DIRECT
                  </div>
                  <div style={{ fontSize: '1.45rem', fontWeight: 900, color: '#F1F0E9', marginBottom: '1.25rem' }}>
                    +92 310 2419596
                  </div>

                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="vip-btn vip-btn-accent"
                    style={{ width: '100%', textDecoration: 'none', textAlign: 'center' }}
                  >
                    <span>WHATSAPP ME →</span>
                  </a>
                </div>

                {/* Email Section */}
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      fontWeight: 800,
                      color: 'rgba(241, 240, 233, 0.65)',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      marginBottom: '0.5rem',
                    }}
                  >
                    OFFICIAL EMAIL
                  </div>
                  <div
                    style={{
                      fontSize: '1.1rem',
                      fontWeight: 800,
                      color: '#B6D8C8',
                      marginBottom: '1rem',
                      wordBreak: 'break-all',
                    }}
                  >
                    {SITE_METADATA.email}
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="vip-btn vip-btn-secondary"
                    style={{ width: '100%', cursor: 'pointer' }}
                  >
                    {copiedEmail ? <Check size={16} color="#B6D8C8" /> : <Copy size={16} />}
                    <span>{copiedEmail ? 'EMAIL ADDRESS COPIED' : 'COPY EMAIL ADDRESS'}</span>
                  </button>
                </div>
              </div>

              {/* Verified Profiles Card */}
              <div
                style={{
                  padding: '2rem 2.5rem',
                  backgroundColor: 'rgba(21, 29, 34, 0.85)',
                  border: '1px solid rgba(182, 216, 200, 0.18)',
                  borderRadius: '4px',
                  boxShadow: 'var(--shadow-card)',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    fontWeight: 800,
                    color: '#B6D8C8',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    marginBottom: '1rem',
                  }}
                >
                  VERIFIED PROFILES
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                  <a
                    href={SITE_METADATA.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.85rem',
                      fontWeight: 700,
                      color: '#F1F0E9',
                      textDecoration: 'none',
                      padding: '0.85rem 1.15rem',
                      backgroundColor: 'rgba(38, 59, 57, 0.45)',
                      border: '1px solid rgba(182, 216, 200, 0.2)',
                      borderRadius: '2px',
                      transition: 'border-color 0.15s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#B6D8C8')}
                    onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(182, 216, 200, 0.2)')}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                      <GithubIcon size={16} color="#B6D8C8" />
                      <span>GITHUB // danishalipny-pixel</span>
                    </div>
                    <span style={{ color: '#D5A66F' }}>&rarr;</span>
                  </a>

                  <a
                    href={SITE_METADATA.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.85rem',
                      fontWeight: 700,
                      color: '#F1F0E9',
                      textDecoration: 'none',
                      padding: '0.85rem 1.15rem',
                      backgroundColor: 'rgba(38, 59, 57, 0.45)',
                      border: '1px solid rgba(182, 216, 200, 0.2)',
                      borderRadius: '2px',
                      transition: 'border-color 0.15s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#B6D8C8')}
                    onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(182, 216, 200, 0.2)')}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                      <LinkedinIcon size={16} color="#B6D8C8" />
                      <span>LINKEDIN // danish-rashid</span>
                    </div>
                    <span style={{ color: '#D5A66F' }}>&rarr;</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Project Inquiry Form */}
            <div
              style={{
                padding: '3rem',
                backgroundColor: 'rgba(21, 29, 34, 0.95)',
                border: '1px solid rgba(182, 216, 200, 0.25)',
                borderRadius: '4px',
                boxShadow: 'var(--shadow-hover)',
                backdropFilter: 'blur(12px)',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  color: '#B6D8C8',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  marginBottom: '0.75rem',
                }}
              >
                DIRECT INQUIRY
              </div>

              <h2
                style={{
                  fontSize: '1.85rem',
                  fontWeight: 950,
                  color: '#F1F0E9',
                  letterSpacing: '-0.03em',
                  marginBottom: '1rem',
                }}
              >
                TRANSMIT PROJECT BRIEF
              </h2>

              <p style={{ fontSize: '0.95rem', color: 'rgba(241, 240, 233, 0.72)', lineHeight: 1.6, marginBottom: '2.5rem' }}>
                Fill out your project requirements below to structure a clear commission inquiry.
              </p>

              <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {/* Name */}
                <div>
                  <label
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      fontWeight: 800,
                      color: '#B6D8C8',
                      marginBottom: '0.5rem',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                    }}
                  >
                    YOUR NAME / COMPANY *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Morgan / Beacon Group"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.9rem 1.15rem',
                      fontSize: '0.95rem',
                      backgroundColor: 'rgba(16, 21, 26, 0.9)',
                      border: '1px solid rgba(182, 216, 200, 0.25)',
                      color: '#F1F0E9',
                      outline: 'none',
                      fontFamily: 'var(--font-sans)',
                      borderRadius: '2px',
                    }}
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      fontWeight: 800,
                      color: '#B6D8C8',
                      marginBottom: '0.5rem',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                    }}
                  >
                    EMAIL ADDRESS *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. alex@beacongroup.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.9rem 1.15rem',
                      fontSize: '0.95rem',
                      backgroundColor: 'rgba(16, 21, 26, 0.9)',
                      border: '1px solid rgba(182, 216, 200, 0.25)',
                      color: '#F1F0E9',
                      outline: 'none',
                      fontFamily: 'var(--font-sans)',
                      borderRadius: '2px',
                    }}
                  />
                </div>

                {/* Service Category */}
                <div>
                  <label
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      fontWeight: 800,
                      color: '#B6D8C8',
                      marginBottom: '0.5rem',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                    }}
                  >
                    SERVICE DISCIPLINE
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.9rem 1.15rem',
                      fontSize: '0.95rem',
                      backgroundColor: 'rgba(16, 21, 26, 0.9)',
                      border: '1px solid rgba(182, 216, 200, 0.25)',
                      color: '#F1F0E9',
                      outline: 'none',
                      fontFamily: 'var(--font-sans)',
                      borderRadius: '2px',
                    }}
                  >
                    <option value="Custom Website Development" style={{ backgroundColor: '#151D22', color: '#F1F0E9' }}>Web Development</option>
                    <option value="Full Stack Web Applications" style={{ backgroundColor: '#151D22', color: '#F1F0E9' }}>Full Stack Applications</option>
                    <option value="E-commerce Development" style={{ backgroundColor: '#151D22', color: '#F1F0E9' }}>E-commerce Systems</option>
                    <option value="Business Management Systems" style={{ backgroundColor: '#151D22', color: '#F1F0E9' }}>Business Management Systems</option>
                    <option value="AI Integration" style={{ backgroundColor: '#151D22', color: '#F1F0E9' }}>AI Integration</option>
                    <option value="Responsive Digital Experiences" style={{ backgroundColor: '#151D22', color: '#F1F0E9' }}>Responsive Digital Experiences</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      fontWeight: 800,
                      color: '#B6D8C8',
                      marginBottom: '0.5rem',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                    }}
                  >
                    PROJECT SCOPE &amp; OBJECTIVES *
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Briefly describe your requirements, timeline, target features, and any technical preferences..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.9rem 1.15rem',
                      fontSize: '0.95rem',
                      backgroundColor: 'rgba(16, 21, 26, 0.9)',
                      border: '1px solid rgba(182, 216, 200, 0.25)',
                      color: '#F1F0E9',
                      outline: 'none',
                      fontFamily: 'var(--font-sans)',
                      lineHeight: 1.6,
                      borderRadius: '2px',
                    }}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="vip-btn vip-btn-primary"
                  style={{
                    padding: '1.1rem',
                    fontSize: '0.85rem',
                    cursor: 'pointer',
                    width: '100%',
                  }}
                >
                  <Send size={16} />
                  <span>DISPATCH COMMISSION INQUIRY</span>
                </button>

                {statusMessage && (
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.8rem',
                      color: '#D5A66F',
                      textAlign: 'center',
                      padding: '0.75rem',
                      backgroundColor: 'rgba(38, 59, 57, 0.55)',
                      border: '1px solid rgba(213, 166, 111, 0.35)',
                      borderRadius: '2px',
                    }}
                  >
                    {statusMessage}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
