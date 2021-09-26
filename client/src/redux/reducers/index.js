import {combineReducers} from "redux";
import {achievementsReducer} from './achievements.js'

export default combineReducers({
    achievements: achievementsReducer
})