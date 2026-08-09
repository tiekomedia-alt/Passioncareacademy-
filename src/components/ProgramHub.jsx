import React from 'react';
import { Baby, GraduationCap, School, Check, Phone } from 'lucide-react';

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
      accentColor: '#0284C7'
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
      accentColor: 'var(--yellow-accent)'
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
      accentColor: 'var(--growth-green)'
    }
  ];

  return (
    <section id="programs" style={{ padding: '4.5rem 0', backgroundColor: 'var(--canvas-bg)' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3.5rem' }}>
          <h2 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.2rem)', fontWeight: '800', color: 'var(--navy-dark)', marginBottom: '0.75rem' }}>
            Programs
          </h2>

          <p style={{ color: 'var(--text-muted)', fontSize: '1.02rem', lineHeight: '1.6' }}>
            Tailored early education and structured enrichment programs designed for every childhood milestone.
          </p>
        </div>

        {/* Program Cards Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '2rem' 
        }}>
          {programs.map((program) => (
            <div 
              key={program.id}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border-light)',
                padding: '2.25rem 1.75rem',
                boxShadow: 'var(--shadow-sm)',
                display: 'flex',
                flexDirection: 'column',
                justify: 'space-between',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
            >
              <div>
                {/* Perfectly Centered Icon Box */}
                <div style={{ 
                  width: '60px', 
                  height: '60px', 
                  borderRadius: '16px', 
                  backgroundColor: 'var(--navy-dark)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justify: 'center',
                  margin: '0 auto 1.25rem',
                  boxShadow: 'var(--shadow-sm)'
                }}>
                  {program.icon}
                </div>

                {/* Age Tag */}
                <div style={{ textAlign: 'center', marginBottom: '0.75rem' }}>
                  <span style={{ 
                    backgroundColor: '#E0F2FE', 
                    color: '#0284C7', 
                    fontSize: '0.75rem', 
                    fontWeight: '700', 
                    padding: '0.3rem 0.85rem', 
                    borderRadius: 'var(--radius-full)', 
                    display: 'inline-block',
                    textTransform: 'uppercase'
                  }}>
                    Age: {program.age}
                  </span>
                </div>

                {/* Program Title */}
                <h3 style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--navy-dark)', textAlign: 'center', marginBottom: '0.75rem' }}>
                  {program.title}
                </h3>

                {/* Description */}
                <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: '1.6', textAlign: 'center', marginBottom: '1.5rem' }}>
                  {program.description}
                </p>

                {/* Features List */}
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.75rem 0', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {program.features.map((feature, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.88rem', color: 'var(--text-dark)' }}>
                      <span style={{ 
                        width: '18px', 
                        height: '18px', 
                        borderRadius: '50%', 
                        backgroundColor: '#DCFCE7', 
                        color: '#15803D', 
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
                  width: '100%',
                  justify: 'center',
                  fontSize: '0.9rem',
                  padding: '0.85rem 1.25rem'
                }}
              >
                <Phone size={16} style={{ color: '#F87171' }} /> Schedule Tour: (302) 832-2622
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
