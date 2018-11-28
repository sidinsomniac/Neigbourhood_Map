import React, {Component} from 'react'
import '../styles/listing.css'

class Listing extends Component {
	state = {
		query: '',
		filteredNames: this.props.venueList
	}

	updateQuery = (query) => {
		this.setState({
			query:query
		})
		this.filterVenues(query)
	}

	filterVenues = (query) => {
		if (query) {
			this.setState({
				filteredNames: this.props.venueList.filter(name => name.venue.name.toLowerCase().indexOf(query.toLowerCase()) !== -1)
			})
		} else {
			this.setState({
				filteredNames: this.props.venueList
			})
		}
	}

	render() {
		return (
			<section id='listing'>

				<input type="text"
				placeholder="Search by title or author"
				id='searchbar'
				value={this.state.query}
				onChange={(event) => {
					this.updateQuery(event.target.value)
				}} />

				<ul id='venueList'>
					{this.state.filteredNames.map(eachVenue => (
						<li key={eachVenue.venue.id}>{eachVenue.venue.name}</li>
					))}
				</ul>

			</section>
		)
	}
}

export default Listing