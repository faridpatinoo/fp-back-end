const mongoose = require('mongoose');

const brandSchema = new mongoose.Schema({
  logo: {
    type: String,
    required: true

  }, brand: {
    type: String,
    trim: true

  }
});

module.exports = mongoose.model('Brand', brandSchema);