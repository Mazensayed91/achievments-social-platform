import axios from 'axios'

const url = "http://localhost:5000/achievements"

export const fetchAchievements = () => axios.get(url);
export const createAchievement = (newAchievement) => axios.post(url, newAchievement);
export const updateAchievement = (id, updatedAchievement) => axios.patch(`${url}/${id}`, updatedAchievement);
