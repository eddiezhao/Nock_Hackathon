import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    name: String,
    position: String,
    bio: String,
    tags: [String],
    //tagsBio: [String],
    selectedFile: String,
    // likeCount: {
    //     type: Number,
    //     default: 0,
    // },
    createdAt: {
        type: Date,
        default: new Date(),
    },
    birthDay: { // no age
        type: Date,
        default: new Date(),
    },
})

var PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;