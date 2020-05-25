import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import "./Navbar.css";

export default class Navbar extends Component {
	render() {
		return(
			<React.Fragment>
				<header>
					<nav>
						<div className="container">
							<NavLink exact to="/" activeClassName="active">Home</NavLink>
			         		<NavLink exact to="/quotes">Quotes</NavLink>
		         		</div>
		         	</nav>
		        </header>
			</React.Fragment>
		)
	}
}