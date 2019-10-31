import React, { Component } from 'react';
import NavBar from "../../NavBar/NavBar";
import Map from "../../Map/Map"
import ItemCard from "../../ItemCard/ItemCard"
import Container from '../../Container/Container';
import Row from '../../Row/Row';
import Col from '../../Col/Col';
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
                            <ItemCard />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}