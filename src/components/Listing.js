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
		this.filterVenues(query).then(() => {
			this.props.markers.map(marker => marker.setMap(null));
			this.props.markers.length = 0;
		}).then(() => {
			this.props.createMarkersAndInfoWindows(this.state.filteredNames);
		})
	}

	filterVenues = (query) => {
		return new Promise((resolve) => {
			if (query) {
				if (this.queryChecker(this.state.filteredNames,query)) {
					this.setState({
						filteredNames: this.props.venueList.filter(name => name.venue.name.toLowerCase().indexOf(query.toLowerCase()) !== -1)
					})
				} else {
					this.setState({
						filteredNames: []
					})
				}
			} else {
				this.setState({
					filteredNames: this.props.venueList
				})
			}
			resolve();
		})
	}

	queryChecker = (arr,query) => {
		let flag = false;
		arr.forEach(x => {
			if (x.venue.name.toLowerCase().indexOf(query.toLowerCase()) > -1) { flag = true }
		})
		return flag;
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
				}}
				 />

				<ul id='venueList'>
					{this.state.filteredNames.map((eachVenue,index) => (
						<li key={eachVenue.venue.id} onClick={()=>{
							this.props.map.setCenter({lat:eachVenue.venue.location.lat,lng:eachVenue.venue.location.lng});
							window.google.maps.event.trigger(this.props.markers[index],'click')
						}}>{eachVenue.venue.name}</li>
					))}
				</ul>

			</section>
		)
	}
}

export default Listing