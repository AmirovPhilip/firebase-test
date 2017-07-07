import {
    ADD_ARTICLE,
    DELETE_ARTICLE,
    GET_ARTICLE,
    GET_ARTICLES_FROM_SERVER_REQUESTED,
    GET_ARTICLES_FROM_SERVER_YES,
    GET_ARTICLES_FROM_SERVER_ERROR
} from '../actions/actionTypes'

const initialState = {
    articlesArr: [],
    currentArticle: {},
    error: '',
    loading: false
};

export default function (state = initialState, action) {

    switch (action.type) {

        case ADD_ARTICLE:
            return state;
        case DELETE_ARTICLE:
            //let newState = { ...state}
            //for(let i = 0; i < newState.articles.length; i++){
            //    if(newState.articles[i].id == action.id){
            //        newState.articles.splice(i,1);
            //    }
            //}
            return state
        case GET_ARTICLES_FROM_SERVER_REQUESTED:
            return state
        case GET_ARTICLES_FROM_SERVER_YES:
            var articlesList = [];
            for (var prop in action.data) {
                if( action.data.hasOwnProperty( prop ) ) {
                    var val = action.data[prop];
                    articlesList.push({
                        id: prop,
                        title: val.title,
                        description: val.description,
                        imageUrl: val.imageurl,
                        text: val.text
                    });
                }
            }
            return { ...state, 'articlesArr': [...articlesList]}
        case GET_ARTICLES_FROM_SERVER_ERROR:
            return state
        case GET_ARTICLE:
            return { ...state, ...{
                currentArticle: action.data
            }}
        default:
            return state
    }

}