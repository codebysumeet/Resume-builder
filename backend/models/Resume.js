const mongoose = require('mongoose');

const resumeSchema = new mongoose.Schema({
  personalInfo: {
    fullName: { type: String, default: '' },
    jobTitle: { type: String, default: '' },
    email: { type: String, default: '' },
    phone: { type: String, default: '' },
    location: { type: String, default: '' },
    website: { type: String, default: '' },
    summary: { type: String, default: '' }
  },
  experience: [{
    id: String,
    title: String,
    company: String,
    start: String,
    end: String,
    desc: String
  }],
  projects: [{
    id: String,
    title: String,
    description: String,
    link: String
  }],
  education: [{
    id: String,
    degree: String,
    school: String,
    start: String,
    end: String
  }],
  skills: { type: String, default: '' },
  template: { type: String, default: 'modern' }
}, {
  timestamps: true
});

module.exports = mongoose.model('Resume', resumeSchema);
