(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(25)},,,,,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a,o=n(0),r=n.n(o),i=n(7),s=n.n(i),c=(n(13),n(1)),l=n(2),u=n(4),d=n(3),f=n(5),p=(n(15),n(17),function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{id:"map-container",tabIndex:"2"},r.a.createElement("div",{id:"map","aria-label":"Map",role:"application","aria-describedby":"map-motive",tabIndex:"0"}),r.a.createElement("div",{id:"map-motive",hidden:!0},"Map showing all the nearby restaurants"))}}]),t}(o.Component)),m=(n(19),function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={showListing:!1},n}return Object(f.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("nav",null,r.a.createElement("div",{id:"hamburger",role:"button","aria-label":"Hamburger menu, click or press enter to engage","aria-describedby":"hamburger-function",onClick:function(){e.props.hideListings()},onKeyPress:function(t){t.keyCode=e.props.hideListings()},tabIndex:"3"},"\u2630"),r.a.createElement("div",{id:"hamburger-function",hidden:!0},"Clicking on this hamburger button will open the restaurant list for filtering by name"),r.a.createElement("h1",{role:"banner",tabIndex:"1"},"Neighbourhood Map"))}}]),t}(o.Component)),h=(n(21),function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("footer",null,"Neighbourhood Map \xa9 2018")}}]),t}(o.Component)),g=(n(23),function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={query:"",filteredNames:n.props.venueList},n.updateQuery=function(e){n.setState({query:e}),n.filterVenues(e).then(function(){n.props.markers.map(function(e){return e.setMap(null)}),n.props.markers.length=0}).then(function(){n.props.createMarkersAndInfoWindows(n.state.filteredNames)})},n.filterVenues=function(e){return new Promise(function(t){e?n.queryChecker(n.state.filteredNames,e)?n.setState({filteredNames:n.props.venueList.filter(function(t){return-1!==t.venue.name.toLowerCase().indexOf(e.toLowerCase())})}):n.setState({filteredNames:[]}):n.setState({filteredNames:n.props.venueList}),t()})},n.queryChecker=function(e,t){var n=!1;return e.forEach(function(e){e.venue.name.toLowerCase().indexOf(t.toLowerCase())>-1&&(n=!0)}),n},n.activateMarker=function(e,t){n.props.map.setCenter({lat:e.venue.location.lat,lng:e.venue.location.lng}),window.google.maps.event.trigger(n.props.markers[t],"click")},n}return Object(f.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("section",{id:"listing",className:this.props.listClass,tabIndex:"4"},r.a.createElement("input",{type:"text",placeholder:"Filter Restaurant Names",id:"searchbar",value:this.state.query,onChange:function(t){e.updateQuery(t.target.value)},"aria-label":"Filter Textbox",tabIndex:"0"}),r.a.createElement("ul",{id:"venueList"},this.state.filteredNames.map(function(t,n){return r.a.createElement("li",{key:t.venue.id,"aria-label":"List name for "+t.venue.name+" "+t.venue.categories[0].name,onClick:function(){e.activateMarker(t,n)},onKeyDown:function(a){13===a.keyCode&&e.activateMarker(t,n)},tabIndex:"0"},t.venue.name)})))}}]),t}(o.Component)),v=function(e){function t(){var e,n;Object(c.a)(this,t);for(var o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];return(n=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={venues:[],location:{lat:22.5918202,lng:88.417336},showListing:!1,renderListing:!1,selectedMarkerIndex:0,center:{}},n.hideListings=function(){n.setState({showListing:!n.state.showListing,renderListing:!0})},n.loadMap=function(){b("https://maps.googleapis.com/maps/api/js?key=".concat("AIzaSyBEcapmmHV5KKE8xT1jPWiyWVApNnRqMsE","&v=3&callback=initMap")),window.initMap=n.initMap},n.makeMarkerIcon=function(e){return new window.google.maps.MarkerImage("http://chart.googleapis.com/chart?chst=d_map_spin&chld=0.75|0|"+e+"|40|_|%E2%80%A2")},n.initMap=function(){a=new window.google.maps.Map(document.getElementById("map"),{center:n.state.location,zoom:13,styles:[{featureType:"landscape.man_made",stylers:[{color:"#ffd7d7"}]},{featureType:"landscape.natural",stylers:[{color:"#ceffce"}]},{featureType:"poi.park",stylers:[{color:"#80ff80"}]},{featureType:"road.arterial",stylers:[{color:"#c4c400"}]},{featureType:"road.highway",stylers:[{color:"#56a64a"}]},{featureType:"water",stylers:[{color:"#00ffff"}]}]});var e=new window.google.maps.LatLngBounds;n.createMarkersAndInfoWindows(n.state.venues,e)},n.createMarkersAndInfoWindows=function(e,t){var o=new window.google.maps.InfoWindow,r=n.makeMarkerIcon("FFFFFF"),i=n.makeMarkerIcon("FF0000");e.forEach(function(e,n){var s="<h3 tabIndex='0'>".concat(e.venue.name,"</h3>\n      <h4 tabIndex='0'>").concat(e.venue.categories[0].name,', <span class="distance">').concat((e.venue.location.distance/1e3).toFixed(2),"km</span> from you</h4>\n      <p tabIndex='0'>").concat(e.venue.location.formattedAddress.join(", "),"</p>"),c=new window.google.maps.Marker({position:{lat:e.venue.location.lat,lng:e.venue.location.lng},map:a,title:e.venue.name,icon:r});t&&t.extend(c.position),c.addListener("click",function(){o.marker!==c&&(o.marker=c,o.setContent(s)),o.open(a,c),c.setAnimation(window.google.maps.Animation.BOUNCE),setTimeout(function(){return c.setAnimation(null)},1e3),a.setCenter({lat:c.getPosition().lat(),lng:c.getPosition().lng()})}),c.addListener("mouseover",function(){this.setIcon(i)}),c.addListener("mouseout",function(){this.setIcon(r)}),w.push(c)}),t&&a.fitBounds(t)},n.getLocation=function(){var e="LDOFR0JEF4ADEFUIESEGAH4QFKA1HB0SW2JJFACNWRVANT5J",t="VDE3JJTRSTWCXPEAW1V2P3C0AZZEOA5VHV3KXDTT3Y1CMMUY",a="food",o="".concat(n.state.location.lat,",").concat(n.state.location.lng);fetch("https://api.foursquare.com/v2/venues/explore?client_id="+e+"&client_secret="+t+"&v="+20181127+"&ll="+o+"&query="+a+"&limit="+20).then(function(e){return e.json()}).then(function(e){return n.setState({venues:e.response.groups[0].items},n.loadMap())}).catch(function(e){console.log("Error: "+e)})},n}return Object(f.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.getLocation()}},{key:"render",value:function(){return r.a.createElement("main",{role:"main","aria-label":"Neighbourhood Map"},r.a.createElement(m,{hideListings:this.hideListings}),this.state.renderListing&&r.a.createElement(g,{listClass:this.state.showListing?"show-lists":"hide-lists",venueList:this.state.venues,markers:w,map:a,createMarkersAndInfoWindows:this.createMarkersAndInfoWindows}),r.a.createElement(p,null),r.a.createElement(h,null))}}]),t}(o.Component),w=[],b=function(e){var t=window.document.getElementsByTagName("script")[0],n=window.document.createElement("script");n.src=e,n.async=!0,n.defer=!0,t.parentNode.insertBefore(n,t)},y=v,k=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function E(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}s.a.render(r.a.createElement(y,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/Neigbourhood_Map",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/Neigbourhood_Map","/service-worker.js");k?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):E(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):E(t,e)})}}()}],[[8,2,1]]]);
//# sourceMappingURL=main.a2351cc6.chunk.js.map