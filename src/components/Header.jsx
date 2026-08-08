import React, { useState } from 'react';
import { Phone, Calendar, Clock, MapPin, Menu, X, UserCheck } from 'lucide-react';

export default function Header({ onOpenAdminModal, activeSection, setActiveSection }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const directorPhone = "tel:3024198890";
  const mapsUrl = "https://www.google.com/maps?gs_lcrp=EgZjaHJvbWUqDwgBEC4YDRivARjHARiABDIGCAAQRRg5Mg8IARAuGA0YrwEYxwEYgAQyCQgCEAAYDRiABDIICAMQABgWGB4yCAgEEAAYFhgeMggIBRAAGBYYHjIICAYQABgWGB4yDQgHEAAYhgMYgAQYigUyDQgIEAAYhgMYgAQYigXSAQg5MTY4ajBqN6gCALACAA&um=1&ie=UTF-8&fb=1&gl=ng&sa=X&geocode=KYnGajfYB8eJMVviCQ14LB5i&daddr=3727+Wrangle+Hill+Rd,+Bear,+DE+19701,+United+States";

  const navItems = [
    { id: 'programs', label: 'Programs & Meals' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact Info' },
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
    <header style={{ position: 'sticky', top: 0, zIndex: 1000, backgroundColor: '#FFFFFF', borderBottom: '1px solid var(--border-light)', boxShadow: 'var(--shadow-sm)' }}>
      {/* Top Notification Bar */}
      <div style={{ backgroundColor: 'var(--navy-dark)', color: '#FFFFFF', padding: '0.4rem 0', fontSize: '0.82rem' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', color: '#94A3B8' }}>
              <Clock size={13} style={{ color: '#38BDF8' }} /> <strong>Hours:</strong> Mon – Fri 6:30 AM – 5:30 PM (Year-Round)
            </span>
            <a 
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#38BDF8', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.35rem', fontWeight: '700' }}
            >
              <MapPin size={13} style={{ color: '#38BDF8' }} /> 3727 Wrangle Hill Rd, Bear, DE 📍
            </a>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="tel:3028322622" style={{ color: '#FFFFFF', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.3rem', fontWeight: '600' }}>
              <Phone size={13} style={{ color: '#4ADE80' }} /> Main: (302) 832-2622
            </a>
            <span style={{ color: '#334155' }}>|</span>
            <a href={directorPhone} style={{ color: '#FFFFFF', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.3rem', fontWeight: '700' }}>
              <Phone size={13} style={{ color: '#F87171' }} /> Director: (302) 419-8890
            </a>
            <span style={{ color: '#334155' }}>|</span>
            <button 
              onClick={onOpenAdminModal}
              style={{ background: 'transparent', border: 'none', color: '#38BDF8', cursor: 'pointer', fontSize: '0.8rem', display: 'inline-flex', alignItems: 'center', gap: '0.25rem', padding: 0 }}
            >
              <UserCheck size={13} /> Admin Portal
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.85rem 1.25rem' }}>
        {/* Logo */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
          <img 
            src="/logo.png" 
            alt="Passion Care Academy Logo" 
            style={{ height: '52px', width: 'auto', objectFit: 'contain' }}
          />
          <div>
            <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', fontWeight: '800', color: 'var(--navy-dark)', letterSpacing: '-0.3px', lineHeight: '1.1', textTransform: 'uppercase' }}>
              PASSION CARE
            </span>
            <span style={{ fontFamily: 'var(--font-heading)', fontSize: '0.78rem', fontWeight: '800', color: 'var(--navy-dark)', letterSpacing: '2px', display: 'block', textTransform: 'uppercase' }}>
              ACADEMY
            </span>
          </div>
        </a>

        {/* Navigation items */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '2.25rem' }} className="desktop-nav">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              style={{
                background: 'none',
                border: 'none',
                color: activeSection === item.id ? 'var(--navy-dark)' : 'var(--text-muted)',
                fontFamily: 'var(--font-heading)',
                fontWeight: activeSection === item.id ? '800' : '600',
                fontSize: '0.98rem',
                cursor: 'pointer',
                padding: '0.4rem 0',
                position: 'relative'
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
                  backgroundColor: 'var(--navy-dark)',
                  borderRadius: '2px'
                }} />
              )}
            </button>
          ))}
        </nav>

        {/* Header Right CTAs */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
          <a 
            href={directorPhone}
            className="btn-dark-pill desktop-nav" 
            style={{ fontSize: '0.85rem', padding: '0.75rem 1.4rem' }}
          >
            <Phone size={16} style={{ color: '#F87171' }} /> Schedule Tour: (302) 419-8890
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--navy-dark)',
              cursor: 'pointer',
              padding: '0.4rem',
              display: 'none'
            }}
            className="mobile-menu-btn"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div style={{
          backgroundColor: '#FFFFFF',
          borderTop: '1px solid var(--border-light)',
          padding: '1.5rem',
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
                fontFamily: 'var(--font-heading)',
                fontSize: '1.1rem',
                fontWeight: '700',
                color: activeSection === item.id ? 'var(--navy-dark)' : 'var(--text-dark)',
                padding: '0.5rem 0'
              }}
            >
              {item.label}
            </button>
          ))}
          <hr style={{ border: 'none', borderTop: '1px solid var(--border-light)' }} />
          <a href={directorPhone} className="btn-dark-pill" style={{ justifyContent: 'center' }}>
            <Phone size={18} style={{ color: '#F87171' }} /> Call Director: (302) 419-8890
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </header>
  );
}
