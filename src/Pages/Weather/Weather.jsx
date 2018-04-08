import React, {Component} from 'react';

import './Weather.css';

import Form from '../../Forms/Form';

class Weather extends Component {

	state = {
		temperature: undefined,
		city: undefined,
		country: undefined,
		humidity: undefined,
		description: undefined,		
		wind_speed: undefined,
		unit :undefined,	
		error: undefined
	}

	callApi = async (e) => {
		e.preventDefault();

		const API_KEY="3a52a27570d5f406e3d262754a68256b";
		const city = e.target.elements.mainName.value;
		const country = e.target.elements.mainCountry.value;
		const unit = e.target.elements.units.value;

		if (city && country){
			const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=${unit}&appid=${API_KEY}`);
		    const data = await api_call.json();

		    if (data.cod === 200)
		    {
		    	this.setState({
			    	temperature: data.main.temp,
			    	city: data.name,
			    	country: data.sys.country,
			    	unit : unit,
			    	humidity: data.main.humidity,
			    	description: data.weather[0].description,			    	
			    	wind_speed: data.wind.speed,			    	
			    	error: undefined
	    		});
	    		
		    }
		    else		    
		    {
		    	this.setState({
			    	temperature: undefined,
			    	city: undefined,
			    	country: undefined,
			    	unit :undefined,
			    	humidity: undefined,
			    	description: undefined,			    	
			    	wind_speed: undefined,
			    	error: "Location was not found by the server"
	    		});
		    }
		}
		else
		{
			this.setState({
		    	temperature: undefined,
		    	city: undefined,
		    	country: undefined,
		    	unit :undefined,
		    	humidity: undefined,
		    	description: undefined,		    	
		    	wind_speed: undefined,
		    	error: "Please enter proper values"
	    	});
		}

	}







	render(){
		return(
			<div className="Weather container-fluid">
				<div className="row">
					<div className="col-sm-6">
						<Form callApi={this.callApi} placeholder1="City" placeholder2="Country"/>
						{this.state.city && this.state.country && <p className="error">Location: <span className="apiSpan">{this.state.city}, {this.state.country}</span></p>}
						{this.state.temperature && <p className="error">Temperate: <span className="apiSpan">{this.state.temperature} { this.state.unit==="metric" ? <span>&#x2103;</span> : <span>&#x2109;</span>}</span></p>}
						{this.state.humidity && <p className="error">Humidity: <span className="apiSpan">{this.state.humidity} %</span></p>}
						{this.state.wind_speed && <p className="error">Wind speed: <span className="apiSpan">{this.state.wind_speed} { this.state.unit==="metric" ? <span>m/s</span> : <span>m/h</span>}</span></p>}
						{this.state.description && <p className="error">Description: <span className="apiSpan">{this.state.description}</span></p>}
						<p className="error">{this.state.error}</p>
					</div>
				</div>
			</div>
		);
	}
}
export default Weather;