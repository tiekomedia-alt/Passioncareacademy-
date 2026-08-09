import React, { useState, useRef } from 'react';
import { X, ChevronLeft, ChevronRight, Camera, Sparkles } from 'lucide-react';

export default function AboutSection() {
  const [activeImageIndex, setActiveImageIndex] = useState(null);
  const scrollRef = useRef(null);

  const galleryImages = [
    { src: '/IMG_0971.JPG', alt: 'Creative Crafts Classroom', category: 'Creative Arts' },
    { src: '/IMG_2311.JPG', alt: 'Sensory Toddler Play', category: 'Toddler Play' },
    { src: '/IMG_4378.jpg', alt: 'Outdoor Playground', category: 'Outdoor Recreation' },
    { src: '/IMG_3219.jpg', alt: 'Preschool Literacy Area', category: 'Preschool Phonics' },
    { src: '/IMG_1773.JPG', alt: 'Early Learning Station', category: 'Early Learning' },
    { src: '/IMG_2357.JPG', alt: 'Art & Expression', category: 'Art & Painting' },
    { src: '/IMG_2378.JPG', alt: 'Group Activity Zone', category: 'Social Activity' },
    { src: '/IMG_3139.JPG', alt: 'Infant Care Nook', category: 'Infant Care' },
    { src: '/IMG_4257.jpg', alt: 'After-School Study Area', category: 'After-School Care' },
    { src: '/IMG_4739.jpg', alt: 'Interactive Playroom', category: 'Interactive Play' },
    { src: '/IMG_5311.JPG', alt: 'Building Blocks & STEM', category: 'STEM & Blocks' },
    { src: '/IMG_6448.JPG', alt: 'Storytelling Circle', category: 'Story Time' }
  ];

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

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
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 4rem' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 4.5vw, 2.8rem)', fontWeight: '800', color: 'var(--navy-dark)', marginBottom: '1rem' }}>
            We Are Your Extended Family
          </h2>

          <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '1.5rem' }}>
            At <strong>Passion Care Academy</strong>, we believe every child thrives best when they feel safe, cherished, and genuinely supported. Founded on the principle that daycare should feel like an extension of home, our center provides care that balances rigorous early learning with heartfelt warmth.
          </p>

          <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
            From morning drop-off at 6:30 AM to late afternoon pickup at 6:00 PM, our dedicated educators nurture curiosity, build social confidence, and celebrate every milestone in your child’s development.
          </p>
        </div>

        {/* High-Impact Graphic Showcase Container for Gallery */}
        <div style={{ 
          background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
          borderRadius: 'var(--radius-xl)',
          padding: '2.5rem 2rem',
          boxShadow: '0 25px 50px -12px rgba(15, 23, 42, 0.35)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Decorative Background Accent Blur */}
          <div style={{
            position: 'absolute',
            top: '-60px', right: '-60px',
            width: '240px', height: '240px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(56, 189, 248, 0.25) 0%, transparent 70%)',
            pointerEvents: 'none'
          }} />

          <div style={{
            position: 'absolute',
            bottom: '-60px', left: '-60px',
            width: '240px', height: '240px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(250, 204, 21, 0.2) 0%, transparent 70%)',
            pointerEvents: 'none'
          }} />

          {/* Graphic Showcase Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2rem', flexWrap: 'wrap', gap: '1.25rem', position: 'relative', zIndex: 2 }}>
            <div>
              <span style={{
                backgroundColor: 'rgba(56, 189, 248, 0.15)',
                border: '1px solid rgba(56, 189, 248, 0.4)',
                color: '#38BDF8',
                fontSize: '0.78rem',
                fontWeight: '800',
                padding: '0.35rem 0.85rem',
                borderRadius: 'var(--radius-full)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                textTransform: 'uppercase',
                marginBottom: '0.75rem'
              }}>
                <Sparkles size={14} /> Center Facility Showcase
              </span>

              <h3 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: '800', color: '#FFFFFF', margin: 0, display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Camera size={28} style={{ color: 'var(--yellow-accent)' }} /> Facility Gallery
              </h3>
              
              <div style={{ width: '60px', height: '4px', backgroundColor: 'var(--yellow-accent)', borderRadius: '2px', marginTop: '0.5rem' }} />

              <p style={{ color: '#94A3B8', fontSize: '0.95rem', margin: '0.5rem 0 0' }}>
                Swipe left & right to explore real photos of our Bear, Delaware facility.
              </p>
            </div>

            {/* Left / Right Scroll Controls */}
            <div style={{ display: 'flex', gap: '0.65rem' }}>
              <button 
                onClick={scrollLeft}
                aria-label="Scroll left"
                style={{
                  width: '46px', height: '46px', borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)', border: '1px solid rgba(255, 255, 255, 0.2)',
                  color: '#FFFFFF', cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  backdropFilter: 'blur(4px)', transition: 'all 0.2s ease'
                }}
              >
                <ChevronLeft size={24} />
              </button>

              <button 
                onClick={scrollRight}
                aria-label="Scroll right"
                style={{
                  width: '46px', height: '46px', borderRadius: '50%',
                  backgroundColor: 'var(--yellow-accent)', border: 'none',
                  color: 'var(--navy-dark)', cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: 'var(--shadow-md)', transition: 'all 0.2s ease'
                }}
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          {/* Graphic Horizontal Swiping Carousel Track */}
          <div 
            ref={scrollRef}
            className="horizontal-gallery-track"
            style={{ 
              display: 'flex', 
              gap: '1.35rem',
              overflowX: 'auto',
              scrollSnapType: 'x mandatory',
              WebkitOverflowScrolling: 'touch',
              paddingBottom: '0.75rem',
              scrollbarWidth: 'none',
              position: 'relative',
              zIndex: 2
            }}
          >
            {galleryImages.map((img, index) => (
              <div 
                key={index} 
                onClick={() => setActiveImageIndex(index)}
                style={{ 
                  flex: '0 0 300px',
                  scrollSnapAlign: 'start',
                  overflow: 'hidden', 
                  borderRadius: 'var(--radius-lg)', 
                  cursor: 'pointer',
                  position: 'relative',
                  height: '240px',
                  boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.5)',
                  border: '2px solid rgba(255, 255, 255, 0.85)',
                  backgroundColor: '#0F172A'
                }}
              >
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }}
                  onMouseEnter={(e) => e.target.style.transform = 'scale(1.08)'}
                  onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                />

                {/* Category Pill Tag Overlay */}
                <div style={{
                  position: 'absolute',
                  bottom: '0.85rem',
                  left: '0.85rem',
                  backgroundColor: 'rgba(15, 23, 42, 0.88)',
                  backdropFilter: 'blur(6px)',
                  color: '#FFFFFF',
                  fontSize: '0.78rem',
                  fontWeight: '700',
                  padding: '0.35rem 0.75rem',
                  borderRadius: 'var(--radius-full)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem'
                }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--yellow-accent)' }} />
                  {img.category}
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
              alt={galleryImages[activeImageIndex].alt}
              style={{ maxWidth: '100%', maxHeight: '80vh', borderRadius: 'var(--radius-lg)', objectFit: 'contain', boxShadow: 'var(--shadow-lg)' }}
            />
            <div style={{ color: '#FFFFFF', marginTop: '1rem', fontSize: '1.1rem', fontWeight: '700' }}>
              {galleryImages[activeImageIndex].alt}
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

      <style>{`
        .horizontal-gallery-track::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
