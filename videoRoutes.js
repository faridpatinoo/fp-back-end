const express = require('express');
const videoController = require('./videoController');

const router = express.Router();

router
  .route('/')
  .get(videoController.getAllVideos);

module.exports = router;