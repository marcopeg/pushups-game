
import Firebase from 'firebase';

import { setLoginStatus } from 'actions/app-actions';

var fb;

export function initFirebase() {
    return (dispatch, getState) => {
        fb = new Firebase('https://pushups-game.firebaseio.com/');
        initAuth(dispatch, getState);
    }        
}

export function login(callback) {
    return (dispatch, getState) => {
        fb.authWithOAuthRedirect('facebook', callback);
    };
}

export function logout() {
    return (dispatch, getState) => {
        fb.unauth();
    };
}

function initAuth(dispatch, getState) {
    fb.onAuth(data => {
        if (data) {
            console.log('LOGIN DATA', data);
            dispatch(setLoginStatus(true));
        } else {
            dispatch(setLoginStatus(false));
        }
    });
}
