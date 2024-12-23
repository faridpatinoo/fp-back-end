const express = require('express');
const videoController = require('../1-Controllers/videoController');

const router = express.Router();

router
  .route('/')
  .get(videoController.getAllVideos)
  .post(videoController.postVideo);

module.exports = router;