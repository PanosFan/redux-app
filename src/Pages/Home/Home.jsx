import React, {Component} from 'react';
import './Home.css';


import Showcase from './Showcase';
import Footer from '../../Footer/Footer';



class Home extends Component {

	


	render () {
		return (
			<div className="Home text-center">		
				<Showcase/>	
				<div className="container-fluid">
					<div id="first-row">
						<h1>Web Api hostpage</h1>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore consequuntur eaque pariatur quia deleniti culpa in illum nihil alias labore, iste non blanditiis ullam esse natus necessitatibus, sit officiis fugiat iure earum incidunt, velit reprehenderit aspernatur vitae id! Aspernatur, odio.</p>
					</div>
					<div className="row" id="cards">
						<div className="col-sm-4">
							<img src={require('../../Images/card1.jpg')} alt=""/>
							<h3>Movies</h3>
							<p className="text-muted ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis vero labore voluptatem incidunt, ipsa facilis iste obcaecati similique alias, repudiandae minima earum sint, aut rem voluptatibus. Soluta similique nihil, unde.</p>
						</div>
						<div className="col-sm-4">
							<img src={require('../../Images/card2.jpg')} alt=""/>
							<h3>Github profiles</h3>
							<p className="text-muted ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis vero labore voluptatem incidunt, ipsa facilis iste obcaecati similique alias, repudiandae minima earum sint, aut rem voluptatibus. Soluta similique nihil, unde.</p>
						</div>
						<div className="col-sm-4">
							<img src={require('../../Images/card3.jpg')} alt=""/>
							<h3>Weather forecast</h3>
							<p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis vero labore voluptatem incidunt, ipsa facilis iste obcaecati similique alias, repudiandae minima earum sint, aut rem voluptatibus. Soluta similique nihil, unde.</p>
						</div>
					</div>
					<div className="row" id="row-2">
						<div className="col-sm-12">
							<h2>We handle all your digital needs</h2>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam quasi nostrum consequuntur, rem officia illum obcaecati, sequi. Obcaecati, laboriosam, veniam!</p>
						</div>
					</div>
				</div>	
				<Footer/>					
			</div>
		);
	}
}


export default Home;