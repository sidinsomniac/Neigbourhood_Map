import React, {Component} from 'react'
import '../styles/navbar.css'

class Navbar extends Component {

	state = {
		showListing : false
	}

	render() {
		return (
			<nav>
				<div id='hamburger' onClick={() => {
					this.props.hideListings();
				}}>&#9776;</div>

				<h1>Neighbourhood Map</h1>
				
			</nav>
		)
	}
}

export default Navbar