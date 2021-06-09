 import mongoose from "mongoose"

//  export const formatHashtags = (hashtags) =>
//     hashtags
//     .split(",")
//     .map((word) => word.trim())
//     .map((word) => (word.startsWith("#") ? word : `#${word}`));

 const videoSchema = new mongoose.Schema({
    title: { type: String, required: true, trim: true},
    description: { type: String, required: true, trim: true},
    createdAt: { type: Date, required: true, default: Date.now },
    hashtags: [{ type: String }],
    mata: {
        views: { type: Number, required: true, default: 0 },
        rating: { type: Number, required: true, default: 0 },
    },
 });

 videoSchema.static('formatHashtags', function(hashtags) {
     return hashtags.split(",").map((word) => word.trim()).map((word) => (word.startsWith("#") ? word : `#${word}`));
 })

 const Video = mongoose.model("Video", videoSchema);
 export default Video;