import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import BuilderPage from './components/BuilderPage';
import TemplatesGallery from './components/TemplatesGallery';

function App() {
  const params = new URLSearchParams(window.location.search);
  const urlId = params.get('id');

  const [currentPage, setCurrentPage] = useState(urlId ? 'builder' : 'landing');
  const [resumeId, setResumeId] = useState(urlId || null);
  const [selectedTemplate, setSelectedTemplate] = useState('modern');

  return (
    <>
      {currentPage === 'landing' && <LandingPage onStart={() => setCurrentPage('builder')} onViewTemplates={() => setCurrentPage('templates')} />}
      {currentPage === 'templates' && <TemplatesGallery onBack={() => setCurrentPage('landing')} onSelect={(tpl) => { setSelectedTemplate(tpl); setCurrentPage('builder'); }} />}
      {currentPage === 'builder' && <BuilderPage onBack={() => { setCurrentPage('landing'); window.history.pushState({}, '', '/'); setResumeId(null); }} initialId={resumeId} setResumeId={setResumeId} initialTemplate={selectedTemplate} />}
    </>
  );
}

export default App;
