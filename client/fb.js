import firebase from 'firebase';

const config = {
    apiKey: 'AIzaSyBbBKMwtK1mF1lSIHITOziU7DLcqI9mDlU',
    authDomain: 'articles-4b9d3.firebaseapp.com',
    databaseURL: 'https://articles-4b9d3.firebaseio.com/',
    storageBucket: 'articles-4b9d3.appspot.com',
};

firebase.initializeApp(config);

const fb = firebase;

export default fb;
