const { videos } = require('../data.js');
const { Video } = require('../models/video.model');

const seedVideos = () => {
  videos.forEach( async videoItem => {
    const newVideo = new Video({
      categories: videoItem.categories,
      channelImageURL: videoItem.channelImageURL,
      channelName: videoItem.channelName,
      description: videoItem.description,
      duration: videoItem.duration,
      videoId: videoItem.id,
      publishedDate: videoItem.published_date,
      commentCount: videoItem.statistics.commentCount,
      dislikeCount: videoItem.statistics.dislikeCount,
      likeCount: videoItem.statistics.likeCount,
      viewCount: videoItem.statistics.viewCount,
      thumbnailURL: videoItem.thumbnailURL,
      title: videoItem.title,
    });
    const savedVideo = await newVideo.save();
    console.log(savedVideo.title);
  })
}

module.exports = { seedVideos };