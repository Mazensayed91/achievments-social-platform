import axios from 'axios'

const API = axios.create({ baseURL: "http://localhost:5000" })

export const fetchAchievements = () => API.get('/achievements');
export const createAchievement = (newAchievement) => API.post('/achievements', newAchievement);
export const updateAchievement = (id, updatedAchievement) => API.patch(`/achievements/${id}`, updatedAchievement);
export const deleteAchievement = (id) => API.delete(`/achievements/${id}`);
export const likeAchievement = (id) => API.patch(`/achievements/${id}/likeAchievement`);

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);
