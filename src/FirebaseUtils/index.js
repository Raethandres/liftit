import firebase from 'firebase';
import store from '../redux/store';
import config from './config';


if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const database = firebase.database();
const auth = firebase.auth();

auth.onAuthStateChanged((user) => {
  if (user) {
    const { email, uid } = user;
    store.dispatch({
      type: 'ADD_USER',
      payload: {
        isAuth: true,
        email,
        uid,
      },
    });
    
    
  }else{
    store.dispatch({
      type: 'DELETE_USER',
      payload: {
        isAuth: false,
      },
    });
  }
});
export {
  firebase,
  database,
  auth,
};
