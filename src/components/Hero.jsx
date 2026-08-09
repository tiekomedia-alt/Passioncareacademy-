import React from 'react';
import { Navigation, Phone } from 'lucide-react';

export default function Hero() {
  const tourPhone = "tel:3028322622";
  const mapsUrl = "https://www.google.com/maps?gs_lcrp=EgZjaHJvbWUqDwgBEC4YDRivARjHARiABDIGCAAQRRg5Mg8IARAuGA0YrwEYxwEYgAQyCQgCEAAYDRiABDIICAMQABgWGB4yCAgEEAAYFhgeMggIBRAAGBYYHjIICAYQABgWGB4yDQgHEAAYhgMYgAQYigUyDQgIEAAYhgMYgAQYigXSAQg5MTY4ajBqN6gCALACAA&um=1&ie=UTF-8&fb=1&gl=ng&sa=X&geocode=KYnGajfYB8eJMVviCQ14LB5i&daddr=3727+Wrangle+Hill+Rd,+Bear,+DE+19701,+United+States";

  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Content Card */}
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

            {/* Reduced Tagline Sub-heading */}
            <div className="hero-tagline" style={{ 
              fontSize: 'clamp(1.1rem, 2.4vw, 1.4rem)', 
              color: 'var(--yellow-accent)', 
              fontStyle: 'italic', 
              fontWeight: '800',
              marginBottom: '2rem'
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
              {/* Top Main Featured Card: Real Outdoor Playground Facility */}
              <div style={{ 
                borderRadius: 'var(--radius-lg)', 
                overflow: 'hidden', 
                boxShadow: 'var(--shadow-md)', 
                position: 'relative',
                backgroundColor: '#FFFFFF',
                border: '1px solid var(--border-light)'
              }}>
                <img 
                  src="/hero-playground.jpg" 
                  alt="Outdoor Playground & Recreation Area"
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
                {/* Updated Creative Learning Card with real group painting table photo */}
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
          padding: 3.5rem 0 4.5rem;
          position: relative;
        }
        .hero-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2.5rem;
          align-items: center;
        }

        /* Mobile View Only: Playground Background Photo with Drop Shadow Text */
        @media (max-width: 768px) {
          .hero-section {
            padding: 1.5rem 0 2.5rem;
          }
          .hero-grid {
            gap: 1.5rem;
          }
          .hero-content-col {
            background: linear-gradient(180deg, rgba(255, 255, 255, 0.62) 0%, rgba(255, 255, 255, 0.82) 100%), url('/hero-playground.jpg') center/cover no-repeat;
            backdrop-filter: blur(2px);
            padding: 2.25rem 1.25rem;
            border-radius: var(--radius-lg);
            border: 1.5px solid rgba(255, 255, 255, 0.95);
            box-shadow: 0 10px 25px -5px rgba(15, 23, 42, 0.25);
          }
          .hero-headline {
            text-shadow: 0 2px 4px rgba(255, 255, 255, 0.95), 0 1px 2px rgba(15, 23, 42, 0.2);
          }
          .hero-tagline {
            text-shadow: 0 2px 4px rgba(15, 23, 42, 0.3), 0 1px 2px rgba(255, 255, 255, 0.8);
          }
        }
      `}</style>
    </section>
  );
}
