export const omdbReducer = (state={
	movieName : '',
	title : undefined,		
	actors : undefined,
	country : undefined,
	writer : undefined,
	error : undefined,
	ratings : []
	}, action) => {	
	switch (action.type) {
		case 'INPUT_CHANGE':
			return Object.assign({}, state, {movieName: action.input})

		case 'SAVE_MOVIE':
			return Object.assign({}, state, {
				title: action.title,
				writer: action.writer,
				actors: action.actors,
				country: action.country,
				error: action.error,
				ratings: action.ratings
			})

		default:
			return state;
	}
}