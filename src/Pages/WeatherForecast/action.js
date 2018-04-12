import axios from 'axios';

function doCall (dispatch, city_input, country_input, unit_input) {
  if (city_input && country_input){
    const API_KEY="3a52a27570d5f406e3d262754a68256b";
    axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${city_input},${country_input}&units=${unit_input}&appid=${API_KEY}`)
    .then(response => {
      console.log(response)
      dispatch({
        type: 'GET_FC_WEATHER',
        array: response.data.list,
        city: response.data.city.name,
        special_unit: unit_input
      })					
    })
    .catch(err => {
      dispatch({
        type: 'GET_FC_WEATHER',
        array: [],
        error: "Location was not found"
      })
    })
  }
  else
  {
    dispatch({
      type: 'GET_FC_WEATHER',
      array: [],
      error: "Please enter proper values",					
    })
  }
}

export default {
  doCall
}