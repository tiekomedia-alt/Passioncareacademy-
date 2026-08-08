import React, { useState } from 'react';
import { X, Lock, AlertCircle, Plus, Edit2, Trash2, BookOpen, Calendar, ShieldCheck, LogOut, Save, Bell, CheckCircle } from 'lucide-react';

export default function AdminDashboard({ isOpen, onClose, blogs = [], setBlogs }) {
  const [emailInput, setEmailInput] = useState('');
  const [pinInput, setPinInput] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authError, setAuthError] = useState('');

  // Active Admin Tab: 'blogs' | 'tours' | 'announcements'
  const [activeAdminTab, setActiveAdminTab] = useState('blogs');

  // Announcement State
  const [announcementText, setAnnouncementText] = useState('Hours: Mon – Fri 6:30 AM – 6:00 PM');

  // Tour Requests Manager State
  const [tourRequests, setTourRequests] = useState([
    { id: '1', parentName: 'Sarah Jenkins', phone: '(302) 832-2622', date: 'August 12, 2026', childAge: 'Infant (8 months)', status: 'Pending' },
    { id: '2', parentName: 'Michael Brown', phone: '(302) 832-2622', date: 'August 14, 2026', childAge: 'Preschool (3 years)', status: 'Confirmed' }
  ]);

  // Blog Editor State
  const [editingBlog, setEditingBlog] = useState(null);
  const [blogFormData, setBlogFormData] = useState({
    title: '',
    category: 'Preschool Guidance',
    excerpt: '',
    content: '',
    image: '/IMG_3219.jpg',
    readTime: '4 min read',
    author: 'Director'
  });

  // Whitelisted Admin Emails
  const whitelistedEmails = [
    'tiekomedia@gmail.com',
    'passioncareone@gmail.com',
    'davidvanteko@gmail.com'
  ];

  // Configured Security Passcode PIN
  const SECRET_PIN = 'xQ7#mK92!vLpR4$w';

  const handleLogin = (e) => {
    e.preventDefault();
    const cleanEmail = emailInput.trim().toLowerCase();
    
    if (whitelistedEmails.includes(cleanEmail) && pinInput.trim() === SECRET_PIN) {
      setIsAuthenticated(true);
      setAuthError('');
    } else {
      setAuthError('Access Denied: Invalid administrator credentials or security passcode.');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setEmailInput('');
    setPinInput('');
    setAuthError('');
  };

  const handleSaveBlog = (e) => {
    e.preventDefault();
    if (!blogFormData.title || !blogFormData.content) {
      alert('Please fill out all required fields.');
      return;
    }

    if (editingBlog && editingBlog.id) {
      setBlogs(blogs.map(b => b.id === editingBlog.id ? { ...b, ...blogFormData } : b));
    } else {
      const newBlog = {
        id: Date.now().toString(),
        slug: blogFormData.title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
        date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
        ...blogFormData
      };
      setBlogs([newBlog, ...blogs]);
    }

    setEditingBlog(null);
    setBlogFormData({
      title: '',
      category: 'Preschool Guidance',
      excerpt: '',
      content: '',
      image: '/IMG_3219.jpg',
      readTime: '4 min read',
      author: 'Director'
    });
  };

  const handleEditClick = (blog) => {
    setEditingBlog(blog);
    setBlogFormData({
      title: blog.title || '',
      category: blog.category || 'Preschool Guidance',
      excerpt: blog.excerpt || '',
      content: blog.content || '',
      image: blog.image || '/IMG_3219.jpg',
      readTime: blog.readTime || '4 min read',
      author: blog.author || 'Director'
    });
  };

  const handleDeleteBlog = (id) => {
    if (window.confirm('Are you sure you want to delete this article?')) {
      setBlogs(blogs.filter(b => b.id !== id));
    }
  };

  const toggleTourStatus = (id) => {
    setTourRequests(tourRequests.map(t => t.id === id ? { ...t, status: t.status === 'Confirmed' ? 'Pending' : 'Confirmed' } : t));
  };

  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: 'rgba(15, 23, 42, 0.92)',
      backdropFilter: 'blur(10px)',
      zIndex: 4000,
      display: 'flex',
      alignItems: 'center',
      justify: 'center',
      padding: '1.5rem'
    }}>
      <div style={{
        backgroundColor: '#FFFFFF',
        borderRadius: 'var(--radius-lg)',
        maxWidth: isAuthenticated ? '950px' : '440px',
        width: '100%',
        maxHeight: '90vh',
        overflowY: 'auto',
        position: 'relative',
        boxShadow: 'var(--shadow-xl)',
        border: '1px solid var(--border-light)',
        padding: '2.25rem'
      }}>
        {/* Close Modal Button */}
        <button 
          onClick={onClose}
          style={{
            position: 'absolute', top: '1.25rem', right: '1.25rem',
            background: '#F1F5F9', border: 'none', color: 'var(--navy-dark)',
            width: '36px', height: '36px', borderRadius: '50%', cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center'
          }}
        >
          <X size={18} />
        </button>

        {/* 1. Centralized Secure Login Screen */}
        {!isAuthenticated ? (
          <div style={{ textAlign: 'center', padding: '1rem 0' }}>
            <div style={{ 
              width: '64px', height: '64px', borderRadius: '50%', 
              backgroundColor: 'var(--navy-dark)', color: '#FFFFFF',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 1.5rem',
              boxShadow: 'var(--shadow-md)'
            }}>
              <Lock size={28} />
            </div>

            <h3 style={{ fontSize: '1.6rem', fontWeight: '800', color: 'var(--navy-dark)', marginBottom: '0.4rem' }}>
              Admin Portal
            </h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '1.75rem' }}>
              Secure authentication for authorized administrators.
            </p>

            {authError && (
              <div style={{ 
                backgroundColor: '#FEF2F2', border: '1px solid #FEE2E2', color: '#DC2626', 
                padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', fontSize: '0.85rem',
                marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem', textAlign: 'left'
              }}>
                <AlertCircle size={16} style={{ flexShrink: 0 }} />
                <span>{authError}</span>
              </div>
            )}

            <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', textAlign: 'left', fontSize: '0.82rem', fontWeight: '700', color: 'var(--navy-dark)', marginBottom: '0.3rem' }}>
                  Admin Email Address
                </label>
                <input 
                  type="email"
                  required
                  placeholder="Enter administrator email"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  style={{
                    width: '100%', padding: '0.85rem 1.1rem',
                    borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)',
                    fontSize: '0.95rem', fontFamily: 'var(--font-body)'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', textAlign: 'left', fontSize: '0.82rem', fontWeight: '700', color: 'var(--navy-dark)', marginBottom: '0.3rem' }}>
                  Security Passcode
                </label>
                <input 
                  type="password"
                  required
                  placeholder="Enter Security Passcode"
                  value={pinInput}
                  onChange={(e) => setPinInput(e.target.value)}
                  style={{
                    width: '100%', padding: '0.85rem 1.1rem',
                    borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)',
                    fontSize: '0.95rem', fontFamily: 'var(--font-body)'
                  }}
                />
              </div>

              <button type="submit" className="btn-dark-pill" style={{ width: '100%', justifyContent: 'center', padding: '0.9rem', marginTop: '0.5rem' }}>
                <ShieldCheck size={18} /> Authenticate Admin
              </button>
            </form>
          </div>
        ) : (
          /* 2. Full Admin Dashboard Management View */
          <div>
            {/* Top Bar Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', borderBottom: '1px solid var(--border-light)', paddingBottom: '1.25rem', marginBottom: '1.5rem' }}>
              <div>
                <div style={{ fontSize: '0.75rem', fontWeight: '800', color: 'var(--growth-green)', display: 'flex', alignItems: 'center', gap: '0.3rem', textTransform: 'uppercase' }}>
                  <ShieldCheck size={14} /> Encrypted Administrator Session
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--navy-dark)', marginTop: '0.2rem' }}>
                  Control Dashboard
                </h3>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  Active user: <strong>{emailInput}</strong>
                </div>
              </div>

              <button 
                onClick={handleLogout} 
                style={{ 
                  background: 'none', border: '1px solid var(--border-light)', 
                  padding: '0.5rem 1rem', borderRadius: 'var(--radius-full)', 
                  fontSize: '0.82rem', fontWeight: '700', color: 'var(--action-red)', 
                  cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.4rem' 
                }}
              >
                <LogOut size={14} /> End Session
              </button>
            </div>

            {/* Admin Management Navigation Tabs */}
            <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '2rem', borderBottom: '1px solid var(--border-light)', paddingBottom: '0.75rem', flexWrap: 'wrap' }}>
              <button
                onClick={() => setActiveAdminTab('blogs')}
                style={{
                  padding: '0.55rem 1.25rem',
                  borderRadius: 'var(--radius-full)',
                  border: 'none',
                  backgroundColor: activeAdminTab === 'blogs' ? 'var(--navy-dark)' : '#F1F5F9',
                  color: activeAdminTab === 'blogs' ? '#FFFFFF' : 'var(--navy-dark)',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: '700',
                  fontSize: '0.88rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem'
                }}
              >
                <BookOpen size={16} /> Blog Articles ({blogs.length})
              </button>

              <button
                onClick={() => setActiveAdminTab('tours')}
                style={{
                  padding: '0.55rem 1.25rem',
                  borderRadius: 'var(--radius-full)',
                  border: 'none',
                  backgroundColor: activeAdminTab === 'tours' ? 'var(--navy-dark)' : '#F1F5F9',
                  color: activeAdminTab === 'tours' ? '#FFFFFF' : 'var(--navy-dark)',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: '700',
                  fontSize: '0.88rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem'
                }}
              >
                <Calendar size={16} /> Tour Requests ({tourRequests.length})
              </button>

              <button
                onClick={() => setActiveAdminTab('announcements')}
                style={{
                  padding: '0.55rem 1.25rem',
                  borderRadius: 'var(--radius-full)',
                  border: 'none',
                  backgroundColor: activeAdminTab === 'announcements' ? 'var(--navy-dark)' : '#F1F5F9',
                  color: activeAdminTab === 'announcements' ? '#FFFFFF' : 'var(--navy-dark)',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: '700',
                  fontSize: '0.88rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem'
                }}
              >
                <Bell size={16} /> Header Notice Bar
              </button>
            </div>

            {/* TAB 1: Blog Management */}
            {activeAdminTab === 'blogs' && (
              <div>
                <div style={{ backgroundColor: 'var(--canvas-bg)', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)', marginBottom: '2rem' }}>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: '800', color: 'var(--navy-dark)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    {editingBlog ? <Edit2 size={16} /> : <Plus size={16} />}
                    {editingBlog ? 'Edit Blog Article' : 'Create & Publish New SEO Article'}
                  </h4>

                  <form onSubmit={handleSaveBlog} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
                    <div style={{ gridColumn: '1 / -1' }}>
                      <label style={{ fontSize: '0.82rem', fontWeight: '700', color: 'var(--navy-dark)', display: 'block', marginBottom: '0.3rem' }}>Article Title *</label>
                      <input 
                        type="text" 
                        required 
                        placeholder="e.g. Early Childhood Preschool Readiness in Delaware"
                        value={blogFormData.title}
                        onChange={(e) => setBlogFormData({ ...blogFormData, title: e.target.value })}
                        style={{ width: '100%', padding: '0.7rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)', fontSize: '0.9rem' }}
                      />
                    </div>

                    <div>
                      <label style={{ fontSize: '0.82rem', fontWeight: '700', color: 'var(--navy-dark)', display: 'block', marginBottom: '0.3rem' }}>Category</label>
                      <select 
                        value={blogFormData.category}
                        onChange={(e) => setBlogFormData({ ...blogFormData, category: e.target.value })}
                        style={{ width: '100%', padding: '0.7rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)', fontSize: '0.9rem' }}
                      >
                        <option value="Preschool Guidance">Preschool Guidance</option>
                        <option value="Child Development">Child Development</option>
                        <option value="Infant & Toddler">Infant & Toddler</option>
                        <option value="After-School Program">After-School Program</option>
                        <option value="Parent Resources">Parent Resources</option>
                      </select>
                    </div>

                    <div>
                      <label style={{ fontSize: '0.82rem', fontWeight: '700', color: 'var(--navy-dark)', display: 'block', marginBottom: '0.3rem' }}>Read Time</label>
                      <input 
                        type="text" 
                        placeholder="e.g. 4 min read"
                        value={blogFormData.readTime}
                        onChange={(e) => setBlogFormData({ ...blogFormData, readTime: e.target.value })}
                        style={{ width: '100%', padding: '0.7rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)', fontSize: '0.9rem' }}
                      />
                    </div>

                    <div style={{ gridColumn: '1 / -1' }}>
                      <label style={{ fontSize: '0.82rem', fontWeight: '700', color: 'var(--navy-dark)', display: 'block', marginBottom: '0.3rem' }}>Short Excerpt (Search Preview)</label>
                      <input 
                        type="text" 
                        placeholder="Brief summary of the article..."
                        value={blogFormData.excerpt}
                        onChange={(e) => setBlogFormData({ ...blogFormData, excerpt: e.target.value })}
                        style={{ width: '100%', padding: '0.7rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)', fontSize: '0.9rem' }}
                      />
                    </div>

                    <div style={{ gridColumn: '1 / -1' }}>
                      <label style={{ fontSize: '0.82rem', fontWeight: '700', color: 'var(--navy-dark)', display: 'block', marginBottom: '0.3rem' }}>Full Article Body Content *</label>
                      <textarea 
                        required
                        rows={6}
                        placeholder="Write article paragraphs here..."
                        value={blogFormData.content}
                        onChange={(e) => setBlogFormData({ ...blogFormData, content: e.target.value })}
                        style={{ width: '100%', padding: '0.7rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)', fontSize: '0.9rem', fontFamily: 'var(--font-body)' }}
                      />
                    </div>

                    <div style={{ gridColumn: '1 / -1', display: 'flex', gap: '0.75rem', justifyContent: 'flex-end' }}>
                      {editingBlog && (
                        <button 
                          type="button" 
                          onClick={() => {
                            setEditingBlog(null);
                            setBlogFormData({ title: '', category: 'Preschool Guidance', excerpt: '', content: '', image: '/IMG_3219.jpg', readTime: '4 min read', author: 'Director' });
                          }}
                          style={{ padding: '0.75rem 1.25rem', borderRadius: 'var(--radius-full)', border: '1px solid var(--border-light)', background: '#FFF', fontWeight: '700', cursor: 'pointer' }}
                        >
                          Cancel Edit
                        </button>
                      )}
                      <button type="submit" className="btn-dark-pill" style={{ padding: '0.75rem 1.5rem', fontSize: '0.9rem' }}>
                        <Save size={16} /> {editingBlog ? 'Update Article' : 'Publish Article'}
                      </button>
                    </div>
                  </form>
                </div>

                {/* Published Articles List */}
                <h4 style={{ fontSize: '1.1rem', fontWeight: '800', color: 'var(--navy-dark)', marginBottom: '1rem' }}>
                  Published Blog Articles ({blogs.length})
                </h4>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {blogs.map((b) => (
                    <div key={b.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', backgroundColor: '#FFFFFF', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)', flexWrap: 'wrap', gap: '1rem' }}>
                      <div style={{ maxWidth: '600px' }}>
                        <span style={{ fontSize: '0.72rem', fontWeight: '800', color: '#0284C7', textTransform: 'uppercase' }}>{b.category}</span>
                        <h5 style={{ fontSize: '1.05rem', fontWeight: '800', color: 'var(--navy-dark)', margin: '0.2rem 0' }}>{b.title}</h5>
                        <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Published: {b.date} • {b.readTime}</div>
                      </div>

                      <div style={{ display: 'flex', gap: '0.5rem' }}>
                        <button 
                          onClick={() => handleEditClick(b)}
                          style={{ padding: '0.45rem 0.85rem', borderRadius: 'var(--radius-full)', border: '1px solid var(--border-light)', background: '#F8FAFC', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.8rem', fontWeight: '700' }}
                        >
                          <Edit2 size={13} /> Edit
                        </button>
                        <button 
                          onClick={() => handleDeleteBlog(b.id)}
                          style={{ padding: '0.45rem 0.85rem', borderRadius: 'var(--radius-full)', border: 'none', background: '#FEF2F2', color: '#DC2626', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.8rem', fontWeight: '700' }}
                        >
                          <Trash2 size={13} /> Delete
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 2: Tour Requests */}
            {activeAdminTab === 'tours' && (
              <div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: '800', color: 'var(--navy-dark)', marginBottom: '1rem' }}>
                  Scheduled Center Tour Appointments ({tourRequests.length})
                </h4>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {tourRequests.map((t) => (
                    <div key={t.id} style={{ padding: '1.25rem', backgroundColor: 'var(--canvas-bg)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.3rem' }}>
                          <h5 style={{ fontSize: '1.1rem', fontWeight: '800', color: 'var(--navy-dark)' }}>{t.parentName}</h5>
                          <span style={{ fontSize: '0.72rem', fontWeight: '800', padding: '0.2rem 0.6rem', borderRadius: 'var(--radius-full)', backgroundColor: t.status === 'Confirmed' ? '#DCFCE7' : '#FEF3C7', color: t.status === 'Confirmed' ? '#15803D' : '#D97706' }}>
                            {t.status}
                          </span>
                        </div>
                        <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                          📞 Phone: <strong>{t.phone}</strong> | 📅 Requested Date: <strong>{t.date}</strong> | 👶 Child Program: <strong>{t.childAge}</strong>
                        </div>
                      </div>

                      <button
                        onClick={() => toggleTourStatus(t.id)}
                        style={{ padding: '0.5rem 1rem', borderRadius: 'var(--radius-full)', border: 'none', backgroundColor: t.status === 'Confirmed' ? '#FEF2F2' : 'var(--navy-dark)', color: t.status === 'Confirmed' ? '#DC2626' : '#FFFFFF', fontWeight: '700', fontSize: '0.82rem', cursor: 'pointer' }}
                      >
                        {t.status === 'Confirmed' ? 'Mark as Pending' : 'Confirm Appointment'}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 3: Notice Bar Editor */}
            {activeAdminTab === 'announcements' && (
              <div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: '800', color: 'var(--navy-dark)', marginBottom: '1rem' }}>
                  Live Top Notification Bar Text
                </h4>

                <div style={{ backgroundColor: 'var(--canvas-bg)', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
                  <label style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--navy-dark)', display: 'block', marginBottom: '0.4rem' }}>
                    Center Status Notice / Announcement
                  </label>
                  <input 
                    type="text" 
                    value={announcementText}
                    onChange={(e) => setAnnouncementText(e.target.value)}
                    style={{ width: '100%', padding: '0.8rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)', fontSize: '0.95rem', marginBottom: '1rem' }}
                  />

                  <button 
                    onClick={() => alert('Top announcement bar text updated live!')}
                    className="btn-dark-pill" 
                    style={{ fontSize: '0.85rem', padding: '0.75rem 1.4rem' }}
                  >
                    <CheckCircle size={16} /> Save & Broadcast Notice
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
