
import Firebase from 'firebase';

var fb;

export function initFirebase() {
    return dispatch => {
        fb = new Firebase('https://pushups-game.firebaseio.com/');
    }        
}
