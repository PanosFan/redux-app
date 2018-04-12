import React from 'react';
import './Weather.css';
import Form from '../../Forms/Form';
import {connect} from 'react-redux';
import action from './action';

// using special unit, because if I used just unit, then the state would change and render on the fly, and that would be a bug, to change the 
// unit description before the submit

const Weather = (props) => {

	
		return(
			<div className="Weather container-fluid">
				<div className="row">
					<div className="col-sm-6">
						<Form callApi={(e) => props.handleSubmit(e, props.city_input, props.country_input, props.unit_input)} handleChange={props.handleCityChage} handleChange2={props.handleCountryChage} handleChange3={props.handleUnitChage} placeholder1="City" placeholder2="Country"/>
						{props.city && props.country && <p className="error">Location: <span className="apiSpan">{props.city}, {props.country}</span></p>}
						{props.temperature && <p className="error">Temperate: <span className="apiSpan">{props.temperature} { props.special_unit==="metric" ? <span>&#x2103;</span> : <span>&#x2109;</span>}</span></p>}
						{props.humidity && <p className="error">Humidity: <span className="apiSpan">{props.humidity} %</span></p>}
						{props.wind_speed && <p className="error">Wind speed: <span className="apiSpan">{props.wind_speed} { props.special_unit==="metric" ? <span>m/s</span> : <span>m/h</span>}</span></p>}
						{props.description && <p className="error">Description: <span className="apiSpan">{props.description}</span></p>}
						{props.error && <p className="error">{props.error}</p>}						
					</div>
				</div>
			</div>
		);
	
}


const MapStateToProps = (state) => {
	return {
		special_unit: state.weatherReducer.special_unit,
		city_input: state.weatherReducer.city_input,
		country_input: state.weatherReducer.country_input,
		unit_input: state.weatherReducer.unit_input,
		temperature: state.weatherReducer.temperature,
		city: state.weatherReducer.city,
		country: state.weatherReducer.country,
		humidity: state.weatherReducer.humidity,
		description: state.weatherReducer.description,
		wind_speed: state.weatherReducer.wind_speed,
		error: state.weatherReducer.error
	}
}


const MapDispatchToProps = (dispatch) =>{
	return {
		handleCityChage: (e) => {
			dispatch({ type: 'CITY_INPUT_CHANGE', city_input: e.target.value});
		},
		handleCountryChage: (e) => {
			dispatch({ type: 'COUNTRY_INPUT_CHANGE', country_input: e.target.value});
		},
		handleUnitChage: (e) => {
			dispatch({ type: 'UNIT_INPUT_CHANGE', unit_input: e.target.value});
		},
		handleSubmit: (e, city_input, country_input, unit_input) => {
			e.preventDefault();			
			action.doCall(dispatch, city_input, country_input, unit_input)
		}
	}
}



export default connect(MapStateToProps, MapDispatchToProps)(Weather);