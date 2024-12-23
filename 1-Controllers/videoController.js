const Video = require('../2-Schemas/videoSchema');

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

exports.postVideo = async (req, res) => {
  try {
    const { title, description, top, image, video, category, type, year, tags } = req.body;

    // Create a new video document
    const newVideo = new Video({
      title,
      description,
      top,
      image,
      video,
      category,
      type,
      year,
      tags
    });

    // Save the new video to the database
    await newVideo.save();

    // Respond with success
    res.status(201).json({
      message: "Video successfully uploaded",
      video: newVideo
    });
  } catch (error) {
    console.error('Error uploading video:', error); // Log the actual error
    res.status(500).json({
      message: "Failed to upload video",
      error: error.message || error
    });
  }
};
