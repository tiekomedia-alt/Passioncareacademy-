import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function AboutSection() {
  const [activeImageIndex, setActiveImageIndex] = useState(null);

  const galleryImages = [
    { src: '/IMG_0971.JPG', alt: 'Facility Activity' },
    { src: '/IMG_2311.JPG', alt: 'Classroom Activity' },
    { src: '/IMG_4378.jpg', alt: 'Outdoor Area' },
    { src: '/IMG_3219.jpg', alt: 'Preschool Corner' },
    { src: '/IMG_1773.JPG', alt: 'Learning Area' },
    { src: '/IMG_2357.JPG', alt: 'Arts & Crafts' }
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
        {/* About Us Vision (Badge Removed as Requested) */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3.5rem' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 4.5vw, 2.8rem)', fontWeight: '800', color: 'var(--navy-dark)', marginBottom: '1rem' }}>
            We Are Your Extended Family
          </h2>

          <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '1.5rem' }}>
            At <strong>Passion Care Academy</strong>, we believe every child thrives best when they feel safe, cherished, and genuinely supported. Founded on the principle that daycare should feel like an extension of home, our center provides care that balances rigorous early learning with heartfelt warmth.
          </p>

          <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
            From morning drop-off at 6:30 AM to late afternoon pickup at 5:30 PM, our dedicated educators nurture curiosity, build social confidence, and celebrate every milestone in your child’s development.
          </p>
        </div>

        {/* Gallery Section */}
        <div>
          <div style={{ textAlign: 'center', maxWidth: '650px', margin: '0 auto 2.5rem' }}>
            <h3 style={{ fontSize: '2.2rem', fontWeight: '800', color: 'var(--navy-dark)', marginBottom: '0.5rem' }}>
              Gallery
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>
              Take a peek inside our Delaware facility. Click any photo to view full resolution.
            </p>
          </div>

          {/* Image Grid */}
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
    </section>
  );
}
