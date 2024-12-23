const express = require('express');
const brandController = require('../1-Controllers/brandController');

const router = express.Router();

router
  .route('/')
  .get(brandController.getAllBrands);

module.exports = router;