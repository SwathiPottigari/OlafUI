
import React, { Component } from "react";
import {
    Marker
  } from "react-google-maps";
  



class MarkerWithState extends Component {

    state = {
      markerChef:null
    }

    /* setMarkerChef=(value)=>{
        this.setState({
          markerChef:value
        })
      } */

    render(){
        console.log("hello")
    return (
    
   <Marker
        
     markerChef={this.setMarkerChef} 

     position={{
       lat: parseFloat(this.props.lat),
       lng: parseFloat(this.props.lng)
     }}
      
   /*  onClick={
     this.setMarkerChef(this.props.chef)
    } */
    
      icon={{
       url:  require("./pepper.svg"),
       scaledSize: new window.google.maps.Size(40, 60) 
     }}
   />

 )
}
}
export default MarkerWithState;
