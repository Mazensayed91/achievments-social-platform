import {AUTH_CONSTANTS} from "../constants";


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

        // api call
        const action = {
            type: AUTH_CONSTANTS.SIGNUP,
            payload: formData
        }
        dispatch(action)
        history.push("/")

    }catch (error){
        console.log("error", error)
    }
}

export const signIn = (formData, history) => async (dispatch) => {
    try{
        // api call
        const action = {
            type: AUTH_CONSTANTS.SIGNIN,
            payload: formData
        }
        dispatch(action)
        history.push("/")

    }catch (error){
        console.log("error", error)
    }
}