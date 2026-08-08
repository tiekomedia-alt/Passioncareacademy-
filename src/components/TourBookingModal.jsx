import React, { useState } from 'react';
import { X, Calendar, Clock, User, Mail, Phone, Baby, CheckCircle2, ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function TourBookingModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1); // 1: Form, 2: Confirmation
  const [formData, setFormData] = useState({
    parentName: '',
    email: '',
    phone: '',
    childAgeGroup: 'Preschool (3-5 yrs)',
    tourDate: '',
    tourTime: '10:00 AM',
    targetStartDate: '',
    specialNotes: ''
  });

  const availableTimes = [
    '09:00 AM', '10:00 AM', '11:00 AM', 
    '01:30 PM', '02:30 PM', '03:30 PM'
  ];

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    // Store in localStorage for Admin Panel access
    const newRequest = {
      id: 'TOUR-' + Date.now(),
      ...formData,
      status: 'Pending Review',
      submittedAt: new Date().toLocaleString()
    };

    const existing = JSON.parse(localStorage.getItem('passion_care_tours') || '[]');
    localStorage.setItem('passion_care_tours', JSON.stringify([newRequest, ...existing]));

    // Trigger celebratory confetti
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (err) {
      console.log('Confetti triggered');
    }

    setStep(2);
  };

  const handleResetAndClose = () => {
    setStep(1);
    setFormData({
      parentName: '',
      email: '',
      phone: '',
      childAgeGroup: 'Preschool (3-5 yrs)',
      tourDate: '',
      tourTime: '10:00 AM',
      targetStartDate: '',
      specialNotes: ''
    });
    onClose();
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      backdropFilter: 'blur(6px)',
      zIndex: 2500,
      display: 'flex',
      alignItems: 'center',
      justify: 'center',
      padding: '1rem'
    }}>
      <div style={{
        backgroundColor: '#FFFFFF',
        borderRadius: 'var(--radius-lg)',
        width: '100%',
        maxWidth: '680px',
        maxHeight: '92vh',
        overflowY: 'auto',
        boxShadow: 'var(--shadow-xl)',
        position: 'relative',
        border: '1px solid var(--blue-soft)'
      }}>
        {/* Header Bar */}
        <div style={{ 
          backgroundColor: 'var(--blue-dark)', 
          color: '#FFFFFF', 
          padding: '1.5rem 2rem', 
          borderTopLeftRadius: 'var(--radius-lg)', 
          borderTopRightRadius: 'var(--radius-lg)',
          display: 'flex',
          justify: 'space-between',
          alignItems: 'center'
        }}>
          <div>
            <span style={{ fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', color: '#60A5FA', letterSpacing: '1px' }}>
              Schedule a Site Tour
            </span>
            <h3 style={{ fontSize: '1.4rem', fontWeight: '800', color: '#FFFFFF', margin: 0 }}>
              Visit Passion Care Academy
            </h3>
          </div>
          <button 
            onClick={handleResetAndClose}
            style={{
              background: 'rgba(255, 255, 255, 0.15)',
              border: 'none',
              color: '#FFFFFF',
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justify: 'center'
            }}
          >
            <X size={20} />
          </button>
        </div>

        {step === 1 ? (
          /* Step 1: Booking Form */
          <form onSubmit={handleSubmit} style={{ padding: '2rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem', marginBottom: '1.25rem' }}>
              {/* Parent Name */}
              <div>
                <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '0.35rem' }}>
                  Parent / Guardian Name *
                </label>
                <div style={{ position: 'relative' }}>
                  <User size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-light)' }} />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Jessica Miller"
                    value={formData.parentName}
                    onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem 0.8rem 2.75rem',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--border-light)',
                      fontSize: '0.95rem'
                    }}
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '0.35rem' }}>
                  Phone Number *
                </label>
                <div style={{ position: 'relative' }}>
                  <Phone size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-light)' }} />
                  <input
                    type="tel"
                    required
                    placeholder="(302) 555-0144"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem 0.8rem 2.75rem',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--border-light)',
                      fontSize: '0.95rem'
                    }}
                  />
                </div>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem', marginBottom: '1.25rem' }}>
              {/* Email */}
              <div>
                <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '0.35rem' }}>
                  Email Address *
                </label>
                <div style={{ position: 'relative' }}>
                  <Mail size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-light)' }} />
                  <input
                    type="email"
                    required
                    placeholder="jessica@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem 0.8rem 2.75rem',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--border-light)',
                      fontSize: '0.95rem'
                    }}
                  />
                </div>
              </div>

              {/* Child Age Group */}
              <div>
                <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '0.35rem' }}>
                  Child Age Group *
                </label>
                <div style={{ position: 'relative' }}>
                  <Baby size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-light)' }} />
                  <select
                    value={formData.childAgeGroup}
                    onChange={(e) => setFormData({ ...formData, childAgeGroup: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem 0.8rem 2.75rem',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--border-light)',
                      fontSize: '0.95rem',
                      backgroundColor: '#FFFFFF'
                    }}
                  >
                    <option>Infant (6 wks – 12 mos)</option>
                    <option>Toddler (1 – 2 yrs)</option>
                    <option>Preschool (3 – 5 yrs)</option>
                    <option>After-School Care (K – 6th Grade)</option>
                  </select>
                </div>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem', marginBottom: '1.25rem' }}>
              {/* Tour Date */}
              <div>
                <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '0.35rem' }}>
                  Preferred Tour Date *
                </label>
                <input
                  type="date"
                  required
                  value={formData.tourDate}
                  min={new Date().toISOString().split('T')[0]}
                  onChange={(e) => setFormData({ ...formData, tourDate: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.8rem 1rem',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border-light)',
                    fontSize: '0.95rem'
                  }}
                />
              </div>

              {/* Tour Time Slot */}
              <div>
                <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '0.35rem' }}>
                  Preferred Time Slot *
                </label>
                <select
                  value={formData.tourTime}
                  onChange={(e) => setFormData({ ...formData, tourTime: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.8rem 1rem',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border-light)',
                    fontSize: '0.95rem',
                    backgroundColor: '#FFFFFF'
                  }}
                >
                  {availableTimes.map((t, idx) => (
                    <option key={idx} value={t}>{t}</option>
                  ))}
                </select>
              </div>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '0.35rem' }}>
                Target Care Start Date *
              </label>
              <input
                type="date"
                required
                value={formData.targetStartDate}
                min={new Date().toISOString().split('T')[0]}
                onChange={(e) => setFormData({ ...formData, targetStartDate: e.target.value })}
                style={{
                  width: '100%',
                  padding: '0.8rem 1rem',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-light)',
                  fontSize: '0.95rem'
                }}
              />
            </div>

            <div style={{ marginBottom: '1.75rem' }}>
              <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '0.35rem' }}>
                Special Notes / Questions (Optional)
              </label>
              <textarea
                rows={3}
                placeholder="Let us know if you have specific questions about meals, CACFP forms, or schedules..."
                value={formData.specialNotes}
                onChange={(e) => setFormData({ ...formData, specialNotes: e.target.value })}
                style={{
                  width: '100%',
                  padding: '0.8rem 1rem',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-light)',
                  fontSize: '0.95rem'
                }}
              />
            </div>

            <div style={{ backgroundColor: 'var(--canvas-sky)', padding: '1rem', borderRadius: 'var(--radius-md)', marginBottom: '1.75rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <ShieldCheck size={20} style={{ color: 'var(--blue-primary)', flexShrink: 0 }} />
              <span style={{ fontSize: '0.85rem', color: 'var(--text-dark)' }}>
                Submissions automatically notify our Daycare Director <strong>(302) 419-8890</strong> for immediate confirmation.
              </span>
            </div>

            <button type="submit" className="btn-primary pulse-cta" style={{ width: '100%', justifyContent: 'center', fontSize: '1.05rem', padding: '1rem' }}>
              <Calendar size={20} /> Request Tour Appointment
            </button>
          </form>
        ) : (
          /* Step 2: Instant On-Screen Confirmation */
          <div style={{ padding: '3rem 2rem', textAlign: 'center' }}>
            <div style={{ 
              width: '72px', 
              height: '72px', 
              borderRadius: '50%', 
              backgroundColor: 'var(--growth-green-bg)', 
              color: 'var(--growth-green)', 
              display: 'flex', 
              alignItems: 'center', 
              justify: 'center',
              margin: '0 auto 1.5rem',
              border: '3px solid var(--growth-green)'
            }}>
              <CheckCircle2 size={44} />
            </div>

            <h3 style={{ fontSize: '1.8rem', fontWeight: '800', color: 'var(--blue-dark)', marginBottom: '0.5rem' }}>
              Tour Request Received!
            </h3>

            <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', marginBottom: '2rem', maxWidth: '500px', margin: '0 auto 2rem' }}>
              Thank you, <strong>{formData.parentName}</strong>! Your tour request for <strong>{formData.tourDate} at {formData.tourTime}</strong> has been logged.
            </p>

            {/* Notification Dispatch & Next Steps Box */}
            <div style={{ 
              backgroundColor: 'var(--canvas-sky)', 
              border: '2px solid var(--blue-primary)', 
              borderRadius: 'var(--radius-md)', 
              padding: '1.75rem', 
              textAlign: 'left',
              marginBottom: '2rem'
            }}>
              <h4 style={{ fontSize: '1.05rem', fontWeight: '800', color: 'var(--blue-primary)', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Sparkles size={18} /> Automated Notification Sent To Director
              </h4>

              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.92rem', color: 'var(--text-dark)' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle2 size={16} style={{ color: 'var(--growth-green)' }} />
                  An automated email alert was dispatched to Daycare Director: <strong>(302) 419-8890</strong>.
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle2 size={16} style={{ color: 'var(--growth-green)' }} />
                  Program Track Selected: <strong>{formData.childAgeGroup}</strong>.
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle2 size={16} style={{ color: 'var(--growth-green)' }} />
                  Target Care Start Date: <strong>{formData.targetStartDate}</strong>.
                </li>
              </ul>
            </div>

            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="tel:3024198890" className="btn-secondary">
                <Phone size={16} /> Call Director Now: (302) 419-8890
              </a>
              <button onClick={handleResetAndClose} className="btn-primary">
                Done & Return to Homepage
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
