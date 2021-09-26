import axios from 'axios'

const url = "http://localhost:5000/achievements"

export const fetchAchievements = () => axios.get(url);
