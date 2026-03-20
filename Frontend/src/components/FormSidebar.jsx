import React from 'react';
import { Printer, Plus, Trash2, Sparkles, Save } from 'lucide-react';

export default function FormSidebar({ data, updateData, onBack, onSave, isSaving }) {

  const updatePersonalInfo = (field, value) => {
    updateData(prev => ({
      ...prev,
      personalInfo: { ...prev.personalInfo, [field]: value }
    }));
  };

  const handlePrint = () => {
    window.print();
  };

  const addExperience = () => {
    updateData(prev => ({
      ...prev,
      experience: [...prev.experience, { id: crypto.randomUUID(), title: '', company: '', start: '', end: '', desc: '' }]
    }));
  };

  const updateExperience = (id, field, value) => {
    updateData(prev => ({
      ...prev,
      experience: prev.experience.map(exp => exp.id === id ? { ...exp, [field]: value } : exp)
    }));
  };

  const removeExperience = (id) => {
    updateData(prev => ({
      ...prev,
      experience: prev.experience.filter(exp => exp.id !== id)
    }));
  };

  const addEducation = () => {
    updateData(prev => ({
      ...prev,
      education: [...prev.education, { id: crypto.randomUUID(), degree: '', school: '', start: '', end: '' }]
    }));
  };

  const updateEducation = (id, field, value) => {
    updateData(prev => ({
      ...prev,
      education: prev.education.map(edu => edu.id === id ? { ...edu, [field]: value } : edu)
    }));
  };

  const removeEducation = (id) => {
    updateData(prev => ({
      ...prev,
      education: prev.education.filter(edu => edu.id !== id)
    }));
  };

  const addProject = () => {
    updateData(prev => ({
      ...prev,
      projects: [...(prev.projects || []), { id: crypto.randomUUID(), title: '', description: '', link: '' }]
    }));
  };

  const updateProject = (id, field, value) => {
    updateData(prev => ({
      ...prev,
      projects: prev.projects.map(proj => proj.id === id ? { ...proj, [field]: value } : proj)
    }));
  };

  const removeProject = (id) => {
    updateData(prev => ({
      ...prev,
      projects: prev.projects.filter(proj => proj.id !== id)
    }));
  };


  return (
    <aside className="form-section no-print">
      <header className="app-header">
        {onBack && (
          <button onClick={onBack} className="btn-back">
            ← Back to Home
          </button>
        )}
        <h1>Resume.ai <span className="badge">Pro</span></h1>
      </header>

      <div className="ai-prompt-box">
        <p><Sparkles size={14} style={{ display: 'inline', marginRight: '4px' }} /> Auto-generate with AI</p>
        <textarea className="ai-input" rows="2" placeholder="e.g. Write a Senior Product Manager resume focused on engagement metrics..."></textarea>
      </div>

      <div className="form-content">
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
          <button onClick={handlePrint} className="btn primary-btn" style={{ flex: 1, marginBottom: 0 }}>
            <Printer size={18} /> Export PDF
          </button>
          <button onClick={onSave} disabled={isSaving} className="btn primary-btn" style={{ flex: 1, marginBottom: 0, backgroundColor: '#10b981' }}>
            <Save size={18} /> {isSaving ? 'Saving...' : 'Save Online'}
          </button>
        </div>

        {/* Templates */}
        <section className="form-group" style={{ marginTop: 0, paddingBottom: '1.5rem', borderBottom: '1px solid #334155' }}>
          <h2>Choose Template</h2>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            {['modern', 'minimal', 'professional'].map(tpl => (
              <button 
                key={tpl}
                onClick={() => updateData(prev => ({ ...prev, template: tpl }))}
                className="btn secondary-btn"
                style={{ 
                  flex: 1, 
                  textTransform: 'capitalize', 
                  margin: 0,
                  backgroundColor: data.template === tpl ? '#6366f1' : 'transparent',
                  color: data.template === tpl ? '#fff' : 'inherit',
                  borderColor: data.template === tpl ? '#6366f1' : '#475569'
                }}
              >
                {tpl}
              </button>
            ))}
          </div>
        </section>

        {/* Personal Info */}
        <section className="form-group" style={{ marginTop: 0 }}>
          <h2>Personal Information</h2>
          <div className="input-wrapper">
            <label>Full Name</label>
            <input type="text" value={data.personalInfo.fullName} onChange={(e) => updatePersonalInfo('fullName', e.target.value)} />
          </div>
          <div className="input-wrapper">
            <label>Job Title</label>
            <input type="text" value={data.personalInfo.jobTitle} onChange={(e) => updatePersonalInfo('jobTitle', e.target.value)} />
          </div>
          <div className="grid-2">
            <div className="input-wrapper">
              <label>Email</label>
              <input type="email" value={data.personalInfo.email} onChange={(e) => updatePersonalInfo('email', e.target.value)} />
            </div>
            <div className="input-wrapper">
              <label>Phone</label>
              <input type="tel" value={data.personalInfo.phone} onChange={(e) => updatePersonalInfo('phone', e.target.value)} />
            </div>
            <div className="input-wrapper">
              <label>Location</label>
              <input type="text" value={data.personalInfo.location} onChange={(e) => updatePersonalInfo('location', e.target.value)} />
            </div>
            <div className="input-wrapper">
              <label>Website / LinkedIn</label>
              <input type="text" value={data.personalInfo.website} onChange={(e) => updatePersonalInfo('website', e.target.value)} />
            </div>
          </div>
          <div className="input-wrapper" style={{ marginTop: '0.5rem' }}>
            <label>Professional Summary</label>
            <textarea rows="4" value={data.personalInfo.summary} onChange={(e) => updatePersonalInfo('summary', e.target.value)} />
          </div>
        </section>

        {/* Experience */}
        <section className="form-group">
          <h2>Work Experience</h2>
          {data.experience.map(exp => (
            <div key={exp.id} className="dynamic-item">
              <button className="remove-btn" onClick={() => removeExperience(exp.id)}><Trash2 size={14} /></button>
              <div className="input-wrapper">
                <label>Job Title</label>
                <input type="text" value={exp.title} onChange={(e) => updateExperience(exp.id, 'title', e.target.value)} />
              </div>
              <div className="input-wrapper">
                <label>Company</label>
                <input type="text" value={exp.company} onChange={(e) => updateExperience(exp.id, 'company', e.target.value)} />
              </div>
              <div className="grid-2">
                <div className="input-wrapper">
                  <label>Start</label>
                  <input type="text" value={exp.start} onChange={(e) => updateExperience(exp.id, 'start', e.target.value)} />
                </div>
                <div className="input-wrapper">
                  <label>End</label>
                  <input type="text" value={exp.end} onChange={(e) => updateExperience(exp.id, 'end', e.target.value)} />
                </div>
              </div>
              <div className="input-wrapper">
                <label>Description</label>
                <textarea rows="3" value={exp.desc} onChange={(e) => updateExperience(exp.id, 'desc', e.target.value)} />
              </div>
            </div>
          ))}
          <button onClick={addExperience} className="btn secondary-btn"><Plus size={16} /> Add Experience</button>
        </section>

        {/* Projects */}
        <section className="form-group">
          <h2>Projects</h2>
          {(data.projects || []).map(proj => (
            <div key={proj.id} className="dynamic-item">
              <button className="remove-btn" onClick={() => removeProject(proj.id)}><Trash2 size={14} /></button>
              <div className="input-wrapper">
                <label>Project Title</label>
                <input type="text" value={proj.title} onChange={(e) => updateProject(proj.id, 'title', e.target.value)} />
              </div>
              <div className="input-wrapper">
                <label>Link / URL</label>
                <input type="text" value={proj.link} onChange={(e) => updateProject(proj.id, 'link', e.target.value)} />
              </div>
              <div className="input-wrapper">
                <label>Description</label>
                <textarea rows="3" value={proj.description} onChange={(e) => updateProject(proj.id, 'description', e.target.value)} />
              </div>
            </div>
          ))}
          <button onClick={addProject} className="btn secondary-btn"><Plus size={16} /> Add Project</button>
        </section>

        {/* Education */}
        <section className="form-group">
          <h2>Education</h2>
          {data.education.map(edu => (
            <div key={edu.id} className="dynamic-item">
              <button className="remove-btn" onClick={() => removeEducation(edu.id)}><Trash2 size={14} /></button>
              <div className="input-wrapper">
                <label>Degree / Certificate</label>
                <input type="text" value={edu.degree} onChange={(e) => updateEducation(edu.id, 'degree', e.target.value)} />
              </div>
              <div className="input-wrapper">
                <label>School / University</label>
                <input type="text" value={edu.school} onChange={(e) => updateEducation(edu.id, 'school', e.target.value)} />
              </div>
              <div className="grid-2">
                <div className="input-wrapper">
                  <label>Start Date</label>
                  <input type="text" value={edu.start} onChange={(e) => updateEducation(edu.id, 'start', e.target.value)} />
                </div>
                <div className="input-wrapper">
                  <label>End Date</label>
                  <input type="text" value={edu.end} onChange={(e) => updateEducation(edu.id, 'end', e.target.value)} />
                </div>
              </div>
            </div>
          ))}
          <button onClick={addEducation} className="btn secondary-btn"><Plus size={16} /> Add Education</button>
        </section>

        {/* Skills */}
        <section className="form-group">
          <h2>Skills</h2>
          <div className="input-wrapper">
            <label>Comma-separated skills</label>
            <textarea rows="3" value={data.skills} onChange={(e) => updateData(prev => ({ ...prev, skills: e.target.value }))} />
          </div>
        </section>
      </div>
    </aside>
  );
}
