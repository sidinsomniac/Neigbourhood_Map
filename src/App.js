import React, { Component } from 'react';
import './App.css';

class App extends Component {

  renderMap = () => {
    loadAPIScript();
  }
  
  initMap = () => {
    const map = new google.maps.Map(document.getElementById('map'), {
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

{/* <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap" async defer></script> */}

const loadAPIScript = url => {
  let firstScript = window.document.querySelector('script')[0];
  let script = window.document.createElement('script');
  script.src = url;
  script.async = true;
  script.defer = true;
  firstScript.parentNode.insertBefore(script,firstScript);
}

export default App;
