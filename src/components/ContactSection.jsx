import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, UserCheck, ShieldCheck, Home } from 'lucide-react';

export default function ContactSection() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', phone: '', subject: 'General Inquiry', message: '' });
    }, 5000);
  };

  return (
    <section id="contact" style={{ padding: '4.5rem 0', backgroundColor: 'var(--canvas-bg)' }}>
      <div className="container">
        {/* Header */}
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
            <Phone size={14} /> Direct Communications
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 4.5vw, 2.8rem)', fontWeight: '800', color: 'var(--navy-dark)', marginBottom: '0.75rem' }}>
            Get in Touch With Our Delaware Team
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
            We're here to answer your questions, discuss program availability, or assist with enrollment requirements.
          </p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
          gap: '2.5rem' 
        }}>
          {/* Left Column: Direct Phone Directory & Hours Cards matching reference */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ backgroundColor: '#FFFFFF', padding: '2rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-sm)' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--navy-dark)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Home size={20} style={{ color: 'var(--navy-dark)' }} /> Facility Direct Directory
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {/* General Inquiries */}
                <div style={{ padding: '1rem', backgroundColor: '#F8FAFC', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--text-light)', textTransform: 'uppercase' }}>
                    GENERAL INQUIRIES & ADMISSIONS
                  </div>
                  <a href="tel:3028322622" style={{ fontSize: '1.2rem', fontWeight: '800', color: 'var(--navy-dark)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', marginTop: '0.25rem' }}>
                    <Phone size={16} style={{ color: 'var(--navy-dark)' }} /> (302) 832-2622
                  </a>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '0.15rem' }}>
                    Main front desk line for center questions.
                  </div>
                </div>

                {/* Director Line matching soft red container in reference screenshot */}
                <div style={{ padding: '1rem', backgroundColor: '#FEF2F2', borderRadius: 'var(--radius-md)', border: '1px solid #FEE2E2' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--action-red)', textTransform: 'uppercase' }}>
                    DAYCARE DIRECTOR DIRECT LINE
                  </div>
                  <a href="tel:3024198890" style={{ fontSize: '1.2rem', fontWeight: '800', color: 'var(--action-red)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', marginTop: '0.25rem' }}>
                    <Phone size={16} style={{ color: 'var(--action-red)' }} /> (302) 419-8890
                  </a>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '0.15rem' }}>
                    Direct line for administrative & urgent parent matters.
                  </div>
                </div>

                {/* Office Manager Desk */}
                <div style={{ padding: '1rem', backgroundColor: '#F8FAFC', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--text-light)', textTransform: 'uppercase' }}>
                    AFTER-SCHOOL OFFICE DESK
                  </div>
                  <div style={{ fontSize: '1.05rem', fontWeight: '800', color: 'var(--navy-dark)', marginTop: '0.25rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <UserCheck size={16} style={{ color: 'var(--navy-dark)' }} /> Office Manager Direct Desk
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '0.15rem' }}>
                    Dedicated assistance for after-school registrations.
                  </div>
                </div>
              </div>
            </div>

            {/* Operating Schedule Card matching reference */}
            <div style={{ backgroundColor: '#FFFFFF', padding: '1.75rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-sm)' }}>
              <h4 style={{ fontSize: '1.1rem', fontWeight: '800', color: 'var(--navy-dark)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Clock size={18} style={{ color: 'var(--navy-dark)' }} /> Operating Schedule
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.9rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.4rem 0', borderBottom: '1px solid var(--border-light)' }}>
                  <span>Schedule:</span>
                  <strong style={{ color: 'var(--navy-dark)' }}>Year-Round Operation</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.4rem 0', borderBottom: '1px solid var(--border-light)' }}>
                  <span>Days:</span>
                  <strong style={{ color: 'var(--navy-dark)' }}>Monday – Friday</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.4rem 0' }}>
                  <span>Center Hours:</span>
                  <strong style={{ color: 'var(--navy-dark)' }}>6:30 AM – 5:30 PM</strong>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Send an Online Inquiry Form matching reference */}
          <div style={{ backgroundColor: '#FFFFFF', padding: '2.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-sm)' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--navy-dark)', marginBottom: '0.4rem' }}>
              Send an Online Inquiry
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1.75rem' }}>
              Fill out the form below and our office staff will respond within 24 business hours.
            </p>

            {formSubmitted ? (
              <div style={{
                backgroundColor: 'var(--growth-green-bg)',
                border: '2px solid var(--growth-green)',
                borderRadius: 'var(--radius-md)',
                padding: '2rem',
                textAlign: 'center',
                color: 'var(--growth-green)'
              }}>
                <CheckCircle2 size={44} style={{ margin: '0 auto 0.75rem' }} />
                <h4 style={{ fontSize: '1.25rem', fontWeight: '800', marginBottom: '0.35rem' }}>Inquiry Sent Successfully!</h4>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-dark)' }}>
                  Thank you for contacting Passion Care Academy. Our Daycare Director will review your message.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', color: 'var(--navy-dark)', marginBottom: '0.35rem' }}>
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah Jenkins"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--border-light)',
                      fontSize: '0.92rem',
                      backgroundColor: '#F8FAFC'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', color: 'var(--navy-dark)', marginBottom: '0.35rem' }}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="sarah@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--border-light)',
                      fontSize: '0.92rem',
                      backgroundColor: '#F8FAFC'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', color: 'var(--navy-dark)', marginBottom: '0.35rem' }}>
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(302) 555-0199"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--border-light)',
                      fontSize: '0.92rem',
                      backgroundColor: '#F8FAFC'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', color: 'var(--navy-dark)', marginBottom: '0.35rem' }}>
                    Topic / Interest
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--border-light)',
                      fontSize: '0.92rem',
                      backgroundColor: '#F8FAFC'
                    }}
                  >
                    <option>General Inquiry</option>
                    <option>Infant / Toddler Care</option>
                    <option>Preschool Enrollment</option>
                    <option>After-School Program (K–6th Grade)</option>
                    <option>CACFP Meal Eligibility</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', color: 'var(--navy-dark)', marginBottom: '0.35rem' }}>
                    Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell us about your childcare needs..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--border-light)',
                      fontSize: '0.92rem',
                      backgroundColor: '#F8FAFC'
                    }}
                  />
                </div>

                <button type="submit" className="btn-dark-pill" style={{ justifyContent: 'center', width: '100%', padding: '0.9rem' }}>
                  <Send size={16} /> Submit Online Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
