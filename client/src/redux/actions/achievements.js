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
        const data  = await api.createAchievement(achievement);
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