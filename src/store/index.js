import {createStore, combineReducers} from 'redux';
import {githubReducer} from '../Pages/Github/reducer';
import {omdbReducer} from '../Pages/Omdb/reducer';
import {weatherReducer} from '../Pages/Weather/reducer';


const store = createStore(combineReducers({githubReducer, omdbReducer, weatherReducer}));
export default store;