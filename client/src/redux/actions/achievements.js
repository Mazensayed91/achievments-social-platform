import * as api from "../../api";
import {ACHIEVEMENTS_CONSTANTS} from "../constants"

export const getAchievements = () => async (dispatch) => {
    try{
        const { data } = await api.fetchAchievements();
        const action = {
            type: ACHIEVEMENTS_CONSTANTS.RECEIVE_ALL_ACHIEVEMENTS,
            payload: data
        }
        dispatch(action);
    }
    catch(error){
        console.log("error", error)
    }
}

export const createAchievement = (achievement) => async (dispatch) => {
    try{
        const { data }  = await api.createAchievement(achievement);
        const action = {
            type: ACHIEVEMENTS_CONSTANTS.CREATE_ACHIEVEMENT,
            payload: data
        }
        dispatch(action);
    }
    catch(error){
        console.log("error", error)
    }
}

export const updateAchievement = (id, achievement) => async (dispatch) => {
    try{
        const { data }  = await api.updateAchievement(id, achievement);
        const action = {
            type: ACHIEVEMENTS_CONSTANTS.UPDATE_ACHIEVEMENT,
            payload: data
        }
        dispatch(action);
    }
    catch(error){
        console.log("error", error)
    }
}

export const deleteAchievement = (id) => async (dispatch) => {
    try{
        const { data }  = await api.deleteAchievement(id);
        const action = {
            type: ACHIEVEMENTS_CONSTANTS.DELETE_ACHIEVEMENT,
            payload: data
        }
        dispatch(action);
    }
    catch(error){
        console.log("error", error)
    }
}

export const likeAchievement = (id) => async (dispatch) => {
    try{
        console.log("likkee id", id)
        const { data }  = await api.likeAchievement(id);

        const action = {
            type: ACHIEVEMENTS_CONSTANTS.LIKE_ACHIEVEMENT,
            payload: data
        }
        dispatch(action);
    }
    catch(error){
        console.log("error", error)
    }
}