const mongoose = require("mongoose");
require('mongoose-type-url');
const { Schema } = mongoose;

const VideoSchema = new mongoose.Schema({
  categories: [{
    type: String
  }],
  channelImageURL: {
    type: mongoose.SchemaTypes.Url,
    required: true,
  },
  channelName: {
    type: String,
    required: "Cannot add without channel name"
  },
  description: {
    type: String,
    required: "Cannot add without description"
  },
  duration: {
    type: String,
    required: "Cannot add without duration",
  },
  videoId: {
    type: String,
    required: "Cannot add without videoId"
  },
  publishedDate: {
    type: String,
    required: "Cannot add without published date"
  },
  commentCount: {
    type: Number,
    required: "Cannot add without statistics"
  },
  dislikeCount: {
    type: Number,
    required: "Cannot add without statistics"
  },
  likeCount: {
    type: Number,
    required: "Cannot add without statistics"
  },
  viewCount: {
    type: Number,
    required: "Cannot add without statistics"
  },
  thumbnailURL: {
    type: String,
    required: "Cannot add without thumbnailURL"
  },
  title: {
    type: String,
    required: "Cannot add without title"
  },
}, { timestamps: true });

VideoSchema.statics.findOneOrCreateWith = async function findOneOrCreateWith(condition, doc) {
  const one = await this.findOne(condition);
  return one || this.create(doc);
};


const Video = mongoose.model("Video", VideoSchema);
module.exports = { Video }