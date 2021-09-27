import express from 'express'
import {getAchievements, createAchievement, updateAchievement} from '../controllers/achievements.js'

const router = express.Router()

router.get('/', getAchievements);
router.post('/', createAchievement);
router.patch('/:id', updateAchievement)

export default router