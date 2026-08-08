import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProgramHub from './components/ProgramHub';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import AdminTourViewer from './components/AdminTourViewer';
import Footer from './components/Footer';

export default function App() {
  const [adminModalOpen, setAdminModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

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
    </div>
  );
}
