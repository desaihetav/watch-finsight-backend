const express = require('express');
const router = express.Router();
const { User } = require('../models/user.model');
const { Playlist } = require('../models/playlist.model');

const initialPlaylists = [
  {
    name: 'Liked Videos'
  },
  {
    name: 'Saved Videos',
  },
  {
    name: 'Watch Later Videos',
  }
]

router.route('/')
  .get((req, res) => {
    res.json({ success: true, message: 'Get on Sign Up successful' })
  })
  .post(async (req, res) => {
    try {
      const { name, email, password } = req.body;
      const user = await User.findOne({ email: email });
      // add validation for email and password too
      if (user) {
        res.json({ status: false, message: "Account with entered email id already exists. Try loggin in instead!" });
      } else {
        const newUser = new User({ name, email, password });
        const savedUser = await newUser.save();

        initialPlaylists.forEach(async playlistItem => {
          const newPlaylist = new Playlist({
            owner: savedUser._id,
            name: playlistItem.name,
            videos: [],
          })
          await newPlaylist.save();
        })

        res.json({ user: savedUser, success: true, message: 'Signed up successfully.' });
      }
    } catch (error) {
      console.log({ error });
      res.json({ user: null, success: false, message: 'An unknown error occured' });
    }
  })

module.exports = router;