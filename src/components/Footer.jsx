import React from 'react';
import { Phone, MapPin, Clock, ShieldCheck, Heart, ArrowUp } from 'lucide-react';

export default function Footer({ onNavigate, onOpenTourModal }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{ backgroundColor: 'var(--blue-dark)', color: '#FFFFFF', paddingTop: '4rem', paddingBottom: '2rem' }}>
      <div className="container">
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', 
          gap: '3rem',
          paddingBottom: '3rem',
          borderBottom: '1px solid rgba(255, 255, 255, 0.15)'
        }}>
          {/* Col 1: Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <img 
                src="/passion care logo .png" 
                alt="Passion Care Academy" 
                style={{ height: '44px', width: 'auto', backgroundColor: '#FFF', borderRadius: '6px', padding: '2px' }}
                onError={(e) => { e.target.style.display = 'none'; }}
              />
              <div>
                <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.3rem', fontWeight: '800', color: '#FFFFFF' }}>
                  PASSION CARE ACADEMY
                </span>
                <span style={{ display: 'block', fontSize: '0.75rem', color: '#60A5FA', fontWeight: '700', textTransform: 'uppercase' }}>
                  "We Are Your Extended Family"
                </span>
              </div>
            </div>

            <p style={{ color: '#94A3B8', fontSize: '0.92rem', marginBottom: '1.5rem', lineHeight: '1.6' }}>
              Providing year-round, safe, creative, and structured early education and after-school childcare in Delaware.
            </p>

            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: 'rgba(255, 255, 255, 0.1)', padding: '0.4rem 0.85rem', borderRadius: 'var(--radius-full)', fontSize: '0.8rem', color: '#4ADE80' }}>
              <ShieldCheck size={14} /> State of Delaware CACFP Participant
            </div>
          </div>

          {/* Col 2: Operating Schedule */}
          <div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#FFFFFF', marginBottom: '1.25rem', borderLeft: '3px solid var(--action-red)', paddingLeft: '0.6rem' }}>
              Operating Schedule
            </h4>

            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.92rem', color: '#CBD5E1' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Clock size={16} style={{ color: '#60A5FA' }} />
                <span><strong>Hours:</strong> Mon – Fri: 6:30 AM – 5:30 PM</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Heart size={16} style={{ color: '#F43F5E' }} />
                <span><strong>Care Type:</strong> Year-Round Childcare</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <MapPin size={16} style={{ color: '#60A5FA' }} />
                <span>Delaware Geo-Targeted Location</span>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Phone Directory */}
          <div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#FFFFFF', marginBottom: '1.25rem', borderLeft: '3px solid var(--growth-green)', paddingLeft: '0.6rem' }}>
              Direct Directory
            </h4>

            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.92rem' }}>
              <li>
                <div style={{ fontSize: '0.75rem', color: '#94A3B8' }}>General Inquiries:</div>
                <a href="tel:3028322622" style={{ color: '#FFFFFF', textDecoration: 'none', fontWeight: '700', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Phone size={14} style={{ color: '#4ADE80' }} /> (302) 832-2622
                </a>
              </li>
              <li>
                <div style={{ fontSize: '0.75rem', color: '#94A3B8' }}>Director Direct Line:</div>
                <a href="tel:3024198890" style={{ color: '#FFFFFF', textDecoration: 'none', fontWeight: '700', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Phone size={14} style={{ color: '#F87171' }} /> (302) 419-8890
                </a>
              </li>
              <li>
                <div style={{ fontSize: '0.75rem', color: '#94A3B8' }}>After-School Office Desk:</div>
                <span style={{ color: '#E2E8F0', fontWeight: '600' }}>Office Manager Direct Desk</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Quick Navigation & Tour Button */}
          <div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#FFFFFF', marginBottom: '1.25rem', borderLeft: '3px solid #60A5FA', paddingLeft: '0.6rem' }}>
              Quick Links
            </h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.25rem', fontSize: '0.9rem' }}>
              <button onClick={() => onNavigate('programs')} style={{ background: 'none', border: 'none', color: '#94A3B8', textAlign: 'left', cursor: 'pointer', padding: '0.2rem 0' }}>Programs & Meals</button>
              <button onClick={() => onNavigate('compliance')} style={{ background: 'none', border: 'none', color: '#94A3B8', textAlign: 'left', cursor: 'pointer', padding: '0.2rem 0' }}>CACFP & State Forms</button>
              <button onClick={() => onNavigate('about')} style={{ background: 'none', border: 'none', color: '#94A3B8', textAlign: 'left', cursor: 'pointer', padding: '0.2rem 0' }}>About & Philosophy</button>
              <button onClick={() => onNavigate('contact')} style={{ background: 'none', border: 'none', color: '#94A3B8', textAlign: 'left', cursor: 'pointer', padding: '0.2rem 0' }}>Contact Info</button>
            </div>

            <button onClick={onOpenTourModal} className="btn-primary" style={{ width: '100%', justifyContent: 'center', fontSize: '0.9rem' }}>
              Schedule a Center Tour
            </button>
          </div>
        </div>

        {/* Bottom Credits & Scroll to Top */}
        <div style={{ paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', fontSize: '0.85rem', color: '#94A3B8' }}>
          <div>
            © {new Date().getFullYear()} Passion Care Academy. All rights reserved. Delaware CACFP Registered Facility.
          </div>

          <button 
            onClick={scrollToTop} 
            style={{ 
              background: 'rgba(255, 255, 255, 0.1)', 
              border: 'none', 
              color: '#FFFFFF', 
              padding: '0.5rem 1rem', 
              borderRadius: 'var(--radius-full)', 
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem'
            }}
          >
            Back to Top <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
