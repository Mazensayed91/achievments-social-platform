import express from 'express'
import {getAchievements, createAchievement, updateAchievement, deleteAchievement, likeAchievement} from '../controllers/achievements.js'
import auth from "../middleware/auth.js";

const router = express.Router()

router.get('/', getAchievements);
router.post('/', auth, createAchievement);
router.patch('/:id', auth, updateAchievement)
router.delete('/:id', auth, deleteAchievement)
router.patch('/:id/likeAchievement', auth, likeAchievement)

export default router