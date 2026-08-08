import React, { useState } from 'react';
import { Baby, GraduationCap, School, Utensils, CheckCircle, Clock, ShieldCheck, Phone, ArrowRight } from 'lucide-react';

export default function ProgramHub() {
  const [activeTab, setActiveTab] = useState('all');
  const directorPhone = "tel:3024198890";

  const programs = [
    {
      id: 'infant-toddler',
      category: 'early',
      title: 'Infants & Toddlers',
      age: '6 Weeks – 2 Years',
      icon: Baby,
      badge: 'Early Development',
      badgeColor: 'var(--blue-soft)',
      textColor: 'var(--blue-primary)',
      bgGradient: 'linear-gradient(180deg, #FFFFFF 0%, #F0F7FF 100%)',
      description: 'Nurturing, sensory-rich environment providing personalized care routines, motor development, and loving social connections.',
      highlights: [
        'Safe, sanitary infant play areas',
        'Sensory exploration & music',
        'Daily updates for parents',
        'Tender, individualized attention'
      ],
      meals: 'CACFP Nutritional Guidance & Infant Feeding Support'
    },
    {
      id: 'preschool',
      category: 'early',
      title: 'Preschool & Early Learning',
      age: '3 Years – 5 Years',
      icon: GraduationCap,
      badge: '3 Meals Provided Daily',
      badgeColor: 'var(--growth-green-bg)',
      textColor: 'var(--growth-green)',
      bgGradient: 'linear-gradient(180deg, #FFFFFF 0%, #E6F4EA 100%)',
      description: 'Comprehensive early childhood curriculum focusing on kindergarten readiness, social-emotional growth, phonics, and creative crafts.',
      highlights: [
        'Structured pre-kindergarten curriculum',
        'Creative arts, crafts & sensory play',
        'Social-emotional milestone building',
        'Year-round continuous growth'
      ],
      meals: '3 Full Daily Meals Included (Breakfast, Lunch, PM Snack)'
    },
    {
      id: 'after-school',
      category: 'school-age',
      title: 'After-School Program',
      age: 'Kindergarten – 6th Grade (Up to 12 Years)',
      icon: School,
      badge: 'Academic & Physical Focus',
      badgeColor: '#FEF3C7',
      textColor: '#D97706',
      bgGradient: 'linear-gradient(180deg, #FFFFFF 0%, #FFFBEB 100%)',
      description: 'Empowering school-aged children with dual emphasis on academic enrichment, guided homework assistance, and active physical play.',
      highlights: [
        'Dedicated quiet homework support zone',
        'Physical activity & team games',
        'STEM enrichment & group projects',
        'Safe transportation assistance'
      ],
      meals: 'Breakfast Before School & Full Lunch Upon Return (No PM Snack)'
    }
  ];

  const filteredPrograms = activeTab === 'all' 
    ? programs 
    : programs.filter(p => p.category === activeTab);

  return (
    <section id="programs" style={{ padding: '4.5rem 0', backgroundColor: '#FFFFFF' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3rem' }}>
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
            <GraduationCap size={14} /> Comprehensive Curriculum
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 4.5vw, 2.8rem)', fontWeight: '800', color: 'var(--navy-dark)', marginBottom: '0.75rem' }}>
            Tailored Educational & Care Tracks
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
            From precious early milestones to structured after-school academic support, Passion Care Academy nurtures every stage of childhood with love and structure.
          </p>

          {/* Program Filter Tabs */}
          <div style={{ 
            display: 'inline-flex', 
            gap: '0.5rem', 
            backgroundColor: 'var(--canvas-bg)', 
            padding: '0.4rem', 
            borderRadius: 'var(--radius-full)', 
            border: '1px solid var(--border-light)',
            marginTop: '1.5rem'
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
                transition: 'all 0.2s ease'
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
                transition: 'all 0.2s ease'
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
                transition: 'all 0.2s ease'
              }}
            >
              After-School (K–6th Grade)
            </button>
          </div>
        </div>

        {/* Program Cards Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
          gap: '2rem',
          marginBottom: '4.5rem'
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
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
                    <div style={{ 
                      width: '52px', 
                      height: '52px', 
                      borderRadius: 'var(--radius-md)', 
                      backgroundColor: 'var(--navy-dark)', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justify: 'center',
                      color: '#FFFFFF'
                    }}>
                      <IconComp size={26} />
                    </div>

                    <span style={{ 
                      fontSize: '0.78rem', 
                      fontWeight: '800', 
                      padding: '0.35rem 0.75rem', 
                      borderRadius: 'var(--radius-full)', 
                      backgroundColor: prog.badgeColor, 
                      color: prog.textColor 
                    }}>
                      {prog.badge}
                    </span>
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

                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.75rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {prog.highlights.map((h, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--text-dark)' }}>
                        <CheckCircle size={16} style={{ color: 'var(--growth-green)', flexShrink: 0 }} />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  {/* CACFP Meal Indicator */}
                  <div style={{ 
                    backgroundColor: '#FFFFFF', 
                    padding: '0.9rem 1.1rem', 
                    borderRadius: 'var(--radius-md)', 
                    borderLeft: '4px solid var(--growth-green)',
                    boxShadow: 'var(--shadow-sm)',
                    marginBottom: '1.5rem'
                  }}>
                    <div style={{ fontSize: '0.78rem', fontWeight: '800', color: 'var(--growth-green)', display: 'flex', alignItems: 'center', gap: '0.35rem', marginBottom: '0.2rem' }}>
                      <Utensils size={14} /> CACFP MEAL PROVISIONS
                    </div>
                    <div style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-dark)' }}>
                      {prog.meals}
                    </div>
                  </div>

                  <a 
                    href={directorPhone} 
                    className="btn-dark-pill" 
                    style={{ width: '100%', justifyContent: 'center', fontSize: '0.88rem', padding: '0.85rem' }}
                  >
                    <Phone size={15} style={{ color: '#F87171' }} /> Call Director to Book: (302) 419-8890
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Delaware CACFP Nutrition Matrix */}
        <div style={{ 
          backgroundColor: 'var(--canvas-sky)', 
          borderRadius: 'var(--radius-lg)', 
          padding: '3rem 2.5rem',
          border: '1px solid #BAE6FD'
        }}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '2.5rem',
            alignItems: 'center'
          }}>
            <div>
              <span className="badge-sky" style={{ marginBottom: '1rem' }}>
                <ShieldCheck size={14} /> State of Delaware CACFP Enrolled
              </span>

              <h3 style={{ fontSize: '1.8rem', fontWeight: '800', color: 'var(--navy-dark)', marginBottom: '1rem' }}>
                Nutritious Meals Included at No Extra Cost
              </h3>

              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                Passion Care Academy is proudly enrolled in the <strong>State of Delaware Child and Adult Care Food Program (CACFP)</strong>. We ensure every child receives balanced, USDA-approved meals crafted for optimal health, focus, and energy.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <div style={{ width: '22px', height: '22px', borderRadius: '50%', backgroundColor: 'var(--growth-green)', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px', fontSize: '0.8rem' }}>✓</div>
                  <div style={{ fontSize: '0.92rem' }}>
                    <strong style={{ color: 'var(--navy-dark)' }}>Preschool Program:</strong> 3 meals served daily — Breakfast, Lunch, and Afternoon (PM) Snack.
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <div style={{ width: '22px', height: '22px', borderRadius: '50%', backgroundColor: 'var(--navy-dark)', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px', fontSize: '0.8rem' }}>✓</div>
                  <div style={{ fontSize: '0.92rem' }}>
                    <strong style={{ color: 'var(--navy-dark)' }}>School-Aged Program:</strong> Breakfast before school and full Lunch upon return <em>(No PM snack provided)</em>.
                  </div>
                </div>
              </div>
            </div>

            {/* Meal Provision Matrix */}
            <div style={{ 
              backgroundColor: '#FFFFFF', 
              borderRadius: 'var(--radius-md)', 
              padding: '1.75rem', 
              boxShadow: 'var(--shadow-md)',
              border: '1px solid var(--border-light)'
            }}>
              <h4 style={{ fontSize: '1.15rem', fontWeight: '800', color: 'var(--navy-dark)', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Utensils size={18} style={{ color: 'var(--navy-dark)' }} /> Daily Meal Provision Schedule
              </h4>

              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.9rem' }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid var(--border-light)', color: 'var(--navy-dark)' }}>
                    <th style={{ padding: '0.6rem 0.5rem' }}>Meal Time</th>
                    <th style={{ padding: '0.6rem 0.5rem' }}>Preschool Track</th>
                    <th style={{ padding: '0.6rem 0.5rem' }}>After-School Track</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid var(--border-light)' }}>
                    <td style={{ padding: '0.75rem 0.5rem', fontWeight: '600' }}>Morning Breakfast</td>
                    <td style={{ padding: '0.75rem 0.5rem', color: 'var(--growth-green)', fontWeight: '700' }}>✓ Included</td>
                    <td style={{ padding: '0.75rem 0.5rem', color: 'var(--growth-green)', fontWeight: '700' }}>✓ Included (Before school)</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--border-light)' }}>
                    <td style={{ padding: '0.75rem 0.5rem', fontWeight: '600' }}>Nutritious Lunch</td>
                    <td style={{ padding: '0.75rem 0.5rem', color: 'var(--growth-green)', fontWeight: '700' }}>✓ Included</td>
                    <td style={{ padding: '0.75rem 0.5rem', color: 'var(--growth-green)', fontWeight: '700' }}>✓ Included (Upon return)</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '0.75rem 0.5rem', fontWeight: '600' }}>Afternoon PM Snack</td>
                    <td style={{ padding: '0.75rem 0.5rem', color: 'var(--growth-green)', fontWeight: '700' }}>✓ Included</td>
                    <td style={{ padding: '0.75rem 0.5rem', color: 'var(--text-light)' }}>✕ Not Provided</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
