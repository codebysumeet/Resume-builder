import { useNavigate } from 'react-router-dom';
import LivePreview from './LivePreview';

const dummyData = {
  personalInfo: {
    fullName: 'Jane Doe',
    jobTitle: 'Software Engineer',
    email: 'jane.doe@example.com',
    phone: '+1 (555) 123-4567',
    location: 'New York, NY',
    website: 'linkedin.com/in/janedoe',
    summary: 'Passionate software engineer with 5+ years of experience developing robust web applications.'
  },
  experience: [
    { id: '1', title: 'Senior Software Engineer', company: 'Tech Solutions Inc.', start: 'Jan 2021', end: 'Present', desc: 'Led the frontend development team in building scalable web applications. Improved overall application rendering performance by 40%.' }
  ],
  education: [
    { id: '1', degree: 'B.S. Computer Science', school: 'State University', start: 'Sep 2014', end: 'May 2018' }
  ],
  projects: [
    { id: '1', title: 'Resume Builder App', description: 'A full-stack web application for creating resumes using React and Node.js.', link: 'github.com/janedoe/resume' }
  ],
  skills: 'JavaScript, React, Node.js, CSS, HTML5, SQL'
};

export default function TemplatesGallery() {
  const navigate = useNavigate();
  const templates = ['modern', 'minimal', 'professional'];

  return (
    <div className="landing-page" style={{ padding: '4rem' }}>
      <button onClick={() => navigate(-1)} className="btn-back" style={{ color: 'white', marginBottom: '2rem' }}>
        ← Back to Home
      </button>
      
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h1 className="hero-title" style={{ fontSize: '3rem' }}>Resume <span>Templates</span></h1>
        <p className="hero-subtitle" style={{ margin: '0 auto' }}>Choose a starting point. Perfect layout proofs.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 350px), 1fr))', gap: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
        {templates.map(tpl => (
          <div 
            key={tpl} 
            className="feat-card" 
            style={{ cursor: 'pointer', padding: '1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
            onClick={() => navigate(`/builder?template=${tpl}`)}
          >
            <h3 style={{ textTransform: 'capitalize', marginBottom: '1.5rem', fontSize: '1.5rem' }}>{tpl} Template</h3>
            <div style={{ 
              width: '100%', 
              height: '450px', 
              overflow: 'hidden', 
              position: 'relative', 
              backgroundColor: '#fff', 
              borderRadius: '8px' 
            }}>
              <div style={{ 
                transform: 'scale(0.4)', 
                transformOrigin: 'top left', 
                width: '210mm',
                pointerEvents: 'none'
              }}>
                <LivePreview data={{ ...dummyData, template: tpl }} />
              </div>
            </div>
            <button className="btn hero-btn-primary" style={{ marginTop: '2rem', width: '100%' }}>
              Use This Template
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
