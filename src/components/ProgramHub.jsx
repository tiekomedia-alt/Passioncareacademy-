import React, { useState } from 'react';
import { Baby, GraduationCap, School, CheckCircle, Clock } from 'lucide-react';

export default function ProgramHub() {
  const [activeTab, setActiveTab] = useState('all');

  const programs = [
    {
      id: 'infants',
      category: 'early',
      title: 'Infants',
      age: '6 Weeks – 2 Years',
      icon: Baby,
      bgGradient: 'linear-gradient(180deg, #FFFFFF 0%, #F0F7FF 100%)',
      description: 'Nurturing, sensory-rich environment providing personalized care routines, motor development, and loving social connections.',
      highlights: [
        'Safe, sanitary infant play areas',
        'Sensory exploration & music',
        'Daily updates for parents',
        'Tender, individualized attention'
      ]
    },
    {
      id: 'preschool',
      category: 'early',
      title: 'Preschool',
      age: '3 Years – 5 Years',
      icon: GraduationCap,
      bgGradient: 'linear-gradient(180deg, #FFFFFF 0%, #F0F7FF 100%)',
      description: 'Comprehensive early childhood curriculum focusing on kindergarten readiness, social-emotional growth, phonics, and creative crafts.',
      highlights: [
        'Structured pre-kindergarten curriculum',
        'Creative arts, crafts & sensory play',
        'Social-emotional milestone building',
        'Continuous developmental growth'
      ]
    },
    {
      id: 'after-school',
      category: 'school-age',
      title: 'After-School Program',
      age: 'Kindergarten – 6th Grade (Up to 12 Years)',
      icon: School,
      bgGradient: 'linear-gradient(180deg, #FFFFFF 0%, #FFFBEB 100%)',
      description: 'Empowering school-aged children with dual emphasis on academic enrichment, guided homework assistance, and active physical play.',
      highlights: [
        'Dedicated quiet homework support zone',
        'Physical activity & team games',
        'STEM enrichment & group projects',
        'Safe transportation assistance'
      ]
    }
  ];

  const filteredPrograms = activeTab === 'all' 
    ? programs 
    : programs.filter(p => p.category === activeTab);

  return (
    <section id="programs" style={{ padding: '4.5rem 0', backgroundColor: '#FFFFFF' }}>
      <div className="container">
        {/* Section Header: Programs */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 2.5rem' }}>
          <h2 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.2rem)', fontWeight: '800', color: 'var(--navy-dark)', marginBottom: '0.75rem' }}>
            Programs
          </h2>

          {/* Program Filter Tabs */}
          <div style={{ 
            display: 'inline-flex', 
            gap: '0.5rem', 
            backgroundColor: 'var(--canvas-bg)', 
            padding: '0.4rem', 
            borderRadius: 'var(--radius-full)', 
            border: '1px solid var(--border-light)',
            marginTop: '1rem',
            maxWidth: '100%',
            overflowX: 'auto'
          }}>
            <button
              onClick={() => setActiveTab('all')}
              style={{
                padding: '0.55rem 1.2rem',
                borderRadius: 'var(--radius-full)',
                border: 'none',
                backgroundColor: activeTab === 'all' ? 'var(--navy-dark)' : 'transparent',
                color: activeTab === 'all' ? '#FFFFFF' : 'var(--text-dark)',
                fontFamily: 'var(--font-heading)',
                fontWeight: '700',
                fontSize: '0.88rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                whiteSpace: 'nowrap'
              }}
            >
              All Programs
            </button>
            <button
              onClick={() => setActiveTab('early')}
              style={{
                padding: '0.55rem 1.2rem',
                borderRadius: 'var(--radius-full)',
                border: 'none',
                backgroundColor: activeTab === 'early' ? 'var(--navy-dark)' : 'transparent',
                color: activeTab === 'early' ? '#FFFFFF' : 'var(--text-dark)',
                fontFamily: 'var(--font-heading)',
                fontWeight: '700',
                fontSize: '0.88rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                whiteSpace: 'nowrap'
              }}
            >
              Early Childhood (Infant–Preschool)
            </button>
            <button
              onClick={() => setActiveTab('school-age')}
              style={{
                padding: '0.55rem 1.2rem',
                borderRadius: 'var(--radius-full)',
                border: 'none',
                backgroundColor: activeTab === 'school-age' ? 'var(--navy-dark)' : 'transparent',
                color: activeTab === 'school-age' ? '#FFFFFF' : 'var(--text-dark)',
                fontFamily: 'var(--font-heading)',
                fontWeight: '700',
                fontSize: '0.88rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                whiteSpace: 'nowrap'
              }}
            >
              After-School (K–6th Grade)
            </button>
          </div>
        </div>

        {/* Program Cards Grid (Navy Icons Centered Perfect Flexbox & Badges Removed) */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '2rem'
        }}>
          {filteredPrograms.map((prog) => {
            const IconComp = prog.icon;
            return (
              <div 
                key={prog.id}
                style={{
                  background: prog.bgGradient,
                  padding: '2.25rem',
                  borderRadius: 'var(--radius-lg)',
                  display: 'flex',
                  flexDirection: 'column',
                  justify: 'space-between',
                  border: '1px solid var(--border-light)',
                  boxShadow: 'var(--shadow-sm)'
                }}
              >
                <div>
                  {/* Perfect Flex Center Navy Container */}
                  <div style={{ marginBottom: '1.25rem' }}>
                    <div style={{ 
                      width: '56px', 
                      height: '56px', 
                      borderRadius: 'var(--radius-md)', 
                      backgroundColor: 'var(--navy-dark)', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      color: '#FFFFFF',
                      boxShadow: 'var(--shadow-sm)'
                    }}>
                      <IconComp size={28} style={{ display: 'block', margin: 'auto' }} />
                    </div>
                  </div>

                  <h3 style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--navy-dark)', marginBottom: '0.35rem' }}>
                    {prog.title}
                  </h3>

                  <div style={{ fontSize: '0.88rem', fontWeight: '700', color: 'var(--action-red)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <Clock size={15} /> Age: {prog.age}
                  </div>

                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1.5rem', lineHeight: '1.55' }}>
                    {prog.description}
                  </p>

                  <h4 style={{ fontSize: '0.88rem', fontWeight: '800', color: 'var(--navy-dark)', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    Program Highlights:
                  </h4>

                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {prog.highlights.map((h, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--text-dark)' }}>
                        <CheckCircle size={16} style={{ color: 'var(--growth-green)', flexShrink: 0 }} />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
