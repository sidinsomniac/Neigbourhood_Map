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
			// this.state.filteredNames.forEach(element => {
			// 	let marker = new window.google.maps.Marker({
			// 		position: {lat:element.venue.location.lat,lng:element.venue.location.lng},
			// 		map: this.props.map,
			// 		title: element.venue.name
			// 	});
			// 	this.props.markers.push(marker)
			// });
			this.initMap();
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

	initMap = () => {
		let infowindow = new window.google.maps.InfoWindow();
		let bounds = new window.google.maps.LatLngBounds();
	
		this.state.filteredNames.forEach(newVenue => {
		  let contentString = `<h3>${newVenue.venue.name}</h3>
		  <h4>${newVenue.venue.categories[0].name}</h4>`;
		  
		  let marker = new window.google.maps.Marker({
			position: {lat:newVenue.venue.location.lat,lng:newVenue.venue.location.lng},
			map: this.props.map,
			title: newVenue.venue.name
		  })
	
		  bounds.extend(marker.position);
	
		  marker.addListener('click', () => {
			infowindow.setContent(contentString);
			infowindow.open(this.props.map,marker);
		  });
		  this.props.markers.push(marker);
		})
		this.props.map.fitBounds(bounds);
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