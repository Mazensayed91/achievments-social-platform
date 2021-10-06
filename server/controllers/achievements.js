import AchievementMessage from "../models/achievementModel.js";
import mongoose from "mongoose";

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
    console.log("achievement body", achievement)
    const newAchievement = new AchievementMessage({ ...achievement, creator: req.userId, createdAt: new Date().toISOString()});
    try{

        await newAchievement.save()
        res.status(201).json(newAchievement)
    }
    catch(error){
        console.log("errorrr", error)
        res.status(409).json({message: error.message})
    }
}

export const updateAchievement = async (req, res) => {
    const { id: _id } = req.params;
    const achievement = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("Not existing id");

    const updatedAchievement = await AchievementMessage.findByIdAndUpdate(_id, achievement, { new: true});

    res.json(updatedAchievement);
}

export const deleteAchievement = async (req, res) => {
    const { id: _id } = req.params;
    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("Not existing id");

    const deleteAchievement = await AchievementMessage.findByIdAndRemove(_id);

    res.json(deleteAchievement);
}

export const likeAchievement = async (req, res) => {
    const { id: _id } = req.params;
    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("Not existing id");
    const achievement = await AchievementMessage.findById(_id)

    const likeIndex = achievement.likes.findIndex((id) => id === String(req.userId))

    if(likeIndex === -1){
        achievement.likes.push(req.userId)
    }
    else{
        achievement.likes.filter((id) => id !== String(req.userId))
    }

    const updatedAchievement = await AchievementMessage.findByIdAndUpdate(_id,
        achievement,
        { new: true});

    res.json(updatedAchievement);
}
