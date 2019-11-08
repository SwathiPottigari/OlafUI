import axios from 'axios';
import React, { Component } from "react";
import ItemCard from "../ItemCard/ItemCard";
import Jumbotron from "../Jumbotron/Jumbotron";
import Row from '../Row/Row';
import Col from '../Col/Col';
import "./Map.css";
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
      return axios.get(`http://localhost:8080/api/onlineChefs`)
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
  }

  setCurrentOrder = (value) => {
    this.updateArray(value);
    this.setState({
      currentOrder: this.state.temp
    })
    this.props.setShoppingCart(value)
  }

  render() {
    console.log("I am master ", this.state.currentChef)
    console.log("I am master ", this.state.currentMenu)
    console.log("I am current Customer ",this.props.currentCustomer)
    console.log("i am each order", this.state.temp)
    console.log("I am current order from User ", this.state.currentOrder)
    return (
      <Row>
        <Col size="md-6">
          <div style={{ width: "100%", height: "85vh" }}>

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
            <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
          </div>
        </Col>
        <Col size="md-6">
          <Jumbotron><h3>Current Choices</h3></Jumbotron>
          {this.state.currentChef ? (this.state.currentMenu ? (
            this.state.currentMenu.map((item) => {
              return (
<<<<<<< HEAD
                <ItemCard currentChef={this.state.currentChef} currentMenu={item} currentCustomer = {this.props.currentCustomer} key={item.id} setCurrentOrder={this.setCurrentOrder}/>)
=======
                <ItemCard currentChef={this.state.currentChef} currentMenu={item} currentCustomer={this.props.currentCustomer} setCurrentOrder={this.setCurrentOrder} />)
>>>>>>> 3d011d1991a188bec5f0c4a8cc438b6cb1255691
            })
          ) : ("no food to display")
          )
            : (
              <div className="text-center loading">
                <h5 className="text-secondary">Click a carrot to see whats cooking!</h5>
              </div>
            )
          }
        </Col>
      </Row>
    )
  }
}

export default Map;


