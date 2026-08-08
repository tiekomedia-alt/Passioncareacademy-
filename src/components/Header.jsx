import React, { useState } from 'react';
import { Phone, Calendar, Clock, MapPin, Menu, X, ShieldCheck, UserCheck, FileText } from 'lucide-react';

export default function Header({ onOpenTourModal, onOpenAdminModal, activeSection, setActiveSection }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'programs', label: 'Programs & Meals' },
    { id: 'compliance', label: 'CACFP & State Forms' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 1000, backgroundColor: '#FFFFFF', boxShadow: 'var(--shadow-sm)' }}>
      {/* Top Banner: Operating Hours & Direct Contact */}
      <div style={{ backgroundColor: 'var(--blue-dark)', color: '#FFFFFF', padding: '0.4rem 0', fontSize: '0.85rem' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', color: '#E2E8F0' }}>
              <Clock size={14} style={{ color: '#60A5FA' }} /> <strong>Hours:</strong> Year-Round, Mon – Fri 6:30 AM – 5:30 PM
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', color: '#E2E8F0' }}>
              <MapPin size={14} style={{ color: '#60A5FA' }} /> Delaware Location
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="tel:3028322622" style={{ color: '#FFFFFF', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.3rem', fontWeight: '500' }}>
              <Phone size={13} style={{ color: '#4ADE80' }} /> Main: (302) 832-2622
            </a>
            <span style={{ color: '#4B5563' }}>|</span>
            <a href="tel:3024198890" style={{ color: '#FFFFFF', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.3rem', fontWeight: '500' }}>
              <Phone size={13} style={{ color: '#4ADE80' }} /> Director: (302) 419-8890
            </a>
            <span style={{ color: '#4B5563' }}>|</span>
            <button 
              onClick={onOpenAdminModal}
              style={{ background: 'transparent', border: 'none', color: '#93C5FD', cursor: 'pointer', fontSize: '0.8rem', display: 'inline-flex', alignItems: 'center', gap: '0.2rem', padding: '0 0.2rem' }}
              title="Staff Portal for Tour Management"
            >
              <UserCheck size={13} /> Admin Portal
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.85rem 1.25rem' }}>
        {/* Brand Logo & Name */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
          <img 
            src="/passion care logo .png" 
            alt="Passion Care Academy Logo" 
            style={{ height: '48px', width: 'auto', objectFit: 'contain' }}
            onError={(e) => {
              // Fallback logo if file path issues
              e.target.style.display = 'none';
            }}
          />
          <div>
            <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.45rem', fontWeight: '800', color: 'var(--blue-primary)', letterSpacing: '-0.5px', display: 'block', lineHeight: '1.1' }}>
              PASSION CARE
            </span>
            <span style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--growth-green)', letterSpacing: '1px', textTransform: 'uppercase' }}>
              ACADEMY
            </span>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '1.75rem' }} className="desktop-nav">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              style={{
                background: 'none',
                border: 'none',
                color: activeSection === item.id ? 'var(--blue-primary)' : 'var(--text-dark)',
                fontWeight: activeSection === item.id ? '700' : '600',
                fontSize: '0.95rem',
                cursor: 'pointer',
                padding: '0.5rem 0',
                position: 'relative',
                transition: 'color 0.2s ease'
              }}
            >
              {item.label}
              {activeSection === item.id && (
                <span style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '3px',
                  backgroundColor: 'var(--action-red)',
                  borderRadius: '2px'
                }} />
              )}
            </button>
          ))}
        </nav>

        {/* CTA & Mobile Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button onClick={onOpenTourModal} className="btn-primary pulse-cta">
            <Calendar size={18} /> Schedule a Tour
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--blue-primary)',
              cursor: 'pointer',
              padding: '0.5rem',
              display: 'none'
            }}
            className="mobile-menu-btn"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div style={{
          backgroundColor: '#FFFFFF',
          borderTop: '1px solid var(--border-light)',
          padding: '1.25rem 1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          boxShadow: 'var(--shadow-lg)'
        }}>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              style={{
                background: 'none',
                border: 'none',
                textAlign: 'left',
                fontSize: '1.1rem',
                fontWeight: '600',
                color: activeSection === item.id ? 'var(--blue-primary)' : 'var(--text-dark)',
                padding: '0.5rem 0'
              }}
            >
              {item.label}
            </button>
          ))}
          <hr style={{ border: 'none', borderTop: '1px solid var(--border-light)', margin: '0.5rem 0' }} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <a href="tel:3028322622" className="btn-secondary" style={{ justifyContent: 'center' }}>
              <Phone size={16} /> Call General Line: (302) 832-2622
            </a>
            <a href="tel:3024198890" className="btn-outline" style={{ justifyContent: 'center' }}>
              <Phone size={16} /> Call Director: (302) 419-8890
            </a>
          </div>
        </div>
      )}

      {/* Responsive Inline CSS for Navbar */}
      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </header>
  );
}
