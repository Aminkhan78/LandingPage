const express = require('express');
const router = express.Router();
const Client = require('../models/Client');
const upload = require('../middleware/upload');
const { cropImage } = require('../utils/imageCropper');
const path = require('path');
const fs = require('fs');

router.get('/', async (req, res) => {
  try {
    const clients = await Client.find().sort({ createdAt: -1 });
    res.json(clients);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const client = await Client.findById(req.params.id);
    if (!client) {
      return res.status(404).json({ error: 'Client not found' });
    }
    res.json(client);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/', upload.single('image'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'Image is required' });
    }
    
    const { name, designation, description } = req.body;
    
    if (!name || !designation || !description) {
      return res.status(400).json({ error: 'Name, designation, and description are required' });
    }
    
    const originalPath = req.file.path;
    const croppedPath = path.join(
      path.dirname(originalPath),
      'cropped-' + path.basename(originalPath)
    );
    
    await cropImage(originalPath, croppedPath, 450, 350);
    
    const client = new Client({
      name,
      designation,
      description,
      image: `/uploads/${path.basename(croppedPath)}`
    });
    
    await client.save();
    res.status(201).json(client);
  } catch (error) {
    if (req.file && fs.existsSync(req.file.path)) {
      fs.unlinkSync(req.file.path);
    }
    res.status(500).json({ error: error.message });
  }
});

router.put('/:id', upload.single('image'), async (req, res) => {
  try {
    const { name, designation, description } = req.body;
    const client = await Client.findById(req.params.id);
    
    if (!client) {
      return res.status(404).json({ error: 'Client not found' });
    }
    
    if (name) client.name = name;
    if (designation) client.designation = designation;
    if (description) client.description = description;
    
    if (req.file) {
      const oldImagePath = path.join(__dirname, '..', client.image);
      if (fs.existsSync(oldImagePath)) {
        fs.unlinkSync(oldImagePath);
      }
      
      const originalPath = req.file.path;
      const croppedPath = path.join(
        path.dirname(originalPath),
        'cropped-' + path.basename(originalPath)
      );
      
      await cropImage(originalPath, croppedPath, 450, 350);
      client.image = `/uploads/${path.basename(croppedPath)}`;
    }
    
    await client.save();
    res.json(client);
  } catch (error) {
    if (req.file && fs.existsSync(req.file.path)) {
      fs.unlinkSync(req.file.path);
    }
    res.status(500).json({ error: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const client = await Client.findById(req.params.id);
    
    if (!client) {
      return res.status(404).json({ error: 'Client not found' });
    }
    
    const imagePath = path.join(__dirname, '..', client.image);
    if (fs.existsSync(imagePath)) {
      fs.unlinkSync(imagePath);
    }
    
    await Client.findByIdAndDelete(req.params.id);
    res.json({ message: 'Client deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

