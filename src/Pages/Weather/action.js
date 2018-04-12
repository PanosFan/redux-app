import axios from 'axios';

function doCall (dispatch, city_input, country_input, unit_input) {
  if (city_input && country_input){
    const API_KEY="3a52a27570d5f406e3d262754a68256b";
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city_input},${country_input}&units=${unit_input}&appid=${API_KEY}`)
    .then(response => {
      console.log(response)
      dispatch({
        type: 'GET_WEATHER',
        temperature: response.data.main.temp,
        city: response.data.name,
        country: response.data.sys.country,
        humidity: response.data.main.humidity,
        description: response.data.weather[0].description,			    	
        wind_speed: response.data.wind.speed,
        special_unit: unit_input
      })					
    })
    .catch(err => {
      dispatch({
        type: 'GET_WEATHER',
        error: "Location was not found"
      })
    })
  }
  else
  {
    dispatch({
      type: 'GET_WEATHER',
      error: "Please enter proper values",					
    })
  }
}

export default {
  doCall
}