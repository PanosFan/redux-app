import React from 'react';

import {connect} from 'react-redux';
import Form from '../../Forms/Form';
import action from './action';

class Github extends React.Component {


	render(){
		return(
			<div>				
				<div className="Github container-fluid">
					<div className="row">
						<div className="col-sm-6">
							<Form handleChange={this.props.handleInputChage} callApi={(e) => this.props.handleSubmit(e, this.props.userName)} placeholder1="Name" classCall="no-display"/>
							{this.props.name && <p className="error">Name: <span className="apiSpan">{this.props.name}</span></p>}
							{this.props.login && <p className="error">Login Name: <span className="apiSpan">{this.props.login}</span></p>}
							{this.props.repos && <p className="error">Repositories: <span className="apiSpan">{this.props.repos}</span></p>}
							{this.props.repos_url && <p className="error">Github Page: <a className="apiSpan" href={this.props.repos_url} target="_blank">{this.props.repos_url}</a></p>}
							{this.props.error && <p className="error">{this.props.error}</p>}
						</div>
					</div>
				</div>
			</div>
		);
	}
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