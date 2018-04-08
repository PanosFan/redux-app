import {createStore} from 'redux';

const initialState = {
	toggle : false
}

const reducer = (state=initialState, action) => {
	switch (action.type) {
		case 'CLICKED':
			return Object.assign({}, state, {toggle: !state.toggle})
		default:
			return state;
	}	
}

const store = createStore(reducer);

export default store;