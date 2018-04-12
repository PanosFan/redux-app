import {createStore, combineReducers} from 'redux';
import {githubReducer} from '../Pages/Github/reducer';
import {omdbReducer} from '../Pages/Omdb/reducer';
import {weatherReducer} from '../Pages/Weather/reducer';
import {weatherForecastReducer} from '../Pages/WeatherForecast/reducer';


const store = createStore(combineReducers({githubReducer, omdbReducer, weatherReducer, weatherForecastReducer}));
export default store;