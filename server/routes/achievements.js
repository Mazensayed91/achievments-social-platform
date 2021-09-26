import express from 'express'
import {getAchievements, createAchievement} from '../controllers/achievements.js'

const router = express.Router()

router.get('/', getAchievements);
router.post('/', createAchievement);


export default router