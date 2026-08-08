import React from 'react';
import { Phone, MapPin, Clock, ShieldCheck, Heart, ArrowUp, GraduationCap, UserCheck } from 'lucide-react';

export default function Footer({ onNavigate, onOpenTourModal }) {
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
          {/* Col 1: Brand Info matching reference image */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.25rem' }}>
              <div style={{ width: '38px', height: '38px', borderRadius: '10px', backgroundColor: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--navy-dark)' }}>
                <GraduationCap size={22} />
              </div>
              <div>
                <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', fontWeight: '800', color: '#FFFFFF', letterSpacing: '-0.3px', display: 'block', lineHeight: '1.1', textTransform: 'uppercase' }}>
                  PASSION CARE ACADEMY
                </span>
              </div>
            </div>

            <p style={{ color: '#94A3B8', fontSize: '0.9rem', marginBottom: '1.5rem', lineHeight: '1.6' }}>
              Nurturing young minds through structured, loving care and comprehensive early education.
            </p>

            <span style={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.1)', 
              color: '#38BDF8', 
              fontSize: '0.75rem', 
              fontWeight: '700', 
              padding: '0.35rem 0.85rem', 
              borderRadius: 'var(--radius-full)', 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '0.35rem' 
            }}>
              <ShieldCheck size={14} /> State of Delaware CACFP Registered
            </span>
          </div>

          {/* Col 2: Operating Schedule */}
          <div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: '800', color: '#FFFFFF', marginBottom: '1.25rem', fontFamily: 'var(--font-heading)' }}>
              Operating Schedule
            </h4>

            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem', color: '#CBD5E1' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Clock size={16} style={{ color: '#38BDF8' }} />
                <span>Hours: Mon–Fri 6:30 AM – 5:30 PM</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Heart size={16} style={{ color: '#F87171' }} />
                <span>Care Type: Year-Round Childcare</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <MapPin size={16} style={{ color: '#38BDF8' }} />
                <span>Delaware Center Location</span>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Directory */}
          <div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: '800', color: '#FFFFFF', marginBottom: '1.25rem', fontFamily: 'var(--font-heading)' }}>
              Direct Directory
            </h4>

            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem' }}>
              <li>
                <div style={{ fontSize: '0.75rem', color: '#94A3B8', textTransform: 'uppercase' }}>General Admissions:</div>
                <a href="tel:3028322622" style={{ color: '#FFFFFF', textDecoration: 'none', fontWeight: '700', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', marginTop: '0.15rem' }}>
                  <Phone size={14} style={{ color: '#4ADE80' }} /> (302) 832-2622
                </a>
              </li>
              <li>
                <div style={{ fontSize: '0.75rem', color: '#94A3B8', textTransform: 'uppercase' }}>Director Direct Line:</div>
                <a href="tel:3024198890" style={{ color: '#FFFFFF', textDecoration: 'none', fontWeight: '700', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', marginTop: '0.15rem' }}>
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

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem', fontSize: '0.9rem' }}>
              <button onClick={() => onNavigate('programs')} style={{ background: 'none', border: 'none', color: '#94A3B8', textAlign: 'left', cursor: 'pointer', padding: '0.2rem 0', fontWeight: '600' }}>Programs & Meals</button>
              <button onClick={() => onNavigate('compliance')} style={{ background: 'none', border: 'none', color: '#94A3B8', textAlign: 'left', cursor: 'pointer', padding: '0.2rem 0', fontWeight: '600' }}>CACFP & State Forms</button>
              <button onClick={() => onNavigate('about')} style={{ background: 'none', border: 'none', color: '#94A3B8', textAlign: 'left', cursor: 'pointer', padding: '0.2rem 0', fontWeight: '600' }}>About & Philosophy</button>
              <button onClick={() => onNavigate('contact')} style={{ background: 'none', border: 'none', color: '#94A3B8', textAlign: 'left', cursor: 'pointer', padding: '0.2rem 0', fontWeight: '600' }}>Contact Info</button>
            </div>

            <button onClick={onOpenTourModal} className="btn-dark-pill" style={{ backgroundColor: 'var(--yellow-accent)', color: 'var(--navy-dark)', border: 'none', width: '100%', justifyContent: 'center', fontSize: '0.88rem' }}>
              Schedule a Center Tour
            </button>
          </div>
        </div>

        {/* Bottom Copyright matching reference image */}
        <div style={{ paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', fontSize: '0.82rem', color: '#94A3B8' }}>
          <div>
            © {new Date().getFullYear()} Passion Care Academy. All rights reserved. Delaware CACFP Registered Facility.
          </div>

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
    </footer>
  );
}
