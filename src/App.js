/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import './App.css'
import Map from './components/Map'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Listing from './components/Listing';


// ***Class begins here***
class App extends Component {
  
  // State
  state = {
    venues: [],
    location: {lat: 22.6206, lng: 88.4329},
    showListing: false,
    selectedMarkerIndex: 0,
    center: {}
  }

  
  // Hide venue lists on hamburger click
  hideListings = () => {
    this.setState({
      showListing: !this.state.showListing
    })
  }

  componentDidMount() {
    this.getLocation();
  }

  
  // Loads the map with keys
  loadMap = () => {
    let key = 'AIzaSyBEcapmmHV5KKE8xT1jPWiyWVApNnRqMsE';
    loadAPIScript(`https://maps.googleapis.com/maps/api/js?key=${key}&callback=initMap`);
    window.initMap = this.initMap;
  }
  
  
  // Initializes map markers and info windows
  initMap = () => {
    map = new window.google.maps.Map(document.getElementById('map'), {
      center: this.state.location,
    });

    let infowindow = new window.google.maps.InfoWindow();
    let bounds = new window.google.maps.LatLngBounds();

    this.state.venues.forEach(newVenue => {
      let contentString = `<h3>${newVenue.venue.name}</h3>
      <h4>${newVenue.venue.categories[0].name}</h4>`;
      
      let marker = new window.google.maps.Marker({
        position: {lat:newVenue.venue.location.lat,lng:newVenue.venue.location.lng},
        map: map,
        title: newVenue.venue.name
      })

      bounds.extend(marker.position);

      marker.addListener('click', () => {
        infowindow.setContent(contentString);
        infowindow.open(map,marker);
      });
      markers.push(marker);
    })
    map.fitBounds(bounds);
  }

  
  // Fetches from the FoursquareAPI all the venues, sets the state, and loads map accordingly
  getLocation = () => {
    const endPoint = 'https://api.foursquare.com/v2/venues/explore?',
      parameters = {
      client_id : 'LDOFR0JEF4ADEFUIESEGAH4QFKA1HB0SW2JJFACNWRVANT5J',
      client_secret : 'VDE3JJTRSTWCXPEAW1V2P3C0AZZEOA5VHV3KXDTT3Y1CMMUY',
      query : 'food',
      ll : `${this.state.location.lat},${this.state.location.lng}`,
      limit: 20,
      v: 20181127
    };
      fetch(endPoint
        +'client_id='+parameters.client_id
        +'&client_secret='+parameters.client_secret
        +'&v='+parameters.v
        +'&ll='+parameters.ll
        +'&query='+parameters.query
        +'&limit='+parameters.limit)
    .then(response => response.json())
    .then(data => this.setState({
      venues: data.response.groups[0].items
    },this.loadMap()))
    .catch(function(error) {
        console.log('Error: '+error);
    });
  }

  
  // Renders page
  render() {
    return (
      <main>
        {/* Navbar */}
        <Navbar hideListings={this.hideListings}/>
        {/* Listings */}
				{this.state.showListing && <Listing venueList={this.state.venues} markers={markers} map={map} />}        
        {/* Map */}
        <Map/>
        {/* Footer */}
        <Footer/>
      </main>
    );
  }
}
// ***End of Class***

let map, markers = [];

const loadAPIScript = url => {
  let firstScript = window.document.getElementsByTagName('script')[0];
  let script = window.document.createElement('script');
  script.src = url;
  script.async = true;
  script.defer = true;
  firstScript.parentNode.insertBefore(script,firstScript);
}

export default App;
