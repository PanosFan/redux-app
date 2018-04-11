import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import Form from '../../Forms/Form';

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
			if (query){
				axios.get(`https://api.github.com/users/${query}`, {
					data: {
						client_id:'6bb5428a910c1c2426dc',
						client_secret: '4f1a200860a548a638615e6a660824083d4336da'
					}
				})
				.then(response => {
					console.log(response)
					dispatch({
						type: 'SAVE_GIT',
						name: response.data.name,
    				login: response.data.login,
    				repos: response.data.public_repos,
    				repos_url : response.data.html_url						
					})
				})
				.catch(err => {
					dispatch({
						type: 'SAVE_GIT',
						error: "Username not found"
					})
				})
			}
			else
			{
				dispatch({
					type: 'SAVE_GIT',
					error: "Please enter a name",					
				})
			}
		}
	}
}

export default connect(MapStateToProps, MapDispatchToProps)(Github);