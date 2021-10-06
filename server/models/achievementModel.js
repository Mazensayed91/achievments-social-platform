import mongoose from 'mongoose';

const achievementSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    name: String,
    tags: [String],
    selectedFile: String,
    likes: {
        type: [String],
        default: []
    },
    createdAt:{
        type: Date,
        default: new Date()
    }
})

const AchievementMessage = mongoose.model('AchievementMessage', achievementSchema)

export default AchievementMessage;