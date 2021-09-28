const {ACHIEVEMENTS_CONSTANTS} = require('../constants/index.js');

module.exports.achievementsReducer = (achievements = [], action) => {

    switch (action.type) {
        case ACHIEVEMENTS_CONSTANTS.RECEIVE_ALL_ACHIEVEMENTS:
            return action.payload

        case ACHIEVEMENTS_CONSTANTS.CREATE_ACHIEVEMENT:
            return [ ...achievements, action.payload]

        case ACHIEVEMENTS_CONSTANTS.UPDATE_ACHIEVEMENT:
        case ACHIEVEMENTS_CONSTANTS.LIKE_ACHIEVEMENT:
            return achievements.map((achievement) => {
                if(achievement._id === action.payload._id){
                    return action.payload
                }
                return achievement
            })
        case ACHIEVEMENTS_CONSTANTS.DELETE_ACHIEVEMENT:
            return achievements.filter(achievement => achievement._id !== action.payload._id)


        default:
            return achievements
    }
}