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
    const achievement = req.body;
    const newAchievement = new AchievementMessage(achievement);
    try{

        await newAchievement.save()
        res.status(201).json(newAchievement)
    }
    catch(error){
        console.log("error", error)
        res.status(409).json({message: error.message})
    }
}