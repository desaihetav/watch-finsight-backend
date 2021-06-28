const express = require('express');
const router = express.Router();
const { User } = require('../models/user.model');
const { Playlist } = require('../models/playlist.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secret = process.env['SECRET'];

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
        return res.json({ status: false, message: "Account with entered email id already exists. Try loggin in instead!" });
      }

      try {
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({ name, email, password: hashedPassword });
        const savedUser = await newUser.save();

        initialPlaylists.forEach(async playlistItem => {
          const newPlaylist = new Playlist({
            owner: savedUser._id,
            name: playlistItem.name,
            videos: [],
          })
          await newPlaylist.save();
        })

        const token = jwt.sign({ userId: savedUser._id }, secret);

        res.json({ user: savedUser, token, success: true, message: 'Signed up successfully.' });
      } catch (error) {
        console.log(error);
        res.json({ success: false, message: 'Something went wrong.' })
      }

    } catch (error) {
      console.log({ error });
      res.json({ success: false, message: 'An unknown error occured' });
    }
  })

module.exports = router;