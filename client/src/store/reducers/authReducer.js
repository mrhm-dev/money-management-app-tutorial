import * as Types from '../actions/types'

const init = {
    isAuthenticated: false,
    user: {},
    error: {}
}

const authReducer = (state=init, action) => {
    switch (action.type) {
        case Types.SET_USER: {
            return {
                user: action.payload.user,
                isAuthenticated: Object.keys(action.payload.user).length !== 0,
                error: {}
            }
        }
        case Types.USERS_ERROR: {
            return {
                ...state,
                error: action.payload.error
            }
        }
        default: return state
    }
}

export default authReducer