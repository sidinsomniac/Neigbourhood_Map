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

	activateMarker = (eachVenue,index) => {
		this.props.map.setCenter({lat:eachVenue.venue.location.lat,lng:eachVenue.venue.location.lng});
		window.google.maps.event.trigger(this.props.markers[index],'click')
	}

	render() {
		return (
			<section id='listing' className={this.props.listClass} tabIndex='4'>

				<input type="text"
				placeholder="Filter Restaurant Names"
				id='searchbar'
				value={this.state.query}
				onChange={(event) => {
					this.updateQuery(event.target.value)
				}}
				aria-label='Filter Textbox'
				tabIndex='0'
				 />

				<ul id='venueList'>
					{this.state.filteredNames.map((eachVenue,index) => (
						<li key={eachVenue.venue.id} 
						aria-label={'List name for '+eachVenue.venue.name+' '+eachVenue.venue.categories[0].name} 
						onClick={()=>{
							this.activateMarker(eachVenue,index)
						}}
						onKeyDown={(event)=> {
							if (event.keyCode === 13) {
							this.activateMarker(eachVenue,index)								
							}
						}}
						tabIndex='0'>{eachVenue.venue.name}</li>
					))}
				</ul>

			</section>
		)
	}
}

export default Listing