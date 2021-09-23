import mongoose from 'mongoose';

const achievementSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt:{
        type: Date,
        default: new Date()
    }
})

const AchievementMessage = mongoose.model('AchievementMessage', achievementSchema)

export default AchievementMessage;