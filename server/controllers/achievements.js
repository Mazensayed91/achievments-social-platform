import AchievementMessage from "../models/achievementModel.js";

export const getAchievements = async (req, res) => {
    try{
        const achievementMessages = await AchievementMessage.find()
        console.log("achievementMessage", achievementMessages)
        res.status(200).json(achievementMessages)
    }
    catch(error){
        console.log("error", error)
        res.status(404).json({message: error.message})
    }

}


export const createAchievement = async (req, res) => {
    const { title, message, selectedFile, creator, tags } = req.body;
    console.log("achievement body", { title, message, selectedFile, creator, tags })
    const newAchievement = new AchievementMessage({ title, message, selectedFile, creator, tags });
    try{

        await newAchievement.save()
        res.status(201).json(newAchievement)
    }
    catch(error){
        console.log("errorrr", error)
        res.status(409).json({message: error.message})
    }
}