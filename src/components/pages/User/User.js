import React, { Component } from 'react';
import NavBar from "../../NavBar/NavBar";
import Map from "../../Map/Map"
import ChefItemCard from '../../ChefItemCard/ChefItemCard';
import Container from '../../Container/Container';
import "./User.css"

export default class User extends Component {
    render() {
        return (
            <div className="user-dash">
                <NavBar />
                <Container fluid>
                   <Map/>
                <ChefItemCard />
                </Container>

            </div>
        )
    }
}