import React, {Component} from 'react'
import '../styles/map.css'

class Map extends Component {
	render() {
		return (
			<section id="map-container" tabIndex='2'>
				<div id="map" aria-label='Map' role='application' aria-describedby='map-motive' tabIndex='0'></div>
				<div id='map-motive' hidden>Map showing all the nearby restaurants</div>
			</section>
		)
	}
}

export default Map