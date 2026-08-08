import React, { useState, useEffect } from 'react';
import { X, Calendar, Phone, Mail, User, Search, Download, CheckCircle, Clock, Trash2, Filter } from 'lucide-react';

export default function AdminTourViewer({ isOpen, onClose }) {
  const [tours, setTours] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');

  useEffect(() => {
    if (isOpen) {
      loadTours();
    }
  }, [isOpen]);

  const loadTours = () => {
    const stored = JSON.parse(localStorage.getItem('passion_care_tours') || '[]');
    // Seed default sample tours if empty for immediate admin viewing demonstration
    if (stored.length === 0) {
      const defaultSamples = [
        {
          id: 'TOUR-1700000001',
          parentName: 'Marcus Vance',
          phone: '(302) 419-5522',
          email: 'marcus.vance@example.com',
          childAgeGroup: 'Preschool (3-5 yrs)',
          tourDate: '2026-08-10',
          tourTime: '10:00 AM',
          targetStartDate: '2026-09-01',
          specialNotes: 'Interested in 3 CACFP daily meals details.',
          status: 'Pending Review',
          submittedAt: '8/6/2026, 9:30 AM'
        },
        {
          id: 'TOUR-1700000002',
          parentName: 'Elena Rostova',
          phone: '(302) 832-1100',
          email: 'elena.r@example.com',
          childAgeGroup: 'After-School Care (K–6th Grade)',
          tourDate: '2026-08-11',
          tourTime: '02:30 PM',
          targetStartDate: '2026-08-25',
          specialNotes: 'Needs homework assistance for 2nd grader.',
          status: 'Confirmed',
          submittedAt: '8/6/2026, 11:15 AM'
        }
      ];
      localStorage.setItem('passion_care_tours', JSON.stringify(defaultSamples));
      setTours(defaultSamples);
    } else {
      setTours(stored);
    }
  };

  const updateStatus = (id, newStatus) => {
    const updated = tours.map(t => t.id === id ? { ...t, status: newStatus } : t);
    setTours(updated);
    localStorage.setItem('passion_care_tours', JSON.stringify(updated));
  };

  const deleteTour = (id) => {
    if (confirm('Delete this tour request record?')) {
      const updated = tours.filter(t => t.id !== id);
      setTours(updated);
      localStorage.setItem('passion_care_tours', JSON.stringify(updated));
    }
  };

  const exportCSV = () => {
    const headers = ['ID,Parent Name,Phone,Email,Child Age Group,Tour Date,Tour Time,Target Start Date,Status,Submitted At'];
    const rows = tours.map(t => `"${t.id}","${t.parentName}","${t.phone}","${t.email}","${t.childAgeGroup}","${t.tourDate}","${t.tourTime}","${t.targetStartDate}","${t.status}","${t.submittedAt}"`);
    const csvContent = 'data:text/csv;charset=utf-8,' + [headers, ...rows].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `passion-care-tours-export.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!isOpen) return null;

  const filteredTours = tours.filter(t => {
    const matchesSearch = t.parentName.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          t.phone.includes(searchTerm) || 
                          t.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'All' || t.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.75)',
      backdropFilter: 'blur(6px)',
      zIndex: 2800,
      display: 'flex',
      alignItems: 'center',
      justify: 'center',
      padding: '1rem'
    }}>
      <div style={{
        backgroundColor: '#FFFFFF',
        borderRadius: 'var(--radius-lg)',
        width: '100%',
        maxWidth: '1000px',
        maxHeight: '92vh',
        overflowY: 'auto',
        boxShadow: 'var(--shadow-xl)',
        position: 'relative'
      }}>
        {/* Header */}
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
              Internal Administrative Portal
            </span>
            <h3 style={{ fontSize: '1.4rem', fontWeight: '800', margin: 0, color: '#FFF' }}>
              Tour Requests & Inquiry Manager
            </h3>
          </div>
          <button 
            onClick={onClose}
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

        {/* Filters & Actions Bar */}
        <div style={{ padding: '1.5rem 2rem 1rem', borderBottom: '1px solid var(--border-light)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', flex: 1 }}>
            <div style={{ position: 'relative', minWidth: '240px' }}>
              <Search size={18} style={{ position: 'absolute', left: '0.85rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-light)' }} />
              <input
                type="text"
                placeholder="Search parent name, phone..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.6rem 0.85rem 0.6rem 2.5rem',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-light)',
                  fontSize: '0.9rem'
                }}
              />
            </div>

            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              style={{
                padding: '0.6rem 1rem',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-light)',
                fontSize: '0.9rem',
                backgroundColor: '#FFF'
              }}
            >
              <option value="All">All Statuses</option>
              <option value="Pending Review">Pending Review</option>
              <option value="Confirmed">Confirmed</option>
              <option value="Completed">Completed</option>
            </select>
          </div>

          <button onClick={exportCSV} className="btn-secondary" style={{ fontSize: '0.88rem' }}>
            <Download size={16} /> Export CSV Report
          </button>
        </div>

        {/* Table of Tour Requests */}
        <div style={{ padding: '1.5rem 2rem', overflowX: 'auto' }}>
          {filteredTours.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '3rem 1rem', color: 'var(--text-muted)' }}>
              No tour requests match your search criteria.
            </div>
          ) : (
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
              <thead>
                <tr style={{ backgroundColor: 'var(--canvas-bg)', borderBottom: '2px solid var(--border-light)', textAlign: 'left' }}>
                  <th style={{ padding: '0.75rem 1rem' }}>Parent & Contact</th>
                  <th style={{ padding: '0.75rem 1rem' }}>Age Track</th>
                  <th style={{ padding: '0.75rem 1rem' }}>Tour Date & Time</th>
                  <th style={{ padding: '0.75rem 1rem' }}>Target Start</th>
                  <th style={{ padding: '0.75rem 1rem' }}>Status</th>
                  <th style={{ padding: '0.75rem 1rem', textAlign: 'right' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredTours.map((tour) => (
                  <tr key={tour.id} style={{ borderBottom: '1px solid var(--border-light)' }}>
                    <td style={{ padding: '0.85rem 1rem' }}>
                      <div style={{ fontWeight: '700', color: 'var(--text-dark)' }}>{tour.parentName}</div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--blue-primary)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                        <Phone size={12} /> {tour.phone}
                      </div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{tour.email}</div>
                    </td>

                    <td style={{ padding: '0.85rem 1rem' }}>
                      <span className="badge-blue" style={{ fontSize: '0.75rem' }}>
                        {tour.childAgeGroup}
                      </span>
                    </td>

                    <td style={{ padding: '0.85rem 1rem' }}>
                      <div style={{ fontWeight: '600', color: 'var(--text-dark)' }}>{tour.tourDate}</div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--growth-green)', fontWeight: '700' }}>{tour.tourTime}</div>
                    </td>

                    <td style={{ padding: '0.85rem 1rem', fontWeight: '600' }}>
                      {tour.targetStartDate}
                    </td>

                    <td style={{ padding: '0.85rem 1rem' }}>
                      <select
                        value={tour.status}
                        onChange={(e) => updateStatus(tour.id, e.target.value)}
                        style={{
                          padding: '0.35rem 0.65rem',
                          borderRadius: 'var(--radius-full)',
                          border: '1px solid var(--border-light)',
                          fontSize: '0.78rem',
                          fontWeight: '700',
                          backgroundColor: tour.status === 'Confirmed' ? 'var(--growth-green-bg)' : '#FEF3C7',
                          color: tour.status === 'Confirmed' ? 'var(--growth-green)' : '#D97706'
                        }}
                      >
                        <option value="Pending Review">Pending Review</option>
                        <option value="Confirmed">Confirmed</option>
                        <option value="Completed">Completed</option>
                      </select>
                    </td>

                    <td style={{ padding: '0.85rem 1rem', textAlign: 'right' }}>
                      <button 
                        onClick={() => deleteTour(tour.id)}
                        style={{ background: 'none', border: 'none', color: 'var(--action-red)', cursor: 'pointer', padding: '0.3rem' }}
                        title="Delete record"
                      >
                        <Trash2 size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}
