const express = require('express');
const router = express.Router();
const Project = require('../models/Project');
const upload = require('../middleware/upload');
const { cropImage } = require('../utils/imageCropper');
const path = require('path');
const fs = require('fs');

router.get('/', async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      return res.status(404).json({ error: 'Project not found' });
    }
    res.json(project);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/', upload.single('image'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'Image is required' });
    }
    
    const { name, description } = req.body;
    
    if (!name || !description) {
      return res.status(400).json({ error: 'Name and description are required' });
    }
    
    const originalPath = req.file.path;
    const croppedPath = path.join(
      path.dirname(originalPath),
      'cropped-' + path.basename(originalPath)
    );
    
    await cropImage(originalPath, croppedPath, 450, 350);
    
    const project = new Project({
      name,
      description,
      image: `/uploads/${path.basename(croppedPath)}`
    });
    
    await project.save();
    res.status(201).json(project);
  } catch (error) {
    if (req.file && fs.existsSync(req.file.path)) {
      fs.unlinkSync(req.file.path);
    }
    res.status(500).json({ error: error.message });
  }
});

router.put('/:id', upload.single('image'), async (req, res) => {
  try {
    const { name, description } = req.body;
    const project = await Project.findById(req.params.id);
    
    if (!project) {
      return res.status(404).json({ error: 'Project not found' });
    }
    
    if (name) project.name = name;
    if (description) project.description = description;
    
    if (req.file) {
      const oldImagePath = path.join(__dirname, '..', project.image);
      if (fs.existsSync(oldImagePath)) {
        fs.unlinkSync(oldImagePath);
      }
      
      const originalPath = req.file.path;
      const croppedPath = path.join(
        path.dirname(originalPath),
        'cropped-' + path.basename(originalPath)
      );
      
      await cropImage(originalPath, croppedPath, 450, 350);
      project.image = `/uploads/${path.basename(croppedPath)}`;
    }
    
    await project.save();
    res.json(project);
  } catch (error) {
    if (req.file && fs.existsSync(req.file.path)) {
      fs.unlinkSync(req.file.path);
    }
    res.status(500).json({ error: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    
    if (!project) {
      return res.status(404).json({ error: 'Project not found' });
    }
    
    const imagePath = path.join(__dirname, '..', project.image);
    if (fs.existsSync(imagePath)) {
      fs.unlinkSync(imagePath);
    }
    
    await Project.findByIdAndDelete(req.params.id);
    res.json({ message: 'Project deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

