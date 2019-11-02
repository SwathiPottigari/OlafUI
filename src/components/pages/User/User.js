import React, { Component } from 'react';
import NavBar from "../../NavBar/NavBar";
import Map from "../../Map/Map"
import ItemCard from "../../ItemCard/ItemCard"
import Container from '../../Container/Container';
import Row from '../../Row/Row';
import Col from '../../Col/Col';
import Jumbotron from '../../Jumbotron/Jumbotron';
import "./User.css"

export default class User extends Component {
    render() {
        return (
            <div className="user-dash">
                <NavBar />
                <Container fluid>
                    <Row>
                        
                            <Map />
                        
                        <Col size="md-6">
                            <Jumbotron><h3>Available Items</h3></Jumbotron>
                            <ItemCard />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}