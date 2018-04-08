import {createStore, combineReducers} from 'redux';



const navbarReducer = (state={toggle : false}, action) => {
	switch (action.type) {
		case 'CLICKED':
			return Object.assign({}, state, {toggle: !state.toggle})
		default:
			return state;
	}	
}

const omdbReducer = (state={}, action) => {
	return state;
}

const store = createStore(combineReducers({navbarReducer, omdbReducer}));

export default store;