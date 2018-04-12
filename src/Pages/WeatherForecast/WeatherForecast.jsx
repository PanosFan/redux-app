import React from 'react';
import Form from '../../Forms/Form';
import {connect} from 'react-redux';
import './WeatherForecast.css';
import action from './action';

const WeatherForecast = (props) => {

	// props = {
	// 	error : undefined,
	// 	name : undefined,
	// 	population : undefined,
	// 	array : []
	// }

	// callApi = (e) => {
	// 	e.preventDefault();

	// 	const API_KEY="3a52a27570d5f406e3d262754a68256b";
	// 	const city = e.target.elements.mainName.value;
	// 	const country = e.target.elements.mainCountry.value;
	// 	const unit = e.target.elements.units.value;

	// 	if (city && country) {
	// 		axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&units=${unit}&appid=${API_KEY}`)
	// 		.then(res => {
	// 			console.log(res)
	// 			setprops({
	// 				error : undefined,
	// 				array : res.data.list,
	// 				name : res.data.city.name,
	// 				population : res.data.city.population
	// 			});
	// 		})
	// 		.catch(error => {
	// 			console.log(error)
	// 			setprops({
	// 				error : "Location not found",
	// 				name : undefined,
	// 				population : undefined,
	// 				array : []
	// 			});
	// 		})

	// 	}
	// 	else
	// 	{
	// 		setprops({
	// 			error : "Please enter values",
	// 			name : undefined,
	// 			population : undefined,
	// 			array : []
	// 		});
	// 	}
	// }


		return(
			<div className="WeatherForecast container-fluid">
				<div className="row">
					<div className="col-sm-6">
						<Form callApi={(e) => props.handleSubmit(e, props.city_input, props.country_input, props.unit_input)} handleChange={props.handleCityChage} handleChange2={props.handleCountryChage} handleChange3={props.handleUnitChage} placeholder1="City" placeholder2="Country"/>
						{props.name && <p>Name: {props.name}</p>}
						{props.population && <p>Population: {props.population}</p>}
						<p className="error">{props.error}</p>
					</div>					
				</div>
					
		
					<div className="row">					
						{props.array.map((item, index) => {
							return (								
								<div className="col-sm-2 kek" key={index}>
									<span className="error">{item.dt_txt}</span> 
									<div>Temp: {item.main.temp} &#x2103;</div>
									<div>Min temp: {item.main.temp_min}</div>
									<div>Max temp: {item.main.temp_max}</div>
									<div>Description: {item.weather[0].description}</div>
									<div>Wind: {item.wind.speed}</div>
									<div>Humidity: {item.main.humidity}%</div>
								</div>								
							)	
						})}	
								
					</div>
			</div>
			
		);
	
}




const MapStateToProps = (state) => {
	return {
		special_init: state.weatherForecastReducer.special_unit,
		city_input: state.weatherForecastReducer.city_input,
		country_input: state.weatherForecastReducer.country_input,
		unit_input: state.weatherForecastReducer.unit_input,
		name: state.weatherForecastReducer.city,
		population: state.weatherForecastReducer.population,
		array: state.weatherForecastReducer.array,
		error: state.weatherForecastReducer.error
	}
}

const MapDispatchToProps = (dispatch) => {
	return {
		handleCityChage: (e) => {
			dispatch({ type: 'CITY_FC_INPUT_CHANGE', city_input: e.target.value});
		},
		handleCountryChage: (e) => {
			dispatch({ type: 'COUNTRY_FC_INPUT_CHANGE', country_input: e.target.value});
		},
		handleUnitChage: (e) => {
			dispatch({ type: 'UNIT_FC_INPUT_CHANGE', unit_input: e.target.value});
		},
		handleSubmit: (e, city_input, country_input, unit_input) => {
			e.preventDefault();			
			action.doCall(dispatch, city_input, country_input, unit_input)
		}
	}
}

export default connect(MapStateToProps, MapDispatchToProps) (WeatherForecast);