import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FileText, Sparkles, Zap, LayoutTemplate, ArrowRight } from 'lucide-react';

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
          <a href="#templates">Templates</a>
          <a href="#pricing">Pricing</a>
        </div>
      </nav>

      <main className="hero-section">
        <div className="hero-content">
          <div className="badge-glow animate-fade-in-up">
            <Sparkles size={14} style={{ marginRight: "8px" }} /> Voted #1 AI
            Resume Builder
          </div>
          <h1 className="hero-title animate-fade-in-up delay-100">
            Land your dream job with a <span>perfect resume.</span>
          </h1>
          <p className="hero-subtitle animate-fade-in-up delay-200" style={{ margin: '0 auto', textAlign: 'center' }}>
            Create a professional, ATS-friendly resume in minutes. It contains three types of resume simple, modern and professional.
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

          <div className="feature-grid">
            <div className="feat-card animate-fade-in-up delay-400">
              <Zap className="feat-icon" />
              <h3>Lightning Fast</h3>
              <p>
                Type locally in real-time. Experience instant rendering and zero
                lag.
              </p>
            </div>
            <div className="feat-card animate-fade-in-up delay-500">
              <Sparkles className="feat-icon" />
              <h3>AI Powered</h3>
              <p>
                Design beautiful layouts without needing to move a pixel
                manually.
              </p>
            </div>
            <div className="feat-card animate-fade-in-up delay-600">
              <LayoutTemplate className="feat-icon" />
              <h3>Premium Design</h3>
              <p>
                State-of-the-art Dribbble SaaS dual-column styling built-in.
              </p>
            </div>
            <div className="feat-card animate-fade-in-up delay-700">
              <FileText className="feat-icon" />
              <h3>ATS Friendly</h3>
              <p>
                Exports mathematically perfect A4 PDFs that parse flawlessly
                everywhere.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
