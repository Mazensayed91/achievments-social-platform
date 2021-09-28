import express from 'express'
import {getAchievements, createAchievement, updateAchievement, deleteAchievement} from '../controllers/achievements.js'

const router = express.Router()

router.get('/', getAchievements);
router.post('/', createAchievement);
router.patch('/:id', updateAchievement)
router.delete('/:id', deleteAchievement)

export default router