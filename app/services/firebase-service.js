
import Firebase from 'firebase';

import { setLoginStatus } from 'actions/app-actions';

var fb;

export function initFirebase() {
    return dispatch => {
        fb = new Firebase('https://pushups-game.firebaseio.com/');
    }        
}

export function login() {
    return (dispatch, getState) => {
        dispatch(setLoginStatus(true));
    };
}

export function logout() {
    return (dispatch, getState) => {
        dispatch(setLoginStatus(false));
    };
}
