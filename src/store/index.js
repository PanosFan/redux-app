import {createStore, combineReducers} from 'redux';
import {githubReducer} from '../Pages/Github/reducer';
import {omdbReducer} from '../Pages/Omdb/reducer';


const store = createStore(combineReducers({githubReducer, omdbReducer}));
export default store;