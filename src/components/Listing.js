import React, {Component} from 'react'
import '../styles/listing.css'

class Listing extends Component {
	state = {
		query: '',
		filteredNames: this.props.venueList,
		visibleMarkers: []
	}

	updateQuery = (query) => {
		this.setState({
			query:query
		})
		this.filterVenues(query).then(() => {
			this.props.markers.map(marker => marker.setMap(null));
			this.props.markers.length = 0;
			// this.setState({
			// 	visibleMarkers: this.state.filteredNames.map(name => this.props.markers.filter(marker => {
			// 		return (marker.getPosition().lat().toFixed(4) === name.venue.location.lat.toFixed(4) &&
			// 		marker.getPosition().lng().toFixed(4) === name.venue.location.lng.toFixed(4))
			// 	}))
			// });
			// return this.state.visibleMarkers;
		}).then(() => {
			this.state.filteredNames.forEach(element => {
				let marker = new window.google.maps.Marker({
					position: {lat:element.venue.location.lat,lng:element.venue.location.lng},
					map: this.props.map,
					title: element.venue.name
				});
				this.props.markers.push(marker)
			});
		})
		// .then(setMarkers => {
		// this.props.markers.filter(marker => !setMarkers.includes(marker)).map(marker => marker.setMap(null));
		// })
	}

	filterVenues = (query) => {
		return new Promise((resolve) => {
			if (query) {
				this.setState({
					filteredNames: this.props.venueList.filter(name => name.venue.name.toLowerCase().indexOf(query.toLowerCase()) !== -1)
				})
			} else {
				this.setState({
					filteredNames: this.props.venueList
				})
			}
			resolve();
		})
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