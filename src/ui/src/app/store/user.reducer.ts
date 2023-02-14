import * as userActions from './user.action';
import * as types from './action.types';
import { AppState } from './app.state';

export const initialState: AppState = {
    users: []
}

export function UserReducer
    (state = initialState, action: userActions.Actions) {

    switch(action.type) {

        case types.LOAD_USERS: {
            return state
        }

        case types.LOAD_USERS_SUCCESS: {
            return { ...state, users: action.payload }
        }
        default: {
            return state;
        }
    }
}