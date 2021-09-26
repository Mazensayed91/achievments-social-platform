const {ACHIEVEMENTS_CONSTANTS} = require('../constants/index.js');

module.exports.achievementsReducer = (achievements = [], action) => {

    switch (action.type) {
        case ACHIEVEMENTS_CONSTANTS.RECEIVE_ALL_ACHIEVEMENTS:
            return achievements

        default:
            return achievements
    }
}