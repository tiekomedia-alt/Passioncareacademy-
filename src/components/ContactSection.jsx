import React from 'react';
import { Phone, MapPin, Clock, Home, Navigation, ExternalLink, Calendar, ShieldCheck, UserCheck } from 'lucide-react';

export default function ContactSection({ onOpenTourModal }) {
  const mapsUrl = "https://www.google.com/maps?gs_lcrp=EgZjaHJvbWUqDwgBEC4YDRivARjHARiABDIGCAAQRRg5Mg8IARAuGA0YrwEYxwEYgAQyCQgCEAAYDRiABDIICAMQABgWGB4yCAgEEAAYFhgeMggIBRAAGBYYHjIICAYQABgWGB4yDQgHEAAYhgMYgAQYigUyDQgIEAAYhgMYgAQYigXSAQg5MTY4ajBqN6gCALACAA&um=1&ie=UTF-8&fb=1&gl=ng&sa=X&geocode=KYnGajfYB8eJMVviCQ14LB5i&daddr=3727+Wrangle+Hill+Rd,+Bear,+DE+19701,+United+States";

  return (
    <section id="contact" style={{ padding: '4.5rem 0', backgroundColor: 'var(--canvas-bg)' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3rem' }}>
          <span style={{ 
            backgroundColor: '#E0F2FE', 
            color: '#0284C7', 
            fontSize: '0.75rem', 
            fontWeight: '700', 
            padding: '0.35rem 0.85rem', 
            borderRadius: 'var(--radius-full)', 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '0.35rem',
            marginBottom: '0.75rem',
            textTransform: 'uppercase'
          }}>
            <Phone size={14} /> Contact Information & Location
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 4.5vw, 2.8rem)', fontWeight: '800', color: 'var(--navy-dark)', marginBottom: '0.75rem' }}>
            Get in Touch With Our Delaware Team
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
            Visit our center in Bear, DE or reach out directly to our administrative team.
          </p>
        </div>

        {/* Clean 2-Column Contact & Location Layout (Form Removed as Requested) */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', 
          gap: '2rem' 
        }}>
          {/* Card 1: Physical Facility Location & Google Maps */}
          <div style={{ 
            backgroundColor: '#FFFFFF', 
            padding: '2.25rem', 
            borderRadius: 'var(--radius-lg)', 
            border: '2px solid #0284C7', 
            boxShadow: 'var(--shadow-md)',
            background: 'linear-gradient(180deg, #FFFFFF 0%, #F0F9FF 100%)',
            display: 'flex',
            flexDirection: 'column',
            justify: 'space-between'
          }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#0284C7', fontWeight: '800', fontSize: '0.85rem', textTransform: 'uppercase', marginBottom: '1rem' }}>
                <MapPin size={20} /> Physical Facility Address
              </div>

              <h3 style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--navy-dark)', marginBottom: '0.75rem' }}>
                Passion Care Academy
              </h3>

              <p style={{ fontSize: '1.1rem', color: 'var(--navy-dark)', fontWeight: '700', marginBottom: '1.5rem', lineHeight: '1.5' }}>
                📍 3727 Wrangle Hill Rd <br />
                Bear, DE 19701, United States
              </p>

              <div style={{ backgroundColor: '#FFFFFF', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid #BAE6FD', marginBottom: '1.75rem' }}>
                <div style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--navy-dark)', marginBottom: '0.25rem' }}>
                  Center Operating Schedule:
                </div>
                <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Clock size={16} style={{ color: '#0284C7' }} /> Mon – Fri: 6:30 AM – 5:30 PM (Year-Round)
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              <a 
                href={mapsUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-dark-pill" 
                style={{ backgroundColor: '#0284C7', borderColor: '#0284C7', width: '100%', justifyContent: 'center', fontSize: '0.95rem', padding: '0.9rem 1.25rem' }}
              >
                <Navigation size={18} /> Get Directions on Google Maps <ExternalLink size={14} />
              </a>

              <button 
                onClick={onOpenTourModal}
                className="btn-dark-pill"
                style={{ width: '100%', justifyContent: 'center', fontSize: '0.95rem', padding: '0.9rem 1.25rem' }}
              >
                <Calendar size={18} /> Schedule a Center Tour
              </button>
            </div>
          </div>

          {/* Card 2: Facility Direct Directory */}
          <div style={{ backgroundColor: '#FFFFFF', padding: '2.25rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-sm)', display: 'flex', flexDirection: 'column', justify: 'space-between' }}>
            <div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: '800', color: 'var(--navy-dark)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Home size={22} style={{ color: 'var(--navy-dark)' }} /> Direct Contact Directory
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {/* General Admissions */}
                <div style={{ padding: '1.1rem', backgroundColor: '#F8FAFC', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--text-light)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    GENERAL INQUIRIES & ADMISSIONS
                  </div>
                  <a href="tel:3028322622" style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--navy-dark)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.35rem' }}>
                    <Phone size={18} style={{ color: 'var(--navy-dark)' }} /> (302) 832-2622
                  </a>
                  <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                    Main front desk line for general center inquiries.
                  </div>
                </div>

                {/* Director Direct Line */}
                <div style={{ padding: '1.1rem', backgroundColor: '#FEF2F2', borderRadius: 'var(--radius-md)', border: '1px solid #FEE2E2' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--action-red)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    DAYCARE DIRECTOR DIRECT LINE
                  </div>
                  <a href="tel:3024198890" style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--action-red)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.35rem' }}>
                    <Phone size={18} style={{ color: 'var(--action-red)' }} /> (302) 419-8890
                  </a>
                  <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                    Direct line for administrative & urgent parent matters.
                  </div>
                </div>

                {/* Office Manager Desk */}
                <div style={{ padding: '1.1rem', backgroundColor: '#F8FAFC', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--text-light)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    AFTER-SCHOOL OFFICE DESK
                  </div>
                  <div style={{ fontSize: '1.1rem', fontWeight: '800', color: 'var(--navy-dark)', marginTop: '0.35rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <UserCheck size={18} style={{ color: 'var(--navy-dark)' }} /> Office Manager Direct Desk
                  </div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                    Dedicated desk for after-school registrations & records.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
