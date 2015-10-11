
import { SET_LOGIN_STATUS } from 'actions/app-actions';

export const initialState = {
    isLoggedIn: false
};

export function appReducer(state = initialState, action) {
    switch (action.type) {
        case SET_LOGIN_STATUS:
            return { ...state,
                isLoggedIn: action.value
            };
        default:
            return state;
    }
}
