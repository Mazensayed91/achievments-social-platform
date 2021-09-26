const {ACHIEVEMENTS_CONSTANTS} = require('../constants/index.js');

module.exports.achievementsReducer = (achievements = [], action) => {

    switch (action.type) {
        case ACHIEVEMENTS_CONSTANTS.RECEIVE_ALL_ACHIEVEMENTS:
            return action.payload

        case ACHIEVEMENTS_CONSTANTS.CREATE_ACHIEVEMENT:
            return [ ...achievements, action.payload]


        default:
            return achievements
    }
}