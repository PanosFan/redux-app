import React from 'react';
import axios from 'axios';


import Form from '../../Forms/Form';

export default class Github extends React.Component {

	state = {
		userName: undefined,
		name: undefined,
		login: undefined,
		repos: undefined,
		repos_url : undefined,
		error: undefined
	}

	handleChange = (e) => {
		this.setState({
			userName: e.target.value,
			name: undefined,
			login: undefined,
			repos: undefined,
			repos_url : undefined,
			error: undefined
		});
	}


	callApi = (e) => {
		e.preventDefault();		
		if (this.state.userName) {
			axios.get(`https://api.github.com/users/${this.state.userName}`, {
				data: {
					client_id:'6bb5428a910c1c2426dc',
					client_secret: '4f1a200860a548a638615e6a660824083d4336da'
				}
			})
			.then(response => {				
				this.setState({
					userName : undefined,
    				name: response.data.name,
    				login: response.data.login,
    				repos: response.data.public_repos,
    				repos_url : response.data.html_url,
					error: undefined
				});			
			})
			.catch(error => {
    			this.setState({
    				userName : undefined,
    				name: undefined,
    				login: undefined,
    				repos_url : undefined,
    				repos: undefined,
					error: "Username not found"
				});
  			})

		}
		else
		{
			this.setState({
				userName : undefined,
				name: undefined,
				login: undefined,
				repos_url : undefined,
				repos: undefined,
				error: "Please enter a username"
			});
		}
	}


	render(){
		return(
			<div>				
				<div className="Github container-fluid">
					<div className="row">
						<div className="col-sm-6">
							<Form handleChange={this.handleChange} callApi={this.callApi} placeholder1="Name" classCall="no-display"/>
							{this.state.name && <p className="error">Name: <span className="apiSpan">{this.state.name}</span></p>}
							{this.state.login && <p className="error">Login Name: <span className="apiSpan">{this.state.login}</span></p>}
							{this.state.repos && <p className="error">Repositories: <span className="apiSpan">{this.state.repos}</span></p>}
							{this.state.repos_url && <p className="error">Github Page: <a className="apiSpan" href={this.state.repos_url} target="_blank">{this.state.repos_url}</a></p>}						
							<p className="error">{this.state.error}</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}