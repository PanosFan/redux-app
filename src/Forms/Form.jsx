import React from 'react';

import './Form.css';

const Form = (props) => {
	
		return (
			<div className="Form">
				<form onSubmit={props.callApi}>
					<input onChange={props.handleChange} type="text" name="mainName" placeholder={props.placeholder1}/>	
					<br/>

					<input onChange={props.handleChange2} className={props.classCall} type="text" name="mainCountry" placeholder={props.placeholder2}/>	
					<br className={props.classCall} />

					<select onChange={props.handleChange3} name="units" className={props.classCall}>
						<option value="metric">Metric</option>
  						<option value="imperial">Imperial</option>
					</select>

					<br className={props.classCall} />
					<button type="submit">Submit</button>
				</form>
			</div>
		);
	
}

export default Form;