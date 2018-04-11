import axios from 'axios';

function doCall(dispatch, query) {
  if (query){
    axios.get(`https://api.github.com/users/${query}`, {
      data: {
        client_id:'6bb5428a910c1c2426dc',
        client_secret: '4f1a200860a548a638615e6a660824083d4336da'
      }
    })
    .then(response => {
      console.log(response)
      dispatch({
        type: 'SAVE_GIT',
        name: response.data.name,
        login: response.data.login,
        repos: response.data.public_repos,
        repos_url : response.data.html_url						
      })
    })
    .catch(err => {
      dispatch({
        type: 'SAVE_GIT',
        error: "Username not found"
      })
    })
  }
  else
  {
    dispatch({
      type: 'SAVE_GIT',
      error: "Please enter a name",					
    })
  }
}

export default {
  doCall
}