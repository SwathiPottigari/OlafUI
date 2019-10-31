import React, { Component } from "react";

import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";
/* import mapStyles from "./mapStyles"; */
require('dotenv').config()

const MapWithAMarker = withScriptjs(withGoogleMap(props =>
  <GoogleMap
    defaultZoom={12}
    defaultCenter={props.location}
   /*  defaultOptions={{ styles: mapStyles }} */
  >
    <Marker
      position={{ lat: 47.674, lng: -122.124 }}
    />
  </GoogleMap>
));

class Map extends Component {
  state = {
    location: null
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => {
      let currentLoc = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      }
      this.setState({
        location: currentLoc
      })
    })

   
  }

  render() {
    return <div className="col-md-6"style={{ width: "100vw", height: "100vh" }}>
      
      {this.state.location?(<MapWithAMarker
        location={this.state.location}
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY
        }`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />):(
        <h1>LOADING.......</h1>
      )}
    </div>
  }
}

export default Map;