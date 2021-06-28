const express = require('express');
const router = express.Router();
const { Playlist } = require('../models/playlist.model');

// create new playlist
router.route('/')
  .post(async (req, res) => {
    try {
      const newPlaylist = new Playlist(req.body)
      await newPlaylist.save();
      res.json({
        success: true,
        playlist: newPlaylist,
        message: 'New playlist created successfully'
      })
    } catch (error) {
      res.json({
        success: false,
        message: 'Unable to create new playlist.'
      })
    }
  });

// get all playlist for userId
router.route('/:userId')
  .get(async (req, res) => {
    try {
      const { userId } = req.params;
      const playlists = await Playlist.find({
        owner: { _id: userId },
      });
      res.json({ success: true, playlists });
    } catch (error) {
      res.json({ success: false, message: 'Unable to fetch playlists' })
    }
  });

// add or remove video in 
router.route('/:playlistId')
  .post(async (req, res) => {
    const { playlistId } = req.params;
    const { videoId } = req.body;
    try {
      const playlist = await Playlist.findOne({
        _id: playlistId,
      });
      const isVideoInPlaylist = playlist.videos.includes(videoId);

      isVideoInPlaylist ?
        playlist.videos.pull(videoId) :
        playlist.videos.push(videoId);

      await playlist.save();
      res.json({
        success: true,
        updatedPlaylist: playlist,
        message: 'Playlist updated'
      })

    } catch (error) {
      console.log(error);
      res.json({ success: false, message: 'Unable to update playlist' })
    }
  })
  .delete(async (req, res) => {
    try {
      const { playlistId } = req.params;
      await Playlist.findByIdAndRemove({
        _id: playlistId,
      })
      res.json({
        success: true,
        message: "Playlist removed"
      })
    } catch(error) {
      res.json({
        success: false,
        message: "Could not delete playlist"
      })
    }
  })
  .get(async (req, res) => {
    try {
      const { playlistId } = req.params;
      const playlist = await Playlist.find({
        _id: playlistId,
      });
      res.json({ success: true, playlist });
    } catch (error) {
      res.json({ success: false, message: 'Unable to fetch playlist' })
    }
  });

router.route('/update/:playlistId')
  .post(async (req, res) => {
    try {
      const { playlistId } = req.params;
      const { newName } = req.body;
      const playlist = await Playlist.findOneAndUpdate({
        _id: playlistId,
      },
      {
        name: newName,
      });
      res.json({ success: true, playlist, message: 'Playlist name updated' });
    } catch (error) {
      res.json({ success: false, message: 'Could not update playlist name' })
    }
  })

module.exports = router;