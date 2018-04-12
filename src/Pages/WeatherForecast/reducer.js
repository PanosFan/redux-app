export const weatherForecastReducer = (state={
  special_unit: undefined,
  city_input: undefined,
  country_input: undefined,
  unit_input:"metric",	
  city: undefined,
  population: undefined,
  array: [],
	error: undefined
}, action) => {
switch(action.type){
  case 'CITY_FC_INPUT_CHANGE':
    return Object.assign({}, state, {city_input: action.city_input})
  case 'COUNTRY_FC_INPUT_CHANGE':
    return Object.assign({}, state, {country_input: action.country_input})
  case 'UNIT_FC_INPUT_CHANGE':
    return Object.assign({}, state, {unit_input: action.unit_input})
  case 'GET_FC_WEATHER':
    return Object.assign({}, state, {
      special_unit: action.special_unit,
      city: action.city,
      population: action.population,
      array: action.array,      
      error: action.error
    })
  default:
    return state;
}
}