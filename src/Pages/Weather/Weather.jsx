import React, {Component} from 'react';
import axios from 'axios';
import './Weather.css';
import Form from '../../Forms/Form';
import {connect} from 'react-redux';

// using special unit, because if I used just unit, then the state would change and render on the fly, and that would be a bug, to change the 
// unit description before the submit

class Weather extends Component {

	render(){
		return(
			<div className="Weather container-fluid">
				<div className="row">
					<div className="col-sm-6">
						<Form callApi={(e) => this.props.handleSubmit(e, this.props.city_input, this.props.country_input, this.props.unit_input)} handleChange={this.props.handleCityChage} handleChange2={this.props.handleCountryChage} handleChange3={this.props.handleUnitChage} placeholder1="City" placeholder2="Country"/>
						{this.props.city && this.props.country && <p className="error">Location: <span className="apiSpan">{this.props.city}, {this.props.country}</span></p>}
						{this.props.temperature && <p className="error">Temperate: <span className="apiSpan">{this.props.temperature} { this.props.special_unit==="metric" ? <span>&#x2103;</span> : <span>&#x2109;</span>}</span></p>}
						{this.props.humidity && <p className="error">Humidity: <span className="apiSpan">{this.props.humidity} %</span></p>}
						{this.props.wind_speed && <p className="error">Wind speed: <span className="apiSpan">{this.props.wind_speed} { this.props.special_unit==="metric" ? <span>m/s</span> : <span>m/h</span>}</span></p>}
						{this.props.description && <p className="error">Description: <span className="apiSpan">{this.props.description}</span></p>}
						{this.props.error && <p className="error">{this.props.error}</p>}						
					</div>
				</div>
			</div>
		);
	}
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
						special_unit:unit_input
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
	}
}



export default connect(MapStateToProps, MapDispatchToProps)(Weather);