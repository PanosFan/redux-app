import React from 'react';
import axios from 'axios';

import Form from '../../Forms/Form';

import './WeatherForecast.css';

export default class Github extends React.Component {




	state = {
		error : undefined,
		name : undefined,
		population : undefined,
		array : []
	}

	callApi = (e) => {
		e.preventDefault();

		const API_KEY="3a52a27570d5f406e3d262754a68256b";
		const city = e.target.elements.mainName.value;
		const country = e.target.elements.mainCountry.value;
		const unit = e.target.elements.units.value;

		if (city && country) {
			axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&units=${unit}&appid=${API_KEY}`)
			.then(res => {
				console.log(res)
				this.setState({
					error : undefined,
					array : res.data.list,
					name : res.data.city.name,
					population : res.data.city.population
				});
			})
			.catch(error => {
				console.log(error)
				this.setState({
					error : "Location not found",
					name : undefined,
					population : undefined,
					array : []
				});
			})

		}
		else
		{
			this.setState({
				error : "Please enter values",
				name : undefined,
				population : undefined,
				array : []
			});
		}
	}



	render(){
		return(
			<div className="WeatherForecast container-fluid">
				<div className="row">
					<div className="col-sm-6">
						<Form callApi={this.callApi} placeholder1="City" placeholder2="Country"/>
						{this.state.name && <p>Name: {this.state.name}</p>}
						{this.state.population && <p>Population: {this.state.population}</p>}
						<p className="error">{this.state.error}</p>
					</div>					
				</div>
					
					<div className="row">					
						{this.state.array.map((item, index) => {
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
}