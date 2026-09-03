import React, { useState } from 'react';
import { ChevronDown, MapPin, CheckCircle2, HelpCircle, Navigation, ShieldCheck, Sparkles, Phone } from 'lucide-react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const mainPhone = "tel:3028322622";
  const mapsUrl = "https://www.google.com/maps?daddr=3727+Wrangle+Hill+Rd,+Bear,+DE+19701,+United+States";

  const faqs = [
    {
      q: "What age groups does Passion Care Academy accept in Delaware?",
      a: "Passion Care Academy welcomes children from 6 weeks old through 12 years old. Our programs are divided into developmentally tailored groups: Infant Care (6 weeks – 24 months), Preschool & Pre-K (2 – 5 years), and Before & After School Care (Kindergarten – 6th grade)."
    },
    {
      q: "What are your center hours of operation?",
      a: "We are open Monday through Friday from 6:30 AM to 6:00 PM, providing reliable, full-day childcare options for working parents across Bear, Newark, New Castle, and surrounding Delaware communities."
    },
    {
      q: "Where is Passion Care Academy located and what cities do you serve?",
      a: "Our facility is conveniently located at 3727 Wrangle Hill Rd, Bear, DE 19701, situated near Route 72 and Route 13. We proudly serve families in Bear (19701), Newark (19702, 19711, 19713), New Castle (19720), Middletown (19709), Glasgow, Delaware City (19706), St. Georges (19733), and greater New Castle County."
    },
    {
      q: "What educational curriculum do you follow for preschool and kindergarten readiness?",
      a: "Our early childhood curriculum aligns with Delaware Early Learning Standards. We emphasize phonics, early literacy, foundational math, STEM discovery, creative art, and social-emotional learning (SEL) to ensure every preschooler transitions into kindergarten with confidence and enthusiasm."
    },
    {
      q: "What after-school programs and homework assistance do you provide?",
      a: "Our after-school program provides a safe, engaging environment for elementary students after the school bell rings. We provide dedicated homework help stations, supervised outdoor physical recreation on our private playground, creative craft sessions, and nutritious afternoon snacks."
    },
    {
      q: "What safety, sanitation, and security measures are in place?",
      a: "Child safety is our highest priority. Passion Care Academy features secure locked entry access, continuous staff supervision, background-checked and CPR/First-Aid certified educators, daily sanitization of toys and facilities, and a fully fenced private outdoor recreation playground."
    },
    {
      q: "How can parents schedule a center tour or start enrollment?",
      a: "Parents can book a private center tour anytime by calling our admissions desk directly at (302) 832-2622 or visiting our facility at 3727 Wrangle Hill Rd in Bear, DE. We welcome prospective families to see our classrooms, meet teachers, and review enrollment packets in person."
    }
  ];

  const serviceCommunities = [
    { name: "Bear, DE", zip: "19701", note: "Immediate Facility Location" },
    { name: "Newark, DE", zip: "19702, 19711", note: "Approx. 5–10 mins" },
    { name: "New Castle, DE", zip: "19720", note: "Approx. 10–12 mins" },
    { name: "Middletown, DE", zip: "19709", note: "Approx. 12–15 mins" },
    { name: "Glasgow, DE", zip: "19702", note: "Approx. 6–8 mins" },
    { name: "Delaware City, DE", zip: "19706", note: "Approx. 7–9 mins" },
    { name: "St. Georges, DE", zip: "19733", note: "Approx. 5–7 mins" }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" style={{ padding: '4.5rem 0', backgroundColor: '#FFFFFF' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3.5rem' }}>
          <div style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '0.5rem', 
            backgroundColor: '#EFF6FF', 
            color: '#1D4ED8', 
            fontSize: '0.82rem', 
            fontWeight: '800', 
            padding: '0.35rem 0.95rem', 
            borderRadius: 'var(--radius-full)', 
            marginBottom: '0.75rem',
            textTransform: 'uppercase',
            letterSpacing: '0.5px'
          }}>
            <HelpCircle size={15} /> Delaware Parent Information & FAQs
          </div>

          <h2 style={{ fontSize: 'clamp(2.2rem, 5vw, 3rem)', fontWeight: '800', color: 'var(--navy-dark)', marginBottom: '1rem', letterSpacing: '-0.5px' }}>
            Frequently Asked Questions
          </h2>

          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.6' }}>
            Everything you need to know about our Bear, Delaware daycare center, age programs, operating schedule, and enrollment process.
          </p>
        </div>

        {/* 2-Column Grid: Left FAQ Accordion, Right Delaware Geotargeting Radius Card */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
          gap: '2.5rem',
          alignItems: 'start'
        }}>
          {/* Column 1: FAQ Accordion */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div 
                  key={idx}
                  style={{
                    backgroundColor: isOpen ? '#F8FAFC' : '#FFFFFF',
                    border: isOpen ? '1.5px solid #38BDF8' : '1px solid var(--border-light)',
                    borderRadius: 'var(--radius-md)',
                    overflow: 'hidden',
                    transition: 'all 0.2s ease',
                    boxShadow: isOpen ? 'var(--shadow-sm)' : 'none'
                  }}
                >
                  <button
                    onClick={() => toggleFAQ(idx)}
                    aria-expanded={isOpen}
                    style={{
                      width: '100%',
                      textAlign: 'left',
                      padding: '1.15rem 1.25rem',
                      background: 'none',
                      border: 'none',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      gap: '1rem',
                      cursor: 'pointer'
                    }}
                  >
                    <span style={{ 
                      fontSize: '1rem', 
                      fontWeight: '700', 
                      color: isOpen ? '#0284C7' : 'var(--navy-dark)',
                      lineHeight: '1.4'
                    }}>
                      {faq.q}
                    </span>
                    <ChevronDown 
                      size={20} 
                      style={{ 
                        color: isOpen ? '#0284C7' : 'var(--text-muted)', 
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.2s ease',
                        flexShrink: 0
                      }} 
                    />
                  </button>

                  {isOpen && (
                    <div style={{ 
                      padding: '0 1.25rem 1.25rem 1.25rem', 
                      color: 'var(--text-muted)', 
                      fontSize: '0.94rem', 
                      lineHeight: '1.65' 
                    }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Column 2: Delaware Local Service Radius Card */}
          <div style={{ 
            backgroundColor: 'var(--navy-dark)', 
            color: '#FFFFFF', 
            padding: '2.25rem', 
            borderRadius: 'var(--radius-lg)',
            boxShadow: 'var(--shadow-md)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#38BDF8', fontWeight: '800', fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.75rem' }}>
              <MapPin size={18} /> Local Delaware Service Area
            </div>

            <h3 style={{ fontSize: '1.6rem', fontWeight: '800', color: '#FFFFFF', marginBottom: '0.75rem', lineHeight: '1.2' }}>
              Serving Families Across New Castle County, DE
            </h3>

            <p style={{ color: '#CBD5E1', fontSize: '0.92rem', lineHeight: '1.6', marginBottom: '1.75rem' }}>
              Located directly on <strong>Wrangle Hill Road (DE-72)</strong>, Passion Care Academy provides central, hassle-free drop-off and pick-up for parents commuting throughout northern and central Delaware.
            </p>

            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', 
              gap: '0.75rem', 
              marginBottom: '2rem' 
            }}>
              {serviceCommunities.map((c, i) => (
                <div 
                  key={i}
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.07)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    padding: '0.75rem',
                    borderRadius: '8px'
                  }}
                >
                  <div style={{ fontSize: '0.95rem', fontWeight: '800', color: '#FFFFFF' }}>
                    {c.name}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#38BDF8', marginTop: '0.15rem' }}>
                    ZIP {c.zip}
                  </div>
                  <div style={{ fontSize: '0.72rem', color: '#94A3B8', marginTop: '0.25rem' }}>
                    {c.note}
                  </div>
                </div>
              ))}
            </div>

            {/* Direct Actions */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <a 
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-dark-pill"
                style={{ 
                  backgroundColor: '#0284C7', 
                  border: 'none', 
                  width: '100%', 
                  justifyContent: 'center', 
                  fontSize: '0.92rem', 
                  padding: '0.85rem 1.25rem' 
                }}
              >
                <Navigation size={18} /> Open Route in Google Maps
              </a>

              <a 
                href={mainPhone}
                className="btn-dark-pill"
                style={{ 
                  backgroundColor: 'var(--yellow-accent)', 
                  color: 'var(--navy-dark)', 
                  border: 'none', 
                  width: '100%', 
                  justifyContent: 'center', 
                  fontSize: '0.92rem', 
                  padding: '0.85rem 1.25rem' 
                }}
              >
                <Phone size={18} /> Call Admissions: (302) 832-2622
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
