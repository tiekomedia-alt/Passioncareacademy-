import React, { useState } from 'react';
import { Clock, Calendar, ArrowRight, X, User } from 'lucide-react';

export default function BlogSection({ blogs = [] }) {
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Preschool Guidance', 'Child Development', 'Infant & Toddler', 'After-School Program', 'Parent Resources'];

  const filteredBlogs = activeCategory === 'All'
    ? blogs
    : blogs.filter(b => b.category === activeCategory);

  return (
    <section id="blog" style={{ padding: '4.5rem 0', backgroundColor: 'var(--canvas-bg)' }}>
      <div className="container">
        {/* Section Header (Replaced with Blogs as Requested) */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 2.5rem' }}>
          <h2 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.2rem)', fontWeight: '800', color: 'var(--navy-dark)', marginBottom: '0.75rem' }}>
            Blogs
          </h2>

          {/* Category Filter Tabs */}
          <div style={{ 
            display: 'inline-flex', 
            gap: '0.5rem', 
            backgroundColor: '#FFFFFF', 
            padding: '0.4rem', 
            borderRadius: 'var(--radius-full)', 
            border: '1px solid var(--border-light)',
            marginTop: '1rem',
            maxWidth: '100%',
            overflowX: 'auto'
          }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '0.5rem 1.1rem',
                  borderRadius: 'var(--radius-full)',
                  border: 'none',
                  backgroundColor: activeCategory === cat ? 'var(--navy-dark)' : 'transparent',
                  color: activeCategory === cat ? '#FFFFFF' : 'var(--text-dark)',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: '700',
                  fontSize: '0.85rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  whiteSpace: 'nowrap'
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Cards Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
          gap: '2rem' 
        }}>
          {filteredBlogs.map((blog) => (
            <article 
              key={blog.id}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                border: '1px solid var(--border-light)',
                boxShadow: 'var(--shadow-sm)',
                display: 'flex',
                flexDirection: 'column',
                justify: 'space-between',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                cursor: 'pointer'
              }}
              onClick={() => setSelectedBlog(blog)}
            >
              <div>
                {/* Featured Image */}
                <div style={{ height: '200px', overflow: 'hidden', position: 'relative' }}>
                  <img 
                    src={blog.image} 
                    alt={blog.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <span style={{
                    position: 'absolute',
                    top: '1rem',
                    left: '1rem',
                    backgroundColor: 'rgba(15, 23, 42, 0.85)',
                    backdropFilter: 'blur(4px)',
                    color: '#FFFFFF',
                    fontSize: '0.72rem',
                    fontWeight: '800',
                    padding: '0.35rem 0.75rem',
                    borderRadius: 'var(--radius-full)',
                    textTransform: 'uppercase'
                  }}>
                    {blog.category}
                  </span>
                </div>

                {/* Content Body */}
                <div style={{ padding: '1.75rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                      <Calendar size={13} style={{ color: '#0284C7' }} /> {blog.date}
                    </span>
                    <span>•</span>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                      <Clock size={13} style={{ color: '#0284C7' }} /> {blog.readTime}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--navy-dark)', marginBottom: '0.75rem', lineHeight: '1.35' }}>
                    {blog.title}
                  </h3>

                  <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '1.25rem' }}>
                    {blog.excerpt}
                  </p>
                </div>
              </div>

              <div style={{ padding: '0 1.75rem 1.75rem' }}>
                <button 
                  style={{ 
                    background: 'none', 
                    border: 'none', 
                    color: '#0284C7', 
                    fontWeight: '800', 
                    fontSize: '0.9rem', 
                    display: 'inline-flex', 
                    alignItems: 'center', 
                    gap: '0.4rem',
                    cursor: 'pointer',
                    padding: 0
                  }}
                >
                  Read Full Guide <ArrowRight size={16} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Full Article Reader Modal */}
      {selectedBlog && (
        <div style={{
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(15, 23, 42, 0.85)',
          backdropFilter: 'blur(6px)',
          zIndex: 3000,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '1.5rem'
        }}>
          <div style={{
            backgroundColor: '#FFFFFF',
            borderRadius: 'var(--radius-lg)',
            maxWidth: '750px',
            width: '100%',
            maxHeight: '90vh',
            overflowY: 'auto',
            position: 'relative',
            boxShadow: 'var(--shadow-xl)',
            border: '1px solid var(--border-light)'
          }}>
            {/* Close Button */}
            <button
              onClick={() => setSelectedBlog(null)}
              style={{
                position: 'absolute',
                top: '1.25rem',
                right: '1.25rem',
                background: 'rgba(15, 23, 42, 0.6)',
                color: '#FFFFFF',
                border: 'none',
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justify: 'center',
                zIndex: 10
              }}
            >
              <X size={20} />
            </button>

            {/* Article Image Banner */}
            <div style={{ height: '260px', overflow: 'hidden', position: 'relative' }}>
              <img 
                src={selectedBlog.image} 
                alt={selectedBlog.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div style={{
                position: 'absolute',
                bottom: 0, left: 0, right: 0,
                background: 'linear-gradient(to top, rgba(15, 23, 42, 0.9) 0%, transparent 100%)',
                padding: '2rem 2rem 1rem',
                color: '#FFFFFF'
              }}>
                <span className="badge-sky" style={{ marginBottom: '0.5rem' }}>{selectedBlog.category}</span>
                <h2 style={{ fontSize: '1.6rem', fontWeight: '800', color: '#FFFFFF', lineHeight: '1.3' }}>
                  {selectedBlog.title}
                </h2>
              </div>
            </div>

            {/* Article Body */}
            <div style={{ padding: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-light)', paddingBottom: '1rem' }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', fontWeight: '700', color: 'var(--navy-dark)' }}>
                  <User size={15} style={{ color: '#0284C7' }} /> {selectedBlog.author}
                </span>
                <span>•</span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                  <Calendar size={15} style={{ color: '#0284C7' }} /> {selectedBlog.date}
                </span>
                <span>•</span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                  <Clock size={15} style={{ color: '#0284C7' }} /> {selectedBlog.readTime}
                </span>
              </div>

              {/* Formatted Article Content */}
              <div style={{ color: 'var(--text-dark)', fontSize: '1rem', lineHeight: '1.7', whiteSpace: 'pre-line' }}>
                {selectedBlog.content}
              </div>

              <div style={{ marginTop: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-light)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ fontSize: '0.88rem', fontWeight: '700', color: 'var(--navy-dark)' }}>
                  Passion Care Academy | Bear, DE
                </div>
                <button
                  onClick={() => setSelectedBlog(null)}
                  className="btn-dark-pill"
                  style={{ fontSize: '0.85rem', padding: '0.6rem 1.25rem' }}
                >
                  Close Article
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
