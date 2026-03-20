const express = require('express');
const router = express.Router();
const Resume = require('../models/Resume');

// @route   POST /api/resumes
// @desc    Create a new resume
router.post('/', async (req, res) => {
  try {
    const newResume = new Resume(req.body);
    const savedResume = await newResume.save();
    res.status(201).json(savedResume);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// @route   GET /api/resumes/:id
// @desc    Get a resume by ID
router.get('/:id', async (req, res) => {
  try {
    const resume = await Resume.findById(req.params.id);
    if (!resume) return res.status(404).json({ message: 'Resume not found' });
    res.json(resume);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// @route   PUT /api/resumes/:id
// @desc    Update a resume
router.put('/:id', async (req, res) => {
  try {
    const updatedResume = await Resume.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true, runValidators: true }
    );
    if (!updatedResume) return res.status(404).json({ message: 'Resume not found' });
    res.json(updatedResume);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
