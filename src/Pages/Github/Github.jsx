import React from 'react';

import {connect} from 'react-redux';
import Form from '../../Forms/Form';
import action from './action';

const Github = (props) => {


	
		return(
			<div>				
				<div className="Github container-fluid">
					<div className="row">
						<div className="col-sm-6">
							<Form handleChange={props.handleInputChage} callApi={(e) => props.handleSubmit(e, props.userName)} placeholder1="Name" classCall="no-display"/>
							{props.name && <p className="error">Name: <span className="apiSpan">{props.name}</span></p>}
							{props.login && <p className="error">Login Name: <span className="apiSpan">{props.login}</span></p>}
							{props.repos && <p className="error">Repositories: <span className="apiSpan">{props.repos}</span></p>}
							{props.repos_url && <p className="error">Github Page: <a className="apiSpan" href={props.repos_url} target="_blank">{props.repos_url}</a></p>}
							{props.error && <p className="error">{props.error}</p>}
						</div>
					</div>
				</div>
			</div>
		);
	
}


const MapStateToProps = (state) => {
	return {
		userName: state.githubReducer.userName,
		name: state.githubReducer.name,
		login: state.githubReducer.login,
		repos: state.githubReducer.repos,
		repos_url : state.githubReducer.repos_url,
		error: state.githubReducer.error
	}
}

const MapDispatchToProps = (dispatch) =>{
	return {
		handleInputChage: (e) => {
			dispatch({ type: 'USERNAME_INPUT_CHANGE', input: e.target.value});
		},
		handleSubmit: (e, query) => {
			e.preventDefault();			
			action.doCall(dispatch, query)
		}
	}
}

export default connect(MapStateToProps, MapDispatchToProps)(Github);