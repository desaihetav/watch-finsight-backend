const express = require('express');
const router = express.Router();
const { Video } = require('../models/video.model');

router.route('/')
  .get(async (req, res) => {
    try {
      const videos = await Video.find({});
      res.json({ success: true, videos });
    } catch(error) {
      res.json({ success: false, message: 'Unable to fetch videos' })
    }
  })

router.route('/:videoId')
  .get(async (req, res) => {
    try {
      const { videoId } = req.params;
      const video = await Video.findOne({
        _id: videoId
      });
      res.json({ success: true, video });
    } catch(error) {
      res.json({ success: false, message: 'Unable to fetch video' })
    }
  })

  module.exports = router;