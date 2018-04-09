import React, { Component } from 'react';
import Form from '../../Forms/Form';
import './Omdb.css';
import {connect} from 'react-redux';
import axios from 'axios';

class Omdb extends Component {

	render () {
		return(
			<div className="Omdb container-fluid">
				<div className="row">
					<div className="col-sm-6">
						<Form handleChange={this.props.handleInputChage} callApi={(e) => this.props.handleSubmit(e, this.props.movieName)} placeholder1="Movie" classCall="no-display"/>
						{this.props.title && <p className="error">Title: <span className="apiSpan">{this.props.title}</span></p>}
						{this.props.actors && <p className="error">Actors: <span className="apiSpan">{this.props.actors}</span></p>}
						{this.props.country && <p className="error">Country: <span className="apiSpan">{this.props.country}</span></p>}
						{this.props.writer && <p className="error">Writer: <span className="apiSpan">{this.props.writer}</span></p>}
						<p className="error">{this.props.error}</p>
						
					</div>
				</div>

				<ul>
					{this.props.ratings.map((rating, index) => {
						return <li key={index}><span className="error">{rating.Source}:</span> {rating.Value}</li>
					})}
				</ul>
			</div>
		);
	}
}

const Api_Key = "2613b509";

const mapStateToProps = (state) => {
	return {
		movieName: state.omdbReducer.movieName,
		title: state.omdbReducer.title,
		actors: state.omdbReducer.actors,
		country: state.omdbReducer.country,
		writer: state.omdbReducer.writer,
		error: state.omdbReducer.error,
		ratings: state.omdbReducer.ratings
	}
}


const mapDispatchToProps = (dispatch) => {
	return {
		handleInputChage: (e) => {
			dispatch({ type: 'INPUT_CHANGE', input: e.target.value});
		},
		handleSubmit: (e, query) => {
			e.preventDefault();			
			if (query){
				axios.get(`http://www.omdbapi.com/?t=${query}&apikey=${Api_Key}`)
				.then(res => {
					console.log(res)
					if(res.data.Response==="True") {
						dispatch({
							type: 'SAVE_MOVIE',
							title: res.data.Title,
							country: res.data.Country,
							writer: res.data.Writer,
							actors: res.data.Actors,
							error: res.data.Error,
							ratings: res.data.Ratings
						})
					}
					else{
						dispatch({
							type: 'SAVE_MOVIE',
							error: res.data.Error,
							ratings: []
						})
					}				
				})
			}
			else
			{
				dispatch({
					type: 'SAVE_MOVIE',
					error: "Please enter a name",
					ratings: []
				})
			}
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Omdb);