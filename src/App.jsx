import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProgramHub from './components/ProgramHub';
import ComplianceHub from './components/ComplianceHub';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import AdminTourViewer from './components/AdminTourViewer';
import Footer from './components/Footer';
import { Phone, Navigation } from 'lucide-react';

export default function App() {
  const [adminModalOpen, setAdminModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const directorPhone = "tel:3024198890";
  const mapsUrl = "https://www.google.com/maps?gs_lcrp=EgZjaHJvbWUqDwgBEC4YDRivARjHARiABDIGCAAQRRg5Mg8IARAuGA0YrwEYxwEYgAQyCQgCEAAYDRiABDIICAMQABgWGB4yCAgEEAAYFhgeMggIBRAAGBYYHjIICAYQABgWGB4yDQgHEAAYhgMYgAQYigUyDQgIEAAYhgMYgAQYigXSAQg5MTY4ajBqN6gCALACAA&um=1&ie=UTF-8&fb=1&gl=ng&sa=X&geocode=KYnGajfYB8eJMVviCQ14LB5i&daddr=3727+Wrangle+Hill+Rd,+Bear,+DE+19701,+United+States";

  const handleNavigate = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Sticky Top Header */}
      <Header 
        onOpenAdminModal={() => setAdminModalOpen(true)}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      {/* Main Content Modules */}
      <main style={{ flex: 1 }}>
        <Hero 
          onNavigate={handleNavigate}
        />

        <ProgramHub />

        <AboutSection />

        <ComplianceHub />

        <ContactSection />
      </main>

      {/* Footer */}
      <Footer 
        onNavigate={handleNavigate}
      />

      {/* Admin Tour Management Viewer Modal */}
      <AdminTourViewer 
        isOpen={adminModalOpen}
        onClose={() => setAdminModalOpen(false)}
      />

      {/* Sticky Mobile Floating Action Bar */}
      <div 
        className="mobile-floating-bar"
        style={{
          position: 'fixed',
          bottom: '1rem',
          left: '1rem',
          right: '1rem',
          zIndex: 1900,
          display: 'none',
          gap: '0.75rem',
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          padding: '0.75rem 1rem',
          borderRadius: 'var(--radius-full)',
          boxShadow: 'var(--shadow-xl)',
          border: '1px solid var(--border-light)'
        }}
      >
        <a 
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline-pill" 
          style={{ flex: 1, justifyContent: 'center', fontSize: '0.85rem', padding: '0.65rem' }}
        >
          <Navigation size={16} /> Directions
        </a>
        <a 
          href={directorPhone} 
          className="btn-dark-pill" 
          style={{ flex: 1.5, justifyContent: 'center', fontSize: '0.85rem', padding: '0.65rem' }}
        >
          <Phone size={16} style={{ color: '#F87171' }} /> Tour: (302) 419-8890
        </a>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .mobile-floating-bar { display: flex !important; }
        }
      `}</style>
    </div>
  );
}
