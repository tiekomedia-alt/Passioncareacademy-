import React from 'react';
import { Navigation, Phone } from 'lucide-react';

export default function Hero() {
  const tourPhone = "tel:3028322622";
  const mapsUrl = "https://www.google.com/maps?gs_lcrp=EgZjaHJvbWUqDwgBEC4YDRivARjHARiABDIGCAAQRRg5Mg8IARAuGA0YrwEYxwEYgAQyCQgCEAAYDRiABDIICAMQABgWGB4yCAgEEAAYFhgeMggIBRAAGBYYHjIICAYQABgWGB4yDQgHEAAYhgMYgAQYigUyDQgIEAAYhgMYgAQYigXSAQg5MTY4ajBqN6gCALACAA&um=1&ie=UTF-8&fb=1&gl=ng&sa=X&geocode=KYnGajfYB8eJMVviCQ14LB5i&daddr=3727+Wrangle+Hill+Rd,+Bear,+DE+19701,+United+States";

  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Content Card (Features 50% Visibility Background Image on Mobile) */}
          <div className="hero-content-col">
            {/* Primary Headline */}
            <h1 className="hero-headline" style={{ 
              fontSize: 'clamp(2.8rem, 6.5vw, 4.5rem)', 
              fontWeight: '800', 
              color: 'var(--navy-dark)', 
              lineHeight: '1.08',
              marginBottom: '0.75rem',
              letterSpacing: '-1px'
            }}>
              Where <br />
              Children <br />
              Flourish.
            </h1>

            {/* Tagline Sub-heading */}
            <div className="hero-tagline" style={{ 
              fontSize: 'clamp(1.15rem, 2.5vw, 1.45rem)', 
              color: '#D97706', 
              fontStyle: 'normal', 
              fontWeight: '800',
              marginBottom: '2rem',
              letterSpacing: '-0.2px'
            }}>
              "We Are Your Extended Family"
            </div>

            {/* Primary Action Buttons */}
            <div style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap', maxWidth: '480px' }}>
              <a href={tourPhone} className="btn-dark-pill" style={{ fontSize: '0.95rem', padding: '0.9rem 1.6rem', flex: '1 1 auto', justifyContent: 'center' }}>
                <Phone size={18} style={{ color: '#F87171' }} /> Schedule Tour: (302) 832-2622
              </a>

              <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="btn-outline-pill" style={{ fontSize: '0.95rem', padding: '0.9rem 1.6rem', color: '#0284C7', flex: '1 1 auto', justifyContent: 'center', backgroundColor: '#FFFFFF' }}>
                <Navigation size={18} /> Get Directions
              </a>
            </div>
          </div>

          {/* Right Column: Photo Stack */}
          <div className="hero-photo-col" style={{ position: 'relative', width: '100%' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {/* Image 1: Main Featured Card (Outdoor Water Recreation & Splash Play) */}
              <div style={{ 
                borderRadius: 'var(--radius-lg)', 
                overflow: 'hidden', 
                boxShadow: 'var(--shadow-md)', 
                position: 'relative',
                backgroundColor: '#FFFFFF',
                border: '1px solid var(--border-light)'
              }}>
                <img 
                  src="/hero-outdoor-recreation.jpg" 
                  alt="Outdoor Water Recreation & Splash Play"
                  style={{ width: '100%', height: '240px', objectFit: 'cover', display: 'block' }}
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
                  <span style={{ fontSize: '0.82rem', fontWeight: '700', color: 'var(--navy-dark)' }}>Outdoor Recreation</span>
                </div>
              </div>

              {/* Bottom Split Row */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.85rem' }}>
                {/* Image 2: Creative Learning Table */}
                <div style={{ 
                  borderRadius: 'var(--radius-lg)', 
                  overflow: 'hidden', 
                  boxShadow: 'var(--shadow-md)', 
                  position: 'relative',
                  backgroundColor: '#FFFFFF',
                  border: '1px solid var(--border-light)'
                }}>
                  <img 
                    src="/hero-painting-table.jpg" 
                    alt="Creative Learning Group Activity Table"
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
                    Creative Learning
                  </div>
                </div>

                {/* Image 3: Girls Hallway Photo */}
                <div style={{ 
                  borderRadius: 'var(--radius-lg)', 
                  overflow: 'hidden', 
                  boxShadow: 'var(--shadow-md)', 
                  position: 'relative',
                  backgroundColor: '#FFFFFF',
                  border: '1px solid var(--border-light)'
                }}>
                  <img 
                    src="/hero-girls-hallway.jpg" 
                    alt="Happy Students at Passion Care Academy"
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
          padding: 3.5rem 0 4.5rem;
          position: relative;
        }
        .hero-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2.5rem;
          align-items: center;
        }

        /* Mobile View Only: 50% Image Visibility with 10% Opacity Contrast Shadow */
        @media (max-width: 768px) {
          .hero-section {
            padding: 1.5rem 0 2.5rem;
          }
          .hero-grid {
            gap: 1.5rem;
          }
          .hero-content-col {
            background: linear-gradient(180deg, rgba(255, 255, 255, 0.50) 0%, rgba(255, 255, 255, 0.50) 100%), url('/hero-outdoor-recreation.jpg') center/cover no-repeat;
            padding: 2.25rem 1.25rem;
            border-radius: var(--radius-lg);
            border: 1.5px solid rgba(255, 255, 255, 0.85);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.10);
          }
          .hero-headline {
            text-shadow: 0 2px 10px rgba(0, 0, 0, 0.10), 0 1px 2px rgba(255, 255, 255, 0.9);
          }
          .hero-tagline {
            text-shadow: 0 2px 10px rgba(0, 0, 0, 0.10), 0 1px 2px rgba(255, 255, 255, 0.9);
            color: #D97706;
            font-style: normal;
            font-weight: 800;
          }
        }
      `}</style>
    </section>
  );
}
