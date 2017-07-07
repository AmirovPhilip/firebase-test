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
    APP_ERROR_CLEAR,
} from '../actions/actionTypes'
import fb from '../../fb';

const auth = fb.auth();

export function logInUser(email, password) {
    return dispatch => {
        dispatch({
            type: USER_LOGIN_REQUESTED
        });
        return auth.signInWithEmailAndPassword(email, password).then(function(result) {
                dispatch({
                    type: USER_LOGIN_OK,
                    data: result
                });
            })
            .catch((error) => {
                dispatch({
                    type: USER_LOGIN_ERROR,
                    error: error
                });
            });
    }
}

export function logOutUser() {
    return dispatch => {
        dispatch({
            type: USER_LOGOUT_REQUESTED
        });
        return auth.signOut().then(function() {
                dispatch({
                    type: USER_LOGOUT_OK
                });
            }).catch(function(error) {
                dispatch({
                    type: USER_LOGOUT_ERROR,
                    error: error
                });
            });
    }
}

export function checkSessionUser() {
    return dispatch => {
        dispatch({
            type: USER_SESSION_REQUESTED
        });
        return auth.onAuthStateChanged(function(user){
            if(user){
                dispatch({
                    type: USER_SESSION_YES,
                    data: user
                });
            } else {
                dispatch({
                    type: USER_SESSION_NO
                });
            }
        });

    }
}

export function createNewUser(name, email, password) {
    return dispatch => {
        dispatch({
            type: USER_REGISTER_REQUESTED
        });
        auth.createUserWithEmailAndPassword(email, password).then(function(result) {
            dispatch({
                type: USER_REGISTER_OK,
                data: result
            });
        }, function(error) {
            dispatch({
                type: USER_REGISTER_ERROR,
                error: error
            });
        })
    }
}

export function logInWithGoogle(){
    return dispatch => {
        dispatch({
            type: USER_LOGIN_REQUESTED
        });
        let provider = new fb.auth.GoogleAuthProvider();
        fb.auth().signInWithRedirect(provider);
        //provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
        return auth.getRedirectResult().then(function(result) {
                console.log(result)
                if(result.user){
                    dispatch({
                        type: USER_LOGIN_OK,
                        data: result.user
                    });
                }
            })
            .catch((error) => {
                dispatch({
                    type: USER_LOGIN_ERROR,
                    error: error
                });
            });
    }
}

export function hideError(){
    return dispatch => {
    dispatch({
        type: APP_ERROR_CLEAR
    });
    }
}