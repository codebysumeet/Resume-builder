import React from 'react';

export default function LivePreview({ data }) {
  const { personalInfo, experience, education, projects, skills } = data;

  const validSkills = skills.split(',').map(s => s.trim()).filter(s => s);
  const activeExperience = experience.filter(exp => exp.title || exp.company);
  const activeEducation = education.filter(edu => edu.degree || edu.school);
  const activeProjects = (projects || []).filter(proj => proj.title || proj.description);


  return (
    <div className={`resume-wrapper template-${data.template || 'modern'}`}>
      <header className="res-header">
        <div>
          <h1 className="res-name">{personalInfo.fullName || 'Your Name'}</h1>
          {personalInfo.jobTitle && <h2 className="res-title">{personalInfo.jobTitle}</h2>}
        </div>
        <div className="res-contact">
          {personalInfo.email && <div>{personalInfo.email}</div>}
          {personalInfo.phone && <div>{personalInfo.phone}</div>}
          {personalInfo.location && <div>{personalInfo.location}</div>}
          {personalInfo.website && <div>{personalInfo.website}</div>}
        </div>
      </header>

      <div className="res-grid">
        {/* Left Small Column */}
        <div>
          {personalInfo.summary && (
            <div style={{ marginBottom: '2.5rem' }}>
              <h3 className="res-section-title">Profile</h3>
              <p className="res-text">{personalInfo.summary}</p>
            </div>
          )}

          {validSkills.length > 0 && (
            <div>
              <h3 className="res-section-title">Skills</h3>
              <div className="res-skills">
                {validSkills.map((skill, idx) => (
                  <span key={idx} className="res-skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right Large Column */}
        <div>
          {activeExperience.length > 0 && (
            <div style={{ marginBottom: '2.5rem' }}>
              <h3 className="res-section-title">Experience</h3>
              {activeExperience.map(exp => (
                <div key={exp.id} className="res-item">
                  <div className="res-item-title">{exp.title}</div>
                  {exp.company && <div className="res-item-subtitle">{exp.company}</div>}
                  <div className="res-item-date">{exp.start} {exp.end ? `- ${exp.end}` : ''}</div>
                  {exp.desc && <p className="res-text" style={{ marginBottom: 0 }}>{exp.desc}</p>}
                </div>
              ))}
            </div>
          )}

          {activeProjects.length > 0 && (
            <div style={{ marginBottom: '2.5rem' }}>
              <h3 className="res-section-title">Projects</h3>
              {activeProjects.map(proj => (
                <div key={proj.id} className="res-item">
                  <div className="res-item-title">{proj.title}</div>
                  {proj.link && <div className="res-item-subtitle" style={{ textTransform: 'none' }}>{proj.link}</div>}
                  {proj.description && <p className="res-text" style={{ marginBottom: 0 }}>{proj.description}</p>}
                </div>
              ))}
            </div>
          )}

          {activeEducation.length > 0 && (
            <div>
              <h3 className="res-section-title">Education</h3>
              {activeEducation.map(edu => (
                <div key={edu.id} className="res-item" style={{ marginBottom: '1.5rem' }}>
                  <div className="res-item-title">{edu.degree}</div>
                  {edu.school && <div className="res-item-subtitle">{edu.school}</div>}
                  <div className="res-item-date">{edu.start} {edu.end ? `- ${edu.end}` : ''}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
