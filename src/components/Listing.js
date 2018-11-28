import React, {Component} from 'react'
import '../styles/listing.css'

class Listing extends Component {
	render() {
		return (
			<section id='listing'>
				<input type="text" placeholder="Search by title or author" id='searchbar'/>
				<ul id='venueList'>
					{this.props.venueList.map(eachVenue => (
						<li key={eachVenue.venue.id}>{eachVenue.venue.name}</li>
					))}
				</ul>
			</section>
		)
	}
}

export default Listing