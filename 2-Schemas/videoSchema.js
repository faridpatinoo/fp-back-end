const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  top: {
    type: Number,
    required: true
  },
  image: {
    type: String,
    required: true,
  },
  video: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    trim: true
  },
  category: {
    type: String,
    enum: ['Animations', 'Facebook', 'Reels', 'originals', 'Tv', 'End-card', 'YouTube'],
    required: true
  },
  type: {
    type: String,
    enum: ['horizontal', 'vertical', 'square', 'animation'],
    required: true
  },
  year: {
    type: Number,
    required: true,
  },
  isBestTop: {
    type: Number
  },

  tags: {
    type: [String]
  }
});

module.exports = mongoose.model('Video', videoSchema, 'fp+');
