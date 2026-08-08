import React from 'react';
import { Phone, MapPin, Clock, Home, Navigation, ExternalLink } from 'lucide-react';

export default function ContactSection() {
  const directorPhone = "tel:3024198890";
  const mapsUrl = "https://www.google.com/maps?gs_lcrp=EgZjaHJvbWUqDwgBEC4YDRivARjHARiABDIGCAAQRRg5Mg8IARAuGA0YrwEYxwEYgAQyCQgCEAAYDRiABDIICAMQABgWGB4yCAgEEAAYFhgeMggIBRAAGBYYHjIICAYQABgWGB4yDQgHEAAYhgMYgAQYigUyDQgIEAAYhgMYgAQYigXSAQg5MTY4ajBqN6gCALACAA&um=1&ie=UTF-8&fb=1&gl=ng&sa=X&geocode=KYnGajfYB8eJMVviCQ14LB5i&daddr=3727+Wrangle+Hill+Rd,+Bear,+DE+19701,+United+States";

  return (
    <section id="contact" style={{ padding: '4.5rem 0', backgroundColor: 'var(--canvas-bg)' }}>
      <div className="container">
        {/* Header (Subtitle Removed as Requested) */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3rem' }}>
          <h2 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.2rem)', fontWeight: '800', color: 'var(--navy-dark)', marginBottom: '0.75rem' }}>
            Get in Touch
          </h2>
        </div>

        {/* 2-Column Contact & Location Layout */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', 
          gap: '2rem' 
        }}>
          {/* Card 1: Physical Location & Driving Directions */}
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
                  <Clock size={16} style={{ color: '#0284C7' }} /> Mon – Fri: 6:30 AM – 5:30 PM
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

              <a 
                href={directorPhone}
                className="btn-dark-pill"
                style={{ width: '100%', justifyContent: 'center', fontSize: '0.95rem', padding: '0.9rem 1.25rem' }}
              >
                <Phone size={18} style={{ color: '#F87171' }} /> Call Director to Schedule Tour: (302) 419-8890
              </a>
            </div>
          </div>

          {/* Card 2: Direct Directory (Subtitles and Office Manager Desk Removed as Requested) */}
          <div style={{ backgroundColor: '#FFFFFF', padding: '2.25rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-sm)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
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
                </div>

                {/* Director Direct Line */}
                <div style={{ padding: '1.1rem', backgroundColor: '#FEF2F2', borderRadius: 'var(--radius-md)', border: '1px solid #FEE2E2' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--action-red)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    DAYCARE DIRECTOR DIRECT LINE
                  </div>
                  <a href={directorPhone} style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--action-red)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.35rem' }}>
                    <Phone size={18} style={{ color: 'var(--action-red)' }} /> (302) 419-8890
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
