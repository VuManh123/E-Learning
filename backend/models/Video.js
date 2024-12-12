const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const videoSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    uploadDate: {
        type: Date,
        default: Date.now,
    },
    language: {
        type: String,
        default: 'English',
    },
});

const VideoModel = mongoose.model(
    'video',
    videoSchema,
    'video',
);

module.exports = VideoModel;
