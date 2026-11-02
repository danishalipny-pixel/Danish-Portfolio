import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ErrorBoundary from './components/ErrorBoundary';
import BackgroundGrid from './components/BackgroundGrid';

// Route-based code splitting for optimal performance
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Projects = lazy(() => import('./pages/Projects'));
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'));
const Services = lazy(() => import('./pages/Services'));
const Contact = lazy(() => import('./pages/Contact'));

function PageFallback() {
  return (
    <div
      style={{
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#10151A',
      }}
      aria-label="Loading page content"
    >
      <div
        style={{
          width: '28px',
          height: '28px',
          border: '2px solid rgba(182, 216, 200, 0.2)',
          borderTopColor: '#B6D8C8',
          borderRadius: '50%',
          animation: 'spin 0.6s linear infinite',
        }}
      />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div style={{ backgroundColor: '#10151A', minHeight: '100vh', display: 'flex', flexDirection: 'column', position: 'relative', color: '#F1F0E9' }}>
        {/* Futuristic Aurora Obsidian Background */}
        <BackgroundGrid />

        <Navbar />
        <main style={{ flexGrow: 1, position: 'relative', zIndex: 1 }}>
          <ErrorBoundary>
            <Suspense fallback={<PageFallback />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                {/* Both /work and /projects for seamless navigation */}
                <Route path="/work" element={<Projects />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/work/:id" element={<ProjectDetail />} />
                <Route path="/projects/:id" element={<ProjectDetail />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </Suspense>
          </ErrorBoundary>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
