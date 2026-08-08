import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, UserCheck, ShieldCheck } from 'lucide-react';

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
    <section id="contact" style={{ padding: '5rem 0', backgroundColor: 'var(--canvas-bg)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3.5rem' }}>
          <span className="badge-blue" style={{ marginBottom: '0.75rem' }}>
            <Phone size={14} /> Direct Communications
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: '800', color: 'var(--blue-dark)', marginBottom: '1rem' }}>
            Get in Touch With Our Delaware Team
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)' }}>
            We're here to answer your questions, discuss program availability, or assist with enrollment requirements.
          </p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
          gap: '2.5rem' 
        }}>
          {/* Left Column: Direct Phone Directory & Hours */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div className="card-glass" style={{ backgroundColor: '#FFFFFF', padding: '2rem', borderRadius: 'var(--radius-lg)' }}>
              <h3 style={{ fontSize: '1.35rem', fontWeight: '800', color: 'var(--blue-primary)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Phone size={22} /> Facility Direct Directory
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {/* General Line */}
                <div style={{ padding: '1rem', backgroundColor: 'var(--canvas-sky)', borderRadius: 'var(--radius-md)', borderLeft: '4px solid var(--blue-primary)' }}>
                  <div style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--blue-primary)', textTransform: 'uppercase' }}>
                    General Inquiries & Admissions
                  </div>
                  <a href="tel:3028322622" style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--text-dark)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.2rem' }}>
                    <Phone size={18} style={{ color: 'var(--blue-primary)' }} /> (302) 832-2622
                  </a>
                  <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                    Main front desk line for center questions.
                  </div>
                </div>

                {/* Director Line */}
                <div style={{ padding: '1rem', backgroundColor: '#FEE2E2', borderRadius: 'var(--radius-md)', borderLeft: '4px solid var(--action-red)' }}>
                  <div style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--action-red)', textTransform: 'uppercase' }}>
                    Daycare Director Direct Line
                  </div>
                  <a href="tel:3024198890" style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--text-dark)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.2rem' }}>
                    <Phone size={18} style={{ color: 'var(--action-red)' }} /> (302) 419-8890
                  </a>
                  <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                    Direct line for administrative & urgent parent matters.
                  </div>
                </div>

                {/* Office Manager */}
                <div style={{ padding: '1rem', backgroundColor: 'var(--growth-green-bg)', borderRadius: 'var(--radius-md)', borderLeft: '4px solid var(--growth-green)' }}>
                  <div style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--growth-green)', textTransform: 'uppercase' }}>
                    After-School & Office Desk
                  </div>
                  <div style={{ fontSize: '1.1rem', fontWeight: '800', color: 'var(--text-dark)', marginTop: '0.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <UserCheck size={18} style={{ color: 'var(--growth-green)' }} /> Office Manager Direct Desk
                  </div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                    Dedicated assistance for after-school registrations & billing.
                  </div>
                </div>
              </div>
            </div>

            {/* Hours & Schedule Card */}
            <div className="card-glass" style={{ backgroundColor: '#FFFFFF', padding: '1.75rem', borderRadius: 'var(--radius-lg)' }}>
              <h4 style={{ fontSize: '1.1rem', fontWeight: '700', color: 'var(--blue-dark)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Clock size={20} style={{ color: 'var(--blue-primary)' }} /> Operating Schedule
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.95rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.4rem 0', borderBottom: '1px solid var(--border-light)' }}>
                  <span>Schedule:</span>
                  <strong style={{ color: 'var(--growth-green)' }}>Year-Round Operation</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.4rem 0', borderBottom: '1px solid var(--border-light)' }}>
                  <span>Days:</span>
                  <strong style={{ color: 'var(--text-dark)' }}>Monday – Friday</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.4rem 0' }}>
                  <span>Center Hours:</span>
                  <strong style={{ color: 'var(--blue-primary)' }}>6:30 AM – 5:30 PM</strong>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Message Form */}
          <div className="card-glass" style={{ backgroundColor: '#FFFFFF', padding: '2.5rem', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--blue-dark)', marginBottom: '0.5rem' }}>
              Send an Online Inquiry
            </h3>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', marginBottom: '1.75rem' }}>
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
                <CheckCircle2 size={48} style={{ margin: '0 auto 1rem' }} />
                <h4 style={{ fontSize: '1.3rem', fontWeight: '800', marginBottom: '0.5rem' }}>Inquiry Sent Successfully!</h4>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-dark)' }}>
                  Thank you for contacting Passion Care Academy. Our Daycare Director will review your inquiry shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '0.35rem' }}>
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
                      padding: '0.8rem 1rem',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--border-light)',
                      fontSize: '0.95rem'
                    }}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '0.35rem' }}>
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
                        padding: '0.8rem 1rem',
                        borderRadius: 'var(--radius-md)',
                        border: '1px solid var(--border-light)',
                        fontSize: '0.95rem'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '0.35rem' }}>
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
                        padding: '0.8rem 1rem',
                        borderRadius: 'var(--radius-md)',
                        border: '1px solid var(--border-light)',
                        fontSize: '0.95rem'
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '0.35rem' }}>
                    Topic / Interest
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--border-light)',
                      fontSize: '0.95rem',
                      backgroundColor: '#FFF'
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
                  <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '0.35rem' }}>
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
                      padding: '0.8rem 1rem',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--border-light)',
                      fontSize: '0.95rem'
                    }}
                  />
                </div>

                <button type="submit" className="btn-primary" style={{ justifyContent: 'center', width: '100%' }}>
                  <Send size={18} /> Submit Online Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
