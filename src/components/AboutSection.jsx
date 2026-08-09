import React, { useState, useRef } from 'react';
import { X, ChevronLeft, ChevronRight, Camera } from 'lucide-react';

export default function AboutSection() {
  const [activeImageIndex, setActiveImageIndex] = useState(null);
  const scrollRef = useRef(null);

  const galleryImages = [
    { src: '/IMG_0971.JPG', alt: 'Creative Crafts Classroom' },
    { src: '/IMG_2311.JPG', alt: 'Sensory Toddler Play' },
    { src: '/IMG_4378.jpg', alt: 'Outdoor Playground' },
    { src: '/IMG_3219.jpg', alt: 'Preschool Literacy Area' },
    { src: '/IMG_1773.JPG', alt: 'Early Learning Station' },
    { src: '/IMG_2357.JPG', alt: 'Art & Expression' },
    { src: '/IMG_2378.JPG', alt: 'Group Activity Zone' },
    { src: '/IMG_3139.JPG', alt: 'Infant Care Nook' },
    { src: '/IMG_4257.jpg', alt: 'After-School Study Area' },
    { src: '/IMG_4739.jpg', alt: 'Interactive Playroom' },
    { src: '/IMG_5311.JPG', alt: 'Building Blocks & STEM' },
    { src: '/IMG_6448.JPG', alt: 'Storytelling Circle' }
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
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3.5rem' }}>
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

        {/* Gallery Section Header with Rectangle Graphic Element on the Text "Gallery" */}
        <div style={{ position: 'relative' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              {/* Rectangle Graphic Element framing the text "Gallery" */}
              <div style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '0.6rem',
                backgroundColor: 'var(--navy-dark)', 
                color: '#FFFFFF',
                padding: '0.5rem 1.25rem',
                borderRadius: '8px',
                borderLeft: '5px solid var(--yellow-accent)',
                boxShadow: 'var(--shadow-sm)',
                marginBottom: '0.5rem'
              }}>
                <Camera size={22} style={{ color: 'var(--yellow-accent)' }} />
                <h3 style={{ fontSize: '1.75rem', fontWeight: '800', margin: 0, color: '#FFFFFF', letterSpacing: '-0.3px' }}>
                  Gallery
                </h3>
              </div>

              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', margin: '0.2rem 0 0' }}>
                Swipe left & right to explore our Delaware center photos. Click any photo to expand.
              </p>
            </div>

            {/* Left / Right Scroll Controls */}
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button 
                onClick={scrollLeft}
                aria-label="Scroll left"
                style={{
                  width: '42px', height: '42px', borderRadius: '50%',
                  backgroundColor: 'var(--canvas-bg)', border: '1px solid var(--border-light)',
                  color: 'var(--navy-dark)', cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: 'var(--shadow-sm)', transition: 'all 0.2s ease'
                }}
              >
                <ChevronLeft size={22} />
              </button>

              <button 
                onClick={scrollRight}
                aria-label="Scroll right"
                style={{
                  width: '42px', height: '42px', borderRadius: '50%',
                  backgroundColor: 'var(--navy-dark)', border: 'none',
                  color: '#FFFFFF', cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: 'var(--shadow-sm)', transition: 'all 0.2s ease'
                }}
              >
                <ChevronRight size={22} />
              </button>
            </div>
          </div>

          {/* Horizontal Swiping Container */}
          <div 
            ref={scrollRef}
            className="horizontal-gallery-track"
            style={{ 
              display: 'flex', 
              gap: '1.25rem',
              overflowX: 'auto',
              scrollSnapType: 'x mandatory',
              WebkitOverflowScrolling: 'touch',
              paddingBottom: '1rem',
              scrollbarWidth: 'none'
            }}
          >
            {galleryImages.map((img, index) => (
              <div 
                key={index} 
                onClick={() => setActiveImageIndex(index)}
                style={{ 
                  flex: '0 0 280px',
                  scrollSnapAlign: 'start',
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
                  alt={img.alt} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }}
                  onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                />
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
