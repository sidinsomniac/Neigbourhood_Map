import React, { Component } from 'react';
import './App.css';

class App extends Component {

  componentDidMount() {
    this.loadMap();
  }

  loadMap = () => {
    let key = 'AIzaSyBEcapmmHV5KKE8xT1jPWiyWVApNnRqMsE';
    loadAPIScript(`https://maps.googleapis.com/maps/api/js?key=${key}&callback=initMap`);
    window.initMap = this.initMap;
  }
  
  initMap = () => {
    const map = new window.google.maps.Map(document.getElementById('map'), {
      center: {lat: -34.397, lng: 150.644},
      zoom: 8
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
