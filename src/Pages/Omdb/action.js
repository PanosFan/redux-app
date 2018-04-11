import axios from 'axios';

function doCall (dispatch, query) {
  const Api_Key = "2613b509";
  if (query){
    axios.get(`http://www.omdbapi.com/?t=${query}&apikey=${Api_Key}`)
    .then(res => {
      console.log(res)
      if(res.data.Response==="True") {
        dispatch({
          type: 'SAVE_MOVIE',
          title: res.data.Title,
          country: res.data.Country,
          writer: res.data.Writer,
          actors: res.data.Actors,
          error: res.data.Error,
          ratings: res.data.Ratings
        })
      }
      else{
        dispatch({
          type: 'SAVE_MOVIE',
          error: res.data.Error,
          ratings: []
        })
      }				
    })
  }
  else
  {
    dispatch({
      type: 'SAVE_MOVIE',
      error: "Please enter a name",
      ratings: []
    })
  }
}


export default {
  doCall
}