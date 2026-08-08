import React, { useState } from 'react';
import { Heart, ShieldCheck, Sparkles, Users, Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function AboutSection({ onOpenTourModal }) {
  const [activeImageIndex, setActiveImageIndex] = useState(null);

  const galleryImages = [
    { src: '/IMG_0971.JPG', title: 'Soft Play Area', category: 'ACTIVITIES' },
    { src: '/IMG_2311.JPG', title: 'Sensory Learning', category: 'CLASSROOM' },
    { src: '/IMG_4378.jpg', title: 'Outdoor Play', category: 'OUTDOOR' },
    { src: '/IMG_3219.jpg', title: 'Literacy Corner', category: 'PRESCHOOL' },
    { src: '/IMG_1773.JPG', title: 'Meal Area', category: 'NUTRITION' },
    { src: '/IMG_2357.JPG', title: 'Arts & Crafts', category: 'CREATIVE' }
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
    <section id="about" style={{ padding: '4.5rem 0', backgroundColor: '#FFFFFF' }}>
      <div className="container">
        {/* About Us Vision */}
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
            <Heart size={14} /> About Us
          </span>

          <h2 style={{ fontSize: 'clamp(2rem, 4.5vw, 2.8rem)', fontWeight: '800', color: 'var(--navy-dark)', marginBottom: '1rem' }}>
            We Are Your Extended Family
          </h2>

          <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '1.5rem' }}>
            At <strong>Passion Care Academy</strong>, we believe every child thrives best when they feel safe, cherished, and genuinely supported. Founded on the principle that daycare should feel like an extension of home, our center provides year-round care that balances rigorous early learning with heartfelt warmth.
          </p>

          <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
            From morning drop-off at 6:30 AM to late afternoon pickup at 5:30 PM, our dedicated educators nurture curiosity, build social confidence, and celebrate every milestone in your child’s development.
          </p>
        </div>

        {/* Pillars Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '4.5rem' }}>
          <div style={{ backgroundColor: 'var(--canvas-bg)', padding: '1.5rem', borderRadius: 'var(--radius-lg)', borderLeft: '5px solid var(--navy-dark)', boxShadow: 'var(--shadow-sm)' }}>
            <div style={{ fontWeight: '800', color: 'var(--navy-dark)', fontSize: '1.1rem', marginBottom: '0.35rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <ShieldCheck size={20} /> Safe & Sanitary
            </div>
            <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
              Rigorous security protocols, sanitized classrooms, and CPR/First-Aid certified staff.
            </div>
          </div>

          <div style={{ backgroundColor: 'var(--canvas-bg)', padding: '1.5rem', borderRadius: 'var(--radius-lg)', borderLeft: '5px solid var(--growth-green)', boxShadow: 'var(--shadow-sm)' }}>
            <div style={{ fontWeight: '800', color: 'var(--growth-green)', fontSize: '1.1rem', marginBottom: '0.35rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Sparkles size={20} /> Creative & Structured
            </div>
            <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
              Enriching daily crafts, pre-K phonics, STEM modules, and physical activity.
            </div>
          </div>
        </div>

        {/* Facility & Classroom Gallery */}
        <div>
          <div style={{ textAlign: 'center', maxWidth: '650px', margin: '0 auto 2.5rem' }}>
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
              <Users size={14} /> Life at Passion Care
            </span>
            <h3 style={{ fontSize: '2.2rem', fontWeight: '800', color: 'var(--navy-dark)', marginBottom: '0.5rem' }}>
              Facility & Classroom Gallery
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>
              Take a peek inside our vibrant Delaware facility. Click any photo to view full resolution.
            </p>
          </div>

          {/* Vertical/Grid Stack Cards */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: '1.5rem' 
          }}>
            {galleryImages.map((img, index) => (
              <div 
                key={index} 
                onClick={() => setActiveImageIndex(index)}
                style={{ 
                  overflow: 'hidden', 
                  borderRadius: 'var(--radius-lg)', 
                  cursor: 'pointer',
                  position: 'relative',
                  height: '240px',
                  boxShadow: 'var(--shadow-sm)',
                  border: '1px solid var(--border-light)'
                }}
              >
                <img 
                  src={img.src} 
                  alt={img.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }}
                  onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(15, 23, 42, 0.8) 0%, transparent 60%)',
                  padding: '1.25rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justify: 'space-between',
                  color: '#FFFFFF'
                }}>
                  {/* Top Floating Badge */}
                  <div>
                    <span style={{ 
                      backgroundColor: 'rgba(255, 255, 255, 0.9)', 
                      backdropFilter: 'blur(4px)',
                      color: '#0284C7', 
                      fontSize: '0.7rem', 
                      fontWeight: '800', 
                      padding: '0.35rem 0.75rem', 
                      borderRadius: 'var(--radius-full)', 
                      letterSpacing: '0.5px',
                      textTransform: 'uppercase'
                    }}>
                      {img.category}
                    </span>
                  </div>

                  {/* Title at bottom */}
                  <div style={{ fontSize: '1.2rem', fontWeight: '800', color: '#FFFFFF' }}>
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
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(15, 23, 42, 0.95)',
          zIndex: 3000,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: '1.5rem'
        }}>
          <button 
            onClick={() => setActiveImageIndex(null)}
            style={{
              position: 'absolute', top: '1.5rem', right: '1.5rem',
              background: 'rgba(255, 255, 255, 0.2)', border: 'none', color: '#FFF',
              width: '44px', height: '44px', borderRadius: '50%', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 3010
            }}
          >
            <X size={24} />
          </button>

          <button
            onClick={handlePrevImage}
            style={{
              position: 'absolute', left: '1.5rem',
              background: 'rgba(255, 255, 255, 0.2)', border: 'none', color: '#FFF',
              width: '44px', height: '44px', borderRadius: '50%', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 3010
            }}
          >
            <ChevronLeft size={28} />
          </button>

          <div style={{ maxWidth: '90vw', maxHeight: '85vh', textAlign: 'center' }}>
            <img 
              src={galleryImages[activeImageIndex].src} 
              alt={galleryImages[activeImageIndex].title}
              style={{ maxWidth: '100%', maxHeight: '75vh', borderRadius: 'var(--radius-lg)', objectFit: 'contain', boxShadow: 'var(--shadow-lg)' }}
            />
            <div style={{ marginTop: '1rem', color: '#FFFFFF' }}>
              <span className="badge-sky" style={{ marginBottom: '0.4rem' }}>{galleryImages[activeImageIndex].category}</span>
              <h4 style={{ fontSize: '1.25rem', fontWeight: '800', color: '#FFF' }}>{galleryImages[activeImageIndex].title}</h4>
            </div>
          </div>

          <button
            onClick={handleNextImage}
            style={{
              position: 'absolute', right: '1.5rem',
              background: 'rgba(255, 255, 255, 0.2)', border: 'none', color: '#FFF',
              width: '44px', height: '44px', borderRadius: '50%', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 3010
            }}
          >
            <ChevronRight size={28} />
          </button>
        </div>
      )}
    </section>
  );
}
