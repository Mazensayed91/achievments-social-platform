import {AUTH_CONSTANTS} from "../constants";
import * as api from "../../api/index"

export const googleAuth = (result, token) => async (dispatch) => {
    try{
        const data = {
            result,
            token
        }
        const action = {
            type: AUTH_CONSTANTS.AUTH,
            payload: data
        }
        dispatch(action);
    }
    catch(error){
        console.log("error", error)
    }
}

export const logout = () => async (dispatch) => {
    try{
        const data = {
        }
        const action = {
            type: AUTH_CONSTANTS.LOGOUT,
            payload: data
        }
        dispatch(action);
    }
    catch(error){
        console.log("error", error)
    }
}

export const signUp = (formData, history) => async (dispatch) => {
    try{

        const {data} = await api.signUp(formData)
        const action = {
            type: AUTH_CONSTANTS.AUTH,
            payload: data
        }
        dispatch(action)
        history.push("/")

    }catch (error){
        console.log("error", error)
    }
}

export const signIn = (formData, history) => async (dispatch) => {
    try{

        const {data} = await api.signIn(formData)
        const action = {
            type: AUTH_CONSTANTS.AUTH,
            payload: data
        }
        dispatch(action)
        history.push("/")

    }catch (error){
        console.log("error", error)
    }
}