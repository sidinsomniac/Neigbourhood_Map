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
    location: {lat: 22.5918202, lng: 88.417336},
    showListing: false,
    renderListing: false,
    selectedMarkerIndex: 0,
    center: {}
  }

  // Invoking function for getting locations from foursquare
  componentDidMount() {
    this.getLocation();
  }

  
  // Hide venue lists on hamburger click
  hideListings = () => {
    this.setState({
      showListing: !this.state.showListing,
      renderListing: true
    })
  }
  
  // Loads the map with keys
  loadMap = () => {
    let key = 'AIzaSyBEcapmmHV5KKE8xT1jPWiyWVApNnRqMsE';
    loadAPIScript(`https://maps.googleapis.com/maps/api/js?key=${key}&v=3&callback=initMap`);
    window.initMap = this.initMap;
  }

  // creates a new marker icon
  makeMarkerIcon = markerColor => new window.google.maps.MarkerImage('http://chart.googleapis.com/chart?chst=d_map_spin&chld=0.75|0|' + markerColor + '|40|_|%E2%80%A2')
  
  
  // Initializes map markers and info windows
  initMap = () => {
    map = new window.google.maps.Map(document.getElementById('map'), {
      center: this.state.location,
      zoom: 13,
      styles: [
        {
          "featureType": "landscape.man_made",
          "stylers": [
            {
              "color": "#ffd7d7"
            }
          ]
        },
        {
          "featureType": "landscape.natural",
          "stylers": [
            {
              "color": "#ceffce"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "stylers": [
            {
              "color": "#80ff80"
            }
          ]
        },
        {
          "featureType": "road.arterial",
          "stylers": [
            {
              "color": "#c4c400"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "stylers": [
            {
              "color": "#56a64a"
            }
          ]
        },
        {
          "featureType": "water",
          "stylers": [
            {
              "color": "#00ffff"
            }
          ]
        }
      ]
    });
    let bounds = new window.google.maps.LatLngBounds();
    this.createMarkersAndInfoWindows(this.state.venues,bounds);
  }

  createMarkersAndInfoWindows = (arrayList,bounds) => {
    let infowindow = new window.google.maps.InfoWindow();

    let defaultIcon = this.makeMarkerIcon('FFFFFF');
    let highlightedIcon = this.makeMarkerIcon('FF0000');

    arrayList.forEach((newVenue,index) => {
      let contentString = `<h3 tabIndex='0'>${newVenue.venue.name}</h3>
      <h4 tabIndex='0'>${newVenue.venue.categories[0].name}, <span class="distance">${(newVenue.venue.location.distance/1000).toFixed(2)}km</span> from you</h4>
      <p tabIndex='0'>${newVenue.venue.location.formattedAddress.join(', ')}</p>`;
      
      let marker = new window.google.maps.Marker({
        position: {lat:newVenue.venue.location.lat,lng:newVenue.venue.location.lng},
        map: map,
        title: newVenue.venue.name,
        icon: defaultIcon
      })

      if (bounds) {
        bounds.extend(marker.position);
      }

      marker.addListener('click', () => {
        if (infowindow.marker !== marker) {
          infowindow.marker = marker;
          infowindow.setContent(contentString);
        }
        infowindow.open(map, marker);

        marker.setAnimation(window.google.maps.Animation.BOUNCE);
        setTimeout(() => marker.setAnimation(null), 1000);

        map.setCenter({lat:marker.getPosition().lat(),lng:marker.getPosition().lng()});

      });
      
      marker.addListener('mouseover', function () {
        this.setIcon(highlightedIcon);
      });
      marker.addListener('mouseout', function () {
        this.setIcon(defaultIcon);
      });        

      markers.push(marker);
    })

    if (bounds) {
      map.fitBounds(bounds);
    }
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
      <main role='main' aria-label='Neighbourhood Map'>
        {/* Navbar */}
        <Navbar hideListings={this.hideListings}/>

        {/* Listings */}
				
        {this.state.renderListing && 
          <Listing
          listClass={this.state.showListing ? 'show-lists' : 'hide-lists'} 
          venueList={this.state.venues}
          markers={markers}
          map={map}
          createMarkersAndInfoWindows={this.createMarkersAndInfoWindows}/>
        }

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