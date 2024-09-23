const Video = require('./videoSchema');

exports.getAllVideos = async (req, res) => {
  try {
    const videos = await Video.find();
    res.status(200).json({
      results: videos.length,
      videos
    });

  } catch (error) {
    res.status(500).send(error);
  }
}