export const githubReducer = (state={
    userName: undefined,
		name: undefined,
		login: undefined,
		repos: undefined,
		repos_url : undefined,
		error: undefined
}, action) => {
  switch(action.type){
    case 'USERNAME_INPUT_CHANGE':
      return Object.assign({}, state, {userName: action.input})
    case 'SAVE_GIT':
      return Object.assign({}, state, {
        name: action.name,
        login: action.login,
        repos: action.repos,
        repos_url: action.repos_url,
        error: action.error
      })
    default:
      return state;
  }
}