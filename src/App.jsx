import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProgramHub from './components/ProgramHub';
import AboutSection from './components/AboutSection';
import BlogSection from './components/BlogSection';
import ContactSection from './components/ContactSection';
import AdminDashboard from './components/AdminDashboard';
import Footer from './components/Footer';
import { initialBlogs } from './data/blogData';

export default function App() {
  const [adminModalOpen, setAdminModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [blogs, setBlogs] = useState(initialBlogs);

  // Check URL hash for direct secret admin access: #admin or /admin
  useEffect(() => {
    const handleHashCheck = () => {
      if (window.location.hash === '#admin' || window.location.pathname === '/admin') {
        setAdminModalOpen(true);
      }
    };
    handleHashCheck();
    window.addEventListener('hashchange', handleHashCheck);
    return () => window.removeEventListener('hashchange', handleHashCheck);
  }, []);

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

        <BlogSection 
          blogs={blogs}
        />

        <ContactSection />
      </main>

      {/* Footer */}
      <Footer 
        onNavigate={handleNavigate}
      />

      {/* Secret Admin Management Portal Modal (Whitelisted Emails: tiekomedia@gmail.com, Passioncareone@gmail.com, davidvanteko@gmail.com) */}
      <AdminDashboard 
        isOpen={adminModalOpen}
        onClose={() => setAdminModalOpen(false)}
        blogs={blogs}
        setBlogs={setBlogs}
      />
    </div>
  );
}
