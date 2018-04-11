export const weatherReducer = (state={
  special_unit: undefined,
  city_input: undefined,
  country_input: undefined,
  unit_input:"metric",	
  temperature: undefined,
	city: undefined,
	country: undefined,
	humidity: undefined,
	description: undefined,		
	wind_speed: undefined,	
	error: undefined
}, action) => {
switch(action.type){
  case 'CITY_INPUT_CHANGE':
    return Object.assign({}, state, {city_input: action.city_input})
  case 'COUNTRY_INPUT_CHANGE':
    return Object.assign({}, state, {country_input: action.country_input})
  case 'UNIT_INPUT_CHANGE':
    return Object.assign({}, state, {unit_input: action.unit_input})
  case 'GET_WEATHER':
    return Object.assign({}, state, {
      special_unit: action.special_unit,
      temperature: action.temperature,
      city: action.city,
      country: action.country,
      humidity: action.humidity,
      description: action.description,
      wind_speed: action.wind_speed,      
      error: action.error
    })
  default:
    return state;
}
}