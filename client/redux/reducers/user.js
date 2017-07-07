import {
    USER_LOGIN_REQUESTED,
    USER_LOGIN_OK,
    USER_LOGIN_ERROR,
    USER_LOGOUT_REQUESTED,
    USER_LOGOUT_OK,
    USER_LOGOUT_ERROR,
    USER_SESSION_REQUESTED,
    USER_SESSION_YES,
    USER_SESSION_NO,
    USER_REGISTER_REQUESTED,
    USER_REGISTER_OK,
    USER_REGISTER_ERROR,
    APP_ERROR_CLEAR
} from '../actions/actionTypes'

const initialState = {
    name: '',
    email: '',
    ava: 'http://www.images.lesyadraw.ru/2013/06/House.jpg',
    admin: true,
    login: false,
    error: null,
    loading: false
};

export default function (state = initialState, action) {

    switch (action.type) {

        case USER_LOGIN_REQUESTED:
            return { ...state, ...{
                loading: true
            }}
        case USER_LOGIN_OK:
            return {...state, ...{
                email: action.data.email,
                login: true,
                loading: false
            }}
        case USER_LOGIN_ERROR:
            return {...state, ...{
                error: action.error,
                loading: false
            }}
        case USER_SESSION_REQUESTED:
            return { ...state, ...{
                loading: true
            }}
        case USER_SESSION_YES:
            let name = '';
            let email = '';
            let ava = '';
            action.data.providerData.forEach(function (profile) {
                name = profile.displayName;
                email = profile.email;
                ava = profile.photoURL;
            });
            return {...state, ...{
                name: name,
                email: email,
                ava: ava,
                login: true,
                loading: false
            }}
        case USER_SESSION_NO:
            return {...state, ...initialState, ...{
                loading: false
            }}
        case USER_REGISTER_REQUESTED:
            return { ...state, ...{
                loading: true
            }}
        case USER_REGISTER_OK:
            return {...state, ...{
                loading: false
            }}
        case USER_REGISTER_ERROR:
            return {...state, ...{
                error: action.error,
                loading: false
            }}
        case USER_LOGOUT_REQUESTED:
            return state
        case USER_LOGOUT_OK:
            return {...state, ...initialState}
        case USER_LOGOUT_ERROR:
            return {...state, ...{
                error: action.error
            }}
        case APP_ERROR_CLEAR:
            return {...state, ...{
                error: null
            }}
        default:
            return state

    }

}