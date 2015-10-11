
export const SET_LOGIN_STATUS = 'app@setLoginStatus';

export function setLoginStatus(value) {
    return {
        type: SET_LOGIN_STATUS,
        value
    };
}