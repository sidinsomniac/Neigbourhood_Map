import React, {Component} from 'react'
import Listing from './Listing'
import '../styles/navbar.css'

class Navbar extends Component {

	state = {
		showListing : false
	}

	render() {
		return (
			<nav>
				<div id='hamburger' onClick={() => {
					this.setState({
						showListing: !this.state.showListing
					})
				}}>&#9776;</div>

				<h1>Neighbourhood Map</h1>
				
				{this.state.showListing ? <Listing venueList={this.props.venueList}/> : ''}
			</nav>
		)
	}
}

export default Navbar