import React from 'react';
import Form from '../../Forms/Form';
import './Omdb.css';
import {connect} from 'react-redux';
import action from './action';

const Omdb = (props) => {

	
		return(
			<div className="Omdb container-fluid">
				<div className="row">
					<div className="col-sm-6">
						<Form handleChange={props.handleInputChage} callApi={(e) => props.handleSubmit(e, props.movieName)} placeholder1="Movie" classCall="no-display"/>
						{props.title && <p className="error">Title: <span className="apiSpan">{props.title}</span></p>}
						{props.actors && <p className="error">Actors: <span className="apiSpan">{props.actors}</span></p>}
						{props.country && <p className="error">Country: <span className="apiSpan">{props.country}</span></p>}
						{props.writer && <p className="error">Writer: <span className="apiSpan">{props.writer}</span></p>}
						{props.error && <p className="error">{props.error}</p>}
						
					</div>
				</div>

				
				{props.ratings.length>0 && <ul>
					{props.ratings.map((rating, index) => {
						return <li key={index}><span className="error">{rating.Source}:</span> {rating.Value}</li>
					})}
				</ul>}

			</div>
		);
	
}



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
			dispatch({ type: 'MOVIENAME_INPUT_CHANGE', input: e.target.value});
		},
		handleSubmit: (e, query) => {
			e.preventDefault();			
			action.doCall(dispatch, query)
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Omdb);