import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import FormSidebar from './FormSidebar';
import LivePreview from './LivePreview';
import { fetchResume, saveResume } from '../api';

const defaultData = {
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
    {
      id: crypto.randomUUID(),
      title: 'Senior Software Engineer',
      company: 'Tech Solutions Inc.',
      start: 'Jan 2021',
      end: 'Present',
      desc: 'Led the frontend development team in building scalable web applications. Improved overall application rendering performance by 40%.'
    }
  ],
  education: [
    {
      id: crypto.randomUUID(),
      degree: 'B.S. Computer Science',
      school: 'State University',
      start: 'Sep 2014',
      end: 'May 2018'
    }
  ],
  projects: [
    {
      id: crypto.randomUUID(),
      title: 'Resume Builder App',
      description: 'A full-stack web application for creating resumes using React and Node.js.',
      link: 'github.com/janedoe/resume-builder'
    }
  ],
  skills: 'JavaScript, React, Node.js, CSS, HTML5, SQL',
  template: 'modern'
};

export default function BuilderPage() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const initialId = searchParams.get('id');
  const initialTemplate = searchParams.get('template');

  const [resumeData, setResumeData] = useState({ ...defaultData, template: initialTemplate || 'modern' });
  const [loading, setLoading] = useState(!!initialId);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (initialId) {
      fetchResume(initialId)
        .then(data => {
          if (data) setResumeData(data);
          setLoading(false);
        })
        .catch(err => {
          console.error(err);
          setLoading(false);
        });
    }
  }, [initialId]);

  const handleSave = async () => {
    setSaving(true);
    try {
      const saved = await saveResume(resumeData, initialId);
      if (!initialId) {
        setSearchParams({ id: saved._id });
      }
      alert('Resume saved successfully! You can share the current URL to view this resume later.');
    } catch (err) {
      console.error(err);
      alert('Failed to save resume.');
    }
    setSaving(false);
  };

  if (loading) {
    return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', color: 'white' }}>Loading Resume...</div>;
  }

  return (
    <div className="app-container">
      <FormSidebar 
        data={resumeData} 
        updateData={setResumeData} 
        onBack={() => navigate('/')} 
        onSave={handleSave} 
        isSaving={saving} 
      />
      <div className="preview-section">
        <LivePreview data={resumeData} />
      </div>
    </div>
  );
}
