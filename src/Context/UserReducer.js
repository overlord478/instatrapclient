import {USER_NAME} from './types'

export default (state,action) => {
    switch(action.type) {
        case USER_NAME: return {
            ...state,
            userName:action.payload
        }
        
        default:
            return state
    }
}