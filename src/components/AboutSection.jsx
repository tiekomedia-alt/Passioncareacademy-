import React, { useState } from 'react';
import { Heart, ShieldCheck, Award, Users, CheckCircle, Maximize2, Sparkles, X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function AboutSection({ onOpenTourModal }) {
  const [activeImageIndex, setActiveImageIndex] = useState(null);

  const galleryImages = [
    { src: '/IMG_0971.JPG', title: 'Creative Crafts & Fine Motor Development', category: 'Activities' },
    { src: '/IMG_1773.JPG', title: 'Bright, Sanitary Learning Spaces', category: 'Classroom' },
    { src: '/IMG_2311.JPG', title: 'Interactive Reading & Phonics Circle', category: 'Learning' },
    { src: '/IMG_2357.JPG', title: 'Social-Emotional Group Play', category: 'Social' },
    { src: '/IMG_2378.JPG', title: 'Nurturing Infant & Toddler Care', category: 'Infants' },
    { src: '/IMG_3139.JPG', title: 'Engaging Educational Toys & Puzzles', category: 'Play' },
    { src: '/IMG_3219.jpg', title: 'Structured Pre-Kindergarten Learning', category: 'Preschool' },
    { src: '/IMG_4255.jpg', title: 'After-School Homework & Study Station', category: 'After-School' },
    { src: '/IMG_4378.jpg', title: 'Physical Activity & Outdoor Fun', category: 'Recreation' },
    { src: '/IMG_5311.JPG', title: 'Warm Staff & Extended Family Atmosphere', category: 'Community' },
    { src: '/IMG_5677.JPG', title: 'Clean & Safe Play Facilities', category: 'Safety' },
    { src: '/IMG_6611.JPG', title: 'Year-Round Early Learning in Delaware', category: 'Facility' }
  ];

  const handleNextImage = () => {
    if (activeImageIndex !== null) {
      setActiveImageIndex((activeImageIndex + 1) % galleryImages.length);
    }
  };

  const handlePrevImage = () => {
    if (activeImageIndex !== null) {
      setActiveImageIndex((activeImageIndex - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  return (
    <section id="about" style={{ padding: '5rem 0', backgroundColor: '#FFFFFF' }}>
      <div className="container">
        {/* Core Vision & Mission */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
          gap: '3.5rem',
          alignItems: 'center',
          marginBottom: '5rem'
        }}>
          <div>
            <span className="badge-green" style={{ marginBottom: '1rem' }}>
              <Heart size={14} /> Our Cultural Identity
            </span>

            <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3rem)', fontWeight: '800', color: 'var(--blue-dark)', marginBottom: '1.25rem', lineHeight: '1.2' }}>
              We Are Your Extended Family
            </h2>

            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '1.25rem', lineHeight: '1.6' }}>
              At <strong>Passion Care Academy</strong>, we believe every child thrives best when they feel safe, cherished, and genuinely supported. Founded on the principle that daycare should feel like an extension of home, our center provides year-round care that balances rigorous early learning with heartfelt warmth.
            </p>

            <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', marginBottom: '2rem', lineHeight: '1.6' }}>
              From morning drop-off at 6:30 AM to late afternoon pickup at 5:30 PM, our dedicated educators nurture curiosity, build social confidence, and celebrate every milestone in your child’s development.
            </p>

            {/* Institutional Pillars */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.25rem' }}>
              <div style={{ backgroundColor: 'var(--canvas-bg)', padding: '1.25rem', borderRadius: 'var(--radius-md)', borderLeft: '4px solid var(--blue-primary)' }}>
                <div style={{ fontWeight: '700', color: 'var(--blue-primary)', fontSize: '1rem', marginBottom: '0.25rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <ShieldCheck size={18} /> Safe & Sanitary
                </div>
                <div style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>Rigorous security protocols, sanitized classrooms, and CPR/First-Aid certified staff.</div>
              </div>

              <div style={{ backgroundColor: 'var(--canvas-bg)', padding: '1.25rem', borderRadius: 'var(--radius-md)', borderLeft: '4px solid var(--growth-green)' }}>
                <div style={{ fontWeight: '700', color: 'var(--growth-green)', fontSize: '1rem', marginBottom: '0.25rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Sparkles size={18} /> Creative & Structured
                </div>
                <div style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>Enriching daily crafts, pre-K phonics, STEM modules, and physical activity.</div>
              </div>
            </div>
          </div>

          {/* Featured Visual Spotlight */}
          <div style={{ position: 'relative' }}>
            <div style={{
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-xl)',
              position: 'relative'
            }}>
              <img 
                src="/IMG_5850.JPG" 
                alt="Passion Care Academy Children Activities"
                style={{ width: '100%', height: '420px', objectFit: 'cover', display: 'block' }}
                onError={(e) => {
                  e.target.src = '/IMG_6611.JPG';
                }}
              />
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                background: 'linear-gradient(to top, rgba(0, 51, 128, 0.9) 0%, transparent 100%)',
                padding: '2rem 1.5rem 1.5rem',
                color: '#FFFFFF'
              }}>
                <span className="badge-blue" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', color: '#FFF', fontSize: '0.75rem', marginBottom: '0.5rem' }}>
                  Delaware State Certified
                </span>
                <h3 style={{ fontSize: '1.5rem', fontWeight: '800', color: '#FFF', marginBottom: '0.25rem' }}>
                  A Nurturing Environment For Every Child
                </h3>
                <p style={{ fontSize: '0.9rem', color: '#E2E8F0' }}>
                  Year-Round Care • Mon–Fri 6:30 AM – 5:30 PM
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Real Classroom Photo Gallery */}
        <div>
          <div style={{ textAlign: 'center', maxWidth: '650px', margin: '0 auto 2.5rem' }}>
            <span className="badge-blue" style={{ marginBottom: '0.5rem' }}>
              <Users size={14} /> Life at Passion Care
            </span>
            <h3 style={{ fontSize: '2.2rem', fontWeight: '800', color: 'var(--blue-dark)', marginBottom: '0.5rem' }}>
              Facility & Classroom Gallery
            </h3>
            <p style={{ color: 'var(--text-muted)' }}>
              Take a peak inside our vibrant Delaware facility. Click any photo to view full resolution.
            </p>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', 
            gap: '1.25rem' 
          }}>
            {galleryImages.map((img, index) => (
              <div 
                key={index} 
                onClick={() => setActiveImageIndex(index)}
                className="card-glass"
                style={{ 
                  overflow: 'hidden', 
                  borderRadius: 'var(--radius-md)', 
                  cursor: 'pointer',
                  position: 'relative',
                  height: '200px'
                }}
              >
                <img 
                  src={img.src} 
                  alt={img.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }}
                  onMouseEnter={(e) => e.target.style.transform = 'scale(1.06)'}
                  onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)',
                  padding: '1rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justify: 'flex-end',
                  color: '#FFFFFF'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: '700', color: '#60A5FA', textTransform: 'uppercase' }}>
                      {img.category}
                    </span>
                    <Maximize2 size={16} style={{ color: '#FFF' }} />
                  </div>
                  <div style={{ fontSize: '0.9rem', fontWeight: '700', color: '#FFF', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {img.title}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeImageIndex !== null && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.92)',
          zIndex: 3000,
          display: 'flex',
          alignItems: 'center',
          justify: 'center',
          padding: '1.5rem'
        }}>
          <button 
            onClick={() => setActiveImageIndex(null)}
            style={{
              position: 'absolute',
              top: '1.5rem',
              right: '1.5rem',
              background: 'rgba(255, 255, 255, 0.2)',
              border: 'none',
              color: '#FFF',
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justify: 'center',
              zIndex: 3010
            }}
          >
            <X size={24} />
          </button>

          <button
            onClick={handlePrevImage}
            style={{
              position: 'absolute',
              left: '1.5rem',
              background: 'rgba(255, 255, 255, 0.2)',
              border: 'none',
              color: '#FFF',
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justify: 'center',
              zIndex: 3010
            }}
          >
            <ChevronLeft size={28} />
          </button>

          <div style={{ maxWidth: '90vw', maxHeight: '85vh', textAlign: 'center' }}>
            <img 
              src={galleryImages[activeImageIndex].src} 
              alt={galleryImages[activeImageIndex].title}
              style={{ maxWidth: '100%', maxHeight: '75vh', borderRadius: 'var(--radius-md)', objectFit: 'contain', boxShadow: 'var(--shadow-xl)' }}
            />
            <div style={{ marginTop: '1rem', color: '#FFFFFF' }}>
              <span className="badge-blue" style={{ marginBottom: '0.4rem' }}>{galleryImages[activeImageIndex].category}</span>
              <h4 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#FFF' }}>{galleryImages[activeImageIndex].title}</h4>
            </div>
          </div>

          <button
            onClick={handleNextImage}
            style={{
              position: 'absolute',
              right: '1.5rem',
              background: 'rgba(255, 255, 255, 0.2)',
              border: 'none',
              color: '#FFF',
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justify: 'center',
              zIndex: 3010
            }}
          >
            <ChevronRight size={28} />
          </button>
        </div>
      )}
    </section>
  );
}
