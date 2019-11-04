


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
            url:  require("./carrot.svg"),
            scaledSize: new window.google.maps.Size(35, 35) 
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
    onlineChef: null,
    currentChef: null,
    currentMenu: null
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
  setCurrentChef = (value) => {
    this.setState({
      currentChef: value
    })
  }

  setCurrentMenu = (value) => {
    this.setState({
      currentMenu: value
    })
  }

  render() {
    console.log("I am master ", this.state.currentChef)
    console.log("I am master ", this.state.currentMenu)
    return (
      <Row>
        <Col size="md-6">
          <div style={{ width: "100%", height: "500px" }}>

            {this.state.location ? (<MapWithAMarker
              location={this.state.location}
              onlineChef={this.state.onlineChef}
              currentMenu={this.state.currentMenu}
              setCurrentChef={this.setCurrentChef}
              setCurrentMenu={this.setCurrentMenu}
              /* 
              Problem-Statement:
              To change state of parent component using state of child component
              */

              googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY
                }`}
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `100%` }} />}
              mapElement={<div style={{ height: `100%` }} />}
            />) : (
                <h1>LOADING.......</h1>
              )}
          </div>
        </Col>
        <Col size="md-6">
          {this.state.currentChef ? (this.state.currentMenu ? (
            this.state.currentMenu.map((item) => {
              return (
                <ItemCard currentChef={this.state.currentChef} currentMenu={item}/>)
            })
          ) : ("no food to display")
          )
            : (<h1>select...</h1>)
          }
        </Col>
      </Row>
    )
  }
}

export default Map;


