import React from 'react';
import { Phone, MapPin, Clock, ArrowUp, ExternalLink } from 'lucide-react';

export default function Footer({ onNavigate }) {
  const mainPhone = "tel:3028322622";
  const directLinePhone = "tel:3024198890";
  const instagramUrl = "https://www.instagram.com/passioncareacademy?igsh=ODYyODd2aHN0aWM4";
  const mapsUrl = "https://www.google.com/maps?gs_lcrp=EgZjaHJvbWUqDwgBEC4YDRivARjHARiABDIGCAAQRRg5Mg8IARAuGA0YrwEYxwEYgAQyCQgCEAAYDRiABDIICAMQABgWGB4yCAgEEAAYFhgeMggIBRAAGBYYHjIICAYQABgWGB4yDQgHEAAYhgMYgAQYigUyDQgIEAAYhgMYgAQYigXSAQg5MTY4ajBqN6gCALACAA&um=1&ie=UTF-8&fb=1&gl=ng&sa=X&geocode=KYnGajfYB8eJMVviCQ14LB5i&daddr=3727+Wrangle+Hill+Rd,+Bear,+DE+19701,+United+States";

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{ backgroundColor: 'var(--navy-dark)', color: '#FFFFFF', paddingTop: '4rem', paddingBottom: '2.5rem' }}>
      <div className="container">
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', 
          gap: '3rem',
          paddingBottom: '3rem',
          borderBottom: '1px solid #1E293B'
        }}>
          {/* Col 1: Brand Logo & Social Media Links */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <img 
                src="/logo.png" 
                alt="Passion Care Academy" 
                style={{ height: '48px', width: 'auto', backgroundColor: '#FFFFFF', borderRadius: '8px', padding: '4px' }}
              />
              <div>
                <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', fontWeight: '800', color: '#FFFFFF', letterSpacing: '-0.3px', display: 'block', lineHeight: '1.1', textTransform: 'uppercase' }}>
                  PASSION CARE ACADEMY
                </span>
              </div>
            </div>

            <p style={{ color: '#94A3B8', fontSize: '0.9rem', marginBottom: '1.25rem', lineHeight: '1.6' }}>
              Nurturing young minds through structured, loving care and comprehensive early education in Delaware.
            </p>

            {/* Custom Instagram Icon Button */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginTop: '1rem' }}>
              <a 
                href={instagramUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                title="Follow us on Instagram"
                style={{ 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  textDecoration: 'none',
                  transition: 'transform 0.2s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                <img src="/instagram-custom-icon.png" alt="Instagram" style={{ width: '34px', height: '34px', objectFit: 'contain' }} />
              </a>
            </div>
          </div>

          {/* Col 2: Operating Schedule */}
          <div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: '800', color: '#FFFFFF', marginBottom: '1.25rem', fontFamily: 'var(--font-heading)' }}>
              Operating Schedule
            </h4>

            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem', color: '#CBD5E1' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Clock size={16} style={{ color: '#38BDF8' }} />
                <span>Hours: Mon–Fri 6:30 AM – 6:00 PM</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <a href={mapsUrl} target="_blank" rel="noopener noreferrer" style={{ color: '#38BDF8', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '600' }}>
                  <MapPin size={16} style={{ color: '#38BDF8' }} />
                  <span>3727 Wrangle Hill Rd, Bear, DE</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Enrollment */}
          <div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: '800', color: '#FFFFFF', marginBottom: '1.25rem', fontFamily: 'var(--font-heading)' }}>
              Enrollment
            </h4>

            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem' }}>
              <li>
                <div style={{ fontSize: '0.75rem', color: '#94A3B8', textTransform: 'uppercase' }}>General Admissions:</div>
                <a href="tel:3028322622" style={{ color: '#FFFFFF', textDecoration: 'none', fontWeight: '700', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', marginTop: '0.15rem' }}>
                  <Phone size={14} style={{ color: '#4ADE80' }} /> (302) 832-2622
                </a>
              </li>
              <li>
                <a href={directLinePhone} style={{ color: '#FFFFFF', textDecoration: 'none', fontWeight: '700', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', marginTop: '0.15rem' }}>
                  <Phone size={14} style={{ color: '#F87171' }} /> (302) 419-8890
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Quick Links */}
          <div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: '800', color: '#FFFFFF', marginBottom: '1.25rem', fontFamily: 'var(--font-heading)' }}>
              Quick Links
            </h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.25rem', fontSize: '0.9rem' }}>
              <button onClick={() => onNavigate('programs')} style={{ background: 'none', border: 'none', color: '#94A3B8', textAlign: 'left', cursor: 'pointer', padding: '0.2rem 0', fontWeight: '600' }}>Programs</button>
              <button onClick={() => onNavigate('about')} style={{ background: 'none', border: 'none', color: '#94A3B8', textAlign: 'left', cursor: 'pointer', padding: '0.2rem 0', fontWeight: '600' }}>About Us</button>
              <button onClick={() => onNavigate('blog')} style={{ background: 'none', border: 'none', color: '#94A3B8', textAlign: 'left', cursor: 'pointer', padding: '0.2rem 0', fontWeight: '600' }}>Blog & Articles</button>
              <button onClick={() => onNavigate('faq')} style={{ background: 'none', border: 'none', color: '#94A3B8', textAlign: 'left', cursor: 'pointer', padding: '0.2rem 0', fontWeight: '600' }}>FAQ & Service Areas</button>
              <button onClick={() => onNavigate('contact')} style={{ background: 'none', border: 'none', color: '#94A3B8', textAlign: 'left', cursor: 'pointer', padding: '0.2rem 0', fontWeight: '600' }}>Contact Info</button>
            </div>

            <a href={mainPhone} className="btn-dark-pill" style={{ backgroundColor: 'var(--yellow-accent)', color: 'var(--navy-dark)', border: 'none', width: '100%', justifyContent: 'center', fontSize: '0.88rem' }}>
              <Phone size={14} /> Call: (302) 832-2622
            </a>
          </div>
        </div>

        {/* Bottom Copyright & Social Row */}
        <div style={{ paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', fontSize: '0.82rem', color: '#94A3B8' }}>
          <div>
            © 2026 Passion Care Academy. All rights reserved. Built and designed by TIEKO MEDIA LIMITED.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <a 
              href={instagramUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ color: '#E1306C', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.35rem', fontWeight: '700' }}
            >
              <img src="/instagram-custom-icon.png" alt="Instagram" style={{ width: '16px', height: '16px', objectFit: 'contain' }} /> Instagram
            </a>

            <button 
              onClick={scrollToTop} 
              style={{ 
                background: 'none', 
                border: 'none', 
                color: '#94A3B8', 
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.3rem',
                fontWeight: '600'
              }}
            >
              Back to Top <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
