import React, { useState } from 'react';
import { FileText, Download, ShieldCheck, Eye, CheckCircle2, AlertCircle, Printer } from 'lucide-react';
import { jsPDF } from 'jspdf';

export default function ComplianceHub() {
  const [selectedForm, setSelectedForm] = useState(null);

  const formsList = [
    {
      id: 'cacfp-eligibility',
      title: 'State of Delaware CACFP Income Eligibility Form',
      category: 'Nutrition & State Compliance',
      description: 'Mandatory annual Delaware Child and Adult Care Food Program form required to maintain subsidized nutritious meal services.',
      isMandatory: true,
      fileSize: '240 KB',
      fields: ['Child Full Name', 'Parent/Guardian Name', 'Household Size', 'Gross Monthly Income', 'SNAP/TANF Case #', 'Date & Parent Signature']
    },
    {
      id: 'trip-permission',
      title: 'Field Trip & Off-Site Activity Permission Slip',
      category: 'Parental Consent',
      description: 'Authorization form for school-age and preschool supervised educational outings, transportation, and emergency contact details.',
      isMandatory: false,
      fileSize: '180 KB',
      fields: ['Child Name', 'Destination', 'Emergency Contact Phone', 'Medical Allergies', 'Parent Signature']
    },
    {
      id: 'medical-emergency',
      title: 'Emergency Medical & Health Information Authorization',
      category: 'Health & Safety',
      description: 'Comprehensive medical history, allergy list, physician information, and emergency treatment consent form.',
      isMandatory: true,
      fileSize: '310 KB',
      fields: ['Child Name', 'Pediatrician Phone', 'Preferred Hospital', 'Allergies/Medications', 'Insurance Policy #']
    },
    {
      id: 'enrollment-checklist',
      title: 'Delaware Early Childhood Enrollment Checklist',
      category: 'Administrative',
      description: 'Required documentation checklist including immunization records, birth certificate, emergency contacts, and handbook agreement.',
      isMandatory: true,
      fileSize: '150 KB',
      fields: ['Proof of Delaware Residency', 'Up-to-Date Shot Record', 'Physical Exam Form', 'Emergency Contacts List']
    }
  ];

  // Function to generate and download official PDF document
  const handleDownloadPDF = (form) => {
    try {
      const doc = new jsPDF();
      
      // Header
      doc.setFillColor(0, 76, 179); // Deep Blue
      doc.rect(0, 0, 210, 30, 'F');
      doc.setTextColor(255, 255, 255);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(18);
      doc.text('PASSION CARE ACADEMY', 15, 18);
      doc.setFontSize(10);
      doc.setFont('helvetica', 'normal');
      doc.text('State of Delaware Certified Early Education & Childcare Center', 15, 24);
      doc.text('Phone: (302) 832-2622 | Director: (302) 419-8890', 120, 24);

      // Title Section
      doc.setTextColor(26, 26, 26);
      doc.setFontSize(14);
      doc.setFont('helvetica', 'bold');
      doc.text(form.title.toUpperCase(), 15, 45);

      doc.setDrawColor(208, 18, 27);
      doc.setLineWidth(0.8);
      doc.line(15, 48, 195, 48);

      // Description
      doc.setFontSize(10);
      doc.setFont('helvetica', 'italic');
      doc.setTextColor(74, 85, 104);
      doc.text(form.description, 15, 56, { maxWidth: 180 });

      // Form Fields Area
      let y = 72;
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(0, 76, 179);
      doc.text('REQUIRED INFORMATION & FORM SECTIONS:', 15, y);
      y += 8;

      doc.setFont('helvetica', 'normal');
      doc.setTextColor(26, 26, 26);

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

      // Footer
      doc.setFontSize(8);
      doc.setTextColor(113, 128, 150);
      doc.text('Passion Care Academy - Delaware CACFP & State Compliance Office', 15, 285);
      doc.text('Page 1 of 1', 180, 285);

      // Save PDF
      doc.save(`${form.id}-passion-care-academy.pdf`);
    } catch (err) {
      console.error('PDF generation error:', err);
      alert(`Downloading ${form.title}...`);
    }
  };

  return (
    <section id="compliance" style={{ padding: '5rem 0', backgroundColor: 'var(--canvas-bg)' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3.5rem' }}>
          <span className="badge-green" style={{ marginBottom: '0.75rem' }}>
            <ShieldCheck size={14} /> State Compliance & CACFP Center
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: '800', color: 'var(--blue-dark)', marginBottom: '1rem' }}>
            Nutrition & State Regulatory Forms
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)' }}>
            Transparent policy distribution for enrolled and prospective Delaware families. Download, complete, or print official CACFP meal eligibility and permission documents directly.
          </p>
        </div>

        {/* Forms Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
          gap: '2rem' 
        }}>
          {formsList.map((form) => (
            <div 
              key={form.id}
              className="card-glass"
              style={{
                backgroundColor: '#FFFFFF',
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                justify: 'space-between',
                borderTop: form.isMandatory ? '4px solid var(--action-red)' : '4px solid var(--blue-primary)'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '0.78rem', fontWeight: '700', textTransform: 'uppercase', color: 'var(--blue-primary)', letterSpacing: '0.5px' }}>
                    {form.category}
                  </span>
                  {form.isMandatory && (
                    <span style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--action-red)', backgroundColor: '#FEE2E2', padding: '0.2rem 0.6rem', borderRadius: 'var(--radius-full)' }}>
                      Mandatory Form
                    </span>
                  )}
                </div>

                <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--text-dark)', marginBottom: '0.75rem', lineHeight: '1.3' }}>
                  {form.title}
                </h3>

                <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', marginBottom: '1.25rem', lineHeight: '1.5' }}>
                  {form.description}
                </p>

                {/* Form Fields Summary */}
                <div style={{ backgroundColor: 'var(--canvas-sky)', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', marginBottom: '1.5rem' }}>
                  <div style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--blue-primary)', marginBottom: '0.35rem' }}>
                    Required Form Sections:
                  </div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '0.85rem', color: 'var(--text-dark)' }}>
                    {form.fields.map((f, i) => (
                      <li key={i} style={{ display: 'inline-block', marginRight: '0.75rem', marginBottom: '0.25rem' }}>
                        • {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <button
                  onClick={() => setSelectedForm(form)}
                  className="btn-outline"
                  style={{ flex: 1, justifyContent: 'center', fontSize: '0.88rem' }}
                >
                  <Eye size={16} /> Preview
                </button>

                <button
                  onClick={() => handleDownloadPDF(form)}
                  className="btn-primary"
                  style={{ flex: 1.3, justifyContent: 'center', fontSize: '0.88rem', padding: '0.7rem 1rem' }}
                >
                  <Download size={16} /> Download PDF
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CACFP State Notice Banner */}
        <div style={{ 
          marginTop: '3.5rem', 
          backgroundColor: '#FFFFFF', 
          borderRadius: 'var(--radius-lg)', 
          padding: '2rem', 
          border: '1px solid var(--border-light)',
          display: 'flex',
          alignItems: 'center',
          gap: '1.5rem',
          flexWrap: 'wrap'
        }}>
          <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'var(--growth-green-bg)', color: 'var(--growth-green)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <CheckCircle2 size={24} />
          </div>
          <div style={{ flex: 1 }}>
            <h4 style={{ fontSize: '1.1rem', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '0.25rem' }}>
              Delaware Child and Adult Care Food Program (CACFP) Compliance Guarantee
            </h4>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)' }}>
              In accordance with Federal civil rights law and U.S. Department of Agriculture (USDA) civil rights regulations, Passion Care Academy provides meals without discrimination regardless of race, color, national origin, sex, disability, or age.
            </p>
          </div>
        </div>
      </div>

      {/* Form Preview Modal */}
      {selectedForm && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          zIndex: 2000,
          display: 'flex',
          alignItems: 'center',
          justify: 'center',
          padding: '1rem'
        }}>
          <div style={{
            backgroundColor: '#FFFFFF',
            borderRadius: 'var(--radius-lg)',
            width: '100%',
            maxWidth: '650px',
            maxHeight: '90vh',
            overflowY: 'auto',
            padding: '2rem',
            boxShadow: 'var(--shadow-xl)',
            position: 'relative'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', borderBottom: '2px solid var(--border-light)', paddingBottom: '1rem' }}>
              <div>
                <span className="badge-blue" style={{ fontSize: '0.75rem', marginBottom: '0.25rem' }}>Document Preview</span>
                <h3 style={{ fontSize: '1.35rem', fontWeight: '800', color: 'var(--blue-dark)' }}>{selectedForm.title}</h3>
              </div>
              <button 
                onClick={() => setSelectedForm(null)}
                style={{ background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer', color: 'var(--text-muted)' }}
              >
                ✕
              </button>
            </div>

            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
              {selectedForm.description}
            </p>

            <div style={{ border: '2px dashed var(--blue-light)', borderRadius: 'var(--radius-md)', padding: '1.5rem', backgroundColor: 'var(--canvas-bg)', marginBottom: '1.5rem' }}>
              <h4 style={{ fontSize: '1rem', fontWeight: '700', color: 'var(--blue-primary)', marginBottom: '1rem' }}>
                Required Fields to Complete:
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {selectedForm.fields.map((field, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.5rem 0.75rem', backgroundColor: '#FFFFFF', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)' }}>
                    <span style={{ fontSize: '0.9rem', fontWeight: '600' }}>{idx + 1}. {field}</span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-light)', fontStyle: 'italic' }}>Required</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
              <button onClick={() => setSelectedForm(null)} className="btn-outline">
                Close Preview
              </button>
              <button onClick={() => { handleDownloadPDF(selectedForm); setSelectedForm(null); }} className="btn-primary">
                <Download size={18} /> Download Form PDF
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
