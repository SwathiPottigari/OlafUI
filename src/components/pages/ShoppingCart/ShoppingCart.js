import React, { Component } from 'react';
import NavBar from "../../NavBar/NavBar";
import Container from '../../Container/Container';
import "./ShoppingCart.css";
import axios from 'axios';
import Jumbotron from '../../Jumbotron/Jumbotron';
import ShoppingCartItem from '../../ShoppingCartItem/ShoppingCartItem';
import Row from '../../Row/Row';

export default class User extends Component {

    state = {
        
    }


    render() {
        return (
            <div className="user-dash">
                <NavBar  currentCustomer = {this.state.currentCustomer}/>
                <Jumbotron><h3 className="dash-head">Items In Your Cart</h3></Jumbotron>
                <Container fluid>
                <Row>
                <ShoppingCartItem />
                </Row>
                </Container>
            </div>
        )
    }
}