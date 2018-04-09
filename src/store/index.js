import {createStore, combineReducers} from 'redux';
import {navbarReducer} from '../Navbar/reducer';
import {omdbReducer} from '../Pages/Omdb/reducer';





const store = createStore(combineReducers({navbarReducer, omdbReducer}));

export default store;