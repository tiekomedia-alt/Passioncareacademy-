import React from 'react';
import { ShieldCheck, Navigation, Phone } from 'lucide-react';

export default function Hero() {
  const directorPhone = "tel:3024198890";
  const mapsUrl = "https://www.google.com/maps?gs_lcrp=EgZjaHJvbWUqDwgBEC4YDRivARjHARiABDIGCAAQRRg5Mg8IARAuGA0YrwEYxwEYgAQyCQgCEAAYDRiABDIICAMQABgWGB4yCAgEEAAYFhgeMggIBRAAGBYYHjIICAYQABgWGB4yDQgHEAAYhgMYgAQYigUyDQgIEAAYhgMYgAQYigXSAQg5MTY4ajBqN6gCALACAA&um=1&ie=UTF-8&fb=1&gl=ng&sa=X&geocode=KYnGajfYB8eJMVviCQ14LB5i&daddr=3727+Wrangle+Hill+Rd,+Bear,+DE+19701,+United+States";

  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Content */}
          <div className="hero-content-col">
            {/* Top Badge */}
            <div style={{ display: 'flex', gap: '0.6rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
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
              fontSize: 'clamp(2.3rem, 5.5vw, 3.8rem)', 
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
              fontSize: '1.02rem', 
              color: 'var(--text-muted)', 
              marginBottom: '1.75rem', 
              maxWidth: '520px',
              lineHeight: '1.6'
            }}>
              Safe, creative, and structured early education in Delaware. 
              Providing loving care from infants through preschool and enrichment after-school care through 6th grade.
            </p>

            {/* Primary Action Buttons */}
            <div style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap', maxWidth: '480px' }}>
              <a href={directorPhone} className="btn-dark-pill" style={{ fontSize: '0.95rem', padding: '0.9rem 1.6rem', flex: '1 1 auto', justifyContent: 'center' }}>
                <Phone size={18} style={{ color: '#F87171' }} /> Schedule Tour: (302) 419-8890
              </a>

              <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="btn-outline-pill" style={{ fontSize: '0.95rem', padding: '0.9rem 1.6rem', color: '#0284C7', flex: '1 1 auto', justifyContent: 'center' }}>
                <Navigation size={18} /> Get Directions
              </a>
            </div>
          </div>

          {/* Right Column: Photo Grid */}
          <div className="hero-photo-col" style={{ position: 'relative', width: '100%' }}>
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
                  style={{ width: '100%', height: '220px', objectFit: 'cover', display: 'block' }}
                />
                <div style={{ 
                  position: 'absolute', 
                  bottom: '0.85rem', 
                  left: '0.85rem', 
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
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.85rem' }}>
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
                    style={{ width: '100%', height: '130px', objectFit: 'cover', display: 'block' }}
                  />
                  <div style={{ 
                    position: 'absolute', 
                    bottom: '0.65rem', 
                    left: '0.65rem', 
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
                    style={{ width: '100%', height: '130px', objectFit: 'cover', display: 'block' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-section {
          background-color: var(--canvas-bg);
          padding: 3rem 0 4rem;
          position: relative;
        }
        .hero-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2.5rem;
          align-items: center;
        }

        /* Mobile View Only: Warm creative background image overlay removing plain white space */
        @media (max-width: 768px) {
          .hero-section {
            background: linear-gradient(180deg, rgba(250, 249, 246, 0.92) 0%, rgba(255, 255, 255, 0.96) 100%), url('/IMG_3139.JPG');
            background-size: cover;
            background-position: center;
            padding: 2rem 0 3rem;
          }
          .hero-grid {
            gap: 1.75rem;
          }
          .hero-content-col {
            background: rgba(255, 255, 255, 0.85);
            backdrop-filter: blur(8px);
            padding: 1.5rem;
            border-radius: var(--radius-lg);
            border: 1px solid rgba(255, 255, 255, 0.9);
            boxShadow: var(--shadow-sm);
          }
        }
      `}</style>
    </section>
  );
}
