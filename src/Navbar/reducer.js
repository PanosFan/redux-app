export const navbarReducer = (state={toggle : false}, action) => {
	switch (action.type) {
		case 'CLICKED':
			return Object.assign({}, state, {toggle: !state.toggle})
		default:
			return state;
	}	
}