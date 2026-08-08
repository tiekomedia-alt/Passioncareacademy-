import React from 'react';
import { Calendar, ShieldCheck, Heart, Utensils, Clock, CheckCircle2, ArrowRight } from 'lucide-react';

export default function Hero({ onOpenTourModal, onNavigate }) {
  return (
    <section style={{ 
      background: 'linear-gradient(135deg, var(--canvas-bg) 0%, var(--canvas-sky) 100%)', 
      padding: '4rem 0 5rem', 
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Decorative Sky Blue Subtle Elements */}
      <div style={{
        position: 'absolute',
        top: '-10%',
        right: '-5%',
        width: '450px',
        height: '450px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(235, 245, 255, 0.8) 0%, rgba(0, 76, 179, 0.05) 100%)',
        pointerEvents: 'none',
        zIndex: 0
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
          gap: '3rem', 
          alignItems: 'center' 
        }}>
          {/* Left Column: Vision & Conversion Core */}
          <div>
            <div style={{ display: 'inline-flex', gap: '0.5rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
              <span className="badge-green">
                <ShieldCheck size={14} /> State of DE Certified
              </span>
              <span className="badge-blue">
                <Utensils size={14} /> CACFP Food Program Participant
              </span>
            </div>

            <h1 style={{ 
              fontSize: 'clamp(2.4rem, 5vw, 3.6rem)', 
              fontWeight: '800', 
              color: 'var(--blue-dark)', 
              lineHeight: '1.15',
              marginBottom: '1.25rem'
            }}>
              Where Children Flourish. <br />
              <span style={{ color: 'var(--action-red)', fontStyle: 'italic' }}>
                "We Are Your Extended Family"
              </span>
            </h1>

            <p style={{ 
              fontSize: '1.15rem', 
              color: 'var(--text-muted)', 
              marginBottom: '2rem', 
              maxWidth: '540px',
              lineHeight: '1.6'
            }}>
              Year-round, safe, creative, and structured early education in Delaware. 
              Providing loving care from infants through preschool and enrichment after-school care through 6th grade.
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
              <button onClick={onOpenTourModal} className="btn-primary pulse-cta" style={{ fontSize: '1.05rem', padding: '1rem 2rem' }}>
                <Calendar size={20} /> Schedule a Center Tour
              </button>
              <button onClick={() => onNavigate('compliance')} className="btn-outline" style={{ fontSize: '1rem', padding: '0.9rem 1.75rem' }}>
                <Utensils size={18} /> CACFP Meal Info & Forms
              </button>
            </div>

            {/* Key Features Bullet Matrix */}
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(2, 1fr)', 
              gap: '1rem', 
              paddingTop: '1.5rem',
              borderTop: '1px solid rgba(0, 76, 179, 0.15)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <CheckCircle2 size={20} style={{ color: 'var(--growth-green)', flexShrink: 0 }} />
                <span style={{ fontSize: '0.95rem', fontWeight: '600', color: 'var(--text-dark)' }}>
                  Mon–Fri: 6:30 AM – 5:30 PM
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <CheckCircle2 size={20} style={{ color: 'var(--growth-green)', flexShrink: 0 }} />
                <span style={{ fontSize: '0.95rem', fontWeight: '600', color: 'var(--text-dark)' }}>
                  3 Daily Meals (Preschool)
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <CheckCircle2 size={20} style={{ color: 'var(--growth-green)', flexShrink: 0 }} />
                <span style={{ fontSize: '0.95rem', fontWeight: '600', color: 'var(--text-dark)' }}>
                  Infants to 6th Grade (12 yrs)
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <CheckCircle2 size={20} style={{ color: 'var(--growth-green)', flexShrink: 0 }} />
                <span style={{ fontSize: '0.95rem', fontWeight: '600', color: 'var(--text-dark)' }}>
                  Academic & Physical Growth
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Visual Grid with Real Classroom Photography */}
          <div style={{ position: 'relative' }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '1rem'
            }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div className="card-glass" style={{ overflow: 'hidden', borderRadius: 'var(--radius-lg)' }}>
                  <img 
                    src="/IMG_0971.JPG" 
                    alt="Creative Learning at Passion Care Academy" 
                    style={{ width: '100%', height: '180px', objectFit: 'cover', display: 'block' }}
                  />
                  <div style={{ padding: '0.75rem 1rem', background: '#FFFFFF' }}>
                    <span style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--blue-primary)' }}>Creative Crafts</span>
                  </div>
                </div>

                <div className="card-glass" style={{ overflow: 'hidden', borderRadius: 'var(--radius-lg)' }}>
                  <img 
                    src="/IMG_3219.jpg" 
                    alt="Classroom Activities" 
                    style={{ width: '100%', height: '140px', objectFit: 'cover', display: 'block' }}
                  />
                  <div style={{ padding: '0.75rem 1rem', background: '#FFFFFF' }}>
                    <span style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--growth-green)' }}>Early Education</span>
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1.5rem' }}>
                <div className="card-glass" style={{ overflow: 'hidden', borderRadius: 'var(--radius-lg)' }}>
                  <img 
                    src="/IMG_4378.jpg" 
                    alt="After-School Academic Enrichment" 
                    style={{ width: '100%', height: '140px', objectFit: 'cover', display: 'block' }}
                  />
                  <div style={{ padding: '0.75rem 1rem', background: '#FFFFFF' }}>
                    <span style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--blue-primary)' }}>After-School Care</span>
                  </div>
                </div>

                <div className="card-glass" style={{ overflow: 'hidden', borderRadius: 'var(--radius-lg)' }}>
                  <img 
                    src="/IMG_6611.JPG" 
                    alt="Warm Family Environment" 
                    style={{ width: '100%', height: '180px', objectFit: 'cover', display: 'block' }}
                  />
                  <div style={{ padding: '0.75rem 1rem', background: '#FFFFFF' }}>
                    <span style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--action-red)' }}>Nurturing Family</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Trust Card */}
            <div style={{
              position: 'absolute',
              bottom: '-20px',
              left: '50%',
              transform: 'translateX(-50%)',
              backgroundColor: '#FFFFFF',
              borderRadius: 'var(--radius-full)',
              padding: '0.75rem 1.5rem',
              boxShadow: 'var(--shadow-xl)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              border: '2px solid var(--blue-soft)',
              whiteSpace: 'nowrap'
            }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: 'var(--growth-green-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--growth-green)' }}>
                <Heart size={20} />
              </div>
              <div>
                <div style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--text-dark)' }}>Year-Round Delaware Care</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>6:30 AM – 5:30 PM Monday–Friday</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
