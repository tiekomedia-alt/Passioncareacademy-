import React from 'react';
import { Calendar, ShieldCheck, Utensils, CheckCircle2, Clock, ArrowRight } from 'lucide-react';

export default function Hero({ onOpenTourModal, onNavigate }) {
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
          {/* Left Column: Vision & Headline matching reference mobile/desktop screenshot */}
          <div>
            {/* Top Soft Badges */}
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
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}>
                <ShieldCheck size={14} /> State of DE Certified
              </span>

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
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}>
                <Utensils size={14} /> CACFP Food Program Participant
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

            {/* Primary Action Buttons matching reference */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', maxWidth: '380px', marginBottom: '2rem' }}>
              <button onClick={onOpenTourModal} className="btn-dark-pill" style={{ justifyContent: 'center', fontSize: '1rem', padding: '0.95rem 1.75rem' }}>
                <Calendar size={18} /> Schedule a Center Tour
              </button>
              <button onClick={() => onNavigate('compliance')} className="btn-outline-pill" style={{ justifyContent: 'center', fontSize: '0.95rem', padding: '0.9rem 1.75rem' }}>
                <Utensils size={18} /> CACFP Meal Info & Forms
              </button>
            </div>

            {/* Checkmark Bullet Matrix */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.92rem', fontWeight: '600', color: 'var(--text-dark)' }}>
                <CheckCircle2 size={18} style={{ color: 'var(--navy-dark)', flexShrink: 0 }} />
                <span>Mon-Fri: 6:30 AM – 5:30 PM</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.92rem', fontWeight: '600', color: 'var(--text-dark)' }}>
                <CheckCircle2 size={18} style={{ color: 'var(--navy-dark)', flexShrink: 0 }} />
                <span>3 Daily Meals (Preschool)</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.92rem', fontWeight: '600', color: 'var(--text-dark)' }}>
                <CheckCircle2 size={18} style={{ color: 'var(--navy-dark)', flexShrink: 0 }} />
                <span>Infants to 6th Grade (12 yrs)</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.92rem', fontWeight: '600', color: 'var(--text-dark)' }}>
                <CheckCircle2 size={18} style={{ color: 'var(--navy-dark)', flexShrink: 0 }} />
                <span>Academic & Physical Growth</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Classroom Collage Cards matching reference image */}
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
                {/* Left Split Card */}
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

                {/* Right Split Card */}
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

            {/* Floating Bottom Card matching reference image */}
            <div style={{
              marginTop: '1.25rem',
              backgroundColor: '#FFFFFF',
              borderRadius: 'var(--radius-md)',
              padding: '0.85rem 1.25rem',
              boxShadow: 'var(--shadow-md)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.85rem',
              border: '1px solid var(--border-light)'
            }}>
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
                <Clock size={20} />
              </div>
              <div>
                <div style={{ fontSize: '0.88rem', fontWeight: '700', color: 'var(--navy-dark)' }}>Year-Round Delaware Care</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>6:30 AM - 5:30 PM Monday–Friday</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
