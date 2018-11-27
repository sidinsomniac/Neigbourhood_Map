import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    venues: []
  }

  location= {lat: 22.6206, lng: 88.4329};

  componentDidMount() {
    this.loadMap();
    this.getLocation();
  }

  loadMap = () => {
    let key = 'AIzaSyBEcapmmHV5KKE8xT1jPWiyWVApNnRqMsE';
    loadAPIScript(`https://maps.googleapis.com/maps/api/js?key=${key}&callback=initMap`);
    window.initMap = this.initMap;
  }
  
  initMap = () => {
    const map = new window.google.maps.Map(document.getElementById('map'), {
      center: this.location,
      zoom: 18
    });
  }

  getLocation = () => {
    const endPoint = 'https://api.foursquare.com/v2/venues/explore?',
      parameters = {
      client_id : 'LDOFR0JEF4ADEFUIESEGAH4QFKA1HB0SW2JJFACNWRVANT5J',
      client_secret : 'VDE3JJTRSTWCXPEAW1V2P3C0AZZEOA5VHV3KXDTT3Y1CMMUY',
      query : 'food',
      ll : `${this.location.lat},${this.location.lng}`,
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
    }))
    .catch(function(error) {
        console.log('Error: '+error);
    });
  }

  render() {
    return (
      <main>
        <div id="map"></div>
      </main>
    );
  }
}

const loadAPIScript = url => {
  let firstScript = window.document.getElementsByTagName('script')[0];
  let script = window.document.createElement('script');
  script.src = url;
  script.async = true;
  script.defer = true;
  firstScript.parentNode.insertBefore(script,firstScript);
}

export default App;
