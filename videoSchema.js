const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true

  },description: {
    type: String

  },top: {
    type: Number,
    required: true

  },image: {
    type: String,
    required: true
  
  },video: {
    type: String,
    required: true
  
  },brand: {
    type: String,
    trim: true
  
  },category: {
    type: String,
    enum: ['animations', 'facebook', 'reels', 'originals', 'tv', 'end-card', 'youtube'],
    required: true
  
  },brand: {
    type: String,
  
  },type: {
    type: String,
    enum: ['horizontal', 'vertical', 'square', 'animation'],
    required: true

  },year: {
    type: Number,
    required: true

  }, isBest: {
    top: {
      type: Number
    }

  }, brandLogo: {
    logo: {
      type: String
    }
  }
});

module.exports = mongoose.model('Video', videoSchema, 'fp+');