import initialState from './initialState';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

export const RECEIVE_ALBUMS_FROM_SERVER = 'RECIEVE_ALBUMS_FROM_SERVER';

// Note that we initialize our state as a plain object
function reducer (state = initialState, action) {
  switch(action.type) {
    case RECEIVE_ALBUMS_FROM_SERVER: return Object.assign({}, state, {albums: action.albums});
    default: return state;
  }
}
// Two things to note:
//   1. We use Object.assign to maintain immutability.
//      Since our state only has one key on it, it doesn't matter much, but what if we added more?
//   2. If we receive an action that doesn't have a type we recognize, we return the previous state


const store = createStore(reducer, applyMiddleware(createLogger(), thunkMiddleware));


const receiveAlbumsFromServer = albums => ({
  type: RECEIVE_ALBUMS_FROM_SERVER,
  albums
});

export const fetchAlbumsFromServer = () => {
  return dispatch => {
    fetch('/api/albums')
      .then(res => res.json())
      // use the dispatch method the thunkMiddleware gave us
      .then(albums => dispatch(receiveAlbumsFromServer(albums)));
  }
}

export const receiveAlbums = function (albums) {
  return { type: RECEIVE_ALBUMS_FROM_SERVER, albums }
};

export default store;
