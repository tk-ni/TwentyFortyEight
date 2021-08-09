import {createStore} from 'redux';
import playerReducer from '~src/store/reducers/player.reducer.js';

const store = createStore(playerReducer);

export default store;