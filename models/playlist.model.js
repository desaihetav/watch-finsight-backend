const mongoose = require("mongoose");
require('mongoose-type-url');
const { Schema } = mongoose;

const PlaylistSchema = new mongoose.Schema({
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  name: {
    type: String,
    required: "Cannot add unnamed Playlist.",
  },
  videos: [{
    type: Schema.Types.ObjectId,
    ref: 'Video',
  }],
}, { timestamps: true });


PlaylistSchema.statics.findOneOrCreateWith = async function findOneOrCreateWith(condition, doc) {
    const one = await this.findOne(condition);
    return one || this.create(doc);
};


const Playlist = mongoose.model("Playlist", PlaylistSchema);
module.exports = { Playlist }