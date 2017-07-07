import {
    ADD_ARTICLE,
    DELETE_ARTICLE,
    GET_ARTICLE,
    GET_ARTICLES_FROM_SERVER_REQUESTED,
    GET_ARTICLES_FROM_SERVER_YES,
    GET_ARTICLES_FROM_SERVER_ERROR
} from './actionTypes'
import fb from '../../fb';

const database = fb.database();

export function addArticle(data) {
    return dispatch => {
        dispatch({
            type: ADD_ARTICLE
        });
        return database.ref('/articles').push().set(
            data
        );
    }
}

export function deleteArticle(id) {
    return dispatch => {
        dispatch({
            type: DELETE_ARTICLE,
            id: id
        });
    }
}

export function getOneArticle(data) {
    return dispatch => {
        dispatch({
            type: GET_ARTICLE,
            data: data
        });
    }
}

export function getArticleFromServer() {
    return dispatch => {
        dispatch({
            type: GET_ARTICLES_FROM_SERVER_REQUESTED
        });
        return database.ref('/articles').on('value', snap => {
                dispatch({
                    type: GET_ARTICLES_FROM_SERVER_YES,
                    data: snap.val()
                })
            });
            //.catch((error) => {
            //    dispatch({
            //        type: GET_ARTICLES_FROM_SERVER_ERROR,
            //        error: error
            //    });
            //});
    }
}
