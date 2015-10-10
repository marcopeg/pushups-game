
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import { devTools, persistState } from 'redux-devtools';

import { reducers } from 'reducers';
const appReducer = combineReducers(reducers);

var store;

export function makeStore(debug = false) {    

    var finalCreateStore;

    if (debug) {
        finalCreateStore = compose(
            applyMiddleware(reduxThunk),
            devTools(),
            persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/)),
            createStore
        );
    } else {
        finalCreateStore = compose(
            applyMiddleware(reduxThunk),
            createStore
        );
    }

    store = finalCreateStore(appReducer);
    return store;
}
