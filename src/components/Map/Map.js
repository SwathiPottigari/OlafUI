import axios from 'axios';
import React, { Component } from "react";
import ItemCard from "../ItemCard/ItemCard";
import Jumbotron from "../Jumbotron/Jumbotron";
import Row from '../Row/Row';
import './Map.css';
import Select from '../../components/Select/Select';
import {
  GoogleMap,
  Marker,
} from "react-google-maps";


import MapWithAMarker from "./MapWithAMarker.js"
require('dotenv').config()

class Map extends Component {

  state = {
    location: null,
    onlineChef: null,
    currentChef: null,
    currentMenu: null,
    currentOrder: [],
    temp: []
  }

  getOnlineChef = () => {
    try {
      return axios.get(`https://olafapi.herokuapp.com/api/onlineChefs`)
    } catch (error) {
      console.error(error)
    }
  }


  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => {

      let currentLoc = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      }
      /* send axios call to get online chef data  /api/onlineChefs  */
      this.setState({
        location: currentLoc
      })
      this.getOnlineChef().then((response) => {
        console.log(response.data)
        this.setState({
          onlineChef: response.data
        })
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

  setOnlineChef = (value) => {
    this.setState({
      onlineChef: value
    })
  }

  updateArray = (value) => {
    this.state.temp.push(value);
    console.log(this.props);
    this.props.setCartNumber(this.state.temp.length);
  }

  setCurrentOrder = (value) => {
    this.updateArray(value);
    this.setState({
      currentOrder: this.state.temp
    })
    this.props.setShoppingCart(value)
  }

  render() { 
    return (
      <Row>
        <div className="col-xs-12 col-md-6 col-xl-6">
          <div className="map-container">

            {this.state.location && this.state.onlineChef ? (<MapWithAMarker
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
                <div className="text-center map-loading">
                  <div className="spinner-border text-secondary" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                  <h5 className="text-secondary">Searching for active Chefs...</h5>
                </div>
              )}
            <div className="source">Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
          </div>
        </div>
        <div className="col-xs-12 col-md-6 col-xl-6">
          {this.state.currentChef ? (this.state.currentMenu ? (
            this.state.currentMenu.map((item) => {
              return (
                <ItemCard currentChef={this.state.currentChef} currentMenu={item} currentCustomer = {this.props.currentCustomer} key={item.id} setCurrentOrder={this.setCurrentOrder}/>)
            })
          ) : ("no food to display")
          )
            : (<Select />)
          }
        </div>
      </Row>
    )
  }
}

export default Map;


