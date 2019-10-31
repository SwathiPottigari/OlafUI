import React, { Component } from 'react'
import NavBar from "../NavBar/NavBar";
import ItemCard from '../ItemCard/ItemCard';
import Container from '../Container/Container';
import Row from '../Row/Row';
import Col from '../Col/Col';



export default class Chef extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <h1>Here is the Chef page</h1>
                <Container fluid>
                    <Row>
                        <Col size="md-12">
                            <ItemCard />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
