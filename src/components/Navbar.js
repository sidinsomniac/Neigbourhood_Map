import React from 'react'
import '../styles/navbar.css'

const Navbar = (props) => {
		return (
			<nav>
				{/* Toggles sidebar when hamburger icon clicked */}
				<div id='hamburger' role='button' aria-label='Hamburger menu, click or press enter to engage' aria-describedby='hamburger-function' onClick={() => {
					props.hideListings();
				}}
				onKeyPress={(event) => {
					event.keyCode = 13 ? props.hideListings() : '';
				}}
				tabIndex='3'>&#9776;</div>
				<div id='hamburger-function' hidden>Clicking on this hamburger button will open the restaurant list for filtering by name</div>
				<h1 role='banner' tabIndex='1'>Neighbourhood Map</h1>
			</nav>
		)
}

export default Navbar