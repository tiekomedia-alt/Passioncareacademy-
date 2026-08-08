import React, { useState } from 'react';
import { FileText, Download, ShieldCheck, Eye, CheckCircle2, AlertCircle } from 'lucide-react';
import { jsPDF } from 'jspdf';

export default function ComplianceHub() {
  const [selectedForm, setSelectedForm] = useState(null);

  const formsList = [
    {
      id: 'cacfp-eligibility',
      title: 'State of Delaware CACFP Income Eligibility Form',
      category: 'NUTRITION & STATE COMPLIANCE',
      description: 'Mandatory annual Delaware Child and Adult Care Food Program form required to maintain subsidized nutritious meal services.',
      isMandatory: true,
      fields: ['Child Full Name', 'Parent/Guardian Name', 'Household Size', 'Gross Monthly Income', 'SNAP/TANF Case #', 'Date & Parent Signature']
    },
    {
      id: 'trip-permission',
      title: 'Field Trip & Off-Site Activity Permission Slip',
      category: 'PARENTAL CONSENT',
      description: 'Authorization form for school-age and preschool supervised educational outings, transportation, and emergency contact details.',
      isMandatory: false,
      fields: ['Child Name', 'Emergency Contact Phone', 'Medical Allergies', 'Destination', 'Parent Signature']
    },
    {
      id: 'medical-emergency',
      title: 'Emergency Medical & Health Information Authorization',
      category: 'HEALTH & SAFETY',
      description: 'Comprehensive medical history, allergy list, pediatrician information, and emergency treatment consent form.',
      isMandatory: true,
      fields: ['Child Name', 'Pediatrician Phone', 'Emergency Food Allergies', 'Insurance Policy #', 'Parental Consent']
    },
    {
      id: 'enrollment-checklist',
      title: 'Delaware Early Childhood Enrollment Checklist',
      category: 'ADMINISTRATIVE',
      description: 'Required documentation checklist including immunization records, birth certificate, emergency contacts, and handbook agreement.',
      isMandatory: true,
      fields: ['Proof of Delaware Residency', 'Up-to-Date Shot Record', 'Physical Exam Form', 'Emergency Contacts List']
    }
  ];

  const handleDownloadPDF = (form) => {
    try {
      const doc = new jsPDF();
      
      // Header
      doc.setFillColor(15, 23, 42); // Navy
      doc.rect(0, 0, 210, 30, 'F');
      doc.setTextColor(255, 255, 255);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(18);
      doc.text('PASSION CARE ACADEMY', 15, 18);
      doc.setFontSize(10);
      doc.setFont('helvetica', 'normal');
      doc.text('State of Delaware Certified Early Education & Childcare Center', 15, 24);
      doc.text('Phone: (302) 832-2622 | Director: (302) 419-8890', 115, 24);

      // Title Section
      doc.setTextColor(15, 23, 42);
      doc.setFontSize(14);
      doc.setFont('helvetica', 'bold');
      doc.text(form.title.toUpperCase(), 15, 45);

      doc.setDrawColor(208, 18, 27);
      doc.setLineWidth(0.8);
      doc.line(15, 48, 195, 48);

      // Description
      doc.setFontSize(10);
      doc.setFont('helvetica', 'italic');
      doc.setTextColor(71, 85, 105);
      doc.text(form.description, 15, 56, { maxWidth: 180 });

      // Form Fields Area
      let y = 72;
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(0, 51, 128);
      doc.text('REQUIRED INFORMATION & FORM SECTIONS:', 15, y);
      y += 8;

      doc.setFont('helvetica', 'normal');
      doc.setTextColor(15, 23, 42);

      form.fields.forEach((field, index) => {
        doc.setFillColor(245, 247, 250);
        doc.rect(15, y, 180, 12, 'F');
        doc.rect(15, y, 180, 12, 'S');
        doc.text(`${index + 1}. ${field}:`, 18, y + 8);
        doc.setDrawColor(200, 200, 200);
        doc.line(75, y + 9, 190, y + 9);
        y += 16;
      });

      // Signature Block
      y += 10;
      doc.setFillColor(235, 245, 255);
      doc.rect(15, y, 180, 35, 'F');
      doc.setFont('helvetica', 'bold');
      doc.text('PARENT / GUARDIAN SIGNATURE & VERIFICATION', 20, y + 10);
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(9);
      doc.text('I hereby certify that all information provided above is true and accurate.', 20, y + 18);
      doc.text('Signature: ___________________________    Date: ______________', 20, y + 28);

      // Save PDF
      doc.save(`${form.id}-passion-care-academy.pdf`);
    } catch (err) {
      console.error('PDF generation error:', err);
      alert(`Downloading ${form.title}...`);
    }
  };

  return (
    <section id="compliance" style={{ padding: '4.5rem 0', backgroundColor: 'var(--canvas-bg)' }}>
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
            <ShieldCheck size={14} /> State of DE Compliance & CACFP Center
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 4.5vw, 2.8rem)', fontWeight: '800', color: 'var(--navy-dark)', marginBottom: '0.75rem' }}>
            Nutrition & State Regulatory Forms
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
            Transparent policy distribution for enrolled and prospective Delaware families. Download, complete, or print official CACFP meal eligibility and permission documents directly.
          </p>
        </div>

        {/* Form Cards Grid matching reference screenshot */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
          gap: '2rem' 
        }}>
          {formsList.map((form) => (
            <div 
              key={form.id}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--radius-lg)',
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                justify: 'space-between',
                border: '1px solid var(--border-light)',
                borderTop: '5px solid var(--action-red)', // Red top accent border matching reference image!
                boxShadow: 'var(--shadow-sm)'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '0.72rem', fontWeight: '700', color: 'var(--text-light)', letterSpacing: '0.5px' }}>
                    {form.category}
                  </span>
                  {form.isMandatory && (
                    <span className="badge-red-soft" style={{ fontSize: '0.72rem' }}>
                      Mandatory Form
                    </span>
                  )}
                </div>

                <h3 style={{ fontSize: '1.3rem', fontWeight: '800', color: 'var(--navy-dark)', marginBottom: '0.75rem', lineHeight: '1.3' }}>
                  {form.title}
                </h3>

                <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', marginBottom: '1.25rem', lineHeight: '1.5' }}>
                  {form.description}
                </p>

                {/* Inner Grey Card for Form Sections matching reference screenshot */}
                <div style={{ backgroundColor: '#F8FAFC', padding: '1rem', borderRadius: 'var(--radius-md)', marginBottom: '1.5rem', border: '1px solid #F1F5F9' }}>
                  <div style={{ fontSize: '0.78rem', fontWeight: '700', color: 'var(--navy-dark)', marginBottom: '0.4rem', textTransform: 'uppercase' }}>
                    Required Form Sections:
                  </div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    {form.fields.map((f, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.25rem' }}>
                        <span style={{ color: 'var(--navy-dark)' }}>–</span> {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Buttons Row matching reference image */}
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <button
                  onClick={() => setSelectedForm(form)}
                  className="btn-outline-pill"
                  style={{ flex: 1, justifyContent: 'center', fontSize: '0.88rem', padding: '0.65rem 1rem' }}
                >
                  <Eye size={16} /> Preview
                </button>

                <button
                  onClick={() => handleDownloadPDF(form)}
                  className="btn-red-pill"
                  style={{ flex: 1.2, justifyContent: 'center', fontSize: '0.88rem', padding: '0.65rem 1rem' }}
                >
                  <Download size={16} /> Download PDF
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CACFP State Guarantee Card */}
        <div style={{ 
          marginTop: '3.5rem', 
          backgroundColor: '#FFFFFF', 
          borderRadius: 'var(--radius-lg)', 
          padding: '2rem', 
          border: '1px solid var(--border-light)',
          display: 'flex',
          alignItems: 'center',
          gap: '1.5rem',
          boxShadow: 'var(--shadow-sm)',
          flexWrap: 'wrap'
        }}>
          <div style={{ width: '44px', height: '44px', borderRadius: '50%', backgroundColor: 'var(--blue-sky-badge)', color: '#0284C7', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <CheckCircle2 size={24} />
          </div>
          <div style={{ flex: 1 }}>
            <h4 style={{ fontSize: '1.05rem', fontWeight: '800', color: 'var(--navy-dark)', marginBottom: '0.25rem' }}>
              Delaware Child and Adult Care Food Program (CACFP) Compliance Guarantee
            </h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
              In accordance with Federal civil rights law and USDA regulations, Passion Care Academy provides meals without discrimination regardless of race, color, national origin, sex, disability, or age.
            </p>
          </div>
        </div>
      </div>

      {/* Form Preview Modal */}
      {selectedForm && (
        <div style={{
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(15, 23, 42, 0.75)',
          backdropFilter: 'blur(4px)',
          zIndex: 2500,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: '1rem'
        }}>
          <div style={{
            backgroundColor: '#FFFFFF',
            borderRadius: 'var(--radius-lg)',
            width: '100%', maxWidth: '600px', maxHeight: '90vh', overflowY: 'auto',
            padding: '2rem', boxShadow: 'var(--shadow-lg)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', borderBottom: '1px solid var(--border-light)', paddingBottom: '1rem' }}>
              <div>
                <span className="badge-sky" style={{ fontSize: '0.72rem', marginBottom: '0.25rem' }}>Document Preview</span>
                <h3 style={{ fontSize: '1.3rem', fontWeight: '800', color: 'var(--navy-dark)' }}>{selectedForm.title}</h3>
              </div>
              <button onClick={() => setSelectedForm(null)} style={{ background: 'none', border: 'none', fontSize: '1.4rem', cursor: 'pointer', color: 'var(--text-muted)' }}>
                ✕
              </button>
            </div>

            <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', marginBottom: '1.25rem' }}>
              {selectedForm.description}
            </p>

            <div style={{ border: '2px dashed var(--border-light)', borderRadius: 'var(--radius-md)', padding: '1.25rem', backgroundColor: '#F8FAFC', marginBottom: '1.5rem' }}>
              <h4 style={{ fontSize: '0.95rem', fontWeight: '700', color: 'var(--navy-dark)', marginBottom: '0.85rem' }}>
                Required Fields to Complete:
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {selectedForm.fields.map((field, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.5rem 0.75rem', backgroundColor: '#FFFFFF', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)' }}>
                    <span style={{ fontSize: '0.88rem', fontWeight: '600' }}>{idx + 1}. {field}</span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-light)', fontStyle: 'italic' }}>Required</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
              <button onClick={() => setSelectedForm(null)} className="btn-outline-pill">
                Close
              </button>
              <button onClick={() => { handleDownloadPDF(selectedForm); setSelectedForm(null); }} className="btn-red-pill">
                <Download size={16} /> Download Form PDF
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
