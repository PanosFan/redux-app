import React, {Component} from 'react';
import './Footer.css';

class Footer extends Component {
	render () {
		return (
			<div className="Footer">
				<footer >
					<p>Brand-Name, Copyright &copy; {new Date().getFullYear()}</p>
				</footer>
			</div>
		);
	}
}


export default Footer;