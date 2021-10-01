import {combineReducers} from "redux";
import {achievementsReducer} from './achievements.js'
import {authReducer} from './auth'

export default combineReducers({
    achievements: achievementsReducer,
    auth: authReducer
})