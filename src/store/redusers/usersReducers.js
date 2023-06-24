import {GET_POSTS} from "../actions/actionsCreators"

const initialState = {
    users : {},
    
}

export const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_POSTS : 
            return {
                    ...state,
                    users : action.payload
                }

        default:
            return state
    }
}