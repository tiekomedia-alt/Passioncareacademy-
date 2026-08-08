import React from 'react';
import { Calendar, ShieldCheck, CheckCircle2, Clock, MapPin, Navigation, Phone } from 'lucide-react';

export default function Hero() {
  const directorPhone = "tel:3024198890";
  const mapsUrl = "https://www.google.com/maps?gs_lcrp=EgZjaHJvbWUqDwgBEC4YDRivARjHARiABDIGCAAQRRg5Mg8IARAuGA0YrwEYxwEYgAQyCQgCEAAYDRiABDIICAMQABgWGB4yCAgEEAAYFhgeMggIBRAAGBYYHjIICAYQABgWGB4yDQgHEAAYhgMYgAQYigUyDQgIEAAYhgMYgAQYigXSAQg5MTY4ajBqN6gCALACAA&um=1&ie=UTF-8&fb=1&gl=ng&sa=X&geocode=KYnGajfYB8eJMVviCQ14LB5i&daddr=3727+Wrangle+Hill+Rd,+Bear,+DE+19701,+United+States";

  return (
    <section style={{ 
      backgroundColor: 'var(--canvas-bg)', 
      padding: '3rem 0 4rem', 
      position: 'relative'
    }}>
      <div className="container">
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
          gap: '3rem', 
          alignItems: 'center' 
        }}>
          {/* Left Column */}
          <div>
            {/* Top Badges */}
            <div style={{ display: 'flex', gap: '0.6rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
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
                textTransform: 'uppercase'
              }}>
                <ShieldCheck size={14} /> State of DE Certified
              </span>
            </div>

            {/* Main Headline */}
            <h1 style={{ 
              fontSize: 'clamp(2.5rem, 5.5vw, 3.8rem)', 
              fontWeight: '800', 
              color: 'var(--navy-dark)', 
              lineHeight: '1.1',
              marginBottom: '1.25rem',
              letterSpacing: '-1px'
            }}>
              Where <br />
              Children <br />
              Flourish. <br />
              <span style={{ 
                color: 'var(--yellow-accent)', 
                fontStyle: 'italic', 
                fontWeight: '800',
                display: 'block',
                marginTop: '0.2rem'
              }}>
                "We Are Your Extended Family"
              </span>
            </h1>

            {/* Subtitle Description */}
            <p style={{ 
              fontSize: '1.05rem', 
              color: 'var(--text-muted)', 
              marginBottom: '2rem', 
              maxWidth: '520px',
              lineHeight: '1.6'
            }}>
              Year-round, safe, creative, and structured early education in Delaware. 
              Providing loving care from infants through preschool and enrichment after-school care through 6th grade.
            </p>

            {/* Primary Action Buttons */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', maxWidth: '480px', marginBottom: '2rem' }}>
              <a href={directorPhone} className="btn-dark-pill" style={{ fontSize: '1rem', padding: '0.95rem 1.75rem' }}>
                <Phone size={18} style={{ color: '#F87171' }} /> Schedule Tour: (302) 419-8890
              </a>

              <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="btn-outline-pill" style={{ fontSize: '0.95rem', padding: '0.95rem 1.75rem', color: '#0284C7' }}>
                <Navigation size={18} /> Get Directions
              </a>
            </div>

            {/* Checkmark Bullet Matrix (Meals item removed as requested) */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              <a href={mapsUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'var(--navy-dark)', display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.92rem', fontWeight: '700' }}>
                <MapPin size={18} style={{ color: '#0284C7', flexShrink: 0 }} />
                <span>3727 Wrangle Hill Rd, Bear, DE 19701 (Click for Map)</span>
              </a>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.92rem', fontWeight: '600', color: 'var(--text-dark)' }}>
                <CheckCircle2 size={18} style={{ color: 'var(--navy-dark)', flexShrink: 0 }} />
                <span>Mon-Fri: 6:30 AM – 5:30 PM (Year-Round)</span>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div style={{ position: 'relative' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {/* Top Main Classroom Card */}
              <div style={{ 
                borderRadius: 'var(--radius-lg)', 
                overflow: 'hidden', 
                boxShadow: 'var(--shadow-md)', 
                position: 'relative',
                backgroundColor: '#FFFFFF',
                border: '1px solid var(--border-light)'
              }}>
                <img 
                  src="/IMG_0971.JPG" 
                  alt="Creative Crafts Classroom"
                  style={{ width: '100%', height: '230px', objectFit: 'cover', display: 'block' }}
                />
                <div style={{ 
                  position: 'absolute', 
                  bottom: '1rem', 
                  left: '1rem', 
                  backgroundColor: 'rgba(255, 255, 255, 0.95)', 
                  backdropFilter: 'blur(4px)',
                  padding: '0.4rem 0.85rem', 
                  borderRadius: 'var(--radius-full)', 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  gap: '0.4rem',
                  boxShadow: 'var(--shadow-sm)'
                }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--growth-green)' }} />
                  <span style={{ fontSize: '0.82rem', fontWeight: '700', color: 'var(--navy-dark)' }}>Creative Crafts</span>
                </div>
              </div>

              {/* Bottom Split Row */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
                <div style={{ 
                  borderRadius: 'var(--radius-lg)', 
                  overflow: 'hidden', 
                  boxShadow: 'var(--shadow-md)', 
                  position: 'relative',
                  backgroundColor: '#FFFFFF',
                  border: '1px solid var(--border-light)'
                }}>
                  <img 
                    src="/IMG_4255.jpg" 
                    alt="After-School Study Station"
                    style={{ width: '100%', height: '140px', objectFit: 'cover', display: 'block' }}
                  />
                  <div style={{ 
                    position: 'absolute', 
                    bottom: '0.75rem', 
                    left: '0.75rem', 
                    backgroundColor: 'rgba(255, 255, 255, 0.95)', 
                    backdropFilter: 'blur(4px)',
                    padding: '0.3rem 0.65rem', 
                    borderRadius: 'var(--radius-full)', 
                    fontSize: '0.75rem',
                    fontWeight: '700',
                    color: 'var(--navy-dark)'
                  }}>
                    After-School Care
                  </div>
                </div>

                <div style={{ 
                  borderRadius: 'var(--radius-lg)', 
                  overflow: 'hidden', 
                  boxShadow: 'var(--shadow-md)', 
                  position: 'relative',
                  backgroundColor: '#FFFFFF',
                  border: '1px solid var(--border-light)'
                }}>
                  <img 
                    src="/IMG_3219.jpg" 
                    alt="Preschool Phonics & Reading"
                    style={{ width: '100%', height: '140px', objectFit: 'cover', display: 'block' }}
                  />
                </div>
              </div>
            </div>

            {/* Floating Bottom Card */}
            <a 
              href={mapsUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{
                marginTop: '1.25rem',
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--radius-md)',
                padding: '0.85rem 1.25rem',
                boxShadow: 'var(--shadow-md)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.85rem',
                border: '1.5px solid var(--blue-sky-badge)',
                textDecoration: 'none',
                transition: 'transform 0.2s ease'
              }}
            >
              <div style={{ 
                width: '40px', 
                height: '40px', 
                borderRadius: '50%', 
                backgroundColor: 'var(--blue-sky-badge)', 
                display: 'flex', 
                alignItems: 'center', 
                justify: 'center', 
                color: '#0284C7',
                flexShrink: 0
              }}>
                <MapPin size={20} />
              </div>
              <div>
                <div style={{ fontSize: '0.88rem', fontWeight: '800', color: 'var(--navy-dark)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                  3727 Wrangle Hill Rd, Bear, DE <Navigation size={14} style={{ color: '#0284C7' }} />
                </div>
                <div style={{ fontSize: '0.78rem', color: '#0284C7', fontWeight: '600' }}>Click for Driving Directions</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
