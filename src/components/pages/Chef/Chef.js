import React, { Component } from 'react'
import NavBar from "../../NavBar/NavBar";
import ItemCard from '../../ItemCard/ItemCard';
import Container from '../../Container/Container';
import Row from '../../Row/Row';
import Col from '../../Col/Col';
import "./Chef.css"


export default class Chef extends Component {
    render() {
        return (
            <div className="chef-dash">
                <NavBar />
                <Container fluid>
                    <Row>
                        <Col size="md-6">
                            <h1>TEST</h1>
                        </Col>
                        <Col size="md-6">
                            <ItemCard />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
