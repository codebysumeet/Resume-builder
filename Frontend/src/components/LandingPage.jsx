import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FileText, Sparkles, Zap, LayoutTemplate, ArrowRight, Star } from 'lucide-react';

export default function LandingPage() {
  const navigate = useNavigate();
  return (
    <div className="landing-page">
      <nav className="navbar">
        <div className="nav-logo">
          Resume.ai <span>Pro</span>
        </div>
        <div className="nav-links">
          <a href="#features">Features</a>
          <a href="#templates" onClick={(e) => { e.preventDefault(); navigate('/templates'); }}>Templates</a>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="hero-section">
        <div className="hero-content-left">
          <div className="badge-glow animate-fade-in-up">
            <Sparkles size={14} style={{ marginRight: "8px" }} /> Voted #1 AI Resume Builder
          </div>
          <h1 className="hero-title animate-fade-in-up delay-100">
            Land your dream job with a <span>perfect resume.</span>
          </h1>
          <p className="hero-subtitle animate-fade-in-up delay-200">
            Create a professional, ATS-friendly resume in minutes. Choose from simple, modern, and professional layouts powered by our state-of-the-art builder.
          </p>
          <div className="hero-actions animate-fade-in-up delay-300">
            <button onClick={() => navigate('/builder')} className="btn hero-btn-primary">
              Build your resume <ArrowRight size={18} />
            </button>
            <button
              onClick={() => navigate('/templates')}
              className="btn hero-btn-secondary"
            >
              View Templates
            </button>
          </div>
        </div>

        {/* Floating Visual Representation */}
        <div className="hero-visual animate-fade-in-up delay-400">
          <div className="glass-resume">
            <div className="gl-header"></div>
            <div className="gl-content-row">
              <div className="gl-avatar"></div>
              <div className="gl-lines">
                <div className="gl-line w-full"></div>
                <div className="gl-line w-3/4"></div>
              </div>
            </div>
            <div className="gl-lines" style={{ marginTop: '1rem' }}>
              <div className="gl-line w-full"></div>
              <div className="gl-line w-full"></div>
              <div className="gl-line w-1/2"></div>
            </div>
            <div className="gl-blocks">
              <div className="gl-block"></div>
              <div className="gl-block"></div>
            </div>
            <div className="sparkle-icon"><Sparkles size={24} color="#a855f7" /></div>
          </div>
          <div className="floating-badge badge-1"><Sparkles size={16} /> ATS Optimized</div>
          <div className="floating-badge badge-2"><Zap size={16} /> Instant Export</div>
        </div>
      </main>

      {/* Features Section */}
      <section id="features" className="features-container">
        <div className="section-header animate-fade-in-up">
          <h2>Why professionals choose us</h2>
          <p>Everything you need to build a resume that actually gets interviews.</p>
        </div>
        <div className="feature-grid">
          <div className="feat-card animate-fade-in-up delay-400">
            <Zap className="feat-icon" />
            <h3>Lightning Fast</h3>
            <p>Type locally in real-time. Experience instant rendering and zero lag.</p>
          </div>
          <div className="feat-card animate-fade-in-up delay-500">
            <Sparkles className="feat-icon" />
            <h3>AI Powered</h3>
            <p>Design beautiful layouts without needing to move a pixel manually.</p>
          </div>
          <div className="feat-card animate-fade-in-up delay-600">
            <LayoutTemplate className="feat-icon" />
            <h3>Premium Design</h3>
            <p>State-of-the-art Dribbble SaaS dual-column styling built-in.</p>
          </div>
          <div className="feat-card animate-fade-in-up delay-700">
            <FileText className="feat-icon" />
            <h3>ATS Friendly</h3>
            <p>Exports mathematically perfect A4 PDFs that parse flawlessly everywhere.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="section-header">
          <h2>Loved by job seekers</h2>
          <p>Read what our users have to say about their success.</p>
        </div>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="stars">
              {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#fbbf24" color="#fbbf24" />)}
            </div>
            <p className="testimonial-content">"This builder is incredible. I recreated my old resume in 5 minutes and the new design got me 3 interviews in a week. So smooth!"</p>
            <div className="testimonial-author">
              <div className="author-avatar" style={{ background: '#6366f1' }}>SD</div>
              <div className="author-info">
                <h4>Sarah Davis</h4>
                <p>Product Designer</p>
              </div>
            </div>
          </div>
          <div className="testimonial-card delay-100">
            <div className="stars">
              {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#fbbf24" color="#fbbf24" />)}
            </div>
            <p className="testimonial-content">"The ATS-friendly export actually works. Workday parsed every single word perfectly without me having to re-type my work history."</p>
            <div className="testimonial-author">
              <div className="author-avatar" style={{ background: '#a855f7' }}>MJ</div>
              <div className="author-info">
                <h4>Michael Johnson</h4>
                <p>Software Engineer</p>
              </div>
            </div>
          </div>
          <div className="testimonial-card delay-200">
            <div className="stars">
              {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#fbbf24" color="#fbbf24" />)}
            </div>
            <p className="testimonial-content">"I've tried standard templates on Word, but this web builder's modern templates are on another level. Exactly what I needed to stand out."</p>
            <div className="testimonial-author">
              <div className="author-avatar" style={{ background: '#ec4899' }}>ER</div>
              <div className="author-info">
                <h4>Emily Roberts</h4>
                <p>Marketing Manager</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="landing-footer">
        <p>© {new Date().getFullYear()} Resume.ai Pro. Built with ❤️ for professionals.</p>
      </footer>
    </div>
  );
}
