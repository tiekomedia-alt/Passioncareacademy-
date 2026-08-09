import React from 'react';
import { Baby, GraduationCap, School, Check, Phone, Sparkles } from 'lucide-react';

export default function ProgramHub() {
  const mainPhone = "tel:3028322622";

  const programs = [
    {
      id: 'infants',
      title: 'Infants',
      age: '6 Weeks – 24 Months',
      description: 'A soothing, sensory-rich nursery environment where infants receive personalized care, warm bonding, and key early developmental stimulation.',
      features: [
        'Dedicated low teacher-to-infant ratios',
        'Daily digital activity logs for parents',
        'Sensory exploration & motor skill building',
        'Sanitized & secure infant play suites'
      ],
      icon: <Baby size={28} style={{ color: '#FFFFFF' }} />,
      accentColor: '#38BDF8'
    },
    {
      id: 'preschool',
      title: 'Preschool',
      age: '2 – 5 Years',
      description: 'Comprehensive early education focusing on phonics, math readiness, creative expression, and social-emotional growth before kindergarten.',
      features: [
        'Structured phonics & early literacy',
        'STEM, counting & spatial concepts',
        'Creative arts, music & story time',
        'Social confidence & independent habits'
      ],
      icon: <GraduationCap size={28} style={{ color: '#FFFFFF' }} />,
      accentColor: '#FACC15'
    },
    {
      id: 'after-school',
      title: 'After-School Program',
      age: 'Kindergarten – 6th Grade',
      description: 'Structured after-school care offering quiet homework help, academic tutoring, healthy snacks, and engaging indoor/outdoor activities.',
      features: [
        'Dedicated homework support station',
        'Nutritious afternoon snacks',
        'Supervised outdoor physical play',
        'Creative crafts & team building'
      ],
      icon: <School size={28} style={{ color: '#FFFFFF' }} />,
      accentColor: '#4ADE80'
    }
  ];

  return (
    <section id="programs" style={{ padding: '4.5rem 0', backgroundColor: 'var(--canvas-bg)' }}>
      <div className="container">
        {/* High-Impact Graphic Showcase Container for Programs */}
        <div style={{ 
          background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
          borderRadius: 'var(--radius-xl)',
          padding: '3rem 2.25rem',
          boxShadow: '0 25px 50px -12px rgba(15, 23, 42, 0.35)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Decorative Background Ambient Glows */}
          <div style={{
            position: 'absolute',
            top: '-80px', right: '-80px',
            width: '280px', height: '280px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(56, 189, 248, 0.22) 0%, transparent 70%)',
            pointerEvents: 'none'
          }} />

          <div style={{
            position: 'absolute',
            bottom: '-80px', left: '-80px',
            width: '280px', height: '280px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(250, 204, 21, 0.18) 0%, transparent 70%)',
            pointerEvents: 'none'
          }} />

          {/* Graphic Section Header */}
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3rem', position: 'relative', zIndex: 2 }}>
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
              <Sparkles size={14} /> Curriculum & Care Hub
            </span>

            <h2 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.2rem)', fontWeight: '800', color: '#FFFFFF', margin: 0 }}>
              Programs
            </h2>

            <div style={{ width: '60px', height: '4px', backgroundColor: 'var(--yellow-accent)', borderRadius: '2px', margin: '0.6rem auto 1rem' }} />

            <p style={{ color: '#94A3B8', fontSize: '1.02rem', lineHeight: '1.6' }}>
              Tailored early education and structured enrichment programs designed for every childhood milestone.
            </p>
          </div>

          {/* Graphic Program Cards Grid */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '2rem',
            position: 'relative',
            zIndex: 2
          }}>
            {programs.map((program) => (
              <div 
                key={program.id}
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(8px)',
                  borderRadius: 'var(--radius-lg)',
                  border: '2px solid rgba(255, 255, 255, 0.85)',
                  padding: '2.25rem 1.75rem',
                  boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.4)',
                  display: 'flex',
                  flexDirection: 'column',
                  justify: 'space-between',
                  transition: 'transform 0.3s ease, border-color 0.3s ease'
                }}
              >
                <div>
                  {/* Perfectly Centered Icon Box */}
                  <div style={{ 
                    width: '64px', 
                    height: '64px', 
                    borderRadius: '16px', 
                    backgroundColor: 'var(--navy-dark)', 
                    border: `2px solid ${program.accentColor}`,
                    display: 'flex', 
                    alignItems: 'center', 
                    justify: 'center',
                    margin: '0 auto 1.5rem',
                    boxShadow: `0 4px 20px ${program.accentColor}40`
                  }}>
                    {program.icon}
                  </div>

                  {/* Age Tag */}
                  <div style={{ textAlign: 'center', marginBottom: '0.75rem' }}>
                    <span style={{ 
                      backgroundColor: `${program.accentColor}25`, 
                      color: program.accentColor, 
                      fontSize: '0.75rem', 
                      fontWeight: '800', 
                      padding: '0.3rem 0.85rem', 
                      borderRadius: 'var(--radius-full)', 
                      display: 'inline-block',
                      textTransform: 'uppercase',
                      border: `1px solid ${program.accentColor}50`
                    }}>
                      Age: {program.age}
                    </span>
                  </div>

                  {/* Program Title */}
                  <h3 style={{ fontSize: '1.6rem', fontWeight: '800', color: '#FFFFFF', textAlign: 'center', marginBottom: '0.85rem' }}>
                    {program.title}
                  </h3>

                  {/* Description */}
                  <p style={{ fontSize: '0.92rem', color: '#CBD5E1', lineHeight: '1.6', textAlign: 'center', marginBottom: '1.75rem' }}>
                    {program.description}
                  </p>

                  {/* Features List */}
                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                    {program.features.map((feature, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.88rem', color: '#E2E8F0' }}>
                        <span style={{ 
                          width: '18px', 
                          height: '18px', 
                          borderRadius: '50%', 
                          backgroundColor: `${program.accentColor}30`, 
                          color: program.accentColor, 
                          display: 'flex', 
                          alignItems: 'center', 
                          justify: 'center',
                          flexShrink: 0,
                          marginTop: '2px'
                        }}>
                          <Check size={12} />
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Direct Action Button */}
                <a 
                  href={mainPhone}
                  className="btn-dark-pill"
                  style={{
                    backgroundColor: 'var(--yellow-accent)',
                    color: 'var(--navy-dark)',
                    border: 'none',
                    width: '100%',
                    justify: 'center',
                    fontSize: '0.9rem',
                    padding: '0.85rem 1.25rem',
                    fontWeight: '800'
                  }}
                >
                  <Phone size={16} /> Schedule Tour: (302) 832-2622
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
