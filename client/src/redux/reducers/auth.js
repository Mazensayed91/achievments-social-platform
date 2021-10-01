const {AUTH_CONSTANTS} = require('../constants/index.js');

module.exports.authReducer = (state = {authData: null}, action) => {

    switch (action.type) {
        case AUTH_CONSTANTS.AUTH:
            localStorage.setItem('profile', JSON.stringify({...action?.payload}))
            return {...state, authData: action?.payload}

        case AUTH_CONSTANTS.LOGOUT:
            localStorage.clear()
            return {...state, authData: null}

        default:
            return state
    }
}