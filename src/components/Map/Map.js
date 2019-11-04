import React, { Component } from "react";
import ItemCard from "../ItemCard/ItemCard";
import Row from '../Row/Row';
import Col from '../Col/Col';
import {

  GoogleMap,
  Marker,
 
} from "react-google-maps";
/* import onlineChefData from "./chef.js"
 */
import onlineChefData from "./chef.js";
import MapWithAMarker from "./MapWithAMarker.js"
require('dotenv').config()



// conevt MapwithAMarke to statefull 
//pass setMasterCurrentChef method inside mapwith amarker
//pass setCurrentChef method inside Marker



/* const MapWithAMarker = withScriptjs(withGoogleMap( props =>{

  console.log(props.onlineChef)
     return (
         <GoogleMap
         defaultZoom={12}
         defaultCenter={props.location}
       
       >

       {props.onlineChef.map(chef => (
        <Marker
          position={{
            lat: parseFloat(chef.Chef.lat),
            lng: parseFloat(chef.Chef.lng)
          }}
           
         onClick={function(){
          setCurrentChef(chef.Chef.kitchenName)
          
          }}
          
           icon={{
            url:  require("./pepper.svg"),
            scaledSize: new window.google.maps.Size(40, 60) 
          }}

        />

      ))}
       </GoogleMap>
     )
 }
 )); */

 

class Map extends Component {

  state = {
    location: null,
    onlineChef:null,
    currentChef:null,
    someItemFunc:null,
    
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => {
      let currentLoc = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      }
      this.setState({
        location: currentLoc,
        onlineChef: onlineChefData
      })
    })
  }

  // create method here to change state of currentChef
  setCurrentChef= (value)=>{
    this.setState({
      currentChef:value
    })
  }

 


  render() {

    console.log("I am master ",this.state.currentChef)
    return (
    
      <Row>
        <Col size="md-6">
      <div style={{ width: "40vw", height: "100vh" }}>
      
      {this.state.location?(<MapWithAMarker
        location={this.state.location}
        onlineChef = {this.state.onlineChef} 
        setCurrentChef = {this.setCurrentChef}
        

        /* 
        Problem-Statement:
        To change state of parent component using state of child component
        */
       
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY
        }`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />):(
        <h1>LOADING.......</h1>
      )}
    </div>
    </Col>
      <Col size="md-6">
      {this.state.currentChef?(
          <ItemCard  currentChef = {this.state.currentChef} />):(<h1>select...</h1>)
      }
      </Col>
  </Row>
    )
  }
}

export default Map;

/* 

import React, { Component } from "react";

import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

require('dotenv').config()

const MapWithAMarker = withScriptjs(withGoogleMap(props =>
  <GoogleMap
    defaultZoom={12}
    defaultCenter={props.location}
  
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

export default Map; */