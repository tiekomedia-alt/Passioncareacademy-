import React, { useState } from 'react';
import { Phone, Clock, MapPin, Menu, X } from 'lucide-react';

export default function Header({ activeSection, setActiveSection }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const mainPhone = "tel:3028322622";
  const instagramUrl = "https://www.instagram.com/passioncareacademy?igsh=ODYyODd2aHN0aWM4";
  const mapsUrl = "https://www.google.com/maps?gs_lcrp=EgZjaHJvbWUqDwgBEC4YDRivARjHARiABDIGCAAQRRg5Mg8IARAuGA0YrwEYxwEYgAQyCQgCEAAYDRiABDIICAMQABgWGB4yCAgEEAAYFhgeMggIBRAAGBYYHjIICAYQABgWGB4yDQgHEAAYhgMYgAQYigUyDQgIEAAYhgMYgAQYigXSAQg5MTY4ajBqN6gCALACAA&um=1&ie=UTF-8&fb=1&gl=ng&sa=X&geocode=KYnGajfYB8eJMVviCQ14LB5i&daddr=3727+Wrangle+Hill+Rd,+Bear,+DE+19701,+United+States";

  const navItems = [
    { id: 'programs', label: 'Programs' },
    { id: 'about', label: 'About Us' },
    { id: 'blog', label: 'Blog & Articles' },
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

  const tickerItems = (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '2.5rem', whiteSpace: 'nowrap', paddingRight: '2.5rem' }}>
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', color: '#94A3B8' }}>
        <Clock size={13} style={{ color: '#38BDF8' }} /> <strong>Hours:</strong> Mon – Fri 6:30 AM – 6:00 PM
      </span>

      <span style={{ color: '#334155' }}>•</span>

      <a 
        href={mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: '#38BDF8', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.35rem', fontWeight: '700' }}
      >
        <MapPin size={13} style={{ color: '#38BDF8' }} /> 3727 Wrangle Hill Rd, Bear, DE 📍
      </a>

      <span style={{ color: '#334155' }}>•</span>

      <a 
        href={instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: '#E1306C', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.35rem', fontWeight: '700' }}
      >
        <img src="/instagram-custom-icon.png" alt="Instagram" style={{ width: '16px', height: '16px', objectFit: 'contain' }} /> @passioncareacademy
      </a>

      <span style={{ color: '#334155' }}>•</span>

      <a href={mainPhone} style={{ color: '#FFFFFF', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.3rem', fontWeight: '700' }}>
        <Phone size={13} style={{ color: '#4ADE80' }} /> (302) 832-2622
      </a>
    </div>
  );

  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 1000, backgroundColor: '#FFFFFF', borderBottom: '1px solid var(--border-light)', boxShadow: 'var(--shadow-sm)' }}>
      {/* Top Infinite Ticker Bar */}
      <div style={{ 
        backgroundColor: 'var(--navy-dark)', 
        color: '#FFFFFF', 
        padding: '0.45rem 0', 
        fontSize: '0.82rem', 
        overflow: 'hidden', 
        position: 'relative' 
      }}>
        <div className="ticker-track" style={{ display: 'flex', width: 'max-content' }}>
          {tickerItems}
          {tickerItems}
          {tickerItems}
          {tickerItems}
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
          {/* 100% Dead-Centered Custom Instagram Icon Button */}
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="Follow Passion Care Academy on Instagram"
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '50%',
              backgroundColor: '#FDF2F8',
              border: '1px solid #FBCFE8',
              display: 'flex',
              alignItems: 'center',
              justify: 'center',
              textDecoration: 'none',
              padding: 0,
              margin: 0,
              flexShrink: 0,
              transition: 'transform 0.2s ease, background-color 0.2s ease'
            }}
          >
            <img src="/instagram-custom-icon.png" alt="Instagram" style={{ width: '22px', height: '22px', display: 'block', margin: 'auto', objectFit: 'contain' }} />
          </a>

          <a 
            href={mainPhone}
            className="btn-dark-pill desktop-nav" 
            style={{ fontSize: '0.85rem', padding: '0.75rem 1.4rem' }}
          >
            <Phone size={16} style={{ color: '#F87171' }} /> Schedule Tour: (302) 832-2622
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

          <a 
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-pill"
            style={{ justifyContent: 'center', color: '#E1306C', borderColor: '#FBCFE8', backgroundColor: '#FDF2F8' }}
          >
            <img src="/instagram-custom-icon.png" alt="Instagram" style={{ width: '18px', height: '18px', objectFit: 'contain', marginRight: '6px' }} /> Follow on Instagram
          </a>

          <a href={mainPhone} className="btn-dark-pill" style={{ justifyContent: 'center' }}>
            <Phone size={18} style={{ color: '#F87171' }} /> Schedule Tour: (302) 832-2622
          </a>
        </div>
      )}

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .ticker-track {
          animation: marquee 30s linear infinite;
        }
        .ticker-track:hover {
          animation-play-state: paused;
        }
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </header>
  );
}
